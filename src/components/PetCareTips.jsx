import { Card, Chip } from '@heroui/react';
import React from 'react';

const PetCareTips = () => {
    return (
        <div className='container mx-auto px-4 my-12 md:my-16'>
            {/* Header Block */}
            <div className='max-w-3xl mx-auto text-center space-y-3 mb-10'>
                <h5 className='text-base sm:text-lg font-bold tracking-wider text-[#0D9488] uppercase'>
                    — Pet Care Guide —
                </h5>
                <h2 className='font-extrabold text-3xl sm:text-4xl text-neutral-900 dark:text-white'>
                    Expert Pet Care Tips
                </h2>
                <p className='text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed'>
                    Give your new companion the healthiest, happiest life possible. These evidence-backed tips from vets and animal behaviorists will set you both up for success.
                </p>
            </div>

            {/* Responsive Grid Setup */}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch'>
                
                {/* Tip 1: Nutrition */}
                <Card className='group rounded-2xl p-5 bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between cursor-pointer'>
                    <div className='flex gap-4 items-start flex-1'>
                        <div className='bg-[#E8621A]/10 group-hover:bg-[#E8621A]/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300'>
                            <p className='text-2xl select-none group-hover:scale-110 transition-transform duration-300'>🍎</p>
                        </div>
                        <div className='space-y-2 flex-1 flex flex-col justify-between h-full'>
                            <div>
                                <h3 className='font-bold text-lg text-neutral-800 dark:text-neutral-100 group-hover:text-[#E8621A] transition-colors duration-300'>Balanced Nutrition</h3>
                                <p className='text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1'>
                                    Feed species-appropriate food in measured portions. Avoid human food — grapes, onions, chocolate, and xylitol are toxic to most pets.
                                </p>
                            </div>
                            <div className='pt-3 mt-auto'>
                                <Chip className='bg-[#E8621A]/10 text-[#E8621A] border border-[#E8621A]/20 font-semibold text-xs'>Daily</Chip>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Tip 2: Exercise */}
                <Card className='group rounded-2xl p-5 bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between cursor-pointer'>
                    <div className='flex gap-4 items-start flex-1'>
                        <div className='bg-[#0D9488]/10 group-hover:bg-[#0D9488]/20 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300'>
                            <p className='text-2xl select-none group-hover:scale-110 transition-transform duration-300'>🏃</p>
                        </div>
                        <div className='space-y-2 flex-1 flex flex-col justify-between h-full'>
                            <div>
                                <h3 className='font-bold text-lg text-neutral-800 dark:text-neutral-100 group-hover:text-[#0D9488] transition-colors duration-300'>Daily Exercise</h3>
                                <p className='text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1'>
                                    Dogs need 30–120 min of exercise daily depending on breed. Cats need interactive play. Regular activity prevents obesity.
                                </p>
                            </div>
                            <div className='pt-3 mt-auto'>
                                <Chip className='bg-[#0D9488]/10 text-[#0D9488] border border-[#0D9488]/20 font-semibold text-xs'>Daily</Chip>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Tip 3: Vet Visits */}
                <Card className='group rounded-2xl p-5 bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between cursor-pointer'>
                    <div className='flex gap-4 items-start flex-1'>
                        <div className='bg-purple-50 dark:bg-purple-950/30 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300'>
                            <p className='text-2xl select-none group-hover:scale-110 transition-transform duration-300'>🏥</p>
                        </div>
                        <div className='space-y-2 flex-1 flex flex-col justify-between h-full'>
                            <div>
                                <h3 className='font-bold text-lg text-neutral-800 dark:text-neutral-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300'>Regular Vet Visits</h3>
                                <p className='text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1'>
                                    Annual wellness exams catch issues early. Keep vaccines, flea/tick prevention, and dental cleanings on schedule. Prevention is key.
                                </p>
                            </div>
                            <div className='pt-3 mt-auto'>
                                <Chip className='bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 border border-purple-200/30 font-semibold text-xs'>Yearly</Chip>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Tip 4: Safe Environment */}
                <Card className='group rounded-2xl p-5 bg-white dark:bg-neutral-900 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out border border-neutral-100 dark:border-neutral-800 flex flex-col justify-between cursor-pointer'>
                    <div className='flex gap-4 items-start flex-1'>
                        <div className='bg-blue-50 dark:bg-blue-950/30 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300'>
                            <p className='text-2xl select-none group-hover:scale-110 transition-transform duration-300'>🏠</p>
                        </div>
                        <div className='space-y-2 flex-1 flex flex-col justify-between h-full'>
                            <div>
                                <h3 className='font-bold text-lg text-neutral-800 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300'>Safe Environment</h3>
                                <p className='text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-1'>
                                    Pet-proof by securing trash, chemicals, and toxic plants like lilies. Create a quiet retreat space where your pet can decompress.
                                </p>
                            </div>
                            <div className='pt-3 mt-auto'>
                                <Chip className='bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 border border-blue-200/30 font-semibold text-xs'>One-time</Chip>
                            </div>
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default PetCareTips;