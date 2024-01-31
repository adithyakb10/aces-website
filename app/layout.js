"use client";

import Footer from '@components/footer';
import Navbar from '@components/navbar'
import '@styles/globals.css'
import { useDarkMode } from '@lib/darkMode';

export default function RootLayout({ children }) {
    const [darkMode, toggleDarkMode] = useDarkMode();

    return (
        <html lang="en">
            <body className={`main-layout ${darkMode ? 'dark-mode' : ''}`}>
                <section className="min-h-screen">
                    <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} className='px-5' />
                    <div style={{ paddingTop: '80px'}} className='px-10'>{children}</div>
                    <Footer />
                </section>
            </body>
        </html>
    )
}