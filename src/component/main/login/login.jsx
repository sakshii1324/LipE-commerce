const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-2xl font-bold text-pink-600 text-center mb-6">
          Login to Your Account
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 border rounded"
        />

        <button className="w-full bg-pink-500 text-white py-2 rounded">
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;
