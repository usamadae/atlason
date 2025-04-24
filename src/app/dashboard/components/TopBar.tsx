"use client";

import { useState, useEffect } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import axiosInstance from "../../lib/axios";

export default function TopBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() !== "") {
        fetchSearchResults(searchTerm);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const fetchSearchResults = async (query: string) => {
    try {
      const { data } = await axiosInstance.get(`/search?query=${query}`);
      setResults(data.results); // Adjust based on your API response shape
    } catch (error) {
      console.error("Search API error:", error);
    }
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="flex items-center w-full bg-white rounded-lg px-4 py-2 shadow-sm">

        <svg className="mr-4" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.66659 14.4587C11.1644 14.4587 13.9999 11.6231 13.9999 8.12533C13.9999 4.62752 11.1644 1.79199 7.66659 1.79199C4.16878 1.79199 1.33325 4.62752 1.33325 8.12533C1.33325 11.6231 4.16878 14.4587 7.66659 14.4587Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14.6666 15.1253L13.3333 13.792" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search your course here..."
          className="w-full focus:outline-none text-sm text-black py-2 placeholder-black"
        />

      </div>
      <button className="bg-white p-2 rounded-lg shadow-sm">
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.19987 3.25879H24.7999C26.2665 3.25879 27.4665 4.45879 27.4665 5.92546V8.85879C27.4665 9.92546 26.7999 11.2588 26.1332 11.9255L20.3999 16.9921C19.5999 17.6588 19.0665 18.9921 19.0665 20.0588V25.7921C19.0665 26.5921 18.5332 27.6588 17.8665 28.0588L15.9999 29.2588C14.2665 30.3255 11.8665 29.1255 11.8665 26.9921V19.9255C11.8665 18.9921 11.3332 17.7921 10.7999 17.1255L5.7332 11.7921C5.06654 11.1255 4.5332 9.92546 4.5332 9.12546V6.05879C4.5332 4.45879 5.7332 3.25879 7.19987 3.25879Z" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M14.5733 3.25879L8 13.7921" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </button>
    </div>
  );
}
