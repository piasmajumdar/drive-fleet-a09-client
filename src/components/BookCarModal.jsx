import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { MdFavoriteBorder } from "react-icons/md";

const BookCarModal = () => {
    return (
        <div>
            <Modal>
                <Button variant="secondary">Open Contact Form</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Body className="p-2">
                                <Surface variant="default">
                                    <form className="flex flex-col gap-4">
                                        {/* RIGHT */}
                                        <div className="bg-white rounded-[28px] border border-gray-200 p-7 shadow-sm">

                                            <h2 className="text-3xl font-bold text-black mb-8">
                                                Book This Car
                                            </h2>

                                            {/* Price */}
                                            <div className="flex items-center justify-between mb-8">
                                                <span className="text-gray-500">
                                                    Daily Rent
                                                </span>

                                                <span className="text-3xl font-black text-red-600">
                                                    $120
                                                </span>
                                            </div>

                                            {/* Inputs */}
                                            <div className="space-y-5">

                                                <div>
                                                    <label className="text-sm text-gray-500 block mb-2">
                                                        Pick-up Location
                                                    </label>

                                                    <input
                                                        type="text"
                                                        value="Dhaka, Bangladesh"
                                                        readOnly
                                                        className="w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none bg-white focus:border-red-500"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="text-sm text-gray-500 block mb-2">
                                                        Pick-up Date
                                                    </label>

                                                    <input
                                                        type="date"
                                                        className="w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none bg-white focus:border-red-500"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="text-sm text-gray-500 block mb-2">
                                                        Return Date
                                                    </label>

                                                    <input
                                                        type="date"
                                                        className="w-full h-14 rounded-2xl border border-gray-200 px-4 outline-none bg-white focus:border-red-500"
                                                    />
                                                </div>
                                            </div>

                                            {/* Price Summary */}
                                            <div className="border-t border-gray-200 mt-8 pt-6 space-y-4">

                                                <div className="flex items-center justify-between text-gray-500">
                                                    <span>Total Days</span>
                                                    <span>3 Days</span>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-500">
                                                        Total Price
                                                    </span>

                                                    <span className="text-3xl font-black text-red-600">
                                                        $360
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Buttons */}
                                            <div className="mt-8 space-y-4">

                                                <Button slot="close" className="w-full h-14 rounded-2xl bg-red-600 hover:bg-red-700 transition text-white font-semibold text-lg shadow-md">
                                                    Book Now
                                                </Button>
                                            </div>
                                        </div>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default BookCarModal;