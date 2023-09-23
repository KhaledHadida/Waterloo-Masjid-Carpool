import React from 'react'
import Link from 'next/link'
import Header from '../common/header'
import Footer from '../common/footer'

const ServicesPage = () => {
    return (
        <div>
            <Header />
            <br></br>
            <div class="flex items-center justify-center">
                <div class="w-1/2 min-w-fit flex items-center justify-around pt-20 pb-20 bg-gray-300">
                    <Link href="#" class="p-3 bg-white border hover:text-blue-700">Driver?</Link>
                    <Link href="#" class="p-3 bg-white border hover:text-blue-700">Passenger?</Link>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default ServicesPage