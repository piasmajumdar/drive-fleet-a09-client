import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import UserProfileRightNav from './UserProfileRightNav';
import { plusJakarta } from '@/app/layout';
import NavLink from './NavLink';
import { Button, Drawer } from "@heroui/react";
import { ImMenu } from 'react-icons/im';


const Navbar = async () => {
    const links = <>
        <li><NavLink href={'/'}>Home</NavLink></li>
        <li><NavLink href={'/explore-cars'}>Explore Cars</NavLink></li>
        <li><NavLink href={'/add-car'}>Add Car</NavLink></li>
        <li><NavLink href={'/my-bookings'}>My Bookings</NavLink></li>
    </>


    return (
        <div className='bg-red-100/20 border-b border-b-red-100'>
            <div className='w-11/12 mx-auto'>
                <div className='flex justify-between items-center py-5'>

                    <div className='flex items-center gap-0'>
                        <div className=' md:hidden'>
                            <Drawer>
                                <Button className={'bg-white text-red-600'}><ImMenu></ImMenu></Button>
                                <Drawer.Backdrop>
                                    <Drawer.Content placement="left max-w-64">
                                        <Drawer.Dialog>
                                            <Drawer.Header>
                                                <Drawer.Heading>
                                                    <Link href={'/'} className={`${plusJakarta.className}`}>
                                                        <h2 className='text-2xl font-bold'>DriveFleet</h2>
                                                    </Link>
                                                </Drawer.Heading>
                                            </Drawer.Header>
                                            <Drawer.Body className='space-y-5 pt-5'>
                                                <Button className='bg-transparent p-0 m-0 border-0 block' slot='close'><NavLink href={'/'}>Home</NavLink></Button>
                                                <Button className='bg-transparent p-0 m-0 border-0 block' slot='close'><NavLink href={'/explore-cars'}>Explore Cars</NavLink></Button>
                                                <Button className='bg-transparent p-0 m-0 border-0 block' slot='close'><NavLink href={'/add-car'}>Add Car</NavLink></Button>
                                                <Button className='bg-transparent p-0 m-0 border-0 block' slot='close'><NavLink href={'/my-bookings'}>My Bookings</NavLink></Button>
                                            </Drawer.Body>

                                        </Drawer.Dialog>
                                    </Drawer.Content>
                                </Drawer.Backdrop>
                            </Drawer>
                        </div>

                        <Link href={'/'} className={`${plusJakarta.className} flex gap-1 items-center`}>
                            <Image src={'/logo.png'} alt='nav' height={40} width={40}></Image>
                            <h2 className='text-2xl font-bold hidden sm:flex'>DriveFleet</h2>
                        </Link>
                    </div>

                    <ul className='gap-3 hidden md:flex'>
                        {links}
                    </ul>


                    <UserProfileRightNav></UserProfileRightNav>

                </div>
            </div>
        </div>
    );
};

export default Navbar;