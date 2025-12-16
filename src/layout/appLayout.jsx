import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Navbar';

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <main className='min-h-screen'>
                <Outlet />
            </main>
        </>
    )
}

export default AppLayout;