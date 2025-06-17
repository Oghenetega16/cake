import { Award, Heart, Clock, Star, Plus, ArrowRight } from "lucide-react"

export default function HeroSection({ addToCart, featuredProducts }) {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-pulse">Sweet Delights Bakers</h1>
                    <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto">Handcrafted cakes, pastries, and desserts made with love and the finest ingredients</p>
                    <div className="space-x-4">
                        <button
                        className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                        >
                        Order Now
                        </button>
                        <button
                        className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300"
                        >
                        Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <Award className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
                            <p className="text-gray-600">Recognized for excellence in baking and customer service</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
                            <p className="text-gray-600">Every item is crafted with care and attention to detail</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <Clock className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
                            <p className="text-gray-600">Baked fresh every morning using premium ingredients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Items</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                        Our most popular and beloved creations, perfect for any occasion
                        </p>
                    </div>
                
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <div className="p-6">
                                    <div className="text-6xl text-center mb-4">{product.image}</div>
                                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                                    <div className="flex items-center mb-3">
                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl font-bold text-pink-600">${product.price}</span>
                                        <button
                                        onClick={() => addToCart(product)}
                                        className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors flex items-center"
                                        >
                                        <Plus className="h-4 w-4 mr-1" />
                                        Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                
                    <div className="text-center mt-12">
                        <button
                        className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-colors inline-flex items-center"
                        >
                        View Full Menu
                        <ArrowRight className="h-4 w-4 ml-2" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}