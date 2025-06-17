import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react'

export default function ContactPage() {
    <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                We'd love to hear from you! Get in touch for orders, questions, or just to say hello
            </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-pink-600 mr-4" />
                    <div>
                    <h4 className="font-semibold">Address</h4>
                    <p className="text-gray-600">123 Baker Street, Sweetville, SV 12345</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Phone className="h-6 w-6 text-pink-600 mr-4" />
                    <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-gray-600">(555) 123-CAKE</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Mail className="h-6 w-6 text-pink-600 mr-4" />
                    <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-gray-600">hello@sweetdelights.com</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Clock className="h-6 w-6 text-pink-600 mr-4" />
                    <div>
                    <h4 className="font-semibold">Hours</h4>
                    <p className="text-gray-600">Mon-Sat: 7AM-8PM, Sun: 8AM-6PM</p>
                    </div>
                </div>
                </div>

                <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                    <div className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors cursor-pointer">
                    <Instagram className="h-5 w-5" />
                    </div>
                    <div className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors cursor-pointer">
                    <Facebook className="h-5 w-5" />
                    </div>
                    <div className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors cursor-pointer">
                    <Twitter className="h-5 w-5" />
                    </div>
                </div>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    placeholder="Your name"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    placeholder="your.email@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                    placeholder="Your message..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors"
                >
                    Send Message
                </button>
                </form>
            </div>
            </div>
        </div>
    </div>
}