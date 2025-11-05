"use client";

import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Star } from "lucide-react";

interface ProductFiltersProps {
  filters: {
    category: string[];
    priceRange: [number, number];
    rating: number;
    color: string[];
    brand: string[];
  };
  setFilters: (filters: any) => void;
}

const categories = ["Fashion", "Electronics", "Home Decor"];
const colors = ["Black", "White", "Blue", "Red", "Gray", "Silver"];
const brands = [
  "AudioTech",
  "StyleWear",
  "LightCo",
  "SportFit",
  "TechGear",
  "ComfortHome",
  "DenimCo",
  "TechWatch",
];
const ratings = [5, 4, 3, 2, 1];

export default function ProductFilters({ filters, setFilters }: ProductFiltersProps) {
  const handleCategoryChange = (category: string) => {
    setFilters({
      ...filters,
      category: filters.category.includes(category)
        ? filters.category.filter((c) => c !== category)
        : [...filters.category, category],
    });
  };

  const handleColorChange = (color: string) => {
    setFilters({
      ...filters,
      color: filters.color.includes(color)
        ? filters.color.filter((c) => c !== color)
        : [...filters.color, color],
    });
  };

  const handleBrandChange = (brand: string) => {
    setFilters({
      ...filters,
      brand: filters.brand.includes(brand)
        ? filters.brand.filter((b) => b !== brand)
        : [...filters.brand, brand],
    });
  };

  const handleRatingChange = (rating: number) => {
    setFilters({
      ...filters,
      rating: filters.rating === rating ? 0 : rating,
    });
  };

  const handlePriceChange = (value: number[]) => {
    setFilters({
      ...filters,
      priceRange: [value[0], value[1]],
    });
  };

  return (
    <aside className="space-y-6 text-gray-800">
      {/* Price Filter */}
      <Card className="bg-white border border-gray-200 rounded-md p-5 shadow-sm">
        <h3 className="font-semibold text-lg text-[#232F3E] mb-3">
          Price
        </h3>
        <Slider
          min={0}
          max={300}
          step={10}
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          className="mb-3"
        />
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>₹{filters.priceRange[0]}</span>
          <span>₹{filters.priceRange[1]}</span>
        </div>
      </Card>

      {/* Category Filter */}
      <Card className="bg-white border border-gray-200 rounded-md p-5 shadow-sm">
        <h3 className="font-semibold text-lg text-[#232F3E] mb-3">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={filters.category.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
                className="border-gray-400 data-[state=checked]:border-[#FF9900] data-[state=checked]:bg-[#FF9900]"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </Card>

      {/* Rating Filter */}
      <Card className="bg-white border border-gray-200 rounded-md p-5 shadow-sm">
        <h3 className="font-semibold text-lg text-[#232F3E] mb-3">
          Rating
        </h3>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <label key={rating} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={filters.rating === rating}
                onCheckedChange={() => handleRatingChange(rating)}
                className="border-gray-400 data-[state=checked]:border-[#FF9900] data-[state=checked]:bg-[#FF9900]"
              />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating ? "fill-[#FF9900] text-[#FF9900]" : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">& up</span>
              </div>
            </label>
          ))}
        </div>
      </Card>

      {/* Color Filter */}
      <Card className="bg-white border border-gray-200 rounded-md p-5 shadow-sm">
        <h3 className="font-semibold text-lg text-[#232F3E] mb-3">Color</h3>
        <div className="space-y-2">
          {colors.map((color) => (
            <label key={color} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={filters.color.includes(color)}
                onCheckedChange={() => handleColorChange(color)}
                className="border-gray-400 data-[state=checked]:border-[#FF9900] data-[state=checked]:bg-[#FF9900]"
              />
              <span className="text-sm">{color}</span>
            </label>
          ))}
        </div>
      </Card>

      {/* Brand Filter */}
      <Card className="bg-white border border-gray-200 rounded-md p-5 shadow-sm">
        <h3 className="font-semibold text-lg text-[#232F3E] mb-3">Brand</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={filters.brand.includes(brand)}
                onCheckedChange={() => handleBrandChange(brand)}
                className="border-gray-400 data-[state=checked]:border-[#FF9900] data-[state=checked]:bg-[#FF9900]"
              />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </Card>
    </aside>
  );
}
