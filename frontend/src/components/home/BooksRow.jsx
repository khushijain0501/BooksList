import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa";
import BookModel from "./BookModel";

import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const BooksRow = ({key,book,showModal,toggleMode,index}) => {
  return (
    <tr key={key} className="h-6">
                <td className="shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] py-1 bg-[#f19c8b] rounded-lg max-md:hidden">
                  {index + 1}
                </td>
                <td className="shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] py-1  bg-[#f19c8b] rounded-lg max-md:hidden">
                  {book.title}
                </td>
                <td className="shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] py-1  bg-[#f19c8b] rounded-lg max-md:hidden">
                  {book.author}
                </td>
                <td className="shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] py-1  bg-[#f19c8b] rounded-lg max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] py-1  bg-[#f19c8b] rounded-lg ">
                  <div className="flex justify-center gap-x-4">
                    <div>
                      <FaEye
                        className="mx-1 text-[#36454F] text-4xl"
                        onClick={() => toggleMode(book._id)}
                      />
                      <div>
                        {showModal && (
                          <BookModel
                            book={book}
                            onClose={() => toggleMode(book._id)}
                            caller="table"
                          />
                        )}
                      </div>
                    </div>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className=" text-[#36454F] text-4xl" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className=" text-[#265e5d] text-4xl" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className="text-[#880808] text-4xl" />
                    </Link>
                  </div>
                </td>
                
              </tr>
  )
}

export default BooksRow
