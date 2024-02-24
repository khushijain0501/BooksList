import React, { useState } from "react";
import BackButton from "../components/backButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

function DeleteBooks() {
  const [loading, setLoading] = useState(false);
  const {id}=useParams()
  const navigate=useNavigate();
  const {enqueueSnackbar}=useSnackbar();
  console.log(`${id}`)
  const handleDelete=()=>{
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/delete/${id}`)
      .then(()=>{
        setLoading(false);
        enqueueSnackbar("Book deleted successfully",{variant:'success'})
        navigate('/')
      })
      .catch((error)=>{
        alert('An error occured.Please check console.')
        setLoading(false)
        enqueueSnackbar("Error",{variant:'error'})
        console.log(error)
      })
  }

  const noDelete=()=>{
    navigate('/')
  }
  return (
    <div>
      <div className="w-screen h-screen bg-[#bdb0dc] p-4">
        <BackButton destination="/" />
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex justify-center items-center p-16 mt-8 md:text-sm">
            <div className="text-xl sm:text-md flex flex-col justify-center align-center max-w-3xl p-8 bg-[#f19c8b] border-2 border-[#3d3251] rounded-3xl shadow-lg shadow-[#3d3251]">
              <div>Are you sure you want to delete this book?</div>
              <div className="flex justify-center align-center gap-x-6 mt-6">
                <button className="bg-[#265e5d] text-[#c8c0b2] p-3 rounded-md" onClick={handleDelete}>Yes,delete</button>
                <button className="bg-[#b61a29] p-3 rounded-md text-[#c8c0b2] " onClick={noDelete}>No,go back</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeleteBooks;
