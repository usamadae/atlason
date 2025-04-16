import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const selectedCategory = categories.find(
    (category) => category.categoryId === hoveredCategoryId
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint
    };
    handleResize(); // Set on load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileCategory = (categoryId: number) => {
    setHoveredCategoryId(prev => (prev === categoryId ? null : categoryId));
  };

  return (
    <div
      className={`relative cursor-pointer`}
      onMouseEnter={!isMobile ? () => setIsOpen(true) : undefined}
      onMouseLeave={!isMobile ? () => { setIsOpen(false); setHoveredCategoryId(null); } : undefined}
    >
      {/* Browse Button */}
      <div
        className="flex items-center justify-between bg-white border px-3 pr-8 py-[10.8px] relative md:w-auto w-full"
        onClick={() => isMobile && setIsOpen(!isOpen)}
      >
        <span className="text-black text-[16px] font-inter">Browse</span>
        <Image
          src="/images/dropdown.png"
          alt="Dropdown Icon"
          width={10}
          height={5}
          className="absolute right-3 top-1/2 transform -translate-y-1/2"
        />
      </div>

      {/* Desktop Dropdown */}
      {isOpen && !isMobile && (
        <div className="absolute top-[40px] left-0 mt-2 bg-white shadow-lg rounded-lg z-10 flex w-[600px]">
          {/* Main Categories */}
          <ul className="w-1/2 border-r py-2">
            {categories.map((category) => (
              <li
                key={category.categoryId}
                onMouseEnter={() => setHoveredCategoryId(category.categoryId)}
                className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${hoveredCategoryId === category.categoryId ? "bg-gray-100 font-semibold" : ""
                  }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[18px] font-semibold">{category.categoryName}</span>
                  {(category.subCategoryDTOs ?? []).length > 0 && (
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
                  <span className="text-[18px] font-semibold">{subcategory.subCategoryName}</span>
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

      {/* Mobile Dropdown */}
      {isOpen && isMobile && (
        <div className="absolute left-0 mt-2 w-full bg-white shadow-md rounded-lg z-10 p-4 max-h-[70vh] overflow-y-auto">
          {categories.map((category) => (
            <div key={category.categoryId} className="mb-2">
              <div
                className="flex justify-between items-center px-2 py-2 border-b cursor-pointer"
                onClick={() => toggleMobileCategory(category.categoryId)}
              >
                <span className="text-[16px] font-semibold font-inter ">{category.categoryName}</span>
                {(category.subCategoryDTOs ?? []).length > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-4 h-4 text-black transform transition-transform duration-200 ${hoveredCategoryId === category.categoryId ? "rotate-90" : ""
                      }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
              {/* Subcategories */}
              {hoveredCategoryId === category.categoryId && (
                <ul className="pl-4 py-1">
                  {category.subCategoryDTOs?.map((sub) => (
                    <li key={sub.subCategoryId} className="py-1 text-[16px] font-semibold font-inter">
                      {sub.subCategoryName}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseCategory;
