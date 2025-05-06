'use client';
import { useEffect, useState } from 'react';

export default function SubmissionsTable() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/video') // Replace with your actual API endpoint
      .then((res) => res.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className=" p-4 rounded-md bg-[#F7F7F7]">
      <h2 className="font-bold mb-4">Overview Of Submitted Videos</h2>
      <table className="w-full text-left table-auto">
        <thead>
          <tr className="font-semibold font-inter text-[14px] py-2">
            <th>NAME & DATE</th>
            <th className='text-center'>COURSE TYPE</th>
            <th className='text-center'>COURSE TITLE</th>
            <th className='text-center'>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video) => (
            <tr key={video.id} className=" ">
              <td className="py-2 flex items-center gap-2">
                <img src={video.avatar} alt={video.name} className="w-8 h-8 rounded-full" />
                <div>
                  <div className='font-inter font-semibold text-[12px]'>{video.name}</div>
                  <div className="text-[11px] text-medium text-[#000000]">{video.date}</div>
                </div>
              </td>
              <td className="py-2 font-inter font-semibold text-[12px] text-center">{video.courseType}</td>
              <td className="py-2  font-inter font-semibold text-[12px] text-center">{video.courseTitle}</td>
              <td className="py-2">
                <span className="bg-[#3DB765] text-white text-xs px-0    py-5 rounded-full text-center flex justify-center items-center">
                  {video.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
