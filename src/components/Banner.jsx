import React from 'react';
import { Button, Chip } from "@heroui/react";
import { FaArrowRight } from 'react-icons/fa';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import Image from 'next/image';

const Banner = () => {
    return (
        <div className='container mx-auto my-6 md:my-10 px-4'>
            <div className='w-full rounded-2xl bg-linear-to-r from-[#1C1C1E] to-[#E8621A] text-white p-6 sm:p-10 lg:p-16 flex flex-col-reverse lg:flex-row justify-between items-center gap-10'>
                <div className='space-y-6 flex-1 text-center lg:text-left flex flex-col items-center lg:items-start'>
                    <div>
                        <Chip className="bg-white/10 text-white backdrop-blur-md">
                            🐾 2,400+ pets find homes every month
                        </Chip>
                    </div>

                    <div className='space-y-3'>
                        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl'>
                            Every pet deserves a loving home.
                        </h2>
                        <p className='font-normal text-base sm:text-lg lg:text-xl max-w-prose opacity-90 mx-auto lg:mx-0'>
                            Thousands of incredible animals are waiting for a second chance. Paw Finder connects you with local shelters to make finding, meeting, and adopting your perfect four-legged match simpler than ever.
                        </p>
                    </div>

                    <div>
                        <Button
                            variant='outline'
                            className='text-white border-white/40 hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-xl transition-all w-full sm:w-auto'
                        >
                            Adopt Now <FaArrowRight />
                        </Button>
                    </div>
                    <div className='flex flex-wrap justify-center lg:justify-start items-center gap-y-3 gap-x-5 pt-2 text-sm sm:text-base border-t border-white/10 w-full'>
                        <span className='flex items-center gap-1.5'><IoIosCheckmarkCircleOutline className="text-xl" /> Free to browse</span>
                        <span className='flex items-center gap-1.5'><MdOutlineVerifiedUser className="text-xl" /> Verified listings</span>
                        <span className='flex items-center gap-1.5'><CiHeart className="text-xl font-bold" /> Save a life</span>
                    </div>
                </div>

                <div className='w-full max-w-80 sm:max-w-100 lg:max-w-120 aspect-square relative shrink-0'>
                    <Image
                        src='/banner image.jpg'
                        alt='banner image'
                        fill
                        className='object-cover rounded-2xl shadow-2xl'
                        sizes='(max-w-768px) 100vw, 450px'
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;