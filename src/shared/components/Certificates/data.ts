export type certificateType = {
    id: number;
    image: string;
    title: string;
    description: string;
}

export const certificates : certificateType[] = [
  {
    id: 1,
    image: "/certificates/iso9001.webp",
    title: "ISO 9001",
    description: "ISO",
  },
  {
    id: 2,
    image: "/certificates/haccp.webp",
    title: "HACCP",
    description: "HACCP",
  },
  {
    id: 3,
    image: "/certificates/halal.webp",
    title: "Halal Certified",
    description: "HALAL",
  },
  {
    id: 4,
    image: "/certificates/gmp.webp",
    title: "GMP",
    description: "GMP",
  },
   {
    id: 5,
    image: "/certificates/fda.webp",
    title: "FDA",
    description: "FDA",
  },
];