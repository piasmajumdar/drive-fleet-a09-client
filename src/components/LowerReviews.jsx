import { FaStar } from "react-icons/fa";

const reviews = [
    {
        id: 1,
        name: "Rahim Ahmed",
        location: "Dhaka",
        review:
            "গাড়ির সার্ভিস সত্যিই অসাধারণ ছিল। বুকিং প্রসেস খুব সহজ এবং গাড়ির কন্ডিশন একদম পারফেক্ট ছিল।",
    },
    {
        id: 2,
        name: "Nusrat Jahan",
        location: "Chattogram",
        review:
            "আমি প্রথমবার এখানে গাড়ি ভাড়া নিয়েছি এবং অভিজ্ঞতা দারুণ ছিল। স্টাফরা খুবই সহযোগিতাপূর্ণ।",
    },
    {
        id: 3,
        name: "Tanvir Hasan",
        location: "Sylhet",
        review:
            "সময়মতো গাড়ি পেয়েছি এবং পুরো রাইড ছিল খুব কমফোর্টেবল। ভবিষ্যতেও এখান থেকেই বুক করবো।",
    },
];

const LowerReviews = () => {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto w-11/12">

                {/* Section Header */}
                <div className="text-center">
                    <p className="text-sm font-semibold uppercase tracking-[4px] text-red-500">
                        Customer Reviews
                    </p>

                    <h2 className="mt-4 text-4xl font-extrabold text-black md:text-5xl">
                        আমাদের গ্রাহকদের মতামত
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
                        আমাদের সার্ভিস নিয়ে গ্রাহকদের বাস্তব অভিজ্ঞতা ও ফিডব্যাক।
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            {/* Stars */}
                            <div className="flex items-center gap-1 text-red-500">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="mt-6 text-base leading-8 text-gray-700">
                                “{review.review}”
                            </p>

                            {/* User Info */}
                            <div className="mt-8 border-t border-gray-100 pt-5">
                                <h3 className="text-lg font-bold text-black">
                                    {review.name}
                                </h3>

                                <p className="mt-1 text-sm text-gray-500">
                                    {review.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LowerReviews;