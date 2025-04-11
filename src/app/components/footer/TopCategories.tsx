import Link from "next/link";
import { getTopCategories } from "../../utils/api/category";

interface Category {
  id: number;
  categoryName: string;
}

interface Props {
  categories: Category[];
}

const TopCategories = ({ categories }: Props) => {
  return (
    <div>
      <h2 className="font-inter font-bold md:text-[17px] text-[14px] mb-3 pt-5 uppercase">
        Top 4 Categories
      </h2>

      {categories.length === 0 ? (
        <p className="text-sm text-red-500">No categories found</p>
      ) : (
        <ul className="list-none mt-2 font-poppins">
          {categories.map((category) => (
            <li key={category.id} className="mb-2">
              <Link
                href={`/categories/${category.id}`}
                className="text-[14px] hover:text-[#3DB765]"
              >
                {category.categoryName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  try {
    // Fetch categories server-side
    const categories = await getTopCategories();
    return { props: { categories } };
  } catch (error) {
    console.error("Failed to load categories", error);
    return { props: { categories: [] } }; // Return an empty array if there's an error
  }
}

export default TopCategories;
