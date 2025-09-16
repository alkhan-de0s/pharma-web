export function getImageUrl(path: string|undefined): string {
  const imageUrl = process.env.NEXT_PUBLIC_API_BASE_URL  || '';
  const fullPath = `${imageUrl?.slice(0,-1)}${path}`;
  return fullPath;
}
