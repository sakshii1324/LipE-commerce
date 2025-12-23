import Navbar from '../nav/navbar.jsx';

const NudeShades = () => {
  const nudeShades = [
    {
      id: 1,
      name: 'Warm Honey',
      price: 549,
      rating: 4.8,
      reviews: 892,
      image: '/img/lip1.webp',
      description: 'A soft, warm nude with golden undertones',
    },
    {
      id: 2,
      name: 'Creamy Beige',
      price: 549,
      rating: 4.7,
      reviews: 756,
      image: '/img/lip2.jpg',
      description: 'Classic creamy beige for everyday wear',
    },
    {
      id: 3,
      name: 'Peachy Nude',
      price: 549,
      rating: 4.9,
      reviews: 1204,
      image: '/img/tone3.jpg',
      description: 'Subtle peach-nude blend for warmth',
    },
    {
      id: 4,
      name: 'Mauve Blush',
      price: 549,
      rating: 4.6,
      reviews: 645,
      image: '/img/lip5.webp',
      description: 'Muted mauve with nude undertones',
    },
    {
      id: 5,
      name: 'Rosy Nude',
      price: 549,
      rating: 4.8,
      reviews: 923,
      image: '/img/lip4.webp',
      description: 'Warm nude with a hint of rose',
    },
    {
      id: 6,
      name: 'Soft Caramel',
      price: 549,
      rating: 4.7,
      reviews: 834,
      image: '/img/bodyimg.jpg',
      description: 'Rich caramel-toned nude shade',
    },
    {
      id: 7,
      name: 'Bare Pink',
      price: 549,
      rating: 4.9,
      reviews: 1087,
      image: '/img/lip2.jpg',
      description: 'Barely-there pink nude perfection',
    },
    {
      id: 8,
      name: 'Terracotta Nude',
      price: 599,
      rating: 4.7,
      reviews: 712,
      image: '/img/lip1.webp',
      description: 'Earthy terracotta with warm depth',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-pink-300 to-pink-100 min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl sm:text-5xl font-extrabold text-gray-800 bg-gradient-to-r from-rose-600 via-pink-500 to-red-400 bg-clip-text text-transparent font-['Playfair_Display'] drop-shadow-lg">
            Nude Shades Collection
          </h1>
          {/* <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Timeless nudes that complement every skin tone. Find your perfect everyday shade
            with our carefully curated collection of warm, cool, and balanced nude tones.
          </p> */}

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
              All Shades
            </button>
            {/* <button className="bg-white/70 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-white transition">
              Warm Undertones
            </button>
            <button className="bg-white/70 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-white transition">
              Cool Undertones
            </button> */}
          </div>
        </section>

        {/* Products Grid */}
        <section className="px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nudeShades.map((shade) => (
              <div
                key={shade.id}
                className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 h-56">
                  <img
                    src={shade.image}
                    alt={shade.name}
                    className="w-full h-full object-cover hover:scale-110 transition"
                  />
                  <div className="absolute top-2 right-2 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ♥
                  </div>
                </div>

                {/* Details */}
                <h3 className="text-lg font-semibold text-gray-800">{shade.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{shade.description}</p>
                
                <div className="flex items-center justify-between mt-3">
                  <p className="text-pink-600 font-bold text-lg">Rs. {shade.price}</p>
                  <div className="text-yellow-500 text-sm">
                    ⭐ {shade.rating}
                  </div>
                </div>

                <p className="text-gray-500 text-xs mt-1">({shade.reviews} reviews)</p>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-black text-white py-2 rounded-full hover:bg-gray-800 transition text-sm font-semibold">
                    ADD TO CART
                  </button>
                  <button className="flex-1 bg-pink-100 text-pink-600 py-2 rounded-full hover:bg-pink-200 transition text-sm font-semibold">
                    TRY ON
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Info Banner */}
        <section className="mt-16 bg-white/60 p-8 rounded-xl shadow-sm text-center">
          <h3 className="text-2xl font-semibold text-gray-800">Find Your Perfect Nude</h3>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Not sure which nude is right for you? Our shade finder helps you discover
            the perfect nude based on your skin tone and undertones. All our nudes are
            long-wearing, transfer-proof, and made with nourishing ingredients.
          </p>
          <button className="mt-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Take the Shade Quiz
          </button>
        </section>

        {/* Features */}
        <section className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">✓</div>
            <h4 className="font-semibold text-gray-800">Universally Flattering</h4>
            <p className="text-gray-600 text-sm mt-2">Nudes designed to complement all skin tones</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">⏱️</div>
            <h4 className="font-semibold text-gray-800">16H Wear Time</h4>
            <p className="text-gray-600 text-sm mt-2">Long-lasting formulas that don't fade</p>
          </div>
          <div className="bg-white rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">💅</div>
            <h4 className="font-semibold text-gray-800">Cruelty-Free</h4>
            <p className="text-gray-600 text-sm mt-2">All formulations are 100% cruelty-free</p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-6 rounded-2xl shadow-lg">
            <h4 className="text-xl font-bold">Swipe, Save, Slay</h4>
            <p className="mt-2 text-sm opacity-90">Create your nude collection today — free samples on orders over Rs. 999</p>
            <button className="mt-4 bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
              Shop Now
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default NudeShades;
