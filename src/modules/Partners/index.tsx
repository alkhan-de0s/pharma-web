import { serverApi } from "@/lib/apiClient";
import { BreadCrumb, PartnerCard } from "@/shared/components";
import { Urls } from "@/shared/constants/urls";
import { Award } from "lucide-react";
import { Blog } from "./mode";
import { getTranslations } from "next-intl/server";

const Partners = async() => {
  const t = await getTranslations("Header");
  const partnersText = await getTranslations("Partners")


    const data = await serverApi.get<Blog[]>("/blogs")

  return (
    <main>
      <BreadCrumb
        items={[
          { label: t("home"), href: Urls.HOME },
          { label: t("partners"), href: Urls.OUR_PARTNERS },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2" />
            {partnersText("trusted-partners")}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              {partnersText("amazing-partners")}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              {partnersText("partner")}
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {partnersText("partners-text")}
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>

        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-pink-200 rounded-full opacity-15 blur-2xl" />
        </div>
      </div>
    </main>
  );
};

export default Partners;
