import AddedCarCard from "@/components/AddedCarCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from 'next/cache';

const MyAddedCar = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const ownerId = session?.user?.id;
    console.log(ownerId)

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/cars/my-added-cars/${ownerId}`,{
        cache: "no-store"
    });
    const myAddedCars = await res.json();

    const revalidateMyAddedCarsPath = async () => {
        "use server"
        revalidatePath('/my-added-cars')

    }

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
                {
                    myAddedCars.length > 0
                        ? <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 gap-3 my-3">
                            {
                                myAddedCars.map(myAddedCar => <AddedCarCard key={myAddedCar._id} car={myAddedCar} revalidateMyAddedCarsPath={revalidateMyAddedCarsPath}></AddedCarCard>)
                            }
                        </div>
                        : <div className="h-[40vh] flex items-center justify-center">
                            <div className="text-center">
                                <h2 className="text-2xl font-bold">No Cars Found</h2>
                                <h2 className="text-muted">You have not added any cars.</h2>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default MyAddedCar;