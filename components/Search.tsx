"use client";
import React from 'react'
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import searchIcon from "../assets/images/icon-search.svg";

interface SearchResult {
  name: string;
  country: string;
  admin1?: string;
  latitude: number;
  longitude: number;
}

interface SearchProps {
  onSearch: (term: string) => void;
  loading: boolean;
  searchResults: SearchResult[];
  showSearchResults: boolean;
  onLocationSelect: (result: SearchResult) => void;
  onCloseResults: () => void;
}

export default function Search({
  onSearch,
  loading,
  searchResults,
  showSearchResults,
  onLocationSelect,
  onCloseResults,
}: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    onSearch(searchTerm);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === "") {
      onCloseResults();
    }
  };

  // Close dropdown if user clicks anywhere outside the search container
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onCloseResults();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onCloseResults]);

  return (
    <div ref={containerRef} className="relative max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Image
            src={searchIcon}
            alt=""
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10 opacity-70"
          />
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
            placeholder="Search for a city..."
            className="w-full pl-10 pr-10 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
            disabled={loading}
          />
          {loading && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-b-white"></div>
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={loading || !searchTerm.trim()}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-white/10 disabled:text-gray-500 disabled:cursor-not-allowed rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {/* Unified Search Dropdown View (Handles Loading state & Found Results) */}
      {((showSearchResults && searchResults.length > 0) || (loading && searchTerm.trim())) && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-lg shadow-xl z-50 max-h-60 overflow-y-auto backdrop-blur-md border border-white/10">
          {loading ? (
            <div className="flex items-center space-x-3 p-4 text-gray-300">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/20 border-b-white"></div>
              <span className="text-sm">Finding coordinates...</span>
            </div>
          ) : (
            searchResults.map((result, index) => (
              <button
                key={index}
                onClick={() => {
                  onLocationSelect(result);
                  setSearchTerm(""); // Clean input on selection
                }}
                className="w-full text-left px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/5 last:border-b-0 group"
              >
                <div className="text-white font-medium group-hover:text-blue-400 transition-colors">
                  {result.name}
                </div>
                <div className="text-gray-400 text-sm mt-0.5">
                  {result.admin1 ? `${result.admin1}, ` : ""}
                  {result.country}
                </div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}

























// "use client"
// import React from 'react'
// import { useState } from "react";
// import search from "/assets/images/icon-search.svg";
// import Image from 'next/image';


// export default function Search({
//   onSearch,
//   loading,
//   searchResults,
//   showSearchResults,
//   onLocationSelect,
//   onCloseResults,
// }) {


//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSearch(searchTerm);
//   };

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//     if (e.target.value === "") {
//       onCloseResults();
//     }
//   };
//   return (
//     <>
//      <div className="relative max-w-md mx-auto">
//       <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
//         <div className="relative flex-1">
//           <Image
//             src={search}
//             alt=""
//             className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 z-10"
//           />
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             placeholder="Search for a place..."
//             className="w-full pl-10 pr-4 py-3 glass-card rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
//             disabled={loading}
//           />

//           {loading && (
//             <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
//               <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
//             </div>
//           )}
//         </div>

//         <button
//           type="submit"
//           disabled={loading || !searchTerm.trim()}
//           className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
//         >
//           {loading ? "Searching..." : "Search"}
//         </button>
//       </form>

//       {/* Progress indicator */}
//       {loading && (
//         <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-lg p-6 z-50">
//           <div className="flex items-center space-x-2 text-gray-300">
//             <div className="animate-spin rounded-full size-4 border-b-2 border-white"></div>
//             <span className="text-sm">Search in progress</span>
//           </div>
//         </div>
//       )}

//       {/* Search results */}
//       {showSearchResults && searchResults.length > 0 && (
//         <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
//           {searchResults.map((result, index) => (
//             <button
//               key={index}
//               onClick={() => onLocationSelect(result)}
//               className="w-full text-left px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0"
//             >
//               <div className="text-white font-medium">{result.name}</div>
//               <div className="text-gray-300 text-sm">
//                 {result.admin1 && `${result.admin1}, `}
//                 {result.country}
//               </div>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
      
//     </>
//   )
// }
