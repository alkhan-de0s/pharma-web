export type Renderable<T> = T | (() => T);

export interface IPageDescription {
  imagePath?: Renderable<string | undefined>;
  imageTitle?: Renderable<string | undefined>;
  imageDescription?: Renderable<string | undefined>;
  title?: Renderable<string | undefined>;
  description?: Renderable<string | undefined>;
}

