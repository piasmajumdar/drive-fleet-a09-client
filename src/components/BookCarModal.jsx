"use client"
import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdFavoriteBorder } from "react-icons/md";
import { toast } from "react-toastify";

const BookCarModal = ({ car }) => {
    const router = useRouter()
    const bookingDate = new Date();
    console.log(bookingDate)

    const { data: session , isPending} = authClient.useSession()
    // console.log(session?.user);
    const backend = process.env.NEXT_PUBLIC_BACKEND_SERVER_URL
    console.log(backend)

    const handleLoginBeforeBook = () => {
        if (!session) {
            router.push('/auth/login')
        }
    }

    const handleBookCar = async (e) => {
        if (session?.user) {
            e.preventDefault();
            const form = new FormData(e.currentTarget)
            const formData = Object.fromEntries(form.entries())
            const bookingDetails = {
                ...formData,
                userId: session?.user.id,
                bookingDate,
                car
            }
            // console.log(bookingDetails);

            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/bookings`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(bookingDetails)
            })
            const data = await res.json();
            console.log(data)
            if(data.success){
                toast.success(`${car?.carName} booked successfully`);
                window.location.reload()
            }
        }
    }
    return (
        <div>
            <Modal>
                <Button onClick={handleLoginBeforeBook} isDisabled={isPending ? true : false} variant="danger" className={'text-2xl bg-red-600 rounded-md hover:shadow-xl hover:shadow-red-300 hover:scale-105 p-5'}>Book Now</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Body className="p-2 w-full">
                                <Surface variant="default">
                                    <form onSubmit={handleBookCar} className="flex flex-col gap-4">

                                        <div className="bg-white rounded-[28px] border border-gray-200 p-7 shadow-sm">

                                            <h2 className="text-3xl font-bold text-black mb-8">
                                                Book {car?.carName}
                                            </h2>

                                            {/* Price */}
                                            <div className="flex items-center justify-between mb-8">
                                                <span className="text-gray-500">
                                                    Daily Rent
                                                </span>

                                                <span className="text-3xl font-black text-red-600">
                                                    BDT {car?.dailyRentPrice}
                                                </span>
                                            </div>

                                            {/* Inputs */}
                                            <div className="space-y-5">

                                                <div>
                                                    <label className="text-sm text-gray-500 block mb-2">
                                                        Pickup Location
                                                    </label>

                                                    <input
                                                        type="text"
                                                        value={car?.pickupLocation}
                                                        readOnly
                                                        className="w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none bg-white focus:border-red-500"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="text-sm text-gray-500 block mb-2">
                                                        Driver Needed
                                                    </label>

                                                    <select
                                                        name="driver"
                                                        required
                                                        className="w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none bg-white focus:border-red-500"
                                                        defaultValue="yes"
                                                    >
                                                        <option value="yes">Yes</option>
                                                        <option value="no">No</option>
                                                    </select>
                                                </div>

                                                <div>
                                                    <label className="text-sm text-gray-500 block mb-2">
                                                        Special Note
                                                    </label>

                                                    <input
                                                        type="text"
                                                        name="note"
                                                        className="w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none bg-white focus:border-red-500"
                                                    />
                                                </div>
                                            </div>

                                            {/* Buttons */}
                                            <div className="mt-8 space-y-4">

                                                <Button type="submit" className="w-full h-14 rounded-2xl bg-red-600 hover:bg-red-700 transition text-white font-semibold text-lg shadow-md">
                                                    Book Now
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default BookCarModal;