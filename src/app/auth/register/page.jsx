'use client'

import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignUpPage = () => {
    const router = useRouter();


    const handleRegister = async (e) => {
        e.preventDefault();
        const formDataInput = new FormData(e.currentTarget);
        const formData = Object.fromEntries(formDataInput.entries())
        console.log(formData);
        const { name, email, photo, password } = formData;
        // console.log(name, email, photo, password)

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: process.env.BETTER_AUTH_URL,
        });

        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success("Sign Up Successful. Please login Now..")
            router.push('/auth/login')
        }
    }
    const handleGoogleLogin = async () => {
        const { data: res, error } = await authClient.signIn.social({
            provider: "google",
        });
        if (res) {
            router.push('/')
        }

        if (error) {
            toast.error(error.message)
        }

    }

    return (
        <div className='h-screen flex justify-center items-center mx-auto'>
            <div className='bg-white rounded-lg shadow-2xl p-6 sm:w-sm '>
                <h2 className='text-3xl text-center'>Please Sign Up!</h2>
                {/* Google */}
                <Button
                    variant='outline'
                    onClick={handleGoogleLogin}
                    className=" bg-white flex items-center text-black my-5 w-full border-[#e5e5e5]">
                    <FcGoogle></FcGoogle>
                    Login with Google
                </Button>
                <Form className="flex flex-col gap-4" onSubmit={handleRegister}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        validate={(value) => {
                            if (value.trim().length < 2) {
                                return "Name must be at least 2 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="Your Name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="photo"
                        type="text"
                        validate={(value) => {
                            try {
                                new URL(value);
                                return null;
                            } catch {
                                return "Please enter a valid URL";
                            }
                        }}
                    >
                        <Label>Photo</Label>
                        <Input placeholder="https://photoURL.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 6 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[a-z]/.test(value)) {
                                return "Password must contain at least one lowercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 6 characters with 1 uppercase, 1 lowercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <Button variant='primary' type="submit" className="mt-4 w-full">Sign Up</Button>
                    <h2>Already have an account? <Link href={'/auth/login'} className='text-blue-800'>Login</Link></h2>
                </Form>
            </div>
        </div>
    );
};

export default SignUpPage;