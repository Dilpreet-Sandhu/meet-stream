'use client'
import { useAppSelector } from '@/redux/store';
import { redirect, usePathname } from 'next/navigation';
import React from 'react';
import {Toaster} from 'react-hot-toast';

interface props {
    children : React.ReactNode
}

const ProtectedRoute : React.FC<props> = ({children}) => {

    const user = useAppSelector(state => state.user.user);

    const pathName = usePathname();

    if (!user && pathName.startsWith("/meeting")) {
        redirect("/")
    }

  return (
    <>
    {children}
    <Toaster position='top-center'/>
    </>
  )
}

export default ProtectedRoute
