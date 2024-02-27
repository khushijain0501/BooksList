import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import BookModel from "./BookModel";


const SingleCard = ({ book }) => {
  const [showModal,setShowModal]=useState(false);
  return (
    <div className="flex flex-col justify-between relative p-6 py-4 bg-[#f19c8b] rounded-lg shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] ">
        <div className='w-14 h-8 bg-[#265e5d] absolute  mx-2 top-0 right-0 text-[#D3D3D3] text-sm text-center p-1 md:w-8 md:text-xs md:h-6 lg:text-sm lg:w-9 lg:h-6 lg:p-0 lg:mx-1 '>
        {new Date(book.updatedAt).toLocaleString("en-GB",{hour12:false}).toString().substring(6,10)}
        </div>
        
      
      <div className="text-[#D3D3D3] md:text-xs lg:text-sm xl:text-lg ">{book._id}</div>
      
      <div className="flex justify-start align-center" >
      <div><FaBookOpen className="text-[#3d3251] my-1.5 mr-2"/></div>
      <div className="text-[#3d3251] font-semibold">{book.title}</div>
      </div>
      <div className="flex justify-start align-center ">
      <div><FaUser className="text-[#3d3251] my-1 mr-2"/></div>
        <div className="text-[#3d3251] font-semibold">{book.author}</div>
        </div>
       
      <div className="flex justify-between align-center gap-x-2 mt-4 p-2">
        <FaEye className=" text-[#36454F] text-4xl" onClick={()=>setShowModal(true)}/>
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
      <div>
        {showModal &&
        <BookModel book={book} onClose={()=>setShowModal(false)} caller="card"/>
        } 
      </div>
    </div>
  );
};

export default SingleCard;
