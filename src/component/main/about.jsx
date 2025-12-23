import Navbar from '../nav/navbar.jsx';

const About = () => {
	return (
		<div className="bg-gradient-to-br from-pink-300 to-pink-100 min-h-screen">
			<Navbar />

			<main className="max-w-6xl mx-auto px-6 py-20">
				{/* Hero */}
				<section className="text-center">
					<h1 className="text-5xl sm:text-6xl font-extrabold text-gray-800 bg-gradient-to-r from-rose-600 via-pink-500 to-red-400 bg-clip-text text-transparent font-['Playfair_Display'] drop-shadow-lg">
						About LipE
					</h1>
					<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
						Curating shades and moments — clean ingredients, bold color,
						and confidence in every swipe.
					</p>
				</section>

				{/* Story + Image */}
				<section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
					<div>
						<h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
						<p className="mt-4 text-gray-700 leading-relaxed">
							Founded with a love for colours and a belief that makeup
							should empower, LipE began as a small collection of
							thoughtfully-formulated lip products. We blend modern
							aesthetics with tried-and-true craftsmanship to create
							shades that celebrate individuality.
						</p>

						<ul className="mt-6 space-y-3 text-gray-700">
							<li className="flex items-start gap-3">
								<span className="text-pink-600 font-bold">•</span>
								Ethically sourced ingredients
							</li>
							<li className="flex items-start gap-3">
								<span className="text-pink-600 font-bold">•</span>
								Cruelty-free and gentle formulations
							</li>
							<li className="flex items-start gap-3">
								<span className="text-pink-600 font-bold">•</span>
								Designed for real skin tones and everyday wear
							</li>
						</ul>

						<button className="mt-6 bg-rose-400 hover:bg-pink-600 text-white px-5 py-3 rounded-full shadow-lg transition transform hover:scale-105">
							Shop Our Shades
						</button>
					</div>

					<div className="w-full">
						<img src="/img/bodyimg.jpg" alt="about banner" className="w-full h-80 object-cover rounded-xl shadow-md" />
					</div>
				</section>

				{/* Mission */}
				<section className="mt-16 bg-white/60 p-8 rounded-xl shadow-sm">
					<h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
					<p className="mt-3 text-gray-700">
						We want every person who wears LipE to feel seen. Our mission is
						to make high-quality lip products accessible without compromising
						on sustainability, performance, or style.
					</p>

					<div className="mt-6 flex flex-col sm:flex-row gap-6">
						<div className="flex-1 bg-pink-50 p-6 rounded-lg">
							<h4 className="font-semibold text-gray-800">Quality</h4>
							<p className="text-gray-600 mt-2">Premium pigments and lasting wear.</p>
						</div>
						<div className="flex-1 bg-pink-50 p-6 rounded-lg">
							<h4 className="font-semibold text-gray-800">Sustainability</h4>
							<p className="text-gray-600 mt-2">Thoughtful packaging and conscious sourcing.</p>
						</div>
						<div className="flex-1 bg-pink-50 p-6 rounded-lg">
							<h4 className="font-semibold text-gray-800">Community</h4>
							<p className="text-gray-600 mt-2">Celebrating diversity and creative expression.</p>
						</div>
					</div>
				</section>

				
				<section className="mt-16 text-center">
					<div className="inline-block bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-6 rounded-2xl shadow-lg">
						<h4 className="Text-xl font-bold">Ready to try your perfect shade?</h4>
						<p className="mt-2 text-sm opacity-90">Free returns and quick delivery across India.</p>
						<button className="mt-4 bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition">Shop Now</button>
					</div>
				</section>
			</main>
		</div>
	);
};

export default About;

