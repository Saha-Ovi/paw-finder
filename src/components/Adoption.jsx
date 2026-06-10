import { Button, Card } from '@heroui/react';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Adoption = () => {
    return (
        <div className='container mx-auto px-4 my-12 md:my-16'>
            <div className='max-w-3xl mx-auto text-center space-y-3 mb-10'>
                <h2 className='text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white leading-tight'>
                    Your Adoption <br />
                    <span className='text-[#D97706] dark:text-amber-500'>Journey Starts Here</span>
                </h2>
                <p className='text-neutral-600 dark:text-neutral-400 text-base sm:text-lg font-medium leading-relaxed max-w-xl mx-auto'>
                    We've made the process as simple and transparent as possible — from first browse to bringing your new best friend home.
                </p>
            </div>
            <Card className='group max-w-2xl mx-auto w-full rounded-2xl p-6 sm:p-10 border border-neutral-200 dark:border-neutral-800 bg-[#FFFDFB] dark:bg-neutral-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out text-center space-y-5 cursor-pointer'>
                <div className='bg-[#E8621A]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-sm transition-colors duration-300 group-hover:bg-[#E8621A]/20'>
                    <span className='text-4xl select-none group-hover:scale-110 transition-transform duration-300 block'>
                        🐾
                    </span>
                </div>
                <div className='space-y-2 max-w-md mx-auto'>
                    <h3 className='text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-[#E8621A] transition-colors duration-300'>
                        Ready to begin?
                    </h3>
                    <p className='text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed'>
                        Your perfect companion is already waiting — they just don't know it's you yet.
                    </p>
                </div>
                <div className='pt-2'>
                    <Button 
                        className='bg-[#E8621A] hover:bg-[#d05313] text-white font-bold px-6 py-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 gap-2 text-sm sm:text-base'
                    >
                        Start Browsing Pets 
                        <FaArrowRight className='text-xs transition-transform duration-200 group-hover:translate-x-1' />
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Adoption;