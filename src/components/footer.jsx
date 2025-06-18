import { ChefHat, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <ChefHat className="h-8 w-8 text-pink-400 mr-2" />
                            <span className="font-bold text-xl">Sweet Delights</span>
                        </div>
                        <p className="text-gray-400 mb-4">Creating sweet memories one bite at a time since 2010.</p>
                        <div className="flex space-x-4">
                            <div className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors cursor-pointer">
                                <Instagram className="h-4 w-4" />
                            </div>
                            <div className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors cursor-pointer">
                                <Facebook className="h-4 w-4" />
                            </div>
                            <div className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors cursor-pointer">
                                <Twitter className="h-4 w-4" />
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><button className="hover:text-white transition-colors cursor-pointer">Home</button></li>
                            <li><button className="hover:text-white transition-colors cursor-pointer">Menu</button></li>
                            <li><button className="hover:text-white transition-colors cursor-pointer">About</button></li>
                            <li><button className="hover:text-white transition-colors cursor-pointer">Contact</button></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold mb-4">Categories</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><button className="hover:text-white transition-colors cursor-pointer">Cakes</button></li>
                            <li><button className="hover:text-white transition-colors cursor-pointer">Pastries</button></li>
                            <li><button className="hover:text-white transition-colors cursor-pointer">Cupcakes</button></li>
                            <li><button className="hover:text-white transition-colors cursor-pointer">Desserts</button></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-semibold mb-4">Contact Info</h4>
                        <div className="space-y-2 text-gray-400">
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span className="text-sm">123 Baker Street, Sweetville</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="h-4 w-4 mr-2" />
                                <span className="text-sm">(555) 123-CAKE</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-2" />
                                <span className="text-sm">hello@sweetdelights.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Sweet Delights Bakery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}