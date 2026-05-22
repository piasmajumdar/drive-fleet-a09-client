import DeleteBookingModal from "@/components/DeleteBookingModal";
import { auth } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import Image from "next/image";

const MyBookingsPage = async () => {

    const revalidateMyBooking = async () => {
        "use server"
        revalidatePath('/my-bookings')
    }

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const userId = session?.user?.id;
    // console.log(ownerId)

    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token);


    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/bookings/${userId}`, {
        cache: "no-store",
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const bookings = await res.json();
    // console.log(bookings)

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-transparent py-10">
            <div className="w-11/12 mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">All Bookings</h1>
                    <p className="mt-2 text-gray-500 dark:text-white">
                        Manage your all car bookings
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white dark:bg-transparent shadow-sm">
                    <table className="min-w-full">
                        <thead className="border-b border-gray-200 bg-gray-50">
                            <tr>
                                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700">
                                    Car Details
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700">
                                    Booking Date
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700">
                                    Driver
                                </th>

                                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-700">
                                    Daily Rent Price
                                </th>

                                <th className="px-6 py-5 text-center text-sm font-semibold text-gray-700">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {bookings.map((booking) => (
                                <tr
                                    key={booking._id}
                                    className="border-b border-gray-100 transition hover:bg-red-50"
                                >
                                    {/* Car Details */}
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="relative h-20 w-28 overflow-hidden rounded-xl">
                                                <Image
                                                    src={booking.car.imageURL[0]}
                                                    alt={booking.car.carName}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>

                                            <div>
                                                <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                                                    {booking.car.carName}
                                                </h2>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    {booking.car.pickupLocation}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Booking Date */}
                                    <td className="px-6 py-5">
                                        <div className="text-sm font-medium text-gray-800 dark:text-white">
                                            {new Date(booking.bookingDate).toLocaleDateString("en-GB", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </div>

                                        <div className="mt-1 text-sm text-gray-500 dark:text-white">
                                            {new Date(booking.bookingDate).toLocaleTimeString("en-US", {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </div>
                                    </td>

                                    {/* Driver */}
                                    <td className="px-6 py-5">
                                        <span
                                            className={`rounded-full px-4 py-1 text-sm font-medium ${booking.driver === "yes"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {booking.driver === "yes"
                                                ? "Needed"
                                                : "NO"}
                                        </span>
                                    </td>

                                    {/* Total Price */}
                                    <td className="px-6 py-5 text-base font-semibold text-gray-900 dark:text-white">
                                        ৳ {booking?.car?.dailyRentPrice}
                                    </td>

                                    {/* Action */}
                                    <td className="px-6 py-5 text-center">
                                        <DeleteBookingModal revalidateMyBooking={revalidateMyBooking} booking={booking}></DeleteBookingModal>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Empty State */}
                    {bookings.length === 0 && (
                        <div className="flex h-52 items-center justify-center">
                            <p className="text-lg text-gray-500">
                                No bookings found
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyBookingsPage;