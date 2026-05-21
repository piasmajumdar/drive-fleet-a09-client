"use client";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowLeft, FaCarSide } from "react-icons/fa";

const Error = ({ reset }) => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-16 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-0 h-72 w-72 bg-red-100 blur-3xl rounded-full opacity-60"></div>
            <div className="absolute bottom-0 right-0 h-72 w-72 bg-red-200 blur-3xl rounded-full opacity-50"></div>

            <div

                className="relative z-10 w-full max-w-2xl rounded-[32px] border border-red-100 bg-white/90 backdrop-blur-xl shadow-[0_10px_60px_rgba(255,0,0,0.08)] p-10 md:p-14 text-center"
            >

                {/* Error Badge */}
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-red-50 border border-red-100">
                    <FaCarSide className="text-4xl text-red-500" />
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                    Something Went Wrong
                </h1>

                {/* Subtitle */}
                <p className="mt-5 text-base md:text-lg leading-8 text-gray-600 max-w-xl mx-auto">
                    We encountered an unexpected issue while processing your request.
                    Please try again or continue exploring available premium cars.
                </p>
                {/* Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                    {/* Go Back */}
                    <Button
                        onPress={() => window.history.back()}
                        radius="full"
                        size="lg"
                        startContent={<FaArrowLeft />}
                        className="bg-white border border-red-200 text-red-500 hover:bg-red-50 font-semibold px-8"
                    >
                        Go Back
                    </Button>

                    {/* Explore Cars */}
                    <Link href="/explore-cars">
                        <Button
                            radius="full"
                            size="lg"
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 shadow-lg shadow-red-200"
                        >
                            Explore Cars
                        </Button>
                    </Link>
                </div>

                {/* Retry Button */}
                <button
                    onClick={() => reset()}
                    className="mt-8 text-sm font-medium text-gray-500 hover:text-red-500 transition"
                >
                    Try Reloading the Page
                </button>

            </div>
        </div>
    );
};

export default Error;