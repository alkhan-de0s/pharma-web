'use client';
import { Blog } from "@/modules/Partners/mode";
import { Award } from "lucide-react";
import { useTranslations } from "next-intl";
interface PartnerCardProps {
    partner: Blog;
}
const PartnerCard = ({ partner }:PartnerCardProps) => {

  const t = useTranslations("Header")
  return (
    <div 
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={partner.coverImage} 
          alt={partner.coverImage}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center space-x-1">
          <Award className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">{t("partners")}</span>
        </div>

       
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {partner.translation.text}
          </h3>
          
         
        </div>

        <p className="text-gray-600 leading-relaxed text-sm">
          {partner.translation.title}
        </p>

      
      </div>

      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
    </div>
  );
};
export default PartnerCard;