import React from 'react';
import { Search, X } from 'lucide-react';

type SearchBarProps = {
  title: string;
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ title, value, onChange }: SearchBarProps) => {
  return (
    <div className="px-4 py-3 bg-white">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Search in ${title}`}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
        />
        {value && (
          <button
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
            onClick={() => onChange('')}
          >
            <X size={18} className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>
      <h1 className="text-xl font-bold mt-2">{title}</h1>
    </div>
  );
};

export default SearchBar;
