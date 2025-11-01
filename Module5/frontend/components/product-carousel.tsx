"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ProductCarouselProps {
  images: string[];
}

export default function ProductCarousel({ images }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden relative">
        <div className="relative h-96 md:h-[500px] flex items-center justify-center">
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt="Product"
            className={`max-h-full w-auto object-contain transition-transform duration-300 ${
              isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
          />

          {/* Zoom Button */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute top-4 right-4 bg-gray-700/70 hover:bg-gray-800 text-white p-2 rounded-md transition-colors"
            aria-label="Zoom Image"
          >
            <ZoomIn className="w-5 h-5" />
          </button>

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full border border-gray-300 shadow-sm transition-all"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full border border-gray-300 shadow-sm transition-all"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 bg-gray-800/70 text-white px-3 py-1 rounded-md text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </Card>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                currentIndex === index
                  ? "border-[#FF9900]" // Amazon yellow highlight
                  : "border-gray-200 hover:border-gray-400"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
