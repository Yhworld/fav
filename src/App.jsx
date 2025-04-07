import { useState } from 'react';
import { Heart, Search } from 'lucide-react';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';

function App() {
  const [activeTab, setActiveTab] = useState('search');
  
  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 rounded-lg">
      <header className="text-center pb-8">
        <h1 className="text-2xl tracking-widest font-semibold">Yahya Store.</h1>
      </header>
      
      <div className="flex justify-center items-center mb-6">
        <div className="flex gap-4">
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${activeTab === 'search' ? 'bg-black text-white' : ''}`}
            onClick={() => setActiveTab('search')}
          >
            <Search size={18} />
            Search
          </button>
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${activeTab === 'favorites' ? 'bg-black text-white' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            <Heart size={18} /> Favorites
          </button>
        </div>
      </div>
      
      {activeTab === 'search' && (
        <>
          <div className="mb-6">
            <SearchBar />
          </div>
        </>
      )}
      
      {activeTab === 'favorites' && (
        <div className="mt-4">
          <FavoritesList 
          />
        </div>
      )}
    </div>
  );
}

export default App;