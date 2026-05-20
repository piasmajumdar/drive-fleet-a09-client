"use client";

import Image from "next/image";
import Link from "next/link";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaXTwitter,
} from "react-icons/fa6";

import {
    HiOutlineMapPin,
    HiOutlineEnvelope,
    HiOutlinePhone,
} from "react-icons/hi2";

export default function Footer() {
    return (
        <footer className="border-t border-red-100 bg-white">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo + Description */}
                    <div>
                        <div className="flex items-center gap-3">
                            <Image src={'/logo.png'} alt='nav' height={40} width={40}></Image>
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                                DriveFleet
                            </h2>
                        </div>

                        <p className="mt-5 text-sm leading-7 text-gray-600">
                            Premium car rental platform for seamless booking experiences,
                            luxury rides, and modern travel solutions.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-3">

                            <Link
                                href="#"
                                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FaFacebookF className="text-lg" />
                            </Link>

                            <Link
                                href="#"
                                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FaInstagram className="text-lg" />
                            </Link>

                            <Link
                                href="#"
                                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FaLinkedinIn className="text-lg" />
                            </Link>

                            <Link
                                href="#"
                                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FaYoutube className="text-lg" />
                            </Link>

                            <Link
                                href="#"
                                className="group flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-600 hover:bg-red-600 hover:text-white"
                            >
                                <FaXTwitter className="text-lg" />
                            </Link>

                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            Quick Links
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">

                            <Link
                                href="/"
                                className="w-fit text-sm font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-red-600"
                            >
                                Home
                            </Link>

                            <Link
                                href="/explore-cars"
                                className="w-fit text-sm font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-red-600"
                            >
                                Explore Cars
                            </Link>

                            <Link
                                href="/add-car"
                                className="w-fit text-sm font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-red-600"
                            >
                                Add Car
                            </Link>

                            <Link
                                href="/my-bookings"
                                className="w-fit text-sm font-medium text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-red-600"
                            >
                                My Bookings
                            </Link>

                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            Services
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">

                            <p className="text-sm font-medium text-gray-600">
                                Luxury Car Rental
                            </p>

                            <p className="text-sm font-medium text-gray-600">
                                Airport Pickup
                            </p>

                            <p className="text-sm font-medium text-gray-600">
                                Business Travel
                            </p>

                            <p className="text-sm font-medium text-gray-600">
                                Long-Term Rental
                            </p>

                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">
                            Contact Info
                        </h3>

                        <div className="mt-6 flex flex-col gap-5">

                            <div className="flex items-start gap-4">
                                <div className="rounded-lg bg-red-50 p-2 text-red-600">
                                    <HiOutlineMapPin className="text-xl" />
                                </div>

                                <p className="text-sm leading-6 text-gray-600">
                                    Dhaka, Bangladesh
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="rounded-lg bg-red-50 p-2 text-red-600">
                                    <HiOutlineEnvelope className="text-xl" />
                                </div>

                                <p className="text-sm text-gray-600">
                                    support@drivefleet.com
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="rounded-lg bg-red-50 p-2 text-red-600">
                                    <HiOutlinePhone className="text-xl" />
                                </div>

                                <p className="text-sm text-gray-600">
                                    +880 10000000
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom Footer */}
                <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gray-200 pt-7 text-center md:flex-row">

                    <p className="text-sm text-gray-500">
                        © 2026 DriveFleet. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6">

                        <Link
                            href="/privacy-policy"
                            className="text-sm text-gray-500 transition hover:text-red-600"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="text-sm text-gray-500 transition hover:text-red-600"
                        >
                            Terms & Conditions
                        </Link>

                    </div>
                </div>
            </div>
        </footer>
    );
}