import { plusJakarta } from "@/app/layout";
import AvailableCarScroller from "./AvailableCarScroller";

const AvailableCar = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/available-cars`, {
        cache: "no-store"
    });
    const cars = await res.json();
    console.log(cars)

    return (
        <div className="w-11/12 mx-auto py-4">
            <h2 className={`text-3xl font-bold ${plusJakarta.className}`}>Popular Available <span className="text-red-700">Cars</span></h2>
            <AvailableCarScroller cars={cars}></AvailableCarScroller>
        </div>
    );
};

export default AvailableCar;