type Translation = {
  id: number;
  productId: number;
  languageId: number;
  name: string;
  description: string;
};

type GalleryImage = {
  id: number;
  productId: number;
  imageUrl: string;
};

export type ProductDto = {
  id: number;
  createdAt: string;
  updatedAt: string;
  coverImage: string;
  translations: Translation[];
  gallery: GalleryImage[];
};


