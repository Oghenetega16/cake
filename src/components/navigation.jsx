import { ChefHat, ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navigation({ setShowCart, cart, setMobileMenuOpen, mobileMenuOpen, currentPage, setCurrentPage }) {

    function getTotalItems() {
        return cart.reduce((total, item) => total + item.quantity, 0)
    }

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                    <Link to="/">
                        <div className="flex-shrink-0 flex items-center cursor-pointer">
                            <ChefHat className="h-8 w-8 text-pink-600 mr-2" />
                            <span className="font-bold text-xl text-gray-900">Sweet Delights</span>
                        </div>
                    </Link>
                </div>
                
                <div className="hidden md:flex items-center space-x-8">
                    {['home', 'menu', 'about', 'contact'].map((page) => (
                        <button
                        key={page}
                        className={`capitalize font-medium transition-colors cursor-pointer ${
                            currentPage === page
                            ? 'text-pink-600 border-b-2 border-pink-600'
                            : 'text-gray-700 hover:text-pink-600'
                        }`}
                        >
                        {page}
                        </button>
                    ))}
                </div>
    
                <div className="flex items-center space-x-4">
                <button
                    onClick={() => setShowCart(true)}
                    className="relative p-2 text-gray-700 hover:text-pink-600 transition-colors"
                >
                    <ShoppingCart className="h-6 w-6 cursor-pointer" />
                    {getTotalItems() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {getTotalItems()}
                    </span>
                    )}
                </button>
                
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 text-gray-700"
                >
                    <Menu className="h-6 w-6" />
                </button>
                </div>
            </div>
            </div>
    
            {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t">
                <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'menu', 'about', 'contact'].map((page) => (
                    <button
                    key={page}
                    onClick={() => {
                        setCurrentPage(page);
                        setMobileMenuOpen(false);
                    }}
                    className={`capitalize block px-3 py-2 text-base font-medium w-full text-left ${
                        currentPage === page
                        ? 'text-pink-600 bg-pink-50'
                        : 'text-gray-700 hover:text-pink-600 hover:bg-gray-50'
                    }`}
                    >
                    {page}
                    </button>
                ))}
                </div>
            </div>
            )}
        </nav>
    )
}