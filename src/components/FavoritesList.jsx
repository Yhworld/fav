import ProductCard from './ProductCard';

function FavoritesList({ favorites, onToggleFavorite }) {
  if (favorites.length === 0) {
    return (
      <div className="text-center py-4 text-gray-500">
        No favorites yet.
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {favorites.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          isFavorite={true}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default FavoritesList;