import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignUp ? "Sign Up" : "Login", { name, email, password });
  };

  return (
    <div className="bg-gradient-to-br from-pink-300 to-pink-100 min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-red-400 bg-clip-text text-transparent font-['Playfair_Display']">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            {isSignUp
              ? "Join our beauty community"
              : "Sign in to your account"}
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field (Sign Up Only) */}
            {isSignUp && (
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full
                             focus:outline-none focus:ring-2 focus:ring-pink-500
                             text-gray-700 placeholder-gray-400 transition"
                  required={isSignUp}
                />
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-full
                           focus:outline-none focus:ring-2 focus:ring-pink-500
                           text-gray-700 placeholder-gray-400 transition"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-full
                           focus:outline-none focus:ring-2 focus:ring-pink-500
                           text-gray-700 placeholder-gray-400 transition"
                required
              />
            </div>

            {/* Forgot Password Link (Login Only) */}
            {!isSignUp && (
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-pink-600 hover:text-pink-700 text-sm font-medium transition"
                >
                  Forgot Password?
                </a>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700
                         text-white font-bold py-3 rounded-full text-lg
                         hover:scale-105 transition shadow-lg mt-6"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button className="flex-1 py-3 border border-gray-300 rounded-full
                               hover:bg-gray-50 transition font-semibold text-gray-700">
              Google
            </button>
            <button className="flex-1 py-3 border border-gray-300 rounded-full
                               hover:bg-gray-50 transition font-semibold text-gray-700">
              Facebook
            </button>
          </div>

          {/* Toggle Sign Up / Login */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setName("");
                  setEmail("");
                  setPassword("");
                }}
                className="text-pink-600 hover:text-pink-700 font-bold ml-1 transition"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-6">
          <p className="text-gray-700">
            By continuing, you agree to our
            <a href="#" className="text-pink-600 hover:text-pink-700 font-semibold ml-1">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;