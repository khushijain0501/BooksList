import React,{useEffect, useState} from 'react'
import BackButton from "../components/backButton"
import Spinner from '../components/Spinner'
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
  const {enqueueSnackbar}=useSnackbar();
  const navigate=useNavigate();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:5555/books/details/${id}`)
      .then((res)=>{
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setTitle(res.data.title);
        setLoading(false);
      })
      .catch((err)=>{
        setLoading(false)
        console.log(err);
      })
  },[])
  const handleEditBook=(event)=>{
    const data={
      title,author,publishYear,notes
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

  return (
    <div>
      <div className='w-screen h-screen bg-[#bdb0dc] p-4'>
      <BackButton/>
      {loading?<Spinner/>:(
        <div className='flex justify-center items-center p-12 mt-16 md:text-sm'>
        <div className='flex flex-col justify-center align-center w-[500px] max-w-2xl mx-auto p-8 bg-[#6c54a4] rounded-3xl shadow-lg shadow-[#3d3251]'>
          <div className=''>
            <label htmlFor="title" className='text-lg text-[#1d1135] font-semibold'> Title </label>
            <input name="title"
             type='text'
             value={title}
             onChange={(e)=>setTitle(e.target.value)}
             className='bg-transparent text-[#f0ceff] border-2 border-[#f0ceff] rounded-md my-1 px-1 mb-4 w-full'/>
            <label htmlFor="author" className='text-lg text-[#1d1135] font-semibold'> Author </label>
            <input name="author" 
            type='text' 
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}
            className='bg-transparent text-[#f0ceff] border-2 border-[#f0ceff] rounded-md my-1 px-1 mb-4 w-full'/>
            <label htmlFor="year" className='text-lg text-[#1d1135] font-semibold'> Publish Year </label>
            <input name="year"
             type='text' 
             value={publishYear}
             onChange={(e)=>setPublishYear(e.target.value)}
             className='bg-transparent text-[#f0ceff] border-2 border-[#f0ceff] rounded-md my-1 px-1 mb-4 w-full'/>
             <label htmlFor="year" className='text-md text-[#1d1135] font-semibold'> Notes </label>
             <textarea name='notes' 
             onChange={(e)=>setNotes(e.target.value)}
             value={notes}
             className='bg-transparent border-2 border-[#f0ceff] rounded-md my-1 px-1 mb-4 w-full'/>
              <div className='flex justify-center align-center  '>
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
