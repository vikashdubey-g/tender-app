"use client";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";

import Image from "next/image";

import { TaskContext } from "@/context/TaskContext";
import { searchTasks } from "@/utils";
import { initialTasks } from "@/data";

// assets
import bellIcon from "@/assets/svg/bell.svg";
import searchIcon from "@/assets/svg/search.svg";

const Header = () => {
  const taskContext = useContext(TaskContext);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // limiting the function call on every text change, similar to debounce logic
    const timeout = setTimeout(() => {
      if (taskContext) {
        const filteredTasks = searchTasks(initialTasks, searchQuery);
        taskContext?.setTasks(filteredTasks);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  // input search function
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gray-700 ">
      <div className="flex items-center justify-between py-3 mx-8 border-b border-gray-100">
        <h1 className="text-white text-3xl font-bold">Tender Tasks</h1>
        <div className="flex items-center space-x-5">
          <div className="flex items-center bg-white p-2 rounded-lg w-[40rem]">
            <input
              type="text"
              placeholder="Search for Tenders"
              className="bg-transparent text-gray-800 outline-none flex-grow px-2"
              value={searchQuery}
              onChange={handleSearch}
            />
            <Image
              src={searchIcon}
              alt="Search icon"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
          <Image
            src={bellIcon}
            alt="Bell icon"
            width={20}
            height={20}
            className="cursor-pointer"
          />{" "}
          <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 border-white cursor-pointer">
            S
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
