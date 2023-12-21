import Coming from '@/components/Coming'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div className='p-16 bg-white mt-16'>
    <div clasName='flex p-8 bg-white'>
<div className=''>
{/* <Coming/> */}
<h1 className='font-bold text-3xl text-orange text-center'>~ Guest Attire ~</h1>
<p className='text-primary text-center pt-2 mb-4'>If you need help reach out to us! We have attached some guidelines below!</p>
<p className='text-primary text-center pt-2 mb-4'><span className='font-bold'>Please Wear: </span> Neutral and Earth Tones for a gorgeous, immersive outdoor wedding experience and cohesive, beautiful photos for the Bride and Groom. <span>(Color palettes and examples below for reference.)</span></p>
<p className='text-primary text-center pt-2 mb-4'><span className='font-bold'>Kindly Avoid:</span> White, ivory, or solid greens as these colors will be worn throughout the wedding party. We also specifically request no solid black, blues, or bright red.</p>
<p className='text-primary text-center pt-2 mb-4'><span className='font-bold'>~ Semi-Formal to Formal Attire ~</span></p>
<Image src="/palette.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-16"/>
<Image src="/idk.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-16"/>
<Image src="/gray.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-16 border-2 border-white"/>

<h1 className='font-bold text-3xl text-orange text-center'>~ Men ~</h1>
<Image src="/men.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-16"/>
<Image src="/men2.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white mb-16"/>
<h1 className='font-bold text-3xl text-orange text-center'>~ Ladies ~</h1>
<Image src="/women.png" alt="bookqube logo" width={200} height={400} className=" mt-8 w-auto mx-auto rounded-lg border-4 border-white"/>
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