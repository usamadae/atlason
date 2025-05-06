'use client';
import { useEffect, useState } from 'react';

export default function InstructorList() {
  const [instructors, setInstructors] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('/api/instructor')
      .then(res => res.json())
      .then(data => setInstructors(data));
  }, []);

  const visibleInstructors = showAll ? instructors : instructors.slice(0, 3);

  return (
    <div className="bg-gray-100 py-4 lg:px-8 rounded-md">
      <h2 className="text-[#3DB765] font-bold font-inter text-[16px] mb-4">Instructor Details</h2>

      {visibleInstructors.map((ins) => (
        <div key={ins.id} className="mb-4 ">
          <h3 className="font-semibold  font-bold font-inter text-[16px] py-2 ">{ins.name}</h3>
          <p className="leading-5  font-medium font-inter text-[12px]">{ins.description}</p>
          <a href="#" className="text-green-600 font-semibold text-sm">See more</a>
        </div>
      ))}

      {instructors.length > 3 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-4 text-green-700 font-semibold text-sm"
        >
          See All
        </button>
      )}
    </div>
  );
}
