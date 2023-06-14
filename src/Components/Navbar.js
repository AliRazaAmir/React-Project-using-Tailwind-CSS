import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="w-full bg-indigo-300 h-12 flex justify-between p-2">
        <div className="font-bold text-black">PW Skills</div>
        <ul className="md:flex justify-between hidden">
          <li className="mx-6 cursor-pointer  hover:text-white">Home</li>
          <li className="mx-6 cursor-pointer  hover:text-white">About Us</li>
          <li className="mx-6 cursor-pointer  hover:text-white">Contact Us</li>
        </ul>
        <div
          className="hidden md:block  bg-indigo-600 rounded-sm  cursor-pointer hover:bg-slate-400 font-bold
         py-1 px-1 text-center text-white"
        >
          Login Here
        </div>
        <div className='md:hidden text-2xl flex justify-center'>
          <a href='#'>
            &#8801;
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar
