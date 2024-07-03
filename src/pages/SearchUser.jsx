import React from 'react'
import { Link } from 'react-router-dom';
import homeIcon from "../assets/home.png";
import sign from "../assets/sign.png";


const SearchUser = () => {
  return (
    <div className="flex justify-between bg-white p-2">
        <Link to=".." relative='path' className="w-9 ">
          <img src={homeIcon} alt="" />
        </Link>
        <div className='flex items-center'>
        <input className='border rounded p-1 ' type='text' placeholder='Search'/>
        <button className='border rounded p-1 px-3'><img className='w-6' src={sign}/></button>
        </div>
    </div>
  )
}

export default SearchUser
