'use client';

import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { fetchCourseProgress } from '../../lib/courseActivity';

type StatusType = 'progress' | 'inprogress';

export default function CourseActivity() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<StatusType>('progress');

  const loadProgress = async (type: StatusType) => {
    const data = await fetchCourseProgress(type); // dynamic API call based on type
    setProgress(data.progress);
  };

  useEffect(() => {
    loadProgress(status);
  }, [status]);

  return (
    <div className="bg-green-100 p-5 rounded-xl w-60  shadow w-[22%] flex justify-between flex-col">
      <h2 className="text-sm font-semibold mb-0 font-inter  text-[17px] ">Course Activity</h2>

    

      {/* Circular Graph */}
      <div className="w-32 h-32 mx-auto">
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          strokeWidth={18}
          styles={buildStyles({
            pathColor: '#3DB765',
            textColor: '#166534',
            trailColor: '#f0fdf4',
          })}
        />
      </div>
        {/* Radio Buttons */}
        <div className="flex justify-center gap-4 mb-4 text-sm">
        <label className="flex items-center gap-1 font-inter text-[12px]">
          <input
            type="radio"
            name="status"
            value="progress"
            checked={status === 'progress'}
            onChange={() => setStatus('progress')}
          />
          Progress
        </label>
        <label className="flex items-center gap-1 font-inter text-[12px]">
          <input
            type="radio"
            name="status"
            value="inprogress"
            checked={status === 'inprogress'}
            onChange={() => setStatus('inprogress')}
          />
          In Progress
        </label>
      </div>
    </div>
  );
}
