'use client'
import { auth } from '@/auth';
import { useAppSelector } from '@/redux/store';
import { redirect, usePathname } from 'next/navigation';
import React from 'react';
import {Toaster} from 'react-hot-toast';

interface props {
    children : React.ReactNode
}

const ProtectedRoute : React.FC<props> = async ({children}) => {

   
  return (
    <>
    {children}
    <Toaster position='top-center'/>
    </>
  )
}

export default ProtectedRoute
