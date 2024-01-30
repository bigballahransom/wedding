import Link from 'next/link'
import React from 'react'

const Coming = () => {
  return (
    <div clasName='flex p-8 bg-white justify-center'>
<div>
    <h1 className='font-bold text-3xl text-orange text-center'>Check Back For Menu</h1>
    <p className='text-primary text-center pt-2'>For now please alert us if you have any allergies through the form below!</p>
    <Link className='flex justify-center items-center mt-8' href='https://form.jotform.com/240255476365157'>
    <button className='flex gap-1 bg-orange text-primary px-4 py-2 rounded-full hover:bg-backdrop items-center justify-center'>Allergy Form</button>
    </Link>
</div>
</div>
  )
}

export default Coming