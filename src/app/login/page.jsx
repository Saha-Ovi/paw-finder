"use client";

import { Button,Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { authClient } from '@/lib/auth-client';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';
import { LuEye, LuEyeOff } from 'react-icons/lu';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        // console.log(user);
        const loading = toast.loading("Connecting to email");
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
        });
        toast.dismiss(loading);
        if (data) {
            toast.success("User successfully Logged in")
            redirect('/');

        }
        if (error) {
            toast.error(error.message || "Login Failed");
        }

    };

    const handleGoogleLogin = async () => {
        const loading = toast.loading("Connecting to google");
        await authClient.signIn.social({
            provider: "google",
        });
        toast.dismiss(loading);
        toast.success("User successfully Logged in");
    }

    return (
        <div className='container mx-auto px-4 my-12 md:my-16 flex items-center justify-center min-h-[80vh]'>
            <div className='w-full max-w-2xl mx-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300'>
                <div className='text-center space-y-2 mb-6 w-full'>
                    <h2 className='text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-800 dark:text-white'>
                        Log in to your account
                    </h2>
                    <p className='text-sm sm:text-base text-neutral-500 dark:text-neutral-400 font-medium inline-flex items-center gap-1.5 flex-wrap justify-center'>
                        Don't have an account?
                        <Link href="/register" className='text-[#E8621A] hover:underline inline-flex items-center gap-1 font-semibold group'>
                            Create one free
                            <FaLongArrowAltRight className='transition-transform duration-200 group-hover:translate-x-1' />
                        </Link>
                    </p>
                </div>
                <div className='mb-5 w-full'>
                    <Button onClick={handleGoogleLogin}
                        variant='outline'
                        className='w-full py-5 text-sm sm:text-base font-semibold rounded-xl flex items-center justify-center gap-2 border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors duration-200'
                    >
                        <FcGoogle className="text-xl shrink-0" />
                        Continue with Google
                    </Button>
                </div>
                <div className="flex items-center w-full my-6 gap-3">
                    <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
                    <span className="whitespace-nowrap text-xs font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 uppercase">
                        Or log in with Email
                    </span>
                    <div className="flex-1 border-t border-neutral-200 dark:border-neutral-800" />
                </div>
                <Form className="w-full flex flex-col gap-5" onSubmit={handleLogin}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="w-full flex flex-col gap-1.5"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className='text-xs sm:text-sm font-bold text-neutral-700 dark:text-neutral-300'>
                            Email Address
                        </Label>
                        <Input
                            placeholder="name@example.com"
                            className="w-full"
                        />
                        <FieldError className="text-xs font-semibold text-danger-500 mt-1" />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type={showPassword? "text" :"password"}
                        className="w-full flex flex-col gap-1.5"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className='text-xs sm:text-sm font-bold text-neutral-700 dark:text-neutral-300'>
                            Password
                        </Label>
                        <div className="relative w-full flex items-center">
                            <Input
                                placeholder="••••••••"
                                className="w-full pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 focus:outline-none flex items-center justify-center p-1 z-10"
                                aria-label="toggle password visibility"
                            >
                                {showPassword ? (
                                    <LuEyeOff className="text-xl shrink-0" />
                                ) : (
                                    <LuEye className="text-xl shrink-0" />
                                )}
                            </button>
                        </div>
                        <Description className="text-[11px] leading-normal text-neutral-400 dark:text-neutral-500 mt-0.5">
                            Must be at least 8 characters with 1 uppercase and 1 number.
                        </Description>
                        <FieldError className="text-xs font-semibold text-danger-500 mt-1" />
                    </TextField>
                    <div className="w-full pt-2">
                        <Button
                            type="submit"
                            className='w-full py-5 bg-[#E8621A] hover:bg-[#d05313] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2'
                        >
                            <FaArrowRightToBracket className="text-sm sm:text-base" />
                            Login
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default LoginPage;