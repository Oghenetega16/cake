import { Star, Plus } from 'lucide-react';

export default function Menu({ setSelectedCategory, selectedCategory, filteredProducts, addToCart }) {

    const categories = [
        { id: 'all', name: 'All Items', icon: '🍰' },
        { id: 'cakes', name: 'Cakes', icon: '🎂' },
        { id: 'pastries', name: 'Pastries', icon: '🥐' },
        { id: 'cupcakes', name: 'Cupcakes', icon: '🧁' },
        { id: 'muffins', name: 'Muffins', icon: '🧁' },
        { id: 'desserts', name: 'Desserts', icon: '🍮' }
    ]

    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Menu</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">Explore our delicious selection of cakes, pastries, and desserts</p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center ${
                        selectedCategory === category.id
                            ? 'bg-pink-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 hover:bg-pink-50 border border-gray-200'
                        }`}
                    >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                    </button>
                    ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
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
            </div>
        </div>
    )
}