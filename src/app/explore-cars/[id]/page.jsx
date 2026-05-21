import CarDetailsCard from "@/components/CarDetailsCard";

const CarDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/cars/${id}`, {
        cache: "no-store"
    });
    const car = await res.json();
    // console.log(car)


    return (
        <div className="bg-[#d7d5d552]/20">
            <div className="w-11/12 mx-auto my-4 ">
                <CarDetailsCard car={car}></CarDetailsCard>
            </div>
        </div>
    );
};

export default CarDetailsPage;