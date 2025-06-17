import Navigation from "../components/navigation";
import Footer from "../components/footer";
import HeroSection from "../components/herosection";

export default function HomePage({ addToCart, featuredProducts, setShowCart, getTotalItems, setMobileMenuOpen, mobileMenuOpen }) {
    return (
        <main className="min-h-screen bg-gray-50">
            <Navigation setShowCart={setShowCart} getTotalItems={getTotalItems} setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
            <HeroSection addToCart={addToCart} featuredProducts={featuredProducts} />
            <Footer />
        </main>
    )
}