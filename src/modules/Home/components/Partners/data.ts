type Stat = {
  id: number;
  target: number;
  suffix?: string;
  label: string;
  hint: string;
  duration?: string;
  delay?: number;
};
export const stats: Stat[] = [
  {
    id: 1,
    target: 100,
    suffix: "+",
    label: "customer",
    hint: "active-trusted",
    duration: "3s",
    delay: 0,
  },
  {
    id: 2,
    target: 50,
    suffix: "+",
    label: "medicine",
    duration: "2.2s",
    delay: 150,
    hint: "active-trusted",

  },
  {
    id: 3,
    target: 10,
    suffix: "+",
    label: "years-of-experience",
    duration: "1.4s",
    delay: 300,
    hint: "active-trusted",

  },
];
