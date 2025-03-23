import React from "react";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex mt-10 items-center justify-center">
      <div className="relative w-[500px]">
        <Input
          type="text"
          className="h-14 w-full pr-12 pl-5 rounded-full focus:shadow focus:outline-none"
          placeholder="Search..."
        />
        <Search 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400"
          size={24}
        />
      </div>
    </div>
  );
}

export default SearchBar;
