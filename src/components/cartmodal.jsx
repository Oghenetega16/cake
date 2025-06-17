import { Minus, Plus, CreditCard } from 'lucide-react'

export default function CartModal({ setShowCart, updateQuantity, getTotalPrice, handleCheckout, cart }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-hidden">
            <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Shopping Cart</h3>
                <button
                    onClick={() => setShowCart(false)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <X className="h-6 w-6" />
                </button>
                </div>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-64">
                {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                <div className="space-y-4">
                    {cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center">
                        <span className="text-2xl mr-3">{item.image}</span>
                        <div>
                            <h4 className="font-medium">{item.name}</h4>
                            <p className="text-sm text-gray-600">${item.price}</p>
                        </div>
                        </div>
                        <div className="flex items-center">
                        <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-gray-400 hover:text-gray-600 p-1"
                        >
                            <Minus className="h-4 w-4" />
                        </button>
                        <span className="mx-3 font-medium">{item.quantity}</span>
                        <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-gray-400 hover:text-gray-600 p-1"
                        >
                            <Plus className="h-4 w-4" />
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
                )}
            </div>
            
            {cart.length > 0 && (
                <div className="p-6 border-t">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-semibold">Total: ${getTotalPrice().toFixed(2)}</span>
                </div>
                <button
                    onClick={handleCheckout}
                    className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors flex items-center justify-center"
                >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Proceed to Checkout
                </button>
                </div>
            )}
            </div>
        </div>
    )
}