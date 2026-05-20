"use client";

import Image from "next/image";
import {
    FaStar,
    FaMapMarkerAlt,
    FaGasPump,
    FaCarSide,
} from "react-icons/fa";

import {
    GiCarDoor,
    GiGearStickPattern,
} from "react-icons/gi";

import {
    MdOutlineAirlineSeatReclineNormal,
    MdOutlineSpeed,
    MdFavoriteBorder,
} from "react-icons/md";

import {
    IoChevronBack,
    IoChevronForward,
} from "react-icons/io5";
import BookCarModal from "./BookCarModal";

const gallery = [
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop",
];

export default function CarDetailsCard() {
    return (
        <section className="bg-[#fafafa] min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Breadcrumb */}
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-8">
                    <span className="hover:text-red-600 cursor-pointer transition">
                        Home
                    </span>

                    <span>/</span>

                    <span className="hover:text-red-600 cursor-pointer transition">
                        Explore Cars
                    </span>

                    <span>/</span>

                    <span className="text-black font-medium">
                        BMW 5 Series
                    </span>
                </div>

                {/* Main Grid */}
                <div className="">

                    {/* LEFT */}
                    <div className="">

                        {/* Top */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                            {/* Gallery */}
                            <div>

                                {/* Main Image */}
                                <div className="relative rounded-[28px] overflow-hidden bg-white border border-gray-200">

                                    <Image
                                        src={gallery[0]}
                                        alt="BMW"
                                        width={700}
                                        height={500}
                                        className="w-full h-[380px] object-cover"
                                    />

                                    {/* Rating */}
                                    <div className="absolute top-5 right-5 bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2">
                                        <FaStar className="text-red-500" />
                                        <span className="font-semibold text-sm">
                                            4.9
                                        </span>
                                    </div>

                                    {/* Arrows */}
                                    <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-600 hover:text-white transition">
                                        <IoChevronBack size={20} />
                                    </button>

                                    <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-red-600 hover:text-white transition">
                                        <IoChevronForward size={20} />
                                    </button>
                                </div>

                                {/* Thumbnails */}
                                <div className="flex gap-4 mt-5">
                                    {gallery.map((img, index) => (
                                        <div
                                            key={index}
                                            className="rounded-2xl overflow-hidden border border-gray-200 bg-white cursor-pointer hover:border-red-500 transition"
                                        >
                                            <Image
                                                src={img}
                                                alt="thumb"
                                                width={120}
                                                height={80}
                                                className="w-[110px] h-[80px] object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* About */}
                                <div className="mt-10">
                                    <h2 className="text-2xl font-bold text-black mb-4">
                                        About the Car
                                    </h2>

                                    <p className="text-gray-500 leading-8 max-w-4xl">
                                        Experience executive-class comfort with the BMW
                                        5 Series. It comes with premium interiors,
                                        powerful engine performance, and advanced safety
                                        features designed for modern travelers.
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col">

                                {/* Title */}
                                <h1 className="text-4xl font-black text-black mb-4">
                                    BMW 5 Series
                                </h1>

                                {/* Meta */}
                                <div className="flex flex-wrap gap-5 text-gray-500 text-sm mb-5">

                                    <div className="flex items-center gap-2">
                                        <FaCarSide />
                                        <span>Luxury</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <GiGearStickPattern />
                                        <span>Automatic</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <MdOutlineAirlineSeatReclineNormal />
                                        <span>5 Seats</span>
                                    </div>
                                </div>

                                {/* Ratings */}
                                <div className="flex items-center flex-wrap gap-4 mb-5">

                                    <div className="flex items-center gap-2">
                                        <FaStar className="text-red-500" />
                                        <span className="font-semibold text-black">
                                            4.9
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            (120 reviews)
                                        </span>
                                    </div>

                                    <div className="flex text-red-500">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>

                                    <span className="text-gray-500 text-sm">
                                        120 reviews
                                    </span>
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-2 text-gray-600 mb-6">
                                    <FaMapMarkerAlt className="text-red-500" />
                                    <span>Dhaka, Bangladesh</span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-500 leading-7 mb-8">
                                    The BMW 5 Series offers a perfect blend of
                                    luxury, performance, and advanced technology.
                                    Ideal for both city drives and long journeys.
                                </p>

                                {/* Features */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-black mb-4">
                                        Features
                                    </h3>

                                    <div className="flex flex-wrap gap-3">
                                        {[
                                            "Bluetooth",
                                            "Backup Camera",
                                            "GPS",
                                            "Heated Seats",
                                            "Air Conditioning",
                                            "Cruise Control",
                                        ].map((item) => (
                                            <span
                                                key={item}
                                                className="px-4 py-2 rounded-xl bg-white border border-gray-200 text-sm text-gray-600"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Specs */}
                                <div className="space-y-5 border-t border-gray-200 pt-6">

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <FaStar />
                                            <span>Daily Rent</span>
                                        </div>

                                        <span className="font-bold text-red-600">
                                            $120 / day
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <FaGasPump />
                                            <span>Fuel Type</span>
                                        </div>

                                        <span className="font-medium text-black">
                                            Petrol
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <MdOutlineSpeed />
                                            <span>Mileage</span>
                                        </div>

                                        <span className="font-medium text-black">
                                            12 km/l
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <FaCarSide />
                                            <span>Engine</span>
                                        </div>

                                        <span className="font-medium text-black">
                                            2.0L Turbo
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <GiCarDoor />
                                            <span>Doors</span>
                                        </div>

                                        <span className="font-medium text-black">
                                            4
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <FaCarSide />
                                            <span>Availability</span>
                                        </div>

                                        <span className="font-semibold text-green-600">
                                            Available
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fixed bottom-5 right-5 inline-block">
                        <BookCarModal></BookCarModal>
                    </div>
                </div>
            </div>
        </section>
    );
}