import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">Contact Us</h2>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg mb-8 md:mb-0">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get in Touch</h3>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                <input type="text" id="name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input type="email" id="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Email" />
                            </div>
                            {/* NEW: Mobile Number Field */}
                            <div className="mb-4">
                                <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
                                <input type="tel" id="mobile" name="mobile" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Mobile Number" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                                <textarea id="message" name="message" rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300">Send Message</button>
                        </form>
                    </div>
                    <div className="md:w-1/2 bg-gray-100 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6 text-gray-900">Our Location</h3>
                        <p className="text-gray-700 mb-4">
                            <strong>Shanvika Infrastructures</strong><br />
                            Sitara Galaxy, 892W+RJ8, Nallapadu Rd,<br />
                            Nallapadu, Guntur, Andhra Pradesh 522004
                        </p>
                        <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 9063371667</p>
                        <p className="text-gray-700 mb-4"><strong>Email:</strong> info@shanvikainfra.com</p>
                        {/* Google Maps Embed */}
                        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                            <iframe
                               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.408790043172!2d80.39400227366148!3d16.30204383316612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75e9e6e7f755%3A0x412bc439600da838!2sSitara%20Galaxy!5e0!3m2!1sen!2sin!4v1748611589292!5m2!1sen!2sin" 
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                         <a href="https://maps.google.com/?cid=4696062787167561784" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Contact;