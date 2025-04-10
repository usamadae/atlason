"use client"

import Image from 'next/image';
import { useState } from 'react';

const SearchField = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', query);
    // You can add actual search logic here
  };

  return (
    <form onSubmit={handleSearch} className="flex font-inter items-center w-full lg:max-w-md border gap-x-5 border-black py-3 px-4">
         <button type="submit" className="ml-2 contents">
        <Image
          src="/images/search-icon.png"
          alt="Search"
          width={20}
          height={20}
        />
      </button>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="What do you want learn..."
        className="flex-grow bg-transparent outline-none text-sm  placeholder-black"
      />
     
    </form>
  );
};

export default SearchField;
