import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
  

const Navbar = () => {
  return (
    <div className='h-16 bg-primary text-white fixed top-0 w-screen'>
        <div className='flex justify-between items-center px-6 py-4'>
            <div className='text-white font-bold text-lg flex gap-2 items-center'>
            <Image src="/whiteline.png" alt="bookqube logo" width={20} height={20} className=" w-auto mx-auto "/>
            Lauren & Andrew Ransom</div>
            <div>
                <Sheet>
                    <SheetTrigger>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle className='text-orange'>Lauren & Andrew Ransom</SheetTitle>
                        <SheetDescription>
                        <Link href='/' >
                        <SheetTrigger></SheetTrigger>
                            <button className='text-xl text-primary hover:text-orange'>Home</button>
                            </Link>
                        </SheetDescription>
                        <SheetDescription>
                        <Link href='/hotel'>
                        <SheetTrigger></SheetTrigger>
                            <button className='text-xl text-primary hover:text-orange'>Hotel</button>
                            </Link>
                        </SheetDescription>
                        <SheetDescription>
                        <Link href='/menu'>
                        <SheetTrigger></SheetTrigger>
                            <button className='text-xl text-primary hover:text-orange'>Menu</button>
                            </Link>
                        </SheetDescription>
                        <SheetDescription>
                        <Link href='/attire'>
                        <SheetTrigger></SheetTrigger>
                            <button className='text-xl text-primary hover:text-orange'>Attire</button>
                            </Link>
                        </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    </div>
  )
}

export default Navbar