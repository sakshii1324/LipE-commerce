import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();

  return (
    <nav className="text-white px-6 py-3">
        <div className="max-w-8xl mx-auto flex items-center justify-between"> 

          {/* Logo */}
           <a href="/" className="w-12 h-10 font-bold mr-6 ml-3">
            <img src="/img/logo.svg" alt="logo" />
          </a> 

          {/* Menu */}
           <ul id="menu" className="font-[Montserrat] tracking-[0.2em] font-light hidden md:flex gap-10 font-medium text-lg">
            <li><a href="/" className="hover:scale-110 text-gray-400 transition">HOME</a></li>
            <li><a href="/about" className="hover:text-gray-400  transition">ABOUT</a></li>
            <li><a href="/shade" className="hover:text-gray-400 transition">NUDE SHADES</a></li>
            <li><a href="/shade" className="hover:text-gray-400 transition">GLOSS</a></li>
            <li><a href="/shade" className="hover:text-gray-400 transition">LIP OIL</a></li>
            <li>
            <img src="/img/cart-large-2-svgrepo-com.svg" alt="cart" className="w-7 h-7 absolute hover:scale-110" /></li>
          </ul> 

          {/* Search Bar */}
           <div className="ml-10 relative">
            <img
              src="/img/lipstick-makeup-svgrepo-com.svg"
              className="w-7 h-7 absolute top-2 right-3"
              alt="search icon"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-80 py-3 px-3 rounded-full border border-gray-400
                         focus:outline-none focus:ring-2 focus:ring-gray-400
                         text-sm bg-white text-gray-700"
            />
          </div> 

          {/* Login Button */}
          
           <button 
          onClick={() => navigate("/login")}         
            className="hidden md:inline-block bg-gray-700 hover:shadow-lg px-5 py-3 rounded-full
                       hover:bg-gray-600 hover:scale-105 transition ml-12"
          >
            Login
          </button>
        </div>
      </nav>
);
};

export default Navbar;
