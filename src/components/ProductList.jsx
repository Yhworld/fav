import ProductCard from './ProductCard';

function ProductList({ products, favorites, onToggleFavorite }) {
  if (products.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No products found
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          isFavorite={favorites.some(fav => fav.id === product.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div> 
  );
}

export default ProductList;