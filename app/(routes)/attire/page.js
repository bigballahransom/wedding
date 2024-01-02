import Coming from '@/components/Coming'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='p-16 bg-white mt-16'>
    <div clasName='flex p-8 bg-white'>
<div className=''>
{/* <Coming/> */}
<h1 className='font-bold text-3xl text-orange text-center'>~ Guest Attire ~</h1>
<p className='text-primary text-center pt-2 mb-4'>If you need help reach out to us! We have attached some guidelines below!</p>
<p className='text-primary text-center pt-2 mb-4'><span className='font-bold'>Please Wear: </span> Neutral and Earth Tones for a gorgeous, immersive outdoor wedding experience and cohesive, beautiful photos for the Bride and Groom. <span>(Color palettes and examples below for reference.)</span></p>
<p className='text-primary text-center pt-2 mb-4'><span className='font-bold'>Kindly Avoid:</span> White, ivory, or solid greens as these colors will be worn throughout the wedding party. We also specifically request no solid black, blues, or bright red. Jeans or other casual wear.</p>
<p className='text-primary text-center pt-2 mb-4'><span className='font-bold'>~ Semi-Formal Attire ~</span></p>
<h1 className='font-bold text-3xl text-orange text-center'>~ Colors ~</h1>
<Image src="/palette.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-16"/>
<Image src="/idk.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-16"/>
<Image src="/gray.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-16 border-2 border-white"/>

<h1 className='font-bold text-3xl text-orange text-center'>~ Men ~</h1>
<p className='text-primary text-center pt-2 mb-4'>Men: Suit or blazer with dress pants</p>
<Image src="/men2.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-16"/>
<Image src="/men.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-16"/>
<Image src="/m1.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-4"/>
<Link className='flex justify-center items-center' href='https://www.pinterest.com/pin/52635889386730192/'>
<button className='flex gap-1 bg-orange text-primary px-4 py-2 rounded-full hover:bg-backdrop items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>


      View</button>
</Link>
<Image src="/m2.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-4"/>
<Link className='flex justify-center items-center' href='https://www.pinterest.com/pin/883338914393994996/'>
<button className='flex gap-1 bg-orange text-primary px-4 py-2 rounded-full hover:bg-backdrop items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>


      View</button>
</Link>

<h1 className='font-bold text-3xl text-orange text-center mt-8'>~ Ladies ~</h1>
<p className='text-primary text-center pt-2 mb-4'>Women: 3/4 to full-length dresses</p>
<Image src="/women.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white"/>
<Image src="/f1.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-4"/>
<Link className='flex justify-center items-center' href='https://www.amazon.com/Wedding-Dresses-Appliques-Chiffon-Evening/dp/B0BKL38PK9?ref_=pinterest_fplfs&pp=0&epik=dj0yJnU9Z0pxNEFVbk1MN25ZZlQteWFoRFRCeUxEeFoyckNpcGEmcD0xJm49eXp0MFg2bXV4c0FDaDdoUXhORFBXZyZ0PUFBQUFBR1ZmeGx3&th=1&psc=1'>
<button className='flex gap-1 bg-orange text-primary px-4 py-2 rounded-full hover:bg-backdrop items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>


      View</button>
</Link>
<Image src="/f2.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-4"/>
<Link className='flex justify-center items-center' href='https://www.pinterest.com/pin/294352525655984649/'>
<button className='flex gap-1 bg-orange text-primary px-4 py-2 rounded-full hover:bg-backdrop items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>


      View</button>
</Link>
<Image src="/f3.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-4"/>
<Link className='flex justify-center items-center' href='https://www.pinterest.com/pin/59672763805989520/'>
<button className='flex gap-1 bg-orange text-primary px-4 py-2 rounded-full hover:bg-backdrop items-center justify-center'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
</svg>


      View</button>
</Link>
{/* <div>
    <h1 className='font-bold text-3xl text-orange text-center'>Our Story</h1>
    <p className='text-primary text-center pt-2'>Once upon a time in the vibrant city of Seattle, two souls embarked on a journey that would forever change the course of their lives. Lauren and Andrew, destined for each other, found their love story unfolding in the most unexpected of places – as roommates and friends.

As fate would have it, Lauren and Andrew first crossed paths when they both moved to Seattle, each with dreams to chase and new beginnings to embrace. Little did they know that sharing the same living space would be the catalyst for a beautiful connection that would transcend the boundaries of friendship.

In the midst of shared laughter, late-night conversations, and the ordinary moments that make life extraordinary, Lauren and Andrew discovered a profound connection that sparked the realization that they were meant to be more than just roommates and friends. Taking a leap of faith, they decided to explore the uncharted territory of love.

With each passing day, their bond deepened, and their hearts became intertwined in a dance of love and understanding. Lauren and Andrew's love story blossomed against the backdrop of the iconic Seattle skyline, a testament to the magic that can happen when two hearts align in the embrace of destiny.

Through highs and lows, adventures and quiet moments, Lauren and Andrew's love continued to grow stronger. Their shared dreams became a roadmap for the future they envisioned together – a future that now includes the joyous celebration of marriage.

And so, on this day, surrounded by the love and warmth of family and friends, Lauren and Andrew declare their commitment to a lifetime of love, laughter, and shared dreams. Their journey from roommates to soulmates is a testament to the power of love's transformative magic, proving that sometimes the most extraordinary love stories begin in the most ordinary of places.

As they embark on this new chapter as husband and wife, let their love story inspire others to believe in the magic of serendipity and the beauty of finding love in unexpected places. Cheers to Lauren and Andrew, a love story written in the stars and sealed with a forever kind of love.</p>
</div> */}
</div>
</div>
    </div>
  )
}

export default page