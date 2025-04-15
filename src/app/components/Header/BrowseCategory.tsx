import { useState } from "react";
import Image from "next/image";

interface Subcategory {
  subCategoryId: number;
  subCategoryName: string;
}

interface Category {
  categoryId: number;
  categoryName: string;
  subCategoryDTOs?: Subcategory[];
}

interface BrowseCategoryProps {
  categories: Category[];
}

const BrowseCategory = ({ categories }: BrowseCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategoryId, setHoveredCategoryId] = useState<number | null>(null);

  const selectedCategory = categories.find(
    (category) => category.categoryId === hoveredCategoryId
  );

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setHoveredCategoryId(null);
      }}
    >
      {/* Browse Category Button */}
      <div className="flex items-center gap-2 bg-white border px-3 pr-8 py-[10.8px]  relative">
        <span className="text-black text-[16px] font-inter">Browse</span>
        <Image
          src="/images/dropdown.png"
          alt="Dropdown Icon"
          width={10}
          height={5}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[40px] left-0 mt-2 bg-white shadow-lg rounded-lg z-10 flex w-[600px]">
          {/* Main Categories */}
          <ul className="w-1/2 border-r py-2">
            {categories.map((category) => (
              <li
                key={category.categoryId}
                onMouseEnter={() => setHoveredCategoryId(category.categoryId)}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${hoveredCategoryId === category.categoryId
                    ? "bg-gray-100 font-semibold"
                    : ""
                  }`}
              >
                <div className="flex justify-between items-center">
                  <span className="tex-[18px] font-semibold">{category.categoryName}</span>
                  {(category.subCategoryDTOs ?? []).length > 0 && (
                    <span className="text-sm text-black-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-4 h-4 text-black-500"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Subcategories */}
          <ul className="w-1/2 py-2 pl-4">
            {selectedCategory?.subCategoryDTOs?.length ? (
              selectedCategory.subCategoryDTOs.map((subcategory) => (
                <li
                  key={subcategory.subCategoryId}
                  className="px-2 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  <span className="tex-[18px] font-semibold">{subcategory.subCategoryName}</span>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-400 px-2 py-1">
                {hoveredCategoryId ? "No subcategories" : "Hover a category"}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BrowseCategory;
