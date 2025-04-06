import SearchBar from './components/SearchBar';
import { Heart } from 'lucide-react';

function App() {
  return (
    <div className="max-w-lg mx-auto mt-36 p-6 rounded-lg">
      <header className="text-center pb-8">
        <h1 className="text-2xl tracking-widest font-semibold">Yahya Store</h1>
      </header>

      <div className="flex justify-center items-center gap-8">
        <SearchBar />
        <Heart className="text-gray-500 hover:text-red-700 cursor-pointer" />
      </div>
    </div>
  );
}

export default App;
