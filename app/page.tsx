"use client";
import React, { useState } from "react";
import { studentData } from "./Data/studentData";
export default function Home() {
  const [index, setIndex] = useState(0);

  const pClickHandler = () => {
    setIndex(index == 0 ? studentData.length - 1 : index - 1);
  };

  const nClickHandler = () => {
    setIndex(index == studentData.length - 1 ? 0 : index + 1);
  };
  return (
    <div className="flex justify-center  items-center px-4 pt-4">
      <div className="mx-auto">
        <div className="flex flex-col items-center pb-10">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {studentData[index].name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {/* Visual Designer */}
          </span>
          <div className="flex mt-4 md:mt-6">
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={pClickHandler}
            >
              Previous
            </button>
            <button
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
              onClick={nClickHandler}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
