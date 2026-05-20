"use client"
import { Button } from '@heroui/react';
import React from 'react';
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
// import { authClient } from '@/lib/auth-client';
import Link from 'next/link';

const UserProfileRightNav = () => {


    return (
        <div>

            <ul className='flex gap-3 items-center'>
                <h2>Pias</h2>
                <Dropdown>
                    <Dropdown.Trigger className="rounded-full">
                        <Avatar>
                            <Avatar.Image
                                src="https://th.bing.com/th/id/OIP.ebK-XOuvOGkjkUP7mcmEjwHaNN?w=115&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                alt='user profile'
                            />
                            <Avatar.Fallback delayMs={600}>N/A</Avatar.Fallback>
                        </Avatar>
                    </Dropdown.Trigger>
                    <Dropdown.Popover>
                        <div className="px-3 pt-3 pb-1">
                            <div className="flex items-center gap-2">
                                <Avatar size="sm">
                                    <Avatar.Image
                                        src="https://th.bing.com/th/id/OIP.ebK-XOuvOGkjkUP7mcmEjwHaNN?w=115&h=191&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                                        alt='user profile'
                                    />
                                    <Avatar.Fallback delayMs={600}>PM</Avatar.Fallback>
                                </Avatar>
                                <div className="flex flex-col gap-0">
                                    <p className="text-sm leading-5 font-medium">Pias</p>
                                    <p className="text-xs leading-none text-muted">pias@gmail.com</p>
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
                            <Dropdown.Item id="myAddedCar" textValue="myAddedCar">
                                <Link href={'/my-added-car'}><Label>My Added Car</Label></Link>
                            </Dropdown.Item>
                            <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                                <div className="flex w-full items-center justify-between gap-2">
                                    <Label>Logout</Label>
                                    <ArrowRightFromSquare className="size-3.5 text-danger" />
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Popover>
                </Dropdown>
            </ul>



        </div>
    );
};

export default UserProfileRightNav;