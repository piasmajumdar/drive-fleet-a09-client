"use client"
import { Button } from '@heroui/react';
import React from 'react';
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from 'next/link';
import { authClient } from './../lib/auth-client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const UserProfileRightNav = () => {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession()
    // console.log(session?.user)
    const handleLogOut = async () => {
        const data = await authClient.signOut();
        // console.log(data);
        if (data.data.success) {
            toast.success("Logout Successfully");
            router.push('/auth/login')
        }
    }

    return (
        <div className='flex gap-1 items-center'>
            <ThemeToggle></ThemeToggle>
            {isPending ? "Loading..." :
                session ?
                    <div className='flex gap-3 items-center'>
                        <h2 className='hidden sm:inline'>{session?.user?.name.split(" ")[0]}</h2>
                        <Dropdown>
                            <Dropdown.Trigger className="rounded-full">
                                <Avatar>
                                    <Avatar.Image
                                        src={session?.user?.image}
                                        alt='user profile'
                                    />
                                    <Avatar.Fallback delayMs={600}>{session?.user?.name}</Avatar.Fallback>
                                </Avatar>
                            </Dropdown.Trigger>
                            <Dropdown.Popover>
                                <div className="px-3 pt-3 pb-1">
                                    <div className="flex items-center gap-2">
                                        <Avatar size="sm">
                                            <Avatar.Image
                                                src={session?.user?.image}
                                                alt='user profile'
                                            />
                                            <Avatar.Fallback delayMs={600}>{session?.user?.name}</Avatar.Fallback>
                                        </Avatar>
                                        <div className="flex flex-col gap-0">
                                            <p className="text-sm leading-5 font-medium">{session?.user?.name}</p>
                                            <p className="text-xs leading-none text-muted">{session?.user?.email}</p>
                                        </div>
                                    </div>
                                </div>
                                <Dropdown.Menu>
                                    <Dropdown.Item id="addCar" textValue="addCar">
                                        <Link href={'/add-car'}><Label>Add Car</Label></Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="myBookings" textValue="myBookings">
                                        <Link href={'/my-bookings'}><Label>My Bookings</Label></Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="myAddedCars" textValue="myAddedCars">
                                        <Link href={'/my-added-cars'}><Label>My Added Cars</Label></Link>
                                    </Dropdown.Item>
                                    <Dropdown.Item id="logout" textValue="Logout" onClick={handleLogOut} variant="danger">
                                        <div className="flex w-full items-center justify-between gap-2">
                                            <Label>Logout</Label>
                                            <ArrowRightFromSquare className="size-3.5 text-danger" />
                                        </div>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    </div>
                    :
                    <Button variant="danger" className={'bg-[#c40101] mt-auto rounded-md hover:scale-105 hover:shadow-xl hover:shadow-red-200'}><Link href={'/auth/login'}>Login</Link> </Button>
                    
            }


        </div >


    );
};

export default UserProfileRightNav;