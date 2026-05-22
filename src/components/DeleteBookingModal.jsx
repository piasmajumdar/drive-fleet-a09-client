'use client'
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';
import { toast } from 'react-toastify';

const DeleteBookingModal = ({booking, revalidateMyBooking}) => {
    const handleDelete = async() =>{
        const {data:tokenData} = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/bookings/${booking?._id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${tokenData?.token}`
            }
        });
        const data = await res.json();
        // console.log(data);
        if(data?.deletedCount > 0){
            toast.success(`${booking?.car?.carName}- booking deleted successfully`);
            revalidateMyBooking();
        }
    }
    return (
        <div>
            <AlertDialog>
                <Button variant="danger">Delete</Button>
                <AlertDialog.Backdrop isKeyboardDismissDisabled={false}>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete this booking permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>your {booking?.car?.carName} booking</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} slot="close" variant="danger">
                                    Confirm Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteBookingModal;