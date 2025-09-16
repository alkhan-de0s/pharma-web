export interface IPropsCard {
    date: string;
    title: string;
    imageSrc: string;
    orderClass?:string
    backgroundColorClass: string;
    textColorClass: string;
    tabId?: number; 
    titleId:number;
}

export interface CategoryResponse {
  data: Category[]
  totalCount: number
}

export interface Category {
  id: number
  title: string
  color:string
  imagePath: string
}
export interface HighlightEventsResponse {
  data: HighlightEvent[]
  totalCount: number
}

export interface HighlightEvent {
  id: number
  date: string
  color: string
  textColor: string
  timeRange:string
  numberOfParticipants: string
  imagePath: string
  isMemory: boolean
  title: string
  hallName: string
  partner: string
  innerTitle: string
  innerDescription: string
  categoryId: number
  eventImages: any[]
}
