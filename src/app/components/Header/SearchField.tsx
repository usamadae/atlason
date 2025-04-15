"use client";

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import axiosInstance from '../../lib/axios';

const SearchField = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // State for error message
  const resultsRef = useRef(null); // Reference for the results container
  const inputRef = useRef(null); // Reference for the input field

  // Adding a debounce to optimize searches on user input
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.trim()) {
        handleSearch(query);
      }
    }, 500); // Wait for 500ms before calling the API after the user stops typing

    // Cleanup the timeout if query changes before the timer finishes
    return () => clearTimeout(timer);
  }, [query]);

  // Handle the search on submit (Enter key press)
  const handleSearch = async (query) => {
    if (!query.trim()) {
      setResults([]); // Clear results if the query is empty
      return;
    }

    setLoading(true);
    setError(''); // Clear any previous error message
    try {
      const res = await axiosInstance.get(`/api/Course/SearchCourse/${encodeURIComponent(query)}`);
      console.log('API response:', res.data); // Log API response for debugging

      // Filter the results based on the query match
      const filteredResults = res.data.filter((course) => 
        course.title.toLowerCase().includes(query.toLowerCase()) || 
        course.description.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    } catch (err) {
      console.error('Search error:', err.response ? err.response.data : err.message);

      // If the error is a 400, show a specific message
      if (err.response && err.response.status === 400) {
        setResults([]);  // Clear previous results
        setError('No course found');  // Show error message on the UI
      } else {
        setResults([]); // Clear results for other types of errors
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  // Handle the input change event
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Hide results if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resultsRef.current && !resultsRef.current.contains(e.target) && !inputRef.current.contains(e.target)) {
        setResults([]); // Clear results when clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full lg:max-w-md relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch(query);  // Perform search when Enter key is pressed
        }}
        className="flex font-inter items-center border gap-x-5 border-black py-3 px-4 w-full"
      >
        <button type="submit" className="ml-2 contents">
          <Image
            src="/images/search-icon.png"
            alt="Search"
            width={20}
            height={20}
          />
        </button>
        <input
          ref={inputRef} // Attach reference to input
          type="text"
          value={query}
          onChange={handleInputChange}  // Update query as user types
          placeholder="What do you want to learn..."
          className="flex-grow bg-transparent outline-none text-sm placeholder-black"
        />
      </form>

      {/* Show error message above the results */}
      {error && <p className="text-sm text-[16px] font-poppins text-red-600">{error}</p>}

      {/* Display search results */}
      {query && results.length > 0 && (
        <div
          ref={resultsRef} // Attach reference to results container
          className="absolute xl:top-[62px] top-[55px] p-5 left-0 font-inter w-[100%] bg-white border border-gray-300 rounded shadow-md z-10"
        >
          {loading && <p className="text-sm">Searching...</p>}
  {/* Show "No course found" if results are empty and no error */}
  {!loading && results.length === 0 && !error && (
      <p className="text-sm">No course found.</p>
    )}
          {!loading && results.length === 0 && !error && (
            <p className="text-sm">No results found.</p>
          )}

          {!loading && results.map((course) => (
            <div key={course.courseId} className="font-inter font-semibold border-gray-300 mb-3 rounded">
              <h3 className="font-semibold text-base">{course.title}</h3>
              <p className="text-sm text-black-600">{course.description}</p>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-[16px] text-[#3DB765] font-bold">${course.price}</span>
                <span className="text-yellow-600">⭐ {course.rating}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
