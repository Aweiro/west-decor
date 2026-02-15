import { PrismaClient } from '@prisma/client';

type SeedProduct = {
  itemId: string;
  category: 'decors' | 'materials' | 'accessories';
  name: string;
  fullPrice: number;
  price: number;
  screen: string;
  capacity: string;
  color: string;
  ram: string;
  year: number;
  image: string;
  isActive: boolean;
  details: {
    screen: string;
    resolution: string;
    processor: string;
    ram: string;
    camera: string;
    zoom: string;
    capacity: string;
    color: string;
    images: string[];
    cell: string[];
    description: { title: string; text: string[] }[];
    namespaceId?: string | null;
  };
};

const prisma = new PrismaClient();

const seedProducts: SeedProduct[] = [
  {
    itemId: 'decor-venetian-001',
    category: 'decors',
    name: 'Venetian Classic',
    fullPrice: 1400,
    price: 1190,
    screen: '60 хв',
    capacity: '15 кг',
    color: 'білий',
    ram: '1.2 кг/м²',
    year: 2025,
    image: '/img/category-phones.webp',
    isActive: true,
    details: {
      screen: '60 хв',
      resolution: '1.0 мм',
      processor: 'Італія',
      ram: '1.2 кг/м²',
      camera: 'матова',
      zoom: 'внутрішні',
      capacity: '15 кг',
      color: 'білий',
      images: ['/img/category-phones.webp'],
      cell: ['бетон', 'гіпс'],
      description: [
        {
          title: 'Опис',
          text: [
            'Класична венеціанська штукатурка для гладких поверхонь.',
            'Легко полірується та дає ефект мармуру.',
          ],
        },
      ],
      namespaceId: 'venetian-classic',
    },
  },
  {
    itemId: 'decor-travertine-002',
    category: 'decors',
    name: 'Travertine Soft',
    fullPrice: 1650,
    price: 1390,
    screen: '45 хв',
    capacity: '20 кг',
    color: 'пісочний',
    ram: '1.5 кг/м²',
    year: 2025,
    image: '/img/category-tablets.webp',
    isActive: true,
    details: {
      screen: '45 хв',
      resolution: '1.5 мм',
      processor: 'Польща',
      ram: '1.5 кг/м²',
      camera: 'травертин',
      zoom: 'внутрішні/зовнішні',
      capacity: '20 кг',
      color: 'пісочний',
      images: ['/img/category-tablets.webp'],
      cell: ['бетон', 'цемент'],
      description: [
        {
          title: 'Переваги',
          text: ['Висока зносостійкість.', 'Підходить для фасаду.'],
        },
      ],
      namespaceId: 'travertine-soft',
    },
  },
  {
    itemId: 'material-primer-001',
    category: 'materials',
    name: 'Quartz Primer',
    fullPrice: 520,
    price: 450,
    screen: '30 хв',
    capacity: '10 л',
    color: 'білий',
    ram: '0.25 л/м²',
    year: 2025,
    image: '/img/category-accessories.png',
    isActive: true,
    details: {
      screen: '30 хв',
      resolution: '0.3 мм',
      processor: 'Німеччина',
      ram: '0.25 л/м²',
      camera: 'грунт-кварц',
      zoom: 'внутрішні',
      capacity: '10 л',
      color: 'білий',
      images: ['/img/category-accessories.png'],
      cell: ['штукатурка', 'шпаклівка'],
      description: [
        {
          title: 'Призначення',
          text: ['Покращує адгезію.', 'Зменшує витрати фінішу.'],
        },
      ],
      namespaceId: 'quartz-primer',
    },
  },
  {
    itemId: 'accessory-trowel-001',
    category: 'accessories',
    name: 'Steel Trowel 280mm',
    fullPrice: 900,
    price: 750,
    screen: '—',
    capacity: '—',
    color: 'сталь',
    ram: '—',
    year: 2025,
    image: '/img/category-accessories.png',
    isActive: true,
    details: {
      screen: '—',
      resolution: '—',
      processor: 'Україна',
      ram: '—',
      camera: 'інструмент',
      zoom: 'внутрішні/зовнішні',
      capacity: '—',
      color: 'сталь',
      images: ['/img/category-accessories.png'],
      cell: ['штукатурка'],
      description: [
        {
          title: 'Опис',
          text: ['Нержавіюча сталь.', 'Зручна ручка.'],
        },
      ],
      namespaceId: 'steel-trowel',
    },
  },
];

async function main() {
  for (const product of seedProducts) {
    const {
      details,
      ...productData
    } = product;

    await prisma.product.upsert({
      where: { itemId: product.itemId },
      update: productData,
      create: productData,
    });

    await prisma.productDetails.upsert({
      where: { productId: product.itemId },
      update: {
        productId: product.itemId,
        name: product.name,
        category: product.category,
        screen: details.screen,
        resolution: details.resolution,
        processor: details.processor,
        ram: details.ram,
        camera: details.camera,
        zoom: details.zoom,
        capacity: details.capacity,
        color: details.color,
        images: details.images,
        cell: details.cell,
        description: details.description,
        namespaceId: details.namespaceId || null,
        priceRegular: product.fullPrice,
        priceDiscount: product.price,
        capacityAvailable: [details.capacity].filter(Boolean),
        colorsAvailable: [details.color].filter(Boolean),
      },
      create: {
        productId: product.itemId,
        name: product.name,
        category: product.category,
        screen: details.screen,
        resolution: details.resolution,
        processor: details.processor,
        ram: details.ram,
        camera: details.camera,
        zoom: details.zoom,
        capacity: details.capacity,
        color: details.color,
        images: details.images,
        cell: details.cell,
        description: details.description,
        namespaceId: details.namespaceId || null,
        priceRegular: product.fullPrice,
        priceDiscount: product.price,
        capacityAvailable: [details.capacity].filter(Boolean),
        colorsAvailable: [details.color].filter(Boolean),
      },
    });
  }
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
