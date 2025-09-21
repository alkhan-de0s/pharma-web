export type Blog = {
  id: number;
  createdAt: string; 
  updatedAt: string; 
  coverImage: string;
  translation: {
    id: number;
    blogId: number;
    languageId: number;
    title: string;
    text: string;
  };
};
