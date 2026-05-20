import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AddCar = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session);
    
    return (
        <div>
            Add a Car

        </div>
    );
};

export default AddCar;