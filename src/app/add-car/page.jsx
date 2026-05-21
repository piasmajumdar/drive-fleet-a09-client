"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const carTypes = ["Sedan", "SUV", "Hatchback", "Coupe", "Convertible", "Pickup Truck", "Minivan", "Station Wagon", "Sports Car", "Luxury Car", "Electric", "Hybrid", "Crossover", "Roadster", "Compact", "Muscle Car", "Off-Road", "Van", "Microcar", "Limousine"];

const fuelTypes = ["Petrol", "Diesel", "Electric", "Hybrid", "CNG"];

const transmissionTypes = ["Automatic", "Manual", "CVT"];

const availabilityOptions = ["Available", "Unavailable"];

const AddCarPage = () => {

    const [imageFields, setImageFields] = useState([""]);
    const [featureFields, setFeatureFields] = useState([""]);

    const { data: session, isPending } = authClient.useSession();
    // console.log(session)

    const handleAddCar = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const car = {
            ownerId: session?.user?.id,
            carName: form.get("carName"),
            dailyRentPrice: Number(form.get("dailyRentPrice")),
            carType: form.get("carType"),

            imageURL: form.getAll("imageURL").filter(img => img.trim() !== ""),

            seatCapacity: Number(form.get("seatCapacity")),
            pickupLocation: form.get("pickupLocation"),
            description: form.get("description"),
            availabilityStatus: form.get("availabilityStatus"),
            about: form.get("about"),

            features: form.getAll("features").filter(feature => feature.trim() !== ""),

            fuelType: form.get("fuelType"),
            mileage: Number(form.get("mileage")),
            engineModel: form.get("engineModel"),
            doors: Number(form.get("doors")),
            transmission: form.get("transmission"),
            ratings: 0,
            reviewsCount: 0,
            bookingCount: 0
        };

        // console.log(car);

        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/cars`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${session?.user?.id}`
            },
            body: JSON.stringify(car),
        })
        const data = await res.json()
        console.log(data);
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10 md:px-8">

            <div className="mx-auto max-w-7xl rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900">Add a New Car</h1>
                    <p className="mt-2 text-gray-500">Fill in the details to list your car for rent</p>
                </div>

                {/* Form */}
                <form onSubmit={handleAddCar} className="space-y-8">

                    {/* Top Fields */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Car Name</label>

                            <input
                                type="text"
                                name="carName"
                                placeholder="e.g. Honda Civic RS"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Daily Rent Price</label>

                            <input
                                type="number"
                                name="dailyRentPrice"
                                placeholder="e.g. 5200"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Car Type</label>

                            <select
                                name="carType"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                            >
                                <option value="">Select Car Type</option>

                                {carTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Image URLs */}
                    <div>

                        <div className="mb-3 flex items-center justify-between">
                            <label className="text-sm font-semibold text-gray-700">Image URLs</label>

                            <button
                                type="button"
                                onClick={() => setImageFields([...imageFields, ""])}
                                className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                            >
                                <FaPlus />
                                Add
                            </button>
                        </div>

                        <div className="space-y-4">

                            {imageFields.map((_, index) => (

                                <div key={index} className="flex gap-3">

                                    <input
                                        type="text"
                                        name="imageURL"
                                        placeholder="https://example.com/car-image.jpg"
                                        required
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                                    />

                                    {imageFields.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => setImageFields(imageFields.filter((_, i) => i !== index))}
                                            className="rounded-xl bg-red-100 px-4 text-red-600 transition hover:bg-red-200"
                                        >
                                            <FaTrash />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Middle Fields */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Seat Capacity</label>

                            <input
                                name="seatCapacity"
                                type="number"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Pickup Location</label>

                            <input
                                type="text"
                                name="pickupLocation"
                                placeholder="e.g. Gulshan"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Availability Status</label>

                            <select
                                name="availabilityStatus"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                            >
                                <option value="">Select Status</option>

                                {availabilityOptions.map(status => (
                                    <option key={status} value={status}>{status}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">Description</label>

                        <textarea
                            name="description"
                            rows={5}
                            placeholder="Describe your car, features, conditions, etc."
                            required
                            className="w-full rounded-2xl border border-gray-300 px-4 py-4 outline-none transition focus:border-red-500"
                        />
                    </div>

                    {/* About */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">About</label>

                        <textarea
                            name="about"
                            rows={4}
                            placeholder="Write something about the car..."
                            required
                            className="w-full rounded-2xl border border-gray-300 px-4 py-4 outline-none transition focus:border-red-500"
                        />
                    </div>

                    {/* Features */}
                    <div>

                        <div className="mb-3 flex items-center justify-between">
                            <label className="text-sm font-semibold text-gray-700">Features</label>

                            <button
                                type="button"
                                onClick={() => setFeatureFields([...featureFields, ""])}
                                className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                            >
                                <FaPlus />
                                Add
                            </button>
                        </div>

                        <div className="space-y-4">

                            {featureFields.map((_, index) => (

                                <div key={index} className="flex gap-3">

                                    <input
                                        type="text"
                                        name="features"
                                        placeholder="e.g. Sunroof"
                                        required
                                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                                    />

                                    {featureFields.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => setFeatureFields(featureFields.filter((_, i) => i !== index))}
                                            className="rounded-xl bg-red-100 px-4 text-red-600 transition hover:bg-red-200"
                                        >
                                            <FaTrash />
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Fields */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Fuel Type</label>

                            <select
                                name="fuelType"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                            >
                                <option value="">Select Fuel Type</option>

                                {fuelTypes.map(fuel => (
                                    <option key={fuel} value={fuel}>{fuel}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Mileage</label>

                            <input
                                type="number"
                                name="mileage"
                                placeholder="e.g. 14"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Engine Model</label>

                            <input
                                type="text"
                                name="engineModel"
                                placeholder="e.g. 1.5L Turbo VTEC"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Doors</label>

                            <input
                                type="number"
                                name="doors"
                                placeholder="e.g. 4"
                                required
                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                            />
                        </div>
                    </div>

                    {/* Transmission */}
                    <div className="max-w-md">

                        <label className="mb-2 block text-sm font-semibold text-gray-700">Transmission</label>

                        <select
                            name="transmission"
                            required
                            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                        >
                            <option value="">Select Transmission</option>

                            {transmissionTypes.map(item => (
                                <option key={item} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-1 gap-5 pt-4 md:grid-cols-2">

                        <button
                            type="reset"
                            className="rounded-2xl border border-gray-300 bg-white py-4 text-lg font-semibold text-gray-700 transition hover:bg-gray-100"
                        >
                            Reset
                        </button>

                        <button
                            type="submit"
                            className="rounded-2xl bg-red-500 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
                        >
                            Add Car
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddCarPage;