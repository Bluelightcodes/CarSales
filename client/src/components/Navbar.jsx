import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate()
  const [search,setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?query=${search}`);
  };
  return (
    <>
    <div className='flex flex-row min-h-16 border-b-2 border-black justify-between'> {/* navbar */}
      <div className="box1 flex space-x-5 items-center">
                <div className="logo m-8">Logo</div>
                <div className="sbar w-200">
                  <input type="text" placeholder="Search..." className="w-80 p-2 border-2 border-gray-300 focus:bg-gray-100 outline-none" onChange={(e)=>setSearch(e.target.value)}/>
                </div>
              </div>
      

      <div className='flex flex-row gap-7 items-center justify-center mr-10'>
        <a className='e1 hover:underline hover:cursor-pointer' onClick={()=> navigate("/wishlist")}>
          Wishlist
        </a>
        <p className='e1 hover:underline hover:cursor-pointer'onClick={()=> navigate("/")}>
          Location
        </p>
        <button className='button border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors' onClick={() => navigate("/signIn")} target="_blank">
          Sign In
        </button> 
      </div>
    </div>
    </>
  )
}

export default Navbar