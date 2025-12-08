'use client';

import React, { useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import styles from './FavoritesPage.module.scss';
import { Product } from '@/types/ProductType';
import { ProductCard } from '@/components/ProductCard';
import { ProductsList } from '@/components/ProductsList';
import { useRouter } from 'next/router';

const startForm = {
  category: '',
  itemId: '',
  price: '',
  fullPrice: '',
  image: '',
  name: '',
  screen: '',
  ram: '',
  camera: '',
  color: '',
  capacity: '',
  cell: [],
  year: '',
  namespaceId: '',
  description: [],
  resolution: '',
  processor: '',
  zoom: '',
};

export const Prisma = () => {
  const [mounted, setMounted] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<'products' | 'phones' | 'tablets'>('products');
  const [selectedFile, setSelectedFile] = useState([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // const router = useRouter();
  // const { category } = router.query;

  console.log(products);

  const [form, setForm] = useState({ ...startForm });

  useEffect(() => {
    setMounted(true);

    const fetchProducts = async () => {
      try {
        const res = await fetch(`/api/products?category=${category}`);
        const data = await res.json();

        if (!res.ok) {
          console.error('Server response:', data);
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Fetch error:', err);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [category]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    let imageUrls = [];

    // якщо створюємо новий продукт — фото обов'язкове
    if (!editingId && !selectedFile?.length) {
      return alert('Вибери файл');
    }

    // якщо файли вибрані — завантажуємо
    if (selectedFile?.length > 0) {
      imageUrls = await uploadImages(selectedFile);
    }

    const payload: any = {
      itemId: form.itemId,
      category: form.category,
      name: form.name,
      fullPrice: Number(form.fullPrice) || 0,
      price: Number(form.price) || 0,
      screen: form.screen || '',
      capacity: form.capacity || '',
      color: form.color || '',
      ram: form.ram || '',
      year: form.year || 2000,
      image: imageUrls[0] || form.image, // ← якщо не міняли, беремо старе
    };

    if (form.category) {
      payload.details = {
        name: form.name,
        screen: form.screen || 'unknown',
        ram: form.ram || 'unknown',
        camera: form.camera || 'unknown',
        resolution: form.resolution || 'unknown',
        processor: form.processor || 'unknown',
        zoom: form.zoom || 'unknown',
        capacity: form.capacity || '',
        priceRegular: Number(form.fullPrice) || 0,
        priceDiscount: Number(form.price) || 0,
        color: form.color || '',
        images: imageUrls.length ? imageUrls : [], // ← залишаємо пусто, якщо не оновлювали
        cell: form.cell,
        // capacityAvailable: form.capacityAvailable.split(',').map((s) => s.trim()) || [],
        description: form.description || [],
        namespaceId: form.namespaceId || '',
      };
    }

    try {
      const method = editingId ? 'PUT' : 'POST'; // <---- ГОЛОВНЕ
      const url = '/api/products';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error('Server response:', data);
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      if (editingId) {
        // update
        setProducts((prev) => prev.map((p) => (p.itemId === editingId ? { ...p, ...payload } : p)));

        setEditingId(null);
      } else {
        // create
        setProducts((prev) => [data.product, ...prev]);
      }

      setForm({ ...startForm });
      setSelectedFile([]);
    } catch (err) {
      console.error('Error creating product:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (product: Product) => {
    setEditingId(product.itemId);

    // 1) Тягнемо деталі
    const detailsRes = await fetch(`/api/products?category=${product.category}`);
    const allDetails = await detailsRes.json();

    // 2) Знаходимо деталі саме цього товару
    const details = allDetails.find((d: any) => d.productId === product.itemId);

    // 3) Сетимо форму
    setForm({
      category: product.category || '',
      itemId: product.itemId || '',
      price: product.price?.toString() || '',
      fullPrice: product.fullPrice?.toString() || '',
      image: product.image || '',
      name: product.name || '',
      screen: product.screen || '',
      ram: product.ram || '',
      color: product.color || '',
      year: product.year?.toString() || '',
      capacity: product.capacity || '',

      // ---------- DETAILS ----------
      // capacityAvailable: details?.capacityAvailable || [],
      // colorsAvailable: details?.colorsAvailable || [],
      images: product.images ?? [],
      resolution: details?.resolution || '',
      processor: details?.processor || '',
      camera: details?.camera || '',
      zoom: details?.zoom || '',
      cell: details?.cell || [],
      description: details?.description || [],
      namespaceId: details?.namespaceId || '',
    });
  };

  const handleDelete = async (itemId: string) => {
    if (!confirm('Точно видалити цей товар?')) return;

    try {
      const res = await fetch(`/api/products?itemId=${itemId}`, {
        method: 'DELETE',
      });

      const data = await res.json();
      console.log('DELETE result:', data);

      if (!res.ok) {
        alert('Помилка: ' + data.error);
        return;
      }

      // Якщо все ок — онови список
      setProducts((prev) => prev.filter((p) => p.itemId !== itemId));

      alert('Товар успішно видалено');
    } catch (err: any) {
      console.error(err);
      alert('Сталася помилка при видаленні');
    }
  };

  async function uploadImages(files: File[]) {
    const urls: string[] = [];

    for (const file of files) {
      const reader = new FileReader();

      const url = await new Promise<string>((resolve, reject) => {
        reader.onloadend = async () => {
          const base64 = reader.result;

          try {
            const res = await fetch('/api/upload', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ file: base64 }),
            });

            if (!res.ok) {
              reject(`Upload failed for ${file.name}`);
              return;
            }

            const data = await res.json();
            resolve(data.url);
          } catch (err) {
            reject(err);
          }
        };

        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      urls.push(url);
    }

    return urls;
  }

  return (
    <div className='container'>
      <Breadcrumbs />
      <div className={styles.productsGrid}>
        {!loading && (
          <ProductsList products={products} onEdit={handleEdit} onDelete={handleDelete} />
        )}
      </div>

      <section className='section'>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: 10, color: 'black' }}
        >
          <input
            name='itemId'
            placeholder='Item ID'
            value={form.itemId}
            onChange={handleChange}
            required
          />
          <input
            name='namespaceId'
            placeholder='Namespace Id'
            value={form.namespaceId}
            onChange={handleChange}
            required
          />
          <input name='name' placeholder='Name' value={form.name} onChange={handleChange} />
          <input
            name='price'
            placeholder='Price'
            type='number'
            value={form.price}
            onChange={handleChange}
          />
          <input
            name='fullPrice'
            placeholder='Full Price'
            type='number'
            value={form.fullPrice}
            onChange={handleChange}
          />
          <input
            type='file'
            multiple
            accept='image/*'
            onChange={(e) => setSelectedFile(e.target.files)}
          />
          <input
            name='category'
            placeholder='Category'
            value={form.category}
            onChange={handleChange}
          />

          <input name='screen' placeholder='Screen' value={form.screen} onChange={handleChange} />
          <input name='ram' placeholder='RAM' value={form.ram} onChange={handleChange} />
          <input name='camera' placeholder='Camera' value={form.camera} onChange={handleChange} />
          <input
            name='resolution'
            placeholder='Resolution'
            value={form.resolution}
            onChange={handleChange}
          />
          <input
            name='processor'
            placeholder='Processor'
            value={form.processor}
            onChange={handleChange}
          />
          <input name='zoom' placeholder='Zoom' value={form.zoom} onChange={handleChange} />
          <input
            name='capacity'
            placeholder='Capacity'
            value={form.capacity}
            onChange={handleChange}
          />
          <input name='color' placeholder='Color' value={form.color} onChange={handleChange} />


          <div className='border p-3 rounded mb-4'>
            <label className='font-semibold'>Cell (network bands)</label>

            {(form.cell ?? []).map((value, index) => (
              <div key={index} className='flex gap-2 mt-2'>
                <input
                  type='text'
                  value={value}
                  placeholder={`Cell #${index + 1}`}
                  onChange={(e) => {
                    const newCells = [...form.cell];
                    newCells[index] = e.target.value;
                    setForm({ ...form, cell: newCells });
                  }}
                  className='border p-2 rounded w-full'
                />

                <button
                  type='button'
                  onClick={() => {
                    setForm({
                      ...form,
                      cell: form.cell.filter((_, i) => i !== index),
                    });
                  }}
                  className='px-2 bg-red-500 text-white rounded'
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              type='button'
              className='mt-2 px-3 py-1 bg-blue-500 text-white rounded'
              onClick={() =>
                setForm({
                  ...form,
                  cell: [...(form.cell ?? []), ''],
                })
              }
            >
              + Add cell
            </button>
          </div>

          {form.description.map((block, blockIndex) => (
            <div key={blockIndex} className='border p-3 rounded mb-4'>
              {/* TITLE */}
              <input
                type='text'
                placeholder='Title'
                value={block.title}
                onChange={(e) => {
                  const updated = [...form.description];
                  updated[blockIndex].title = e.target.value;
                  setForm({ ...form, description: updated });
                }}
                className='w-full mb-2'
              />

              {/* TEXT ITEMS */}
              {block.text.map((textItem, textIndex) => (
                <div key={textIndex} className='flex gap-2 mb-2'>
                  <input
                    type='text'
                    value={textItem}
                    placeholder='Text item'
                    onChange={(e) => {
                      const updated = [...form.description];
                      updated[blockIndex].text[textIndex] = e.target.value;
                      setForm({ ...form, description: updated });
                    }}
                    className='flex-1'
                  />
                  <button
                    type='button'
                    onClick={() => {
                      const updated = [...form.description];
                      updated[blockIndex].text = updated[blockIndex].text.filter(
                        (_, i) => i !== textIndex,
                      );
                      setForm({ ...form, description: updated });
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))}

              {/* ADD TEXT ITEM */}
              <button
                type='button'
                onClick={() => {
                  const updated = [...form.description];
                  updated[blockIndex].text.push('');
                  setForm({ ...form, description: updated });
                }}
                className='mt-2'
              >
                + Add text row
              </button>

              <br />

              {/* DELETE WHOLE BLOCK */}
              <button
                type='button'
                onClick={() => {
                  setForm({
                    ...form,
                    description: form.description.filter((_, i) => i !== blockIndex),
                  });
                }}
                className='mt-2 ml-4 text-red-500'
              >
                Delete block
              </button>
            </div>
          ))}

          {/* ADD NEW BLOCK */}
          <button
            type='button'
            onClick={() =>
              setForm({
                ...form,
                description: [...form.description, { title: '', text: [''] }],
              })
            }
            className='mt-4'
          >
            + Add description block
          </button>

          <button type='submit'>Add Product</button>
        </form>
      </section>
    </div>
  );
};

export default Prisma;
