export type PartnerData = {
    id: number;
    name: string;
    image: string;
    description: string;
    url: string;
    location: string;
    established: string;
}
export const partnersData :PartnerData[]= [
  {
    id: 1,
    name: "Microsoft",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
    description: "Global technology leader providing cloud computing, productivity software, and innovative solutions for businesses worldwide.",
    url: "https://microsoft.com",
    location: "Seattle, USA",
    established: "1975"
  },
  {
    id: 2,
    name: "Google",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop",
    description: "Search engine giant and technology innovator creating products that organize the world's information.",
    url: "https://google.com",
    location: "Mountain View, USA",
    established: "1998"
  },
  {
    id: 3,
    name: "Adobe",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    description: "Creative software company empowering everyone from emerging artists to global brands.",
    url: "https://adobe.com",
    location: "San Jose, USA",
    established: "1982"
  },
  {
    id: 4,
    name: "Shopify",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
    description: "E-commerce platform helping businesses of all sizes sell online and in-person.",
    url: "https://shopify.com",
    location: "Ottawa, Canada",
    established: "2006"
  },
  {
    id: 5,
    name: "Stripe",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
    description: "Financial infrastructure platform for the internet, powering millions of businesses worldwide.",
    url: "https://stripe.com",
    location: "San Francisco, USA",
    established: "2010"
  },
  {
    id: 6,
    name: "Figma",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&h=300&fit=crop",
    description: "Collaborative design tool that brings teams together to create, test, and ship better designs.",
    url: "https://figma.com",
    location: "San Francisco, USA",
    established: "2012"
  }
];