import React,{useEffect, useState} from 'react'
import BackButton from "../components/backButton"
import Spinner from '../components/Spinner'
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import {enqueueSnackbar, useSnackbar} from 'notistack'
import axios from 'axios'

function EditBooks() {
  const {id}=useParams();
  const [loading,setLoading]=useState(false)
  const [title,setTitle]=useState();
  const [author,setAuthor]=useState('');
  const [publishYear,setPublishYear]=useState('');
  const [notes,setNotes]=useState("");
  const [rating,setRating]=useState(0);
  const [currVal,setCurrVal]=useState(0);
  const [hoverVal,setHoverVal]=useState(undefined)
  const colors={
    off:"#D3D3D3",
    on:"#f19c8b"
  }
  const stars=Array(5).fill(0)
  const {enqueueSnackbar}=useSnackbar();
  const navigate=useNavigate();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5555/books/details/${id}`)
      .then((res)=>{
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setNotes(res.data.notes)
        setRating(res.data.rating);
        setCurrVal(res.data.rating)
        setLoading(false);
      })
      .catch((err)=>{
        setLoading(false)
        console.log(err);
      })
  },[])
  const handleEditBook=(event)=>{
    const data={
      title,author,publishYear,notes,rating
    }
    setLoading(true)
    axios.put(`http://localhost:5555/books/edit/${id}`,data)
      .then(()=>{
        setLoading(false)
        enqueueSnackbar("Book edited successfully",{variant:'success'})
        navigate('/')
      })
      .catch((err)=>{
        setLoading(false)
        enqueueSnackbar("Error",{variant:'error'})
        console.log(err)
      })
  }
  const handleClick=(i)=>{
    setRating(i)
    setCurrVal(i)
  }
  const handleHover=(i)=>{
    setHoverVal(i);
  }
  const handleLeave=()=>{
    setHoverVal(undefined);
  }
 

  return (
    <div>
      <div className='w-screen h-screen bg-[#bdb0dc] p-4'>
      <BackButton/>
      {loading?<Spinner/>:(
        <div className='flex justify-center items-center p-10 mt-12 md:text-sm'>
        <div className='flex flex-col justify-center align-center w-[500px] max-w-2xl mx-auto p-8 bg-[#6c54a4] rounded-3xl shadow-lg shadow-[#3d3251]'>
          <div className=''>
            <label htmlFor="title" className='text-md md:text-lg text-[#1d1135] font-semibold'> Title </label>
            <input name="title"
             type='text'
             value={title}
             onChange={(e)=>setTitle(e.target.value)}
             className='bg-transparent text-xs md:text-sm text-[#f0ceff] border-2 border-[#f0ceff] rounded-md my-1 px-1 mb-4 w-full'/>
            <label htmlFor="author" className='text-md md:text-lg text-[#1d1135] font-semibold'> Author </label>
            <input name="author" 
            type='text' 
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            className='bg-transparent text-xs md:text-sm text-[#f0ceff] border-2 border-[#f0ceff] rounded-md my-1 px-1 mb-4 w-full'/>
            <label htmlFor="year" className='text-md md:text-lg text-[#1d1135] font-semibold'> Publish Year </label>
            <input name="year"
             type='text' 
             value={publishYear}
             onChange={(e)=>setPublishYear(e.target.value)}
             className='bg-transparent text-xs md:text-sm text-[#f0ceff] border-2 border-[#f0ceff] rounded-md my-1 px-1 mb-4 w-full'/>
             <label htmlFor="year" className='text-md md:text-lg text-[#1d1135] font-semibold'> Notes </label>
             <textarea name='notes' 
             rows={5}
             onChange={(e)=>setNotes(e.target.value)}
             value={notes}
             className='bg-transparent text-xs md:text-sm text-[#f0ceff] border-2 border-[#f0ceff] rounded-md my-1 px-1 mb-4 w-full'/>
              
              <div  className='flex justify-start items-center align-center'>
              <div className='text-md md:text-lg mr-3 text-[#1d1135] font-semibold'>Rate the book</div>
              {stars.map((_,index)=>{
                return(
                  <div>
                  <FaStar
                  key={index}
                  size={24}
                  onClick={()=>handleClick(index+1)}
                  onMouseOver={()=>handleHover(index+1)}
                  onMouseLeave={handleLeave}
                  color={(hoverVal||currVal)>index?colors.on:colors.off}
                  className="cursor-pointer"/>
                  </div>
                )
              })}
              </div>
              <div className='flex justify-center align-center  mt-6 '>
              <button onClick={handleEditBook} className='w-32 p-2 bg-[#5cac74] text-md font-semibold flex justify-center align-center rounded-md shadow-sm text-[#1d1135]'>
              Save Changes
              </button>
              </div>
              </div>
          </div>
        </div>
        
      )}    
    </div>
    </div>
  )
}

export default EditBooks
