import { lang, serverApi } from "@/lib/apiClient";
import { ProductDto } from "@/modules/Products/model";
import SingleProduct from "@/modules/Products/SingleProduct";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

const Page = async ({ params }: PageProps) => {
    
    const {locale,slug} = await params;


     const data = await serverApi.get<ProductDto>(
       `products/${slug}?languageId=${lang[locale as keyof typeof lang] ?? 1}`
     ); 

     

  return <SingleProduct data={data} />
}

export default Page
