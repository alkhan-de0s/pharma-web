import { BonusArea } from "@/modules/Halls/model";
import { IVideoTourItem } from "../components/VirtualTour/model";

export function isVideoTourItem(tour: BonusArea | IVideoTourItem | undefined): tour is IVideoTourItem {
  return tour !== undefined && 'videoPath' in tour;
}