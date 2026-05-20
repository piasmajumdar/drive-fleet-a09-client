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
import { VscAccount } from "react-icons/vsc";
import { AiOutlineNumber } from "react-icons/ai";

// {
//   "_id": {
//     "$oid": "6a0e36d84686844fcd7321e8"
//   },
//   "carName": "Toyota Corolla Cross",
//   "dailyRentPrice": 4500,
//   "carType": "SUV",
//   "imageURL": [
//     "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=900&q=70",
//     "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=900&q=70",
//     "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=70"
//   ],
//   "seatCapacity": 5,
//   "pickupLocation": "Banani",
//   "description": "A comfortable and fuel-efficient SUV perfect for city rides and family trips across Dhaka.",
//   "availabilityStatus": "Available",
//   "about": "Toyota Corolla Cross combines SUV practicality with premium comfort, smooth driving, and strong fuel economy.",
//   "features": [
//     "Bluetooth",
//     "Backup Camera",
//     "GPS Navigation",
//     "Apple CarPlay",
//     "Android Auto",
//     "Cruise Control",
//     "Push Start",
//     "Parking Sensors"
//   ],
//   "fuelType": "Petrol",
//   "mileage": 16,
//   "engineModel": "1.8L Hybrid",
//   "doors": 4,
//   "transmission": "Automatic",
//   "ratings": 4.7,
//   "reviewsCount": 132,
//   "bookingCount": 0
// }

export default function CarDetailsCard({ car }) {
    // console.log(car);

    return (
        <section className="min-h-screen py-10">
            <div className="">

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
                        {car?.carName}
                    </span>
                </div>

                {/* Main Grid */}
                <div className="">

                    <div className="">

                        {/* Top */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                            {/* Gallery */}
                            <div>

                                {/* Main Image */}
                                <div className="relative rounded-[28px] overflow-hidden bg-white border border-gray-200">

                                    <Image
                                        src={car?.imageURL[0]}
                                        alt="BMW"
                                        width={700}
                                        height={500}
                                        className="w-full h-[380px] object-cover"
                                    />

                                    {/* Rating */}
                                    <div className="absolute top-5 right-5 bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2">
                                        <FaStar className="text-red-500" />
                                        <span className="font-semibold text-sm">
                                            {car?.ratings}
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
                                    {car?.imageURL.map((img, index) => (
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
                                        {car?.about}
                                    </p>
                                </div>
                            </div>

                            {/* Details */}
                            <div className="flex flex-col">

                                {/* Title */}
                                <h1 className="text-4xl font-black text-black mb-4">
                                    {car?.carName}
                                </h1>

                                {/* Meta */}
                                <div className="flex flex-wrap gap-5 text-gray-500 text-sm mb-5">

                                    <div className="flex items-center gap-2">
                                        <FaCarSide />
                                        <span>{car?.carType}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <GiGearStickPattern />
                                        <span>{car?.transmission}</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <MdOutlineAirlineSeatReclineNormal />
                                        <span>{car?.seatCapacity} Seats</span>
                                    </div>
                                </div>

                                {/* Ratings */}
                                <div className="flex items-center flex-wrap gap-4 mb-5">

                                    <div className="flex items-center gap-2">
                                        <FaStar className="text-red-500" />
                                        <span className="font-semibold text-black">
                                            {car?.ratings}
                                        </span>
                                        <span className="text-gray-500 text-sm">
                                            ({car?.reviewsCount} reviews)
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 text-red-500 ">
                                        <AiOutlineNumber />
                                        <span className="font-bold text-2xl">{car?.bookingCount}</span>
                                        <span className="text-gray-500 text-sm"> Times Booked</span>
                                    </div>


                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-2 text-gray-600 mb-6">
                                    <FaMapMarkerAlt className="text-red-500" />
                                    <span>{car?.pickupLocation}</span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-500 leading-7 mb-8">
                                    {car?.description}
                                </p>

                                {/* Features */}
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-black mb-4">
                                        Features
                                    </h3>

                                    <div className="flex flex-wrap gap-3">
                                        {car?.features.map((item) => (
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
                                            BDT{car?.dailyRentPrice} / day
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <FaGasPump />
                                            <span>Fuel Type</span>
                                        </div>

                                        <span className="font-medium text-black">
                                            {car?.fuelType}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <MdOutlineSpeed />
                                            <span>Mileage</span>
                                        </div>

                                        <span className="font-medium text-black">
                                            {car?.mileage} km/l
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <FaCarSide />
                                            <span>Engine</span>
                                        </div>

                                        <span className="font-medium text-black">
                                            {car?.engineModel}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <GiCarDoor />
                                            <span>Doors</span>
                                        </div>

                                        <span className="font-medium text-black">
                                            {car?.doors}
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 text-gray-500">
                                            <FaCarSide />
                                            <span>Availability</span>
                                        </div>

                                        <span className="font-semibold text-green-600">
                                            {car?.availabilityStatus}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="fixed bottom-7 right-7 inline-block">
                        <BookCarModal car={car}></BookCarModal>
                    </div>
                </div>
            </div>
        </section>
    );
}