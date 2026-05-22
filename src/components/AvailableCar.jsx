import { plusJakarta } from "@/app/layout";
import AvailableCarScroller from "./AvailableCarScroller";
import { Button } from "@heroui/react";
import Link from "next/link";

const AvailableCar = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/available-cars`, {
        cache: "no-store"
    });
    const cars = await res.json();
    console.log(cars)

    return (
        <div className="w-11/12 mx-auto py-4">
            <div className="flex justify-between items-center gap-1">
                <h2 className={`text-3xl mb-4 font-bold ${plusJakarta.className}`}>Popular Available <span className="text-red-700">Cars</span></h2>
                <Link href={'/explore-cars'}><Button variant="outline" className={'text-red-700 rounded-md sm:text-xl p-1 sm:p-4'}>View All</Button></Link>
            </div>
            <AvailableCarScroller cars={cars}></AvailableCarScroller>
        </div>
    );
};

export default AvailableCar;