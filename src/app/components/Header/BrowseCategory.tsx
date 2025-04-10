"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    name: 'Category 1',
    subcategories: [
      { name: 'Subcategory 1a' },
      { name: 'Subcategory 1b' },
    ]
  },
  {
    name: 'Category 2',
    subcategories: [
      { name: 'Subcategory 2a' },
      { name: 'Subcategory 2b' },
    ]
  },
  {
    name: 'Category 3',
    subcategories: []
  }
];

const BrowseCategory = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative cursor-pointer">
      {/* Browse Category Button (Image) */}
      <Link className='abslute' href="/">
       
          <Image
            src="/images/dropdown.png"
            alt="Browse Categories"
            width={10}
            height={5}
            className="cursor-pointer"
          />
     
      </Link>

      {/* Dropdown Menu */}
      <button
        onClick={toggleDropdown}
        className="ps-3 pr-20 py-[10.8px] bg-white-500 border-1 text-black text-[16px] font-inter w-full focus:outline-none"
      >
        Browse 
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
          <ul className="py-2">
            {categories.map((category, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-100">
                <div className="flex justify-between items-center">
                  <span>{category.name}</span>
                  {category.subcategories.length > 0 && (
                    <span className="text-sm text-gray-500">▶</span>
                  )}
                </div>

                {/* Subcategories (If Any) */}
                {category.subcategories.length > 0 && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <li key={subIndex} className="px-4 py-1 text-gray-600 hover:bg-gray-200">
                        {subcategory.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BrowseCategory;
