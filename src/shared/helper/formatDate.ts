const monthNames: Record<string, string[]> = {
  az: ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avq", "sen", "okt", "noy", "dek"],
  ru: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};
interface RemainingDaysMessages {
  daysLeft: (n: number) => string;
  today: string;
  daysAgo: (n: number) => string;
}
export function formatDate(dateString:string, locale:string = "en" ): string {
   const date = new Date(dateString);

  if (isNaN(date.getTime())) return ""; 

  const day = String(date.getDate()).padStart(2, "0");
  const month = monthNames[locale]?.[date.getMonth()] || monthNames["en"][date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
export function getRemainingDays(
  dateString: string,
  messages: RemainingDaysMessages
): string {
  const now = new Date();
  const target = new Date(dateString);

  const diffTime = target.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    return messages.daysLeft(diffDays);
  } else if (diffDays === 0) {
    return messages.today;
  } else {
    return messages.daysAgo(Math.abs(diffDays));
  }
}
