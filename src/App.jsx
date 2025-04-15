import { useState, useEffect, useMemo } from 'react';
import { Heart, Search } from 'lucide-react';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import FavoritesList from './components/FavoritesList';
import { searchProducts } from './api/api';

function App() {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('search');
  
  useEffect(() => {
    fetchProducts('');
  }, []);
  
  
  const fetchProducts = async (query) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const results = await searchProducts(query);
      setProducts(results);
    } catch (err) {
      setError('Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleToggleFavorite = (product) => {
      setFavorites(currentFavorites => {
        const exists = currentFavorites.some(item => item.id === product.id);
        
        if (exists) {
          return currentFavorites.filter(item => item.id !== product.id);
        } else {
          return [...currentFavorites, product];
        }
      });
  };
  
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 rounded-lg">
      <header className="text-center pb-8">
        <h1 className="text-2xl tracking-widest font-semibold">Yahya Treats.</h1>
      </header>
      
      <div className="flex justify-center items-center mb-6">
        <div className="flex gap-4">
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${activeTab === 'search' ? 'bg-black text-white font-medium' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            <Search size={18} />
            Search
          </button>
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${activeTab === 'favorites' ? 'bg-black text-white font-medium' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            <Heart size={18} className={favorites.length > 0 ? 'fill-red-500 text-red-500' : ''} />
            Favorites {favorites.length > 0 && `(${favorites.length})`}
          </button>
        </div>
      </div>
      
      {activeTab === 'search' && (
        <>
          <div className="mb-6">
            <SearchBar onSearch={fetchProducts} />
          </div>
          
          {isLoading ? (
            <div className="text-center py-8">Loading products...</div>
          ) : error ? (
            <div className="text-center py-8 text-red-500">{error}</div>
          ) : (
            <ProductList 
              products={products} 
              favorites={favorites} 
              onToggleFavorite={handleToggleFavorite} 
            />
          )}
        </>
      )}
      
      {activeTab === 'favorites' && (
        <div className="mt-4">
          <FavoritesList 
            favorites={favorites} 
            onToggleFavorite={handleToggleFavorite} 
          />
        </div>
      )}
    </div>
  );
}

export default App;