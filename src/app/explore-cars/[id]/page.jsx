import CarDetailsCard from "@/components/CarDetailsCard";

const CarDetailsPage = async({params}) => {
    const {id} = await params;

    const res = await fetch(`${process.env.BACKEND_SERVER_URL}/cars/${id}`);
    const car = await res.json();
    console.log(car)

    
    return (
        <div className="w-11/12 mx-auto my-4">
            <CarDetailsCard></CarDetailsCard>
        </div>
    );
};

export default CarDetailsPage;