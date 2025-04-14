import { GetServerSideProps } from "next";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { browseCategoriesWithSub } from "../../utils/api/browseCategory";

interface Subcategory {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
  subcategories?: Subcategory[];
}

interface BrowseCategoryProps {
  categories: Category[];
}

const BrowseCategory = ({ categories }: BrowseCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative cursor-pointer">
      {/* Browse Category Button (Image) */}
      <Link href="/">
        <Image
          src="/images/dropdown.png"
          alt="Browse Categories"
          width={10}
          height={5}
          className="cursor-pointer absolute right-[15px] top-[20px]"
        />
      </Link>

      {/* Dropdown Menu */}
      <button
        onClick={toggleDropdown}
        className="ps-3 pr-20 py-[10.8px] bg-white-500 border-1 text-black text-[16px] font-inter text-left w-full focus:outline-none"
      >
        Browse
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-10">
          <ul className="py-2">
            {categories.map((category) => (
              <li key={category.id} className="px-4 py-2 hover:bg-gray-100">
                <div className="flex justify-between items-center">
                  <span>{category.name}</span>
                  {(category.subcategories ?? []).length > 0 && (
                    <span className="text-sm text-gray-500">▶</span>
                  )}
                </div>

                {/* Subcategories (If Any) */}
                {(category.subcategories ?? []).length > 0 && (
                  <ul className="ml-4 mt-2 space-y-1">
                    {(category.subcategories ?? []).map((subcategory) => (
                      <li key={subcategory.id} className="px-4 py-1 text-gray-600 hover:bg-gray-200">
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

// Fetch categories on server-side and transform the API response
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const rawCategories = await browseCategoriesWithSub();
    // Transform the API response:
    // Convert keys: categoryId -> id, categoryName -> name,
    // subCategoryDTOs -> subcategories (and subCategoryId -> id, subCategoryName -> name)
    const transformedCategories: Category[] = rawCategories.map((cat: any) => ({
      id: cat.categoryId,
      name: cat.categoryName,
      subcategories: (cat.subCategoryDTOs || []).map((sub: any) => ({
        id: sub.subCategoryId,
        name: sub.subCategoryName,
      })),
    }));

    return {
      props: {
        categories: transformedCategories,
      },
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      props: {
        categories: [],
      },
    };
  }
};

export default BrowseCategory;
