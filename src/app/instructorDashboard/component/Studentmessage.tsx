"use client";

import { useEffect, useState } from "react";

export default function StudentMessage() {
  const [messageData, setMessageData] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch("api/message");
        const data = await res.json();
        setMessageData(data);
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []);

  if (!messageData) return <p className="text-gray-500">Loading...</p>;

  return (
    <div className="rounded-xl p-4 max-w-md shadow-sm bg-[#F7F7F7]  w-[30%] ">
      <h3 className="text-lg font-semibold text-[#070707]  font-inter ">{messageData.title}</h3>
      <h4 className="text-sm font-medium text-[#070707]  font-inter mb-2">{messageData.type}</h4>
      <p className="  text-[#070707] leading-6 font-light  font-inter   text-[12px] ">{messageData.message}</p>
    </div>
  );
}
