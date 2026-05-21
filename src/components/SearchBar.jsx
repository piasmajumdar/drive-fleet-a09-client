"use client";

import { useState } from "react";
import {
    usePathname,
    useRouter,
    useSearchParams
} from "next/navigation";

import { FaSearch } from "react-icons/fa";

const carTypes = ["Sedan", "SUV", "Hatchback", "Coupe", "Convertible", "Pickup Truck", "Minivan", "Station Wagon", "Sports Car", "Luxury Car", "Electric", "Hybrid", "Crossover", "Roadster", "Compact", "Muscle Car", "Off-Road", "Van", "Microcar", "Limousine"];

const SearchBar = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [searchInp, setSearchInp] = useState(
        searchParams.get("search") || ""
    );

    // Search
    const handleSearch = () => {

        const params = new URLSearchParams(window.location.search);

        searchInp.trim()
            ? params.set("search", searchInp.trim())
            : params.delete("search");

        router.replace(`${pathname}?${params.toString()}`);
    };

    // Type Filter
    const handleType = (e) => {
        const value = e.target.value;
        const params = new URLSearchParams(window.location.search);

        value
            ? params.set("type", value)
            : params.delete("type");

        router.replace(`${pathname}?${params.toString()}`);
    };

    // Reset Filters
    const handleReset = () => {
        setSearchInp("");
        router.replace(pathname);
    };

    return (
        <div className="flex flex-wrap items-center gap-3 my-4 pb-2">

            {/* Search Input */}
            <div className="flex items-center border rounded-lg overflow-hidden">

                <input
                    type="text"
                    placeholder="Search by car name..."
                    value={searchInp}
                    onChange={(e) => setSearchInp(e.target.value)}
                    className="px-4 py-2 w-[300px] outline-none"
                />

                <button
                    onClick={handleSearch}
                    className="bg-red-700 hover:bg-red-800 text-white px-4 py-3 h-full transition"
                >
                    <FaSearch />
                </button>

            </div>

            {/* Car Type Select */}
            <select
                value={searchParams.get("type") || ""}
                onChange={handleType}
                className="border rounded-lg px-4 py-2 outline-none w-[250px]"
            >
                <option value="">
                    All Types
                </option>

                {
                    carTypes.map((type) => (
                        <option
                            key={type}
                            value={type}
                        >
                            {type}
                        </option>
                    ))
                }

            </select>

            {/* Reset Button */}
            <button
                onClick={handleReset}
                className="border border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-5 py-2 rounded-lg transition"
            >
                Reset
            </button>
        </div>
    );
};

export default SearchBar;