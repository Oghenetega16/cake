import ChefHat from "lucide-react"

export default function AboutPage() {
    return (
        <div className="py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About Sweet Delights</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Founded in 2010, Sweet Delights has been serving the community with exceptional baked goods for over a decade
                </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div>
                    <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                    <p className="text-gray-600 mb-4">
                    What started as a small family bakery has grown into a beloved local institution. Our passion for baking 
                    and commitment to quality has remained unchanged since day one.
                    </p>
                    <p className="text-gray-600 mb-4">
                    We believe that every celebration deserves something special, and every ordinary day can be made extraordinary 
                    with the perfect sweet treat.
                    </p>
                    <p className="text-gray-600">
                    Our team of skilled bakers uses only the finest ingredients, traditional techniques, and a lot of love to 
                    create memorable experiences for our customers.
                    </p>
                </div>
                <div className="bg-pink-100 rounded-lg p-8 text-center">
                    <ChefHat className="h-24 w-24 text-pink-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Master Bakers</h4>
                    <p className="text-gray-600">
                    Our experienced team brings decades of combined expertise in traditional and modern baking techniques
                    </p>
                </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🥇</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Quality First</h4>
                    <p className="text-gray-600">We never compromise on quality, using only premium ingredients</p>
                </div>
                <div className="text-center">
                    <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌟</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Customer First</h4>
                    <p className="text-gray-600">Your satisfaction is our top priority in everything we do</p>
                </div>
                <div className="text-center">
                    <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💚</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Community Love</h4>
                    <p className="text-gray-600">Proud to be part of this wonderful community for over 10 years</p>
                </div>
                </div>
            </div>
        </div>
    )
}
