import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";






const Product = () => {
  return (
    <>
      <section className="h-auto w-full flex flex-wrap flex-col item-center text-center p-10">
        <div className="flex flex-wrap flex-col items-center">
          <p className="font-bold text-indigo-800 text-3xl md:text-4xl">
            Our Products
          </p>
          <div className=" h-1 w-20  border-b-4 border-yellow-400 mt-2"></div>
        </div>

        <div className="w-full flex flex-wrap justify-evenly">
          <div className=" flex flex-col items-center mb-10 w-64 mt-10 hover:bg-orange-400   hover:text-white shadow-black border-black border-2 rounded-lg p-2 ">
            <FaGithub className="text-yellow-700 animate-bounce text-6xl" />
            <p className="text-3xl font-bold">Github</p>
            <p className="text-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              blanditiis vero excepturi possimus quia in vitae dolores, deleniti
              a laborum, natus dolor voluptas assumenda quasi, veniam sequi iste
              voluptatibus commodi.
            </p>
          </div>
          <div className=" flex flex-col items-center mb-10 w-64 mt-10 hover:bg-orange-400   hover:text-white shadow-black border-black border-2 rounded-lg p-2 ">
            <FaGithub className="text-yellow-700 text-6xl" />
            <p className="text-3xl font-bold">Job Portal</p>
            <p className="text-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              blanditiis vero excepturi possimus quia in vitae dolores, deleniti
              a laborum, natus dolor voluptas assumenda quasi, veniam sequi iste
              voluptatibus commodi.
            </p>
          </div>
          <div className=" flex flex-col items-center mb-10 w-64 mt-10 hover:bg-orange-400   hover:text-white shadow-black border-black border-2 rounded-lg p-2 ">
            <FaShopify className="text-yellow-700 text-6xl" />
            <p className="text-3xl font-bold">Shopify</p>
            <p className="text-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              blanditiis vero excepturi possimus quia in vitae dolores, deleniti
              a laborum, natus dolor voluptas assumenda quasi, veniam sequi iste
              voluptatibus commodi.
            </p>
          </div>

          <div className=" flex flex-col items-center mb-10 w-64 mt-10 hover:bg-orange-400   hover:text-white shadow-black border-black border-2 rounded-lg p-2 ">
            <FaWordpress className="text-yellow-700 animate-bounce text-6xl" />
            <p className="text-3xl font-bold">Wordpress</p>
            <p className="text-1xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              blanditiis vero excepturi possimus quia in vitae dolores, deleniti
              a laborum, natus dolor voluptas assumenda quasi, veniam sequi iste
              voluptatibus commodi.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product
