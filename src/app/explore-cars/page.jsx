import CarCard from "@/components/CarCard";
import SearchBar from "@/components/SearchBar";

const getCars = async (search = "", type = "") => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/cars?search=${search}&type=${type}`,
        { cache: "no-store" }
    );
    return res.json();
};

const ExploreCarsPage = async ({ searchParams }) => {
    const sp = await searchParams;
    const cars = await getCars(
        sp.search || "",
        sp.type || ""
    );

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
                        cars.map(car => {
                            return <CarCard key={car._id} car={car}></CarCard>
                        })
                    }

                </div>
                {
                    cars.length == 0 && <div className="h-[40vh] flex items-center justify-center">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold">No Cars Found</h2>
                            <h2 className="text-muted">Search another model or type</h2>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default ExploreCarsPage;