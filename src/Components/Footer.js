import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="w-full  md:flex-row flex flex-col flex-wrap justify-between bg-gray-900 pt-8 pb-8 px-8 text-white">
        <div>
          <h1 className="font-bold text-lg">Contact Us</h1>
          <div className="w-20 h-1 border-b-2 border-yellow-400"></div>
          <p>Email: abc@gmail.com</p>
        </div>
        <div>
          <h2 className="font-bold text-lg">PW Skills</h2>
          <div className="w-20 h-1 border-b-2 border-yellow-400"></div>
          <div>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>FAQs</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg">Products</h2>
          <div className="w-20 h-1 border-b-2 border-yellow-400"></div>
          <div>
            <p>Shopify</p>
            <p>Wordpress</p>
            <p>Wix</p>
            <p>App Development</p>
            <p>Web Development</p>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg">Links</h2>
          <div className="w-20 h-1 border-b-2 border-yellow-400"></div>
          <div>
            <p>Find Us</p>
            <p>More About Us</p>
            <p>FAQs</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer
