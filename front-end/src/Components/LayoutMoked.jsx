import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

/**
 * Wrap layouts
 * @param {Object} params
 * @param {JSX} params.children
 * @returns {JSX}
 */
export default function Layout({children}) {
    return (
        <>
            <Header />
            <main className="main">
                <Sidebar />
                {children}  
            </main>
            <Footer />
        </>
    )
}