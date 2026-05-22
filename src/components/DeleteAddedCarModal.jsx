"use client"
import React from 'react';
import { AlertDialog, Button } from '@heroui/react';
import { toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';

const DeleteAddedCarModal = ({ car, revalidateMyAddedCarsPath }) => {
    const handleDelete = async()=>{
        const { data: tokenData } = await authClient.token();
        const req = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/cars/${car._id}`,{
            method: "DELETE",
            headers: {
                authorization: `Bearer ${tokenData?.token}`
            }
        })
        const res = await req.json();
        // console.log(res);
        if(res.deletedCount>0){
            toast.success(`${car?.carName} deleted successfully`);
            revalidateMyAddedCarsPath()
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
                                <AlertDialog.Heading>Delete this car permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete your added car-<strong> {car?.carName}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button
                                    onClick={handleDelete}
                                    slot="close" variant="danger">
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

export default DeleteAddedCarModal;