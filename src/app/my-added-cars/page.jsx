import AddedCarCard from "@/components/AddedCarCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const MyAddedCar = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const ownerId = session?.user?.id;
    console.log(ownerId)

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/cars/my-added-cars/${ownerId}`);
    const myAddedCars = await res.json();

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="w-11/12 mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">My Added Cars</h1>
                    <p className="mt-2 text-gray-500">
                        Manage the car you have listed
                    </p>
                </div>

                {/* Added Car */}
                <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 gap-3 my-3">
                    {
                        myAddedCars.map(myAddedCar => <AddedCarCard key={myAddedCar._id} car={myAddedCar}></AddedCarCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MyAddedCar;