'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SignUpPage = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = async (formData) => {
        // console.log(formData)
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
            toast.success("Login Successful");
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
                <button onClick={handleGoogleLogin} className="btn bg-white text-black my-5 w-full border-[#e5e5e5]">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Sign Up with Google
                </button>
                <form onSubmit={handleSubmit(handleRegister)} className='space-y-2'>

                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="Name"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <small className='text-red-500'>{errors.name.message}</small>}

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input w-full"
                            placeholder="Email"
                            {...register("email", { required: "Email is Required" })} />

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Photo URL</label>
                        <input
                            type="text"
                            className="input w-full"
                            placeholder="photo"
                            {...register("photo", { required: "Photo is Required" })} />

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label">Password</label>
                        <input
                            type="password"
                            className="input w-full"
                            placeholder="Password"
                            {...register("password", { required: "Password is required" })} />
                    </fieldset>
                    <button className="btn btn-neutral mt-4 w-full">Sign Up</button>
                    <h2>Already have an account? <Link href={'/auth/login'} className='text-blue-800'>Login</Link></h2>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;