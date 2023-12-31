import React from 'react'
import Head from "next/head"
import Header from "@/components/Header"

const Layout = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="decription" content={description} />
                <meta property="og:site_name" content="Portfolio" />
                <meta property="og:title" content={title} />
                <meta property="decription" content={description} />
                <link rel="icon" href="favicon.ico" />
              {/* <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="Gökçe" data-description="Support me on Buy me a coffee!" data-message="To make time for more projects, you can buy me a coffee ! :)" data-color="#FF813F" data-position="Right" data-x_margin="18" data-y_margin="18"></script> */}
            </Head>
            <div className='relative z-10 px-3 overflow-hidden min-h-screen bg-primary-light dark:bg-gray-900 font-montserrat'>
                <div className='w-full h-full'>
                    <Header />
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout