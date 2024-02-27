import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import Spinner from '../components/Spinner';
import BackButton from '../components/backButton';

function ShowBooks() {
  const [book,setBook]=useState([])
  const [loading,setLoading]=useState(false)

  const colors={
    off:"#D3D3D3",
    on:"#f19c8b"
  }
  const stars=Array(5).fill(0)
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
        <div className='flex justify-center items-center p-12 '>
        <div className='flex flex-col justify-center align-center max-w-3xl p-8 bg-[#6c54a4] rounded-3xl shadow-lg shadow-[#3d3251]'>
          <div className='my-3'>
            <span className='text-lg mr-4 lg:text-xl text-[#1d1135] font-semibold'>Id:</span>
            <span className='text-[#f0ceff] lg:text-lg text-md'>{book._id}</span>
          </div>
          <div className='my-3'>
            <span className='text-lg mr-4 lg:text-xl text-[#1d1135] font-semibold'>Title:</span>
            <span className='text-[#f0ceff] lg:text-lg text-md'>{book.title}</span>
          </div>
          <div className='my-3'>
            <span className='text-lg mr-4  lg:text-xl text-[#1d1135] font-semibold'>Author:</span>
            <span className='text-[#f0ceff] lg:text-lg text-md'>{book.author}</span>
          </div>
          <div className='my-3'>
            <span className='text-lg mr-4 lg:text-xl text-[#1d1135] font-semibold'>Publish Year:</span>
            <span className='text-[#f0ceff] lg:text-lg text-md'>{book.publishYear}</span>
          </div>
          <div  className='flex justify-start items-center align-center my-3'>
              <div className='text-lg lg:text-xl mr-3 text-[#1d1135] font-semibold'>Rating:</div>
              {stars.map((_,index)=>{
                return(
                  <div>
                  <FaStar
                  key={index}
                  size={24}
                  color={book.rating>index?colors.on:colors.off}
                  className=""/>
                  </div>
                )
              })}
              </div>
          <div className='my-3'>
            <span className='text-lg mr-4 lg:text-xl text-[#1d1135] font-semibold'>Created:</span>
            <span className='text-[#f0ceff] lg:text-lg text-md'>{new Date(book.createdAt).toLocaleString("en-GB",{hour12:false}).toString()}</span>
          </div>
          <div className='my-3'>
            <span className='text-lg mr-4 lg:text-xl text-[#1d1135] font-semibold'>Last Updated:</span>
            <span className='text-[#f0ceff] lg:text-lg text-md'>{new Date(book.updatedAt).toLocaleString("en-GB",{hour12:false}).toString()}</span>
          </div>
        </div>
        </div>
      )}    
    </div>
  )
}



export default ShowBooks
