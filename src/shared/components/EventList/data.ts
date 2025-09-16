type eventsType = {
  eventId: number;
  day: number;
  title: string;
  description: string;
  imageSrc: string;
  time: string;
};
interface IListData {
  id: number;
  date: string;
  events: eventsType[];
}

export const eventListData: IListData[] = [
  {
    id: 1,
    date: "February 2025",
    events: [
      {
        eventId: 1,
        day: 28,
        title: "Ut dolor eveniet quo vitae pariatur repellendus vitae.",
        description:
          "Beatae at alias beatae. Quisquam voluptatem dolorem. Et ab corporis aut necessitatibus error voluptatem. Sed ut ut esse officiis ipsum voluptatem sunt laboriosam. Magnam rerum repellat. Adipisci architecto ipsa in ut....",
        imageSrc: "https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?q=80&w=1504&auto",
        time: "21:00 PM - 23:00 PM",
      },
      {
        eventId: 2,
        day: 20,
        title: "Ut dolor eveniet quo vitae pariatur repellendus vitae.",
        description:
          "Beatae at alias beatae. Quisquam voluptatem dolorem. Et ab corporis aut necessitatibus error voluptatem. Sed ut ut esse officiis ipsum voluptatem sunt laboriosam. Magnam rerum repellat. Adipisci architecto ipsa in ut....",
        imageSrc:  "https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?q=80&w=1504&auto",
        time: "21:00 PM - 23:00 PM",
      },
    ],
  },
  {
    id: 2,
    date: "March 2025",
    events: [
      {
        eventId: 1,
        day: 15,
        title: "Ut dolor eveniet quo vitae pariatur repellendus vitae.",
        description:
          "Beatae at alias beatae. Quisquam voluptatem dolorem. Et ab corporis aut necessitatibus error voluptatem. Sed ut ut esse officiis ipsum voluptatem sunt laboriosam. Magnam rerum repellat. Adipisci architecto ipsa in ut....",
        imageSrc:  "https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?q=80&w=1504&auto",
        time: "21:00 PM - 23:00 PM",
      },
      {
        eventId: 2,
        day: 12,
        title: "Ut dolor eveniet quo vitae pariatur repellendus vitae.",
        description:
          "Beatae at alias beatae. Quisquam voluptatem dolorem. Et ab corporis aut necessitatibus error voluptatem. Sed ut ut esse officiis ipsum voluptatem sunt laboriosam. Magnam rerum repellat. Adipisci architecto ipsa in ut....",
        imageSrc:  "https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?q=80&w=1504&auto",
        time: "21:00 PM - 23:00 PM",
      },
    ],
  },
];
