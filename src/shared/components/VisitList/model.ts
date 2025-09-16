export interface IVisitList {
  id:number;
  name: string;
  imagePath: string;
  description: string;
  distance: number;
  url: string;
  stars?: string;
  address?: string;
  phoneNumber?:string;
  openHours?: string;
}