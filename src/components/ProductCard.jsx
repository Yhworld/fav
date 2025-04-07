import { Heart } from 'lucide-react';

function ProductCard({ product, isFavorite, onToggleFavorite }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-40 object-cover"
      /> */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <Heart 
            className={`cursor-pointer ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
            onClick={() => onToggleFavorite(product)}
          />
        </div>
        <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductCard;