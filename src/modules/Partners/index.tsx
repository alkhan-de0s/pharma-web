import { BreadCrumb, PartnerCard } from "@/shared/components";
import { partnersData } from "@/shared/components/PartnerCard/data";
import { Urls } from "@/shared/constants/urls";
import { Award } from "lucide-react";
import { useTranslations } from "next-intl";

const Partners = () => {
      const t = useTranslations("Header");
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
            Trusted Partners
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Our Amazing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {" "}
              Partners
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're proud to work alongside these incredible companies that share
            our vision for innovation and excellence.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnersData.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center mt-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Want to become a partner?
            </h3>
            <p className="text-gray-600 mb-6">
              Join our network of trusted partners and grow your business with
              us.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get in Touch
            </button>
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
