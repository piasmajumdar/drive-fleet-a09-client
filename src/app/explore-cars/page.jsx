import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";


const ExploreCarsPage = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/cars`, {
        cache: "no-store"
    });
    const cars = await res.json();
    console.log(cars)


    return (
        <div className="w-11/12 mx-auto py-6">
            <div>
                <h2 className="font-bold text-3xl">Find The <span className="text-red-700">Perfect Car</span></h2>
                <p className="text-muted">Search from our wide range of cars</p>
                <div>
                    <SearchBar></SearchBar>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 gap-3 my-3">
                    {
                        cars.map(car=>{
                            return <CarCard key={car._id} car={car}></CarCard>
                        })
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default ExploreCarsPage;