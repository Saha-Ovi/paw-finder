"use client";

import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Button, Dropdown, Label } from "@heroui/react";
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { TbLogout2 } from 'react-icons/tb';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'All Pets', href: '/pets', icon: <CiSearch className="text-xl" /> },
    ];
    const { data: session } = authClient.useSession();
    // console.log(session?.user);
    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();
    }

    return (
        <div className='bg-white shadow-sm w-full sticky top-0 z-50 dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800'>
            <nav className='container mx-auto px-4 sm:px-6 lg:px-8 py-3'>
                <div className='flex justify-between items-center'>
                    <Link href="/" className='flex items-center gap-2 group'>
                        <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0">
                            <Image
                                src='/paw-finder-logo.jpg'
                                alt='paw finder logo'
                                fill
                                sizes="(max-width: 768px) 48px, 56px"
                                priority
                                className='rounded-full object-cover'
                            />
                        </div>
                        <div>
                            <h1 className='font-bold text-xl md:text-2xl tracking-tight text-slate-800 dark:text-white group-hover:text-[#E8621A] transition-colors duration-200'>
                                Paw Finder
                            </h1>
                        </div>
                    </Link>
                    <div className='hidden md:flex items-center gap-8'>
                        <ul className='flex items-center gap-6 list-none m-0 p-0'>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className='text-base font-semibold text-neutral-600 dark:text-neutral-300 hover:text-[#E8621A] dark:hover:text-[#E8621A] flex items-center gap-1.5 transition-colors duration-200 py-2'
                                    >
                                        {link.name} {link.icon && link.icon}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <span className='h-5 w-px bg-neutral-200 dark:bg-neutral-700' aria-hidden="true" />
                        {
                            user ?
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <Button aria-label="User Menu" variant="bordered" className="flex items-center gap-2">
                                            {user?.name ? user.name.split(" ")[0] : "User"}
                                            {user?.image && (
                                                <Image
                                                    src={user.image}
                                                    alt={user.name || "Avatar"}
                                                    height={32}
                                                    width={32}
                                                    className='rounded-full object-cover'
                                                />
                                            )}
                                            <IoMdArrowDropdown />
                                        </Button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Popover>
                                        <Dropdown.Menu
                                            onAction={(key) => {
                                                if (key === "logout") {
                                                    handleLogout();
                                                } else {
                                                    console.log(`Navigating to: ${key}`);
                                                }
                                            }}
                                        >
                                            <Dropdown.Item id="dashboard" textValue="Dashboard">
                                                <div className='flex gap-2 items-center text-sm font-medium'>
                                                    <MdOutlineDashboardCustomize className="text-lg" />
                                                    <span>
                                                        <Link href={'/dashboard'}>Dashboard</Link>
                                                    </span>
                                                </div>
                                            </Dropdown.Item>

                                            <Dropdown.Item id="logout" textValue="Logout" className="text-danger hover:!bg-danger-50">
                                                <div className='flex gap-2 items-center text-sm font-medium'>
                                                    <TbLogout2 className="text-lg" />
                                                    <span>Logout</span>
                                                </div>
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Popover>
                                </Dropdown>


                                :
                                <ul className='flex items-center gap-4 list-none m-0 p-0'>
                                    <li>
                                        <Link
                                            href="/login"
                                            className='text-base font-semibold text-neutral-600 dark:text-neutral-300 hover:text-[#E8621A] dark:hover:text-[#E8621A] transition-colors duration-200 py-2 px-3'
                                        >
                                            Log in
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/register"
                                            className='text-base font-semibold text-white bg-[#E8621A] hover:bg-[#d05313] transition-colors duration-200 py-2 px-4 rounded-xl shadow-sm'
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </ul>
                        }
                    </div>
                    <div className='md:hidden flex items-center'>
                        {
                            user?.image && (
                                <Image
                                    src={user.image}
                                    alt={user.name || "Avatar"}
                                    height={32}
                                    width={32}
                                    className='rounded-full object-cover'
                                />
                            )
                        }
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-slate-700 dark:text-neutral-300 hover:text-[#E8621A] p-2 focus:outline-none transition-colors'
                            aria-label="Toggle navigation menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
                        </button>
                    </div>
                </div>
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-85 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <ul className='flex flex-col gap-1 pb-4 border-t border-slate-100 dark:border-neutral-800 pt-3 list-none m-0 p-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className='text-base font-semibold text-neutral-600 dark:text-neutral-300 hover:text-[#E8621A] flex items-center gap-1.5 transition-colors duration-200 w-full py-2.5 px-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                                >
                                    {link.name} {link.icon && link.icon}
                                </Link>
                            </li>
                        ))}

                        <li className='my-2 border-t border-neutral-100 dark:border-neutral-800/60' aria-hidden="true" />
                        <li>
                            <Link
                                href="/dashboard"
                                onClick={() =>
                                    setIsOpen(false)}
                                className='text-base font-semibold text-neutral-600 dark:text-neutral-300 hover:text-[#E8621A] flex items-center transition-colors duration-200 w-full py-2.5 px-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className='text-base font-semibold text-neutral-600 dark:text-neutral-300 hover:text-[#E8621A] flex items-center transition-colors duration-200 w-full py-2.5 px-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                            >
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/register"
                                onClick={() => setIsOpen(false)}
                                className='text-base font-semibold text-neutral-600 dark:text-neutral-300 hover:text-[#E8621A] flex items-center transition-colors duration-200 w-full py-2.5 px-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                            >
                                Register
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/"
                                onClick={() => {
                                    setIsOpen(false);
                                    handleLogout()
                                }}
                                className='text-base font-semibold text-neutral-600 dark:text-neutral-300 hover:text-[#E8621A] flex items-center transition-colors duration-200 w-full py-2.5 px-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                            >
                                Logout
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;