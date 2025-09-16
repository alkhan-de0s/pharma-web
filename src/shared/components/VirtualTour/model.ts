import { BonusArea } from "@/modules/Halls/model";

export interface IVideoTourItem {
  id: number;
  name: string;
  description: string;
  videoPath: string;
  imagePath?:string;
}

export interface IVideoTourProps<T = IVideoTourItem | BonusArea> {
  tours?: T[];
  className?: string;
  galleryTitle?: string;
  type?: "video" | "image";
}

export type VideoTourApiResponse = {
  data: IVideoTourItem[];
  totalCount: number;
};

export interface TeamsApiResponse {
  data: Teams[]
  totalCount: number
}

export interface Teams {
  id: number
  imagePath: string
  url: string
  fullName: string
  position: string
}

