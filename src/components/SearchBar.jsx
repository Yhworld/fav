import { useState, useEffect, useMemo } from 'react';
import { debounce } from 'lodash';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  
  const debouncedSearch = useMemo(() => {
    return debounce((value) => {
      onSearch(value);
    }, 300);
  }, [onSearch]);
  
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };
  
  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);
  
  return (
    <div className="search-bar w-full">
      <input
        type="text"
        className="p-2 w-full border rounded-md"
        placeholder="Search for meals..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;