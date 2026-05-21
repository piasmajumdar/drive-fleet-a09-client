import { plusJakarta } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaPlay } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-white py-5">

            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/Banner.png"
                    alt="Banner Background"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Left Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 h-[80vh] w-11/12 mx-auto flex items-center">

                <div className="max-w-2xl">

                    {/* Top Red Line */}
                    <div className="mb-6 h-1 w-20 rounded-full bg-red-500"></div>

                    {/* Heading */}
                    <h1 className={`${plusJakarta.className} text-3xl font-black leading-tight text-black md:text-5xl`}>
                        Find, Book & <br />
                        Drive Your{" "}
                        <span className="text-red-500">
                            Dream Car
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-8 max-w-xl text-lg leading-8 text-gray-700 md:text-xl">
                        Discover the perfect car for any occasion.
                        Luxury, comfort, and performance — all in one place.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 gap-5">
                        <Link href={'/explore-cars'}>
                            <button className="group flex items-center gap-3 rounded-2xl bg-red-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-600">
                                Explore Cars
                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;