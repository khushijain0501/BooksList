import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";


const BookModel = ({book,onClose,caller}) => {
  return (
    <div 
    className={(caller==="card")?"fixed bg-black bg-opacity-60 top-0 right-0 bottom-0 left-0 flex justify-center items-center p-6 py-4 z-50":
    "fixed bg-black bg-opacity-30 top-0 right-0 bottom-0 left-0 flex justify-center items-center p-10 py-4 z-50 text-left"} onClick={onClose}>
      <div onClick={(event)=>event.stopPropagation()} className='w-[600px] bg-[#48b2b1] max-w-full h-[400px] rounded-xl p-4 m-4 flex flex-col shadow-[3px_4px_8px_0.1px_rgba(0,0,0,0.2)] shadow-[#3d3251] relative'>
        <MdOutlineClose onClick={onClose} className='absolute right-6 top-6 cursor-pointer text-[#a5081a] text-2xl fond-bold'/>
      <div className='w-14 h-8 bg-[#265e5d] mx-2 text-[#D3D3D3] text-sm font-semibold py-1 m-2 my-4 text-center p-1 rounded-md'>
        {book.publishYear}
        </div>
      <div className="text-[#D3D3D3] p-2">{book._id}</div>
      <div className="flex justify-start align-center p-2" >
      <div><FaBookOpen className="text-[#3d3251] my-1.5 mr-2"/></div>
      <div className="text-[#3d3251] font-semibold">{book.title}</div>
      </div>
      <div className="flex justify-start align-center p-2">
      <div><FaUser className="text-[#3d3251] my-1 mr-2"/></div>
        <div className="text-[#3d3251] font-semibold">{book.author}</div>
        </div>
        <div className="text-[#3d3251] ml-2 my-2 mr-2 font-semibold">{book.notes}</div>

      </div>
    </div>
  )
}

export default BookModel
