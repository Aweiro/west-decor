import prisma from './services/prismaClient.ts';

async function main() {
  const product = await prisma.product.create({
    data: {
      itemId: 'apple-iphone-11-128gb-black',
      name: 'Apple iPhone 11 128GB Black',
      price: 1050,
      image: 'img/phones/apple-iphone-11/black/00.webp',
      category: 'phones',
      description: 'Latest iPhone 11 model',
      details: {
        create: {
          capacityAvailable: ['64GB', '128GB', '256GB'],
          colorsAvailable: ['black', 'green', 'yellow', 'white', 'purple', 'red'],
          description: [
            { title: 'Camera', text: ['High quality camera system.'] },
            { title: 'Battery', text: ['Long lasting battery life.'] },
          ],
          screen: "6.1' IPS",
          resolution: '1792x828',
          processor: 'Apple A13 Bionic',
          ram: '4GB',
          camera: '12 Mp + 12 Mp + 12MP',
          zoom: 'Digital, 5x',
          cell: ['GPRS', 'EDGE', 'WCDMA', 'UMTS', 'HSPA', 'LTE'],
          images: [
            'img/phones/apple-iphone-11/black/00.webp',
            'img/phones/apple-iphone-11/black/01.webp',
            'img/phones/apple-iphone-11/black/02.webp',
          ],
        },
      },
    },
  });

  console.log({ product });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
