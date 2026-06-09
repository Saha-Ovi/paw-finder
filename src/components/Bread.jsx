import { Card, Chip } from '@heroui/react';
import React from 'react';

const BreedExplorer = () => {
    // Array to keep code DRY and maintainable
    const breeds = [
        {
            emoji: "🐕",
            bg: "bg-[#FFF0E8] dark:bg-amber-950/20",
            name: "Golden Retriever",
            spec: "Medium-Large · 7–12 yrs",
            tags: ["Family", "Gentle", "Smart"],
            energy: "⭐⭐⭐"
        },
        {
            emoji: "🐕",
            bg: "bg-blue-50 dark:bg-blue-950/20",
            name: "Labrador",
            spec: "Large · 10–12 yrs",
            tags: ["Loyal", "Calm", "Guide"],
            energy: "⭐⭐⭐⭐"
        },
        {
            emoji: "🐩",
            bg: "bg-green-50 dark:bg-green-950/20",
            name: "Poodle Mix",
            spec: "Small-Medium · 12–15 yrs",
            tags: ["Hypo", "Smart", "Playful"],
            energy: "⭐⭐⭐"
        },
        {
            emoji: "🐕‍🦺",
            bg: "bg-red-50 dark:bg-red-950/20",
            name: "Border Collie",
            spec: "Medium · 10–17 yrs",
            tags: ["Active", "Loyal", "Herder"],
            energy: "⭐⭐⭐⭐⭐"
        }
    ];

    return (
        <div className='container mx-auto px-4 my-12 md:my-16'>
            {/* Header Block */}
            <div className='max-w-3xl mb-10 space-y-2'>
                <h5 className='text-[#D97706] font-bold tracking-wide uppercase text-sm sm:text-base flex items-center gap-1.5'>
                    —✦ Breed Explorer
                </h5>
                <h2 className='text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white'>
                    Meet the Breeds
                </h2>
                <p className='text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed'>
                    Every breed has a personality, energy level, and lifestyle fit. Discover which companion matches your home, family, and daily rhythm before you visit a shelter.
                </p>
            </div>

            {/* Responsive Grid System */}
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch'>
                {breeds.map((breed, index) => (
                    <Card 
                        key={index} 
                        className='group rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden flex flex-col justify-between cursor-pointer'
                    >
                        {/* Emoji Container - Updated Border */}
                        <div className={`border-b-white rounded-2xl dark:border-neutral-800 ${breed.bg} py-8 flex items-center justify-center transition-colors duration-300`}>
                            <span className='text-6xl select-none group-hover:scale-110 transition-transform duration-300 block'>
                                {breed.emoji}
                            </span>
                        </div>
                        <div className='p-5 space-y-4 flex-1 flex flex-col justify-between'>
                            <div className='space-y-1.5'>
                                <h3 className='text-xl font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-[#D97706] transition-colors duration-300'>
                                    {breed.name}
                                </h3>
                                <p className='text-sm text-neutral-500 dark:text-neutral-400 font-medium'>
                                    {breed.spec}
                                </p>
                            </div>

                            {/* Chip tags wrapping protection */}
                            <div className='flex flex-wrap gap-1.5 py-1'>
                                {breed.tags.map((tag, tagIdx) => (
                                    <Chip 
                                        key={tagIdx} 
                                        size="sm" 
                                        variant="flat"
                                        className='bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border-none font-medium'
                                    >
                                        {tag}
                                    </Chip>
                                ))}
                            </div>

                            {/* Dynamic Rating Alignment - Updated Border */}
                            <div className='pt-2 border-t border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-700 dark:text-neutral-300 flex items-center justify-between'>
                                <span>Energy Level</span>
                                <span className='tracking-wider'>{breed.energy}</span>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default BreedExplorer;