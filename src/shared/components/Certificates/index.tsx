import Image from "next/image";
import { certificates } from "./data";
import { useTranslations } from "next-intl";

export default function Certificates() {

    const t = useTranslations("Certificate")

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center"
          >
            <div className="relative w-28 h-28 mb-4">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
            <p className="text-gray-600 text-sm">{t(cert.description)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}