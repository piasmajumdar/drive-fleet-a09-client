import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const CarCard = ({ car }) => {
    return (
        //         {
        //     "_id": "6a0d6eb746595f72b307dfb8",
        //     "carName": "Toyota Corolla Cross",
        //     "dailyRentPrice": 4500,
        //     "carType": "SUV",
        //     "imageURL": "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=1200&auto=format&fit=crop",
        //     "seatCapacity": 5,
        //     "pickupLocation": "Banani",
        //     "description": "A comfortable and fuel-efficient SUV perfect for city rides and family trips across Dhaka.",
        //     "availabilityStatus": "Available"
        // }

        <div className="w-full h-full flex flex-col rounded-2xl border border-gray-200 p-3 shadow-sm hover:shadow-md hover:shadow-red-300 hover:scale-105 transition-all duration-300">

            {/* Image Section */}
            <div className="relative overflow-hidden rounded-xl">
                <Image
                    src={car?.imageURL?.[0] &&
                        car.imageURL[0].startsWith("http")
                        ? car.imageURL[0]
                        : "/fallback-image.png"}
                    alt="Toyota RAV4"
                    height={300}
                    width={300}
                    className="h-[200px] w-full object-cover"
                />
                {/* Available Badge */}
                <button className="absolute right-7 top-3 flex h-10 w-10 items-center justify-center shadow-md">
                    <div className={`p-2 rounded-md ${car.availabilityStatus === "Available" ? "bg-green-200" : "bg-gray-400"}`}>
                        <p>{car?.availabilityStatus}</p>
                    </div>
                </button>
            </div>

            {/* Content */}
            <div className="mt-4  flex flex-col flex-1">
                <h2 className="text-2xl font-bold dark:text-red-600 text-gray-900">
                    {car?.carName}
                </h2>

                {/* Specs */}
                <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
                    <span>{car?.carType}</span>
                    <span>•</span>
                    <span>{car?.pickupLocation} Seats</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 mt-2">
                    <FaMapMarkerAlt className="text-sm" />
                    <span className="text-sm font-medium">{car?.pickupLocation}</span>
                </div>

                {/* Bottom Row */}
                <div className="mt-auto flex items-center justify-end flex-1">
                    {/* Price */}
                    <div className="flex items-end gap-1">
                        <span className="text-xl font-bold text-red-500">
                            BDT{car?.dailyRentPrice}
                        </span>
                        <span className="mb-1 text-sm text-gray-500">
                            /day
                        </span>
                    </div>
                </div>
                <Link href={`/explore-cars/${car._id}`}><Button variant="danger" className={'bg-[#c40101] mt-auto'}>View Details</Button></Link>
            </div>
        </div>
    )
}

export default CarCard;