import { Stethoscope , MarsStroke, Baby  } from "lucide-react";
import { ReactNode } from "react";

type Service = {
  icon: ReactNode;
  title: string;
  description: string;
  id:number;
};
export const services: Service[] = [
  {
    id:1,
    icon: <MarsStroke size={48} color="#12b48b" />,
    title: "dental-title",
    description: "dental"
  },
  {
    id:2,
    icon: <Stethoscope size={48} color="#12b48b" />,
    title: "cardiology-title",
    description:
      "cardiology",
  },
  {
    id:3,
    icon: <Baby size={48} color="#12b48b" />,
    title: "dermatology-title",
    description:
      "dermatology",
  },
];
