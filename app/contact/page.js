import React from 'react'
import Header from '../common/header'
import Footer from '../common/footer'

const ContactPage = () => {
    return (
        <div>
            <Header />
            <div class="flex justify-center items-center p-10 text-lg">
                <p>Get in touch with us.</p>
            </div>
            <div class="flex justify-center items-center">
                <div class="p-10 text-lg bg-gray-300 w-1/2">
                    <label for="name" class="pr-5">Name</label>
                    <input type="text" id="name" name="name" autoComplete='off' /><br /><br />
                    <label for="email" class="pr-5">Email</label>
                    <input type="text" id="email" name="email" autoComplete='off' /><br /><br />
                    <label for="phone" class="pr-5">Phone</label>
                    <input type="text" id="phone" name="phone" autoComplete='off' /><br /><br />
                    <label for="msg" class="pr-5 block">Message</label>
                    <input type="text" id="msg" name="msg" autoComplete='off' class="w-10/12 h-56" /><br /><br />
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default ContactPage