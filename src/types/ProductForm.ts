export type ProductForm = {
	isActive: boolean;
  category: string;
  itemId: string;
  price: string;
  fullPrice: string;
  image: string;
  name: string;
  screen: string;
  ram: string;
  camera: string;
  color: string;
  capacity: string;
  cell: string[]; // ← явно string[]
  year: string;
  namespaceId: string;
  description: { title: string; text: string[] }[];
  resolution: string;
  processor: string;
  zoom: string;
  images: string[];
};
