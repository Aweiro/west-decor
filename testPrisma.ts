import prisma from './services/prismaClient.ts';

async function main() {
  // Додаємо тестовий продукт
  const product = await prisma.product.create({
    data: {
      name: 'Test Product',
      price: 100,
      image: 'test.jpg',
      description: 'Just a test',
      category: 'phones',
      itemId: 'test-product-1'
    },
  });

  console.log('Created product:', product);

  // Фетчимо всі продукти
  const products = await prisma.product.findMany();
  console.log('All products:', products);
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });