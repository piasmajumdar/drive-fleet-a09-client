import { plusJakarta } from "@/app/layout";
import { FaCarSide, FaUsers, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const features = [
    {
        id: 1,
        icon: <FaCarSide className="text-3xl text-red-500" />,
        value: "600+",
        label: "Cars Available",
    },
    {
        id: 2,
        icon: <FaUsers className="text-3xl text-red-500" />,
        value: "12K+",
        label: "Happy Customers",
    },
    {
        id: 3,
        icon: <FaMapMarkerAlt className="text-3xl text-red-500" />,
        value: "40+",
        label: "Pickup Locations",
    },
    {
        id: 4,
        icon: <FaStar className="text-3xl text-red-500" />,
        value: "4.8",
        label: "Customer Rating",
    },
];

const Feature = () => {
    return (
        <section className="w-full py-10 my-5">
            <div className="w-11/12 mx-auto grid grid-cols-1 overflow-hidden rounded-xl border border-gray-200 shadow-sm sm:grid-cols-2 lg:grid-cols-4">

                {features.map((feature, index) => (
                    <div
                        key={feature.id}
                        className={`flex items-center gap-5 px-6 py-8 ${index !== features.length - 1
                            ? "border-b border-gray-200 lg:border-b-0 lg:border-r"
                            : ""
                            }`}
                    >
                        {/* Icon */}
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
                            {feature.icon}
                        </div>

                        {/* Text */}
                        <div className={`${plusJakarta.className}`}>
                            <h2 className="text-3xl font-bold text-black dark:text-white">
                                {feature.value}
                            </h2>

                            <p className="mt-1 text-sm text-gray-500">
                                {feature.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Feature;