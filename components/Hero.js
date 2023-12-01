import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    // The 'flex' class makes the div a flex container.
    // The 'justify-center' class centers children along the main axis (horizontally).
    // The 'items-center' class centers children along the cross axis (vertically).
    // The 'h-screen' class makes the div take up the full height of the viewport.
    <div className='flex justify-center items-center h-screen bg-primary text-white mt-18'>
    <div className='md:flex md:gap-10'>
    <div className='my-auto mx-auto text-center p-16'>
      <h1 className='font-bold text-5xl text-white text-center pb-2 pt-16'>We're Getting Married!</h1>
      <h1 className=' font-light text-2xl text-backdrop pb-4'>
      Thursday, July 11, 2024 • Hood River, Oregon</h1>
      <div className='flex justify-center gap-3'>
      {/* <button className='flex gap-1 bg-orange text-primary px-4 py-2 rounded-full hover:bg-backdrop items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

      Love Story</button> */}
      <button className='flex gap-1 bg-orange text-primary px-4 py-2 rounded-full hover:bg-backdrop items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

      Registry</button>
      <button className='flex gap-1 bg-orange text-primary px-4 py-2 rounded-full hover:bg-backdrop items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>


      RSVP</button>
      {/* å */}
      </div>
      </div>
      <Image src="/hero.jpg" alt="bookqube logo" width={300} height={600} className=" w-auto mx-auto rounded-full border-4 border-white"/>
      </div>
    </div>
  );
}

export default Hero;