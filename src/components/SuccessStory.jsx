import { Card } from '@heroui/react';
import React from 'react';

const SuccessStory = () => {
    return (
        <div className='container mx-auto px-4 my-12 md:my-16'>
            <div className='text-center md:text-left space-y-2 mb-8'>
                <h2 className='text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white'>
                    Success Stories
                </h2>
                <p className='text-lg sm:text-xl font-medium text-neutral-500'>
                    Happy Tails & <span className='text-[#E8621A] font-bold'>Forever Homes</span>
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch'>

                <Card className='rounded-2xl p-5 bg-white dark:bg-neutral-900 shadow-md border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between gap-5'>
                    <div className='space-y-4 flex-1 flex flex-col'>
                        <div className='border-b-2 border-neutral-100 dark:border-neutral-800 pb-3 bg-neutral-50 dark:bg-neutral-950/40 rounded-xl'>
                            <p className='text-7xl sm:text-8xl text-center select-none p-4'>🐕</p>
                        </div>
                        <div className='space-y-2 flex-1'>
                            <h3 className='font-bold text-2xl text-neutral-800 dark:text-neutral-100'>Max & the Henderson</h3>
                            <p className='text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed text-base'>
                                Max was a shy rescue dog who'd been passed over dozens of times. Every weekend families would visit, and he'd shrink into the corner. Now he greets me at the door every single day with that ridiculous tail wag — he's completely transformed our entire family.
                            </p>
                        </div>
                        <div className='text-yellow-500 text-lg tracking-wider'>★★★★★</div>
                    </div>

                    <div className='flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800'>
                        <div className='bg-[#E8621A] text-white font-bold w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm'>
                            SH
                        </div>
                        <div className='min-w-0'>
                            <h4 className='font-bold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 truncate'>Sarah Henderson</h4>
                            <p className='text-xs sm:text-sm text-neutral-500 truncate'>Adopted Max · March 2024</p>
                        </div>
                    </div>
                </Card>
                <Card className='rounded-2xl p-5 bg-white dark:bg-neutral-900 shadow-md border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between gap-5'>
                    <div className='space-y-4 flex-1 flex flex-col'>
                        <div className='border-b-2 border-neutral-100 dark:border-neutral-800 pb-3 bg-neutral-50 dark:bg-neutral-950/40 rounded-xl'>
                            <p className='text-7xl sm:text-8xl text-center select-none p-4'>🐈</p>
                        </div>
                        <div className='space-y-2 flex-1'>
                            <h3 className='font-bold text-2xl text-neutral-800 dark:text-neutral-100'>Whiskers</h3>
                            <p className='text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed text-base'>
                                Whiskers came as a stray kitten, hissing and terrified. Now she sleeps on my pillow and purrs me to sleep every night. I can't imagine life without her warmth.
                            </p>
                        </div>
                        <div className='text-yellow-500 text-lg tracking-wider'>★★★★★</div>
                    </div>

                    <div className='flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800'>
                        <div className='bg-purple-500 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm'>
                            JM
                        </div>
                        <div className='min-w-0'>
                            <h4 className='font-bold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 truncate'>John Martinez</h4>
                            <p className='text-xs sm:text-sm text-neutral-500 truncate'>Adopted Whiskers · Jan 2025</p>
                        </div>
                    </div>
                </Card>
                <Card className='rounded-2xl p-5 bg-white dark:bg-neutral-900 shadow-md border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between gap-5'>
                    <div className='space-y-4 flex-1 flex flex-col'>
                        <div className='border-b-2 border-neutral-100 dark:border-neutral-800 pb-3 bg-neutral-50 dark:bg-neutral-950/40 rounded-xl'>
                            <p className='text-7xl sm:text-8xl text-center select-none p-4'>🦜</p>
                        </div>
                        <div className='space-y-2 flex-1'>
                            <h3 className='font-bold text-2xl text-neutral-800 dark:text-neutral-100'>Tweety</h3>
                            <p className='text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed text-base'>
                                Tweety learned to say 'I love you' within a week. He sings every morning and brings the whole house to life. Best decision we ever made.
                            </p>
                        </div>
                        <div className='text-yellow-500 text-lg tracking-wider'>★★★★★</div>
                    </div>

                    <div className='flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800'>
                        <div className='bg-teal-600 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm'>
                            EC
                        </div>
                        <div className='min-w-0'>
                            <h4 className='font-bold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 truncate'>Emma Chen</h4>
                            <p className='text-xs sm:text-sm text-neutral-500 truncate'>Adopted Tweety · Nov 2024</p>
                        </div>
                    </div>
                </Card>
                <Card className='rounded-2xl p-5 bg-white dark:bg-neutral-900 shadow-md border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between gap-5'>
                    <div className='space-y-4 flex-1 flex flex-col'>
                        <div className='border-b-2 border-neutral-100 dark:border-neutral-800 pb-3 bg-neutral-50 dark:bg-neutral-950/40 rounded-xl'>
                            <p className='text-7xl sm:text-8xl text-center select-none p-4'>🐇</p>
                        </div>
                        <div className='space-y-2 flex-1'>
                            <h3 className='font-bold text-2xl text-neutral-800 dark:text-neutral-100'>Pepper</h3>
                            <p className='text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed text-base'>
                                Pepper taught our daughter patience and care. She's become the most gentle, responsible kid — all thanks to a little rabbit.
                            </p>
                        </div>
                        <div className='text-yellow-500 text-lg tracking-wider'>★★★★★</div>
                    </div>

                    <div className='flex items-center gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800'>
                        <div className='bg-amber-400 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm'>
                            AK
                        </div>
                        <div className='min-w-0'>
                            <h4 className='font-bold text-sm sm:text-base text-neutral-800 dark:text-neutral-100 truncate'>Arafat Khan</h4>
                            <p className='text-xs sm:text-sm text-neutral-500 truncate'>Adopted Pepper · Feb 2025</p>
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default SuccessStory;