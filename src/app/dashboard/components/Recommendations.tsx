import { Recommendation } from "../../types";

export default function Recommendations({ data }: { data: Recommendation[] }) {
  return (
    <section>
      <h3 className="text-lg font-semibold mb-4">Recommended</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded shadow">
            <img src={course.imageUrl} alt={course.title} className="w-full h-32 object-cover rounded mb-2" />
            <h4 className="font-bold text-sm mb-1">{course.title}</h4>
            <p className="text-xs text-gray-500">By {course.instructor}</p>
            <p className="text-xs">⭐ {course.rating} | {course.students} students</p>
            <p className="text-xs">Level: {course.level}</p>
            <p className="text-xs">Duration: {course.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}