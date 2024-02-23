import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import ShowBooks from "./ShowBooks";
import BooksTable from "../components/home/BooksTable";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutListThumbAlt } from "react-icons/tfi";
import BooksCard from "../components/home/BooksCard";
import {Tooltip} from 'react-tooltip'

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState("table");
  

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);


  return (
    <div className="w-screen h-screen bg-[#bdb0dc] p-4 overflow-auto">
      <div className="flex justify-between align-center pt-10 p-10">
        <h1 className="text-[#3d3251] font-bold text-4xl ">Books List</h1>
        <div className="flex justify-center align-center gap-x-6">
          {view === "card" ? (
              <TfiLayoutGrid3Alt
                className="cursor-pointer text-[#265e5d] text-2xl mt-1.5  lg:text-3xl"
                onClick={() => setView("table")}
                title="Card View"
              />
             
          ) : (
            
              <TfiLayoutListThumbAlt
                id="table"
                className="cursor-pointer text-[#265e5d] text-3xl mt-0.5 lg:text-4xl"
                onClick={() => setView("card")}
                title="Table View"
              />
             
          )}
          <Link to="/books/create">
            <MdOutlineAddBox className="text-[#265e5d] text-4xl mt-0 lg:text-5xl lg:mb-4 lg:-translate-y-1" 
            title="Add Book"/>
          </Link>
        </div>
      </div>
      {loading ? (
        <Spinner />
      ) : view === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
}

export default Home;
