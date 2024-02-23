import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Spinner from '../components/Spinner';
import BackButton from '../components/backButton';

function ShowBooks() {
  const [book,setBook]=useState([])
  const [loading,setLoading]=useState(false)
  
  const {id}=useParams();
  console.log(`${id}`)
  useEffect(()=>{
    setLoading(true);
    axios
    .get(`http://localhost:5555/books/details/${id}`)
    .then((res)=>{
      setBook(res.data);
      setLoading(false);
    })
    .catch((err)=>{
      console.log(err);
      setLoading(false)
    })
  },[])

  return (
    <div className='w-screen h-screen bg-[#bdb0dc] p-4'>
      <BackButton destination='/'/>
      {loading?<Spinner/>:(
        <div className='flex justify-center items-center p-12  md:text-sm'>
        <div className='flex flex-col justify-center align-center max-w-3xl p-8 bg-[#6c54a4] rounded-3xl shadow-lg shadow-[#3d3251]'>
          <div className='my-4'>
            <span className='text-xl mr-4 text-[#1d1135] '>Id:</span>
            <span className='text-[#f0ceff] text-lg'>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-[#1d1135]'>Title:</span>
            <span className='text-[#f0ceff] text-lg'>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-[#1d1135]'>Author:</span>
            <span className='text-[#f0ceff] text-lg'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-[#1d1135]'>Publish Year:</span>
            <span className='text-[#f0ceff] text-lg'>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-[#1d1135]'>Create Time:</span>
            <span className='text-[#f0ceff] text-lg'>{new Date(book.createdAt).toLocaleString("en-GB",{hour12:false}).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-[#1d1135]'>Last Update Time:</span>
            <span className='text-[#f0ceff] text-lg'>{new Date(book.updatedAt).toLocaleString("en-GB",{hour12:false}).toString()}</span>
          </div>
        </div>
        </div>
      )}    
    </div>
  )
}



export default ShowBooks
