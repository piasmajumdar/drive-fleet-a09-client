import Image from "next/image";
import { Button } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { plusJakarta } from "@/app/layout";

const LowerBanner = () => {
    return (
        <section className="py-16">
            <div className="relative w-11/12 mx-auto overflow-hidden rounded-md min-h-[380px]">

                {/* Background Image */}
                <Image
                    src="/LowerBanner.png"
                    alt="Lower Banner"
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Content */}
                <div className="relative z-10 flex min-h-[380px] items-center px-6 py-10 md:px-14">

                    <div className="max-w-xl text-white">

                        {/* Heading */}
                        <h2 className={`${plusJakarta.className} text-4xl font-extrabold leading-tight md:text-6xl`}>
                            Ready to Hit <br />
                            the Road?
                        </h2>

                        {/* Description */}
                        <p className="mt-6 text-base leading-8 text-white/90 md:text-xl">
                            Book your dream car today and enjoy
                            a smooth, comfortable, and premium ride experience.
                        </p>

                        {/* CTA Button */}
                        <div className="mt-10">
                            <Link href={'/explore-cars'}>
                                <Button
                                    radius="lg"
                                    className="group h-[58px] bg-white px-8 text-lg font-bold text-red-500 shadow-xl transition-all duration-300 hover:scale-105"
                                >
                                    Book Now
                                    <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default LowerBanner;