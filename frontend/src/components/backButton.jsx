import React from 'react'
import {Link} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

function backButton({destination='/'}) {
  return (
    <div className='flex'>
      <Link to={destination}
      className='px-1 rounded-lg w-fit bg-[#bdb0dc] border-4 border-[#265e5d] '>
        <BsArrowLeft className='text-[#265e5d] text-2xl'/>
      </Link>
    </div>
  )
}

export default backButton
