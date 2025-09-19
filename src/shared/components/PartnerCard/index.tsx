'use client';
import { useState } from "react";
import { PartnerData } from "./data";
import { Award, ExternalLink, MapPin } from "lucide-react";
interface PartnerCardProps {
    partner: PartnerData;
}
const PartnerCard = ({ partner }:PartnerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={partner.image} 
          alt={partner.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center space-x-1">
          <Award className="w-4 h-4 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">Partner</span>
        </div>

        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
          >
            <span>Visit Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {partner.name}
          </h3>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{partner.location}</span>
            </div>
            <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">
              Est. {partner.established}
            </span>
          </div>
        </div>

        <p className="text-gray-600 leading-relaxed text-sm">
          {partner.description}
        </p>

        <div className="pt-4 border-t border-gray-100">
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/link transition-colors duration-200"
          >
            <span>Learn More</span>
            <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-200 group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
    </div>
  );
};
export default PartnerCard;