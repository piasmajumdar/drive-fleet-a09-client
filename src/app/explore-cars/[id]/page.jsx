const CarDetailsPage = async({params}) => {
    const {id} = await params;

    const res = await fetch(`${process.env.BACKEND_SERVER_URL}/cars/${id}`);
    const car = await res.json();
    console.log(car)

    
    return (
        <div className="w-11/12 mx-auto">
            Car Details
        </div>
    );
};

export default CarDetailsPage;