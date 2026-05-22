"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Modal, Surface } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const carTypes = ["Sedan", "SUV", "Hatchback", "Coupe", "Convertible", "Pickup Truck", "Minivan", "Station Wagon", "Sports Car", "Luxury Car", "Electric", "Hybrid", "Crossover", "Roadster", "Compact", "Muscle Car", "Off-Road", "Van", "Microcar", "Limousine"];
const availabilityOptions = ["Available", "Unavailable"];

const UpdateCarModal = ({ car }) => {
    const router = useRouter();

    const [imageFields, setImageFields] = useState(
        car?.imageURL?.length ? car.imageURL : [""]
    );

    const handleUpdateCar = async (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const updatedCar = {
            dailyRentPrice: Number(form.get("dailyRentPrice")),
            carType: form.get("carType"),
            imageURL: form.getAll("imageURL").filter(img => img.trim() !== ""),
            pickupLocation: form.get("pickupLocation"),
            description: form.get("description"),
            availabilityStatus: form.get("availabilityStatus"),
            about: form.get("about"),
        };
        // console.log(updatedCar);
        const { data: tokenData } = await authClient.token();
        const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/cars/${car?._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(updatedCar)
        })
        const res = await req.json();
        // console.log(res); 
        if (res?.modifiedCount > 0) {
            toast.success("Updated Successfully");
            router.push(`/explore-cars/${car?._id}`)
        }

    };

    return (
        <Modal>
            <Button variant="danger" className={' bg-[#092eff] rounded-full hover:shadow-xl hover:shadow-red-300 hover:scale-105'}>Update Car</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Body className="p-2 w-full">
                            <Surface variant="default">
                                <div className="">

                                    {/* Header */}
                                    <div className="mb-5">
                                        <h1 className="text-2xl font-bold text-gray-900">Update Your Car</h1>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleUpdateCar} className="space-y-2">

                                        {/* Top Fields */}
                                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                                            <div>
                                                <label className="mb-2 block text-sm font-semibold text-gray-700">Daily Rent Price</label>

                                                <input
                                                    defaultValue={car?.dailyRentPrice}
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
                                                    defaultValue={car?.carType}
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

                                                {imageFields.map((image, index) => (

                                                    <div key={index} className="flex gap-3">

                                                        <input
                                                            type="text"
                                                            name="imageURL"
                                                            value={imageFields[index] || ""}
                                                            onChange={(e) => {
                                                                const updatedFields = [...imageFields];
                                                                updatedFields[index] = e.target.value;
                                                                setImageFields(updatedFields);
                                                            }}
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

                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-gray-700">Pickup Location</label>

                                            <input
                                                type="text"
                                                defaultValue={car?.pickupLocation}
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
                                                defaultValue={car?.availabilityStatus}
                                                required
                                                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500"
                                            >
                                                <option value="">Select Status</option>

                                                {availabilityOptions.map(status => (
                                                    <option key={status} value={status}>{status}</option>
                                                ))}
                                            </select>
                                        </div>


                                        {/* Description */}
                                        <div>
                                            <label className="mb-2 block text-sm font-semibold text-gray-700">Description</label>

                                            <textarea
                                                name="description"
                                                defaultValue={car?.description}
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
                                                defaultValue={car?.about}
                                                rows={4}
                                                placeholder="Write something about the car..."
                                                required
                                                className="w-full rounded-2xl border border-gray-300 px-4 py-4 outline-none transition focus:border-red-500"
                                            />
                                        </div>


                                        {/* Buttons */}
                                        <button
                                            type="submit"
                                            className="rounded-xl bg-green-500 p-2 w-full text-lg font-semibold text-white transition hover:bg-red-600"
                                        >
                                            Update Car
                                        </button>


                                    </form>
                                </div>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>





    );
};

export default UpdateCarModal;