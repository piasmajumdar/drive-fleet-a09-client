"use client";

const Loading = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-white dark:bg-transparent">

            <div className="flex flex-col items-center gap-6">

                {/* Spinner */}
                <div className="relative h-20 w-20">

                    <div className="absolute inset-0 rounded-full border-4 border-red-100"></div>

                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-red-500 border-r-red-400"></div>

                </div>

                {/* Brand */}
                <div className="text-center">

                    <h1 className="text-4xl font-black tracking-tight text-gray-900 dark:text-white">
                        DriveFleet
                    </h1>

                    <p className="mt-2 text-gray-500 dark:text-white">
                        Preparing your premium ride...
                    </p>

                </div>

                {/* Loading Dots */}
                <div className="flex gap-2">

                    <span className="h-3 w-3 animate-bounce rounded-full bg-red-500"></span>

                    <span className="h-3 w-3 animate-bounce rounded-full bg-red-400 [animation-delay:0.2s]"></span>

                    <span className="h-3 w-3 animate-bounce rounded-full bg-red-300 [animation-delay:0.4s]"></span>

                </div>

            </div>

        </div>
    );
};

export default Loading;