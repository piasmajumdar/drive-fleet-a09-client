"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaCarCrash, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-6 py-16">

            {/* Background Glow */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-red-100 blur-3xl opacity-60"></div>
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-red-200 blur-3xl opacity-50"></div>

            {/* Card */}
            <div className="relative z-10 w-full max-w-2xl rounded-[32px] border border-red-100 bg-white/90 p-10 md:p-14 text-center shadow-[0_10px_60px_rgba(255,0,0,0.08)] backdrop-blur-xl">

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-red-100 bg-red-50">
                    <FaCarCrash className="text-5xl text-red-500" />
                </div>

                {/* 404 */}
                <h1 className="text-7xl md:text-8xl font-black tracking-tight text-red-500">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-xl text-base md:text-lg leading-8 text-gray-600">
                    The page you are looking for might have been removed,
                    renamed, or is temporarily unavailable.
                </p>

                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                    {/* Go Back */}
                    <Button
                        onPress={() => window.history.back()}
                        radius="full"
                        size="lg"
                        startContent={<FaArrowLeft />}
                        className="border border-red-200 bg-white px-8 font-semibold text-red-500 hover:bg-red-50"
                    >
                        Go Back
                    </Button>

                    {/* Explore Cars */}
                    <Link href="/explore-cars">
                        <Button
                            radius="full"
                            size="lg"
                            className="bg-red-500 px-8 font-semibold text-white shadow-lg shadow-red-200 hover:bg-red-600"
                        >
                            Explore Cars
                        </Button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default NotFound;