
import Navbar from './navbar.jsx';

const Main = () => {
  // const navigate = useNavigate();

  return (
    
    <div className="bg-gradient-to-br from-pink-300 to-pink-100">

      {/* NAVBAR */}
      <Navbar/>

      {/* girl SECTION */}
      <div className="text-center mt-20 fade-in">
        <h1 className="text-6xl font-bold text-gray-700 bg-gradient-to-r from-rose-600 via-pink-500 to-red-400 
      bg-clip-text text-transparent
      font-['Playfair_Display'] drop-shadow-lg
      
">
          Shades That Speak Your Style
        </h1>

        <p className="text-2xl text-gray-400 mt-4">
          
  — find the shade that feels made for you.

        </p>
      </div>
<div className="relative w-full mt-6">
        
        {/* Banner Image */}
        <img
          src="/img/bodyimg.jpg"
          className="w-full h-[450px] object-cover rounded-xl shadow-lg"
          alt="banner"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center">

          <h1 className="text-white text-5xl font-extrabold drop-shadow-lg">
            Discover Your Perfect Shade
          </h1>

          <p className="text-pink-100 text-lg max-w-2xl mt-3 drop-shadow">
            Trending lipstick shades, premium finish, and unique tones crafted just for you.
          </p>

          <button className="mt-5 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full text-lg shadow-lg hover:scale-105 transition">
            Explore Shades
          </button>
        </div>
      </div>


      
      <section className="w-full px-10 py-16 flex items-center justify-center bg-transparent">
        
        {/* Left Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src="/img/tone3.jpg"
            alt="lipstick shades"
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-1/2 pl-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Say Hello! to Glow
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Search with your shade ranges for Lipcare ideas that<br />
            represent you
          </p>

          <button className="mt-6 bg-rose-400 hover:bg-pink-700 text-white text-lg
                             font-semibold px-5 py-3 rounded-full hover:scale-105
                             transition shadow-lg">
            Shop Now
          </button>
        </div>
      </section>

      {/* PRODUCT SECTION */}
<section className="px-10 py-20">

  {/* Heading */}
  <h2 className="font-[Montserrat] tracking-[0.3em] font-light text-4xl font-bold text-center text-gray-800 mb-12">
    NEW LAUNCHES
  </h2>

  {/* grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

    {/* Product Card  */}
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition">
      <img
        src="/img/lip2.jpg"
        alt="lipstick"
        className="w-35 h-56 object-cover mx-auto rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">
        Matte Transferproof Lipstick
      </h3>
      <p className="text-gray-600">Rs. 499</p>
      <div className="text-yellow-500 text-sm mt-1">
        ⭐⭐⭐⭐☆ (1049)
      </div>
      <button className="mt-4 w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">
        ADD TO CART
      </button>
    </div>

    {/* Product Card  */}
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition">
      <img
        src="/img/lip4.webp"
        alt="lip gloss"
        className="w-35 h-56 mx-auto object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">
        Plumping Gloss Stick
      </h3>
      <p className="text-gray-600">Rs. 699</p>
      <div className="text-yellow-500 text-sm mt-1">
        ⭐⭐⭐⭐☆ (1436)
      </div>
      <button className="mt-4 w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">
        ADD TO CART
      </button>
    </div>

    {/* Product Card  */}
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition">
      <img
        src="/img/lip5.webp"
        alt="serum lipstick"
        className="w-35 h-56 object-cover mx-auto rounded-lg mb-4 "
      />
      <h3 className="text-lg font-semibold text-gray-800">
        Serum Lipstick
      </h3>
      <p className="text-gray-600">Rs. 749</p>
      <div className="text-yellow-500 text-sm mt-1">
        ⭐⭐⭐⭐☆ (1160)
      </div>
      <button className="mt-4 w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">
        ADD TO CART
      </button>
    </div>

    {/* Product Card  */}
    <div className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition">
      <img
        src="/img/lip1.webp"
        alt="cream lipstick"
        className="w-35 h-56 object-cover mx-auto rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800">
        Creamy Matte Lipstick
      </h3>
      <p className="text-gray-600">Rs. 488</p>
      <div className="text-yellow-500 text-sm mt-1">
        ⭐⭐⭐⭐☆ (1136)
      </div>
      <button className="mt-4 w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">
        ADD TO CART
      </button>
    </div>

  </div>
</section>

    </div>
    
  );
};

export default Main;

