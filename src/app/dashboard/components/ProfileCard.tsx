// app/dashboard/components/ProfileCard.tsx
import { User } from "../../types";

export default function ProfileCard({ user }: { user: User }) {
  return (
    <aside className="w-72 bg-white shadow-lg p-4">
      <img src={user.avatar} alt={user.name} className="w-20 h-20 rounded-full mx-auto mb-2" />
      <h4 className="text-center font-bold text-lg">{user.name}</h4>
      <p className="text-center text-sm text-gray-500 mb-4">{user.role}</p>
      <div>
        <h5 className="font-semibold mb-2">Course History</h5>
        {user.courseHistory.map(course => (
          <div key={course.id} className="text-sm mb-2">
            <p>{course.title}</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}