export default function OrderCompleteModal({ setOrderComplete }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-md w-full p-8 text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Order Complete!</h3>
                <p className="text-gray-600 mb-6">Thank you for your order! We'll have your delicious treats ready for pickup or delivery soon.</p>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-600">Order #12345</p>
                    <p className="text-sm text-gray-600">Estimated pickup: 2-3 hours</p>
                </div>
                <button
                    onClick={() => setOrderComplete(false)}
                    className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    )
}