import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/MenuPage'
import ContactPage from './pages/ContactPage'
import products from './data.json'


export default function App() {
    const [currentPage, setCurrentPage] = useState('home')
    const [cart, setCart] = useState([])
    const [showCart, setShowCart] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [orderComplete, setOrderComplete] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('all')

    const addToCart = (product) => {
      setCart(prev => {
        const existing = prev.find(item => item.id === product.id)
        if (existing) {
          return prev.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
        return [...prev, { ...product, quantity: 1 }]
      })
    }

    const updateQuantity = (id, change) => {
        setCart(prev => {
            return prev.map(item => {
                if (item.id === id) {
                    const newQuantity = item.quantity + change
                    return newQuantity > 0 ? { ...item, quantity: newQuantity } : null
                }
                return item
            }).filter(Boolean)
        })
    }

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
    }

    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.category === selectedCategory)

    const featuredProducts = products.filter(product => product.featured)

    const handleCheckout = () => {
        setShowCart(false)
        setShowCheckout(true)
    }

    const handlePayment = (e) => {
        e.preventDefault()
        setShowCheckout(false)
        setOrderComplete(true)
        setCart([])
        setTimeout(() => setOrderComplete(false), 5000)
    }

    return (
        <Routes>
            <Route path='/' element={<HomePage addToCart={addToCart} featuredProducts={featuredProducts} setShowCart={setShowCart} setSelectedCategory={setSelectedCategory} cart={cart} setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />} />
            <Route path='/menu' element={<MenuPage setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} filteredProducts={filteredProducts} addToCart={addToCart} />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
        </Routes>
    )
}

{/* <div className="">
    {showCart && <CartModal setShowCheckout={setShowCheckout} updateQuantity={updateQuantity} getTotalPrice={getTotalPrice} handleCheckout={handleCheckout} cart={cart} />}
    {showCheckout && <CheckoutModal setShowCheckout={setShowCheckout} handlePayment={handlePayment} getTotalPrice={getTotalPrice} cart={cart} />}
    {orderComplete && <OrderCompleteModal setOrderComplete={setOrderComplete} />}
</div> */}
