'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Product } from '@/types/ProductType';
import { ProductsList } from '@/components/ProductsList';
import Head from 'next/head';
import { Loader } from '@/components/Loader';
import { ProductPayload } from '@/types/ProductPayload';
import { ProductForm } from '@/types/ProductForm';
// import './styles/admin.css';

const sectionClass = 'bg-[#151925] p-6 rounded-xl shadow-lg border border-[#2E3345]';
const inputClass =
  'w-full px-4 py-2.5 bg-[#0B0E14] border border-solid border-[#2E3345] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#9353d3] focus:ring-1 focus:ring-[#9353d3] transition-all';
const labelClass = 'block text-sm font-medium text-gray-300 mb-1.5';
const btnSecondary =
  'px-4 py-2 bg-[#2A2F3E] text-white rounded-lg hover:bg-[#3E455B] transition-colors text-sm font-medium border border-[#3E455B]';
const btnDanger =
  'p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded transition-colors';

const startForm = {
  isActive: true,
  category: '',
  itemId: '',
  price: '',
  fullPrice: '',
  image: '',
  images: [],
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
  const [products, setProducts] = useState<Product[]>([]);
  const [category] = useState<'products' | 'phones' | 'tablets'>('products');
  const [selectedFile, setSelectedFile] = useState<FileList | null>();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ProductForm>({ ...startForm });

  // 1. Стан для пошукового запиту
  const [searchTerm, setSearchTerm] = useState('');

  // 2. Логіка фільтрації (шукає по назві, ID та категорії)
  const filteredProducts = products
    .filter((p): p is Product => Boolean(p))
    .filter((product) => {
      const term = searchTerm.toLowerCase();

      return (
        product.name?.toLowerCase().includes(term) ||
        product.itemId?.toString().toLowerCase().includes(term) ||
        product.category?.toLowerCase().includes(term) ||
        product.namespaceId?.toLowerCase().includes(term)
      );
    });

  const fetchProducts = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/products?category=${category}&admin=true`);
      const data = await res.json();

      if (!res.ok) {
        console.error('Server response:', data);
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      setProducts(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Fetch error:', err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchProducts();
  }, [category, fetchProducts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let imageUrls: string[] = [];

    // якщо створюємо новий продукт — фото обов'язкове
    if (editingId !== form.itemId && !selectedFile?.length) {
      return alert('Вибери файл');
    }

    setLoading(true);

    // якщо файли вибрані — завантажуємо
    if (selectedFile) {
      imageUrls = await uploadImages(selectedFile);
    }

    const payload: ProductPayload = {
      isActive: form.isActive,
      itemId: form.itemId,
      category: form.category,
      name: form.name,
      fullPrice: Number(form.fullPrice) || 0,
      price: Number(form.price) || 0,
      screen: form.screen || '',
      capacity: form.capacity || '',
      color: form.color || '',
      ram: form.ram || '',
      year: Number(form.year) || 0,
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
        description: form.description || [],
        namespaceId: form.namespaceId || '',
      };
    }

    try {
      const isEdit = form.itemId === editingId;
      const method = isEdit ? 'PUT' : 'POST'; // <---- ГОЛОВНЕ
      // 1. Початкова адреса
      let url = '/api/products';

      // 2. ВАЖЛИВА ЗМІНА:
      // Якщо ми редагуємо (PUT), треба додати в URL СТАРИЙ ID (editingId).
      // Це скаже серверу: "Знайди товар з цим старим ID і онови його".
      if (isEdit) {
        url = `/api/products?itemId=${editingId}`;
      }

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

      if (isEdit) {
        setEditingId(null);
      }

      // create
      await fetchProducts();

      window.scrollTo({ top: 0, behavior: 'smooth' });
      alert('Товар успішно збережено ✅');

      setForm({ ...startForm });
      setSelectedFile(null);
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
    const details = allDetails.find((d: Product) => d.productId === product.itemId);

    // 3) Сетимо форму
    setForm({
      isActive: product.isActive || true,
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
      images: product.images ?? [],
      resolution: details?.resolution || '',
      processor: details?.processor || '',
      camera: details?.camera || '',
      zoom: details?.zoom || '',
      cell: details?.cell || [],
      description: details?.description || [],
      namespaceId: details?.namespaceId || '',
    });

    const formSection = document.getElementById('admin-form');
    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth', // Плавна анімація
        block: 'start', // Прокрутити до початку блоку
      });
    }
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
      // setProducts((prev) => prev.filter((p) => p.itemId !== itemId));
      await fetchProducts();

      alert('Товар успішно видалено');
    } catch (err: unknown) {
      console.error(err);
      alert('Сталася помилка при видаленні');
    }
  };

  async function uploadImages(files: FileList) {
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

  const handleToggleActive = async (itemId: string, isActive: boolean) => {
    try {
      const res = await fetch('/api/products', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId, isActive }),
      });

      if (!res.ok) throw new Error('Failed to toggle');

      setProducts((prev) => prev.map((p) => (p.itemId === itemId ? { ...p, isActive } : p)));
    } catch {
      alert('Не вдалося змінити статус');
    }
  };

  return (
    <>
      <Head>
        <link rel='stylesheet' href='/admin.css' />
      </Head>
      <div className='container' id='admin-root'>
        <Breadcrumbs />

        <div className='mb-8'>
          {/* --- БЛОК ПОШУКУ ТА ЗАГОЛОВКА (Dark Style) --- */}
          <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-6 p-5 rounded-xl shadow-lg'>
            {/* Лічильник товарів */}
            <h2 className='text-xl font-bold text-white flex items-center gap-3'>
              Список товарів
              <span className='text-sm font-medium text-gray-300 bg-[#2A2F3E] px-3 py-1 rounded-full border border-[#3E455B]'>
                {filteredProducts.length}
              </span>
            </h2>

            {/* Поле пошуку */}
            <div className='relative w-full md:w-96'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-500'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>

              <input
                type='text'
                placeholder='Пошук...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='block w-full pl-10 pr-10 py-2.5 
                           bg-[#0B0E14] border border-[#2E3345] rounded-lg 
                           text-white placeholder-gray-500 
                           focus:outline-none focus:border-[#9353d3] focus:ring-1 focus:ring-[#9353d3] 
                           transition-all duration-200 sm:text-sm shadow-inner border-solid'
              />

              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className='absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-white transition-colors bg-transparent border-none focus:outline-none'
                >
                  <svg
                    className='h-5 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* --- СПИСОК або EMPTY STATE --- */}
          <div>
            {loading ? (
              <Loader />
            ) : filteredProducts.length > 0 ? (
              <ProductsList
                isAdmin
                products={filteredProducts}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onToggleActive={handleToggleActive}
              />
            ) : (
              // --- БЛОК "НІЧОГО НЕ ЗНАЙДЕНО" ---
              <div className='flex flex-col items-center justify-center py-12 px-4 rounded-xl border-2 border-dashed border-[#2E3345] bg-[#151925]/50'>
                {/* Іконка */}
                <svg
                  className='h-16 w-16 text-[#2E3345] mb-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>

                {/* Текст */}
                <h3 className='text-lg font-medium text-white mb-1'>Нічого не знайдено</h3>
                <p className='text-gray-400 text-sm text-center max-w-xs'>
                  Ми не знайшли товарів за запитом{' '}
                  <span className='text-white font-semibold'>"{searchTerm}"</span>. Спробуйте
                  змінити ключові слова.
                </p>

                {/* Кнопка скидання */}
                <button
                  onClick={() => setSearchTerm('')}
                  className='mt-5 text-[#9353d3] hover:text-[#a86ae8] text-sm font-medium transition-colors bg-transparent border-none cursor-pointer hover:underline'
                >
                  Очистити пошук
                </button>
              </div>
            )}
          </div>
        </div>

        <section className='section'>
          <form id='admin-form' onSubmit={handleSubmit} className='space-y-6 text-gray-200 py-10'>
            {/* --- Основна інформація --- */}

            <div className={sectionClass}>
              <h3 className='text-lg font-semibold mb-4 border-b border-[#2E3345] pb-2 text-white'>
                Основна інформація
              </h3>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className={labelClass}>Item ID</label>
                  <input
                    name='itemId'
                    placeholder='ex. 12345'
                    value={form.itemId}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Namespace ID</label>
                  <input
                    name='namespaceId'
                    placeholder='ex. phones'
                    value={form.namespaceId}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div className='mb-4'>
                <label className={labelClass}>Назва товару</label>
                <input
                  name='name'
                  placeholder='Apple iPhone 15'
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
                <div>
                  <label className={labelClass}>Ціна</label>
                  <input
                    name='price'
                    placeholder='999'
                    type='number'
                    value={form.price}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Повна ціна</label>
                  <input
                    name='fullPrice'
                    placeholder='1200'
                    type='number'
                    value={form.fullPrice}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Категорія</label>
                  <input
                    name='category'
                    placeholder='smartphones'
                    value={form.category}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Рік</label>
                  <input
                    name='year'
                    placeholder='2024'
                    type='number'
                    min={2000}
                    max={2100}
                    value={form.year}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Зображення</label>
                <input
                  type='file'
                  multiple
                  accept='image/*'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSelectedFile(e.target.files);
                  }}
                  className='block w-full text-sm text-gray-400
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-[#2A2F3E] file:text-white
            hover:file:bg-[#3E455B] cursor-pointer'
                />
              </div>
            </div>

            {/* --- Характеристики --- */}
            <div className={sectionClass}>
              <h3 className='text-lg font-semibold text-white mb-4 border-b border-[#2E3345] pb-2'>
                Характеристики
              </h3>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {[
                  'screen',
                  'resolution',
                  'processor',
                  'ram',
                  'camera',
                  'zoom',
                  'capacity',
                  'color',
                ].map((field) => (
                  <div key={field}>
                    <label className={labelClass}>
                      {field === 'ram' ? 'RAM' : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <input
                      name={field}
                      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                      value={form[field as keyof typeof form] as string}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* --- Мережі --- */}
            <div className={sectionClass}>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-lg font-semibold text-white'>Мережі (Network Bands)</h3>
                <button
                  type='button'
                  className={btnSecondary}
                  onClick={() => setForm({ ...form, cell: [...(form.cell ?? []), ''] })}
                >
                  + Add cell
                </button>
              </div>

              {/* Контейнер списку - темніший фон (#0B0E14) */}
              <div className='space-y-3 bg-[#0B0E14] p-4 rounded-lg border border-[#2E3345]'>
                {(form.cell ?? []).length === 0 && (
                  <p className='text-gray-500 text-sm text-center'>Немає доданих мереж</p>
                )}
                {(form.cell ?? []).map((value, index) => (
                  <div key={index} className='flex items-end gap-2'>
                    <span className='text-gray-500 text-sm w-6 text-center mb-3'>{index + 1}.</span>

                    <div className='flex-1'>
                      <label className={labelClass}>Назва мережі (Band)</label>
                      <input
                        type='text'
                        value={value}
                        placeholder='Band name...'
                        onChange={(e) => {
                          const newCells = [...form.cell];
                          newCells[index] = e.target.value;
                          setForm({ ...form, cell: newCells });
                        }}
                        className={inputClass}
                      />
                    </div>

                    <button
                      type='button'
                      onClick={() =>
                        setForm({ ...form, cell: form.cell.filter((_, i) => i !== index) })
                      }
                      className={`${btnDanger} mb-[2px]`}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Description blocks --- */}
            <div className={sectionClass}>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-lg font-semibold text-white'>Блоки опису</h3>
                <button
                  type='button'
                  className={btnSecondary}
                  onClick={() =>
                    setForm({
                      ...form,
                      description: [...form.description, { title: '', text: [''] }],
                    })
                  }
                >
                  + Add block
                </button>
              </div>

              <div className='space-y-6'>
                {form.description.map((block, blockIndex) => (
                  <div
                    key={blockIndex}
                    // Картка блоку опису - теж темна
                    className='bg-[#0B0E14] p-4 rounded-lg border border-[#2E3345] relative'
                  >
                    <button
                      type='button'
                      onClick={() =>
                        setForm({
                          ...form,
                          description: form.description.filter((_, i) => i !== blockIndex),
                        })
                      }
                      className='absolute top-2 right-2 text-xs text-red-400 hover:text-red-300 bg-[#2A2F3E] px-2 py-1 rounded border border-[#3E455B] hover:bg-[#3E455B] shadow-sm transition-colors'
                    >
                      Delete Block
                    </button>

                    <div className='mb-4 pr-24'>
                      <label className={labelClass}>Block Title</label>
                      <input
                        type='text'
                        placeholder='e.g. "In the box"'
                        value={block.title}
                        onChange={(e) => {
                          const updated = [...form.description];
                          updated[blockIndex].title = e.target.value;
                          setForm({ ...form, description: updated });
                        }}
                        className={`${inputClass} font-bold`}
                      />
                    </div>

                    <div className='pl-4 border-l-2 border-[#2E3345] space-y-2'>
                      {block.text.map((textItem, textIndex) => (
                        <div key={textIndex} className='flex items-end gap-2'>
                          <div className='flex-1'>
                            <label className={labelClass}>Text item {textIndex + 1}</label>
                            <input
                              type='text'
                              value={textItem}
                              placeholder='Description line...'
                              onChange={(e) => {
                                const updated = [...form.description];
                                updated[blockIndex].text[textIndex] = e.target.value;
                                setForm({ ...form, description: updated });
                              }}
                              className={`${inputClass} text-sm`}
                            />
                          </div>
                          <button
                            type='button'
                            onClick={() => {
                              const updated = [...form.description];
                              updated[blockIndex].text = updated[blockIndex].text.filter(
                                (_, i) => i !== textIndex,
                              );
                              setForm({ ...form, description: updated });
                            }}
                            className={`${btnDanger} mb-[2px]`}
                          >
                            ✕
                          </button>
                        </div>
                      ))}
                      <button
                        type='button'
                        onClick={() => {
                          const updated = [...form.description];
                          updated[blockIndex].text.push('');
                          setForm({ ...form, description: updated });
                        }}
                        className='text-sm text-[#9353d3] hover:text-[#a86ae8] hover:underline mt-2 flex items-center gap-1 font-medium'
                      >
                        <span>+</span> Add text row
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- Footer buttons --- */}
            <div className='flex justify-end gap-4'>
              <button
                type='button'
                onClick={() => {
                  setForm(startForm);
                }}
                className='px-6 py-3 bg-[#2A2F3E] text-white border border-[#3E455B] font-semibold rounded-lg hover:bg-[#3E455B] transition-all'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 shadow-lg shadow-blue-900/30 transition-all transform hover:-translate-y-0.5'
              >
                Add Product
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default Prisma;
