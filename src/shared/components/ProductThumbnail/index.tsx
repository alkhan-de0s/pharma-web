
'use client'

import { ProductDto } from "@/modules/Products/model";
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface EnhancedProductGalleryProps {
  images: ProductDto["gallery"];
  description : string
  name : string
}

export default function EnhancedProductGallery({ images,description,name  }: EnhancedProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);


  const t = useTranslations("Product")

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index:number) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        
        <div className="space-y-4">
          <div className="relative group">
            <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={images[currentIndex]?.imageUrl}
                alt="PHOTO"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
              
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                  onClick={toggleZoom}
                  className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
                >
                  <ZoomIn className="w-4 h-4 text-gray-700" />
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
                >
                  <Maximize2 className="w-4 h-4 text-gray-700" />
                </button>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image.id}
                onClick={() => goToImage(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-200 ${
                  index === currentIndex 
                    ? 'ring-2 ring-blue-500 ring-offset-2 opacity-100 scale-105' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image.imageUrl}
                  alt={`View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
              </div>
            </div>
            
          
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{t("best-seller")}</h3>
              <p className="text-sm text-gray-600">{t("best-seller-text")}</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{t("popular")}</h3>
              <p className="text-sm text-gray-600">{t("popular-text")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          <button
            onClick={toggleFullscreen}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-4xl max-h-full p-4">
            <img
              src={images[currentIndex]?.imageUrl}
              alt={'Product image'}
              className={`max-w-full max-h-full object-contain transition-transform duration-200 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
              }`}
              onClick={toggleZoom}
            />
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}