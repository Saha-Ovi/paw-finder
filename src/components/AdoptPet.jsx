import { Card, Chip } from '@heroui/react';
import React from 'react';

const AdoptPet = () => {
    return (
        <div className='container mx-auto px-4 my-12 md:my-16'>
            <div className='space-y-8'>
                <div className='text-center md:text-left space-y-2'>
                    <h2 className='text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white'>
                        Why Adopt Pets
                    </h2>
                    <p className='text-lg text-neutral-500 font-medium'>
                        Because every life deserves a <span className='text-[#E8621A] font-bold'>home</span>
                    </p>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch'>
                    
                    <Card className='rounded-2xl p-6 bg-white dark:bg-neutral-900 shadow-md flex flex-col justify-between gap-4 border border-neutral-100 dark:border-neutral-800'>
                        <div className='space-y-3'>
                            <div className='text-4xl bg-red-50 dark:bg-red-950/30 w-14 h-14 rounded-xl flex items-center justify-center'>❤️</div>
                            <h3 className='text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100'>You Save a Real Life</h3>
                            <p className='text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed text-base'>
                                Every adoption directly saves a pet from an uncertain future. Shelters across the country are overwhelmed — your choice creates space, hope, and a second chance.
                            </p>
                        </div>
                        <div className='pt-2'>
                            <Chip className='bg-[#E8621A]/10 text-[#E8621A] border border-[#E8621A]/20 font-medium whitespace-normal h-auto py-1 px-2 text-xs sm:text-sm'>
                                🐾 7.6M pets enter shelters yearly
                            </Chip>
                        </div>
                    </Card>

                    <Card className='rounded-2xl p-6 bg-white dark:bg-neutral-900 shadow-md flex flex-col justify-between gap-4 border border-neutral-100 dark:border-neutral-800'>
                        <div className='space-y-3'>
                            <div className='text-4xl bg-amber-50 dark:bg-amber-950/30 w-14 h-14 rounded-xl flex items-center justify-center'>💰</div>
                            <h3 className='text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100'>Lower Cost, Better Value</h3>
                            <p className='text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed text-base'>
                                Adoption fees often include vaccinations, microchipping, and spay/neuter — saving hundreds compared to buying from a breeder.
                            </p>
                        </div>
                        <div className='pt-2'>
                            <Chip className='bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/20 font-medium text-xs sm:text-sm'>
                                💸 Save up to $800+
                            </Chip>
                        </div>
                    </Card>

                    <Card className='rounded-2xl p-6 bg-white dark:bg-neutral-900 shadow-md flex flex-col justify-between gap-4 border border-neutral-100 dark:border-neutral-800'>
                        <div className='space-y-3'>
                            <div className='text-4xl bg-teal-50 dark:bg-teal-950/30 w-14 h-14 rounded-xl flex items-center justify-center'>🧬</div>
                            <h3 className='text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100'>Healthier Companions</h3>
                            <p className='text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed text-base'>
                                Shelter animals receive thorough health checks, vaccinations and behavioral assessments. You know exactly what you're getting.
                            </p>
                        </div>
                        <div className='pt-2'>
                            <Chip className='bg-[#0D9488]/10 text-[#0D9488] border border-[#0D9488]/20 font-medium text-xs sm:text-sm'>
                                ✓ Vet verified
                            </Chip>
                        </div>
                    </Card>

                    <Card className='rounded-2xl p-6 bg-white dark:bg-neutral-900 shadow-md flex flex-col justify-between gap-4 border border-neutral-100 dark:border-neutral-800'>
                        <div className='space-y-3'>
                            <div className='text-4xl bg-blue-50 dark:bg-blue-950/30 w-14 h-14 rounded-xl flex items-center justify-center'>🏠</div>
                            <h3 className='text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100'>Ready-Made Bond</h3>
                            <p className='text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed text-base'>
                                Shelter pets often know they've been rescued. The gratitude and loyalty they show is unmatched — a bond forged in second chances.
                            </p>
                        </div>
                        <div className='pt-2 opacity-0 pointer-events-none hidden xl:block'>
                           
                            <Chip>Spacer</Chip> 
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default AdoptPet;