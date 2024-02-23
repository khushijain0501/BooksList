import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import BookModel from "./BookModel";

import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import BooksRow from "./BooksRow";

const BooksTable = ({ books }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleMode=(bookId)=>{
    setShowModal((prev)=>({
      ...prev,
      [bookId]:!prev[bookId]
    }))
  }
  return (
    <div>
      <table className="w-full border-separate border-spacing-2 px-10">
        <thead>
          <tr>
            <th className="shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] py-1  bg-[#f19c8b] rounded-lg max-md:hidden">
              No.
            </th>
            <th className="shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] py-1  bg-[#f19c8b] rounded-lg max-md:hidden">
              Title
            </th>
            <th className="shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] py-1  bg-[#f19c8b] rounded-lg max-md:hidden">
              Author
            </th>
            <th className="shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] py-1  bg-[#f19c8b] rounded-lg max-md:hidden">
              Publish Year
            </th>
            <th className="shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] py-1  bg-[#f19c8b] rounded-lg ">
              Operations
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {books.map((book, index) => {
            return (
              <BooksRow
              key={book._id}
              book={book} 
              showModal={showModal[book._id]||false} 
              toggleMode={toggleMode}
              index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksTable;
