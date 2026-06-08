"use client";

import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-white shadow-sm w-full sticky top-0 z-50'>
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3'>
                <div className='flex justify-between items-center'>
                    
                    <div className='flex items-center gap-2'>
                        <div className="relative w-12 h-12 md:w-14 md:h-14">
                            <Image 
                                src='/paw-finder-logo.jpg' 
                                alt='paw finder logo' 
                                fill
                                className='rounded-full object-cover'
                               
                            />
                        </div>
                        <div>
                            <h1 className='font-bold text-xl md:text-2xl tracking-tight text-slate-800'>
                                Paw Finder
                            </h1>
                        </div>
                    </div>

                    <div className='hidden md:flex items-center gap-3'>
                        <Button variant='outline' className='text-base font-semibold hover:bg-[#E8621A] hover:text-white transition-colors duration-200'>
                            Home
                        </Button>
                        <Button variant='outline' className='text-base font-semibold hover:bg-[#E8621A] hover:text-white transition-colors duration-200 flex items-center gap-1.5'>
                            All Pets <CiSearch className="text-xl" />
                        </Button>
                    </div>
                    <div className='hidden md:block'>
                        <Button variant='outline' className='text-base font-semibold hover:bg-[#E8621A] hover:text-white transition-colors duration-200'>
                            Log in
                        </Button>
                    </div>
                    <div className='md:hidden flex items-center'>
                        <button 
                            onClick={() => setIsOpen(!isOpen)} 
                            className='text-slate-700 hover:text-[#E8621A] p-2 focus:outline-none transition-colors'
                            aria-label="Toggle navigation menu"
                        >
                            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                        </button>
                    </div>
                </div>

                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <div className='flex flex-col gap-3 pb-3 border-t border-slate-100 pt-3'>
                        <Button variant='outline' className='w-full text-base font-semibold justify-center hover:bg-[#E8621A] hover:text-white'>
                            Home
                        </Button>
                        <Button variant='outline' className='w-full text-base font-semibold justify-center hover:bg-[#E8621A] hover:text-white flex items-center gap-1.5'>
                            All Pets <CiSearch className="text-xl" />
                        </Button>
                        <Button variant='outline' className='w-full text-base font-semibold justify-center hover:bg-[#E8621A] hover:text-white'>
                            Log in
                        </Button>
                        <Button variant='outline' className='w-full text-base font-semibold justify-center hover:bg-[#E8621A] hover:text-white'>
                            Register
                        </Button>
                       
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;