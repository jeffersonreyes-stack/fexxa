import Image from "next/image";
import { Search } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  description?: string;
}

export default function ProductCard({ image, title, category, description }: ProductCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md bg-white">
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
           <span className="text-white flex items-center gap-2 bg-[#C5A059] px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
             <Search className="w-4 h-4" /> Zoom
           </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
            <div>
                <p className="text-xs text-[#C5A059] font-bold uppercase tracking-wider mb-1">{category}</p>
                <h3 className="text-xl font-serif font-bold text-[#1B365D]">{title}</h3>
            </div>
        </div>
        {description && <p className="text-gray-600 text-sm mt-2">{description}</p>}

        {/* Badge */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs text-gray-400 font-medium">FEXXA Design</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded border border-gray-200">Precisión de Ingeniería</span>
        </div>
      </div>
    </div>
  );
}
