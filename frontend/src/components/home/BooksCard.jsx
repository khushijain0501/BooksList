import React from 'react'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox,MdOutlineDelete} from 'react-icons/md'
import {Link} from 'react-router-dom'
import SingleCard from './SingleCard'

const BooksCard = ({books}) => {
  return (
    <div className='m-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {
        books.map((book,index)=>{
            return <SingleCard book={book}/>;
        })
      
        }
    </div>
  )
}

export default BooksCard
