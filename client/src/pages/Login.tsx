import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-zinc-900">
      {/* Form Section */}
      <div className="h-screen w-full md:w-2/3 p-4 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center pb-10 text-2xl font-semibold">
            Welcome to <span className="text-violet-700">Quora</span>
          </div>
          <LoginForm />
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden md:block h-screen w-full md:w-full">
        <img
          src="https://images.unsplash.com/photo-1657639028182-24e11504c7c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="alt"
          className="max-w-full h-screen object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
