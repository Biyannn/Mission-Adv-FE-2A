import { useState } from "react";
import { useNavigate } from "react-router-dom";

import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button";
import ButtonGoogle from "../Elements/Button/Google";
import { useAuthStore } from "../../../service/User";

const FormLogin = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({
        email: e.target.email.value,
        password: e.target.password.value,
      });
      navigate("/homepage");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="bg-white border-2 rounded-lg border-solid border-black w-1/2 h-auto py-6 items-center mx-auto mt-28 justify-center">
      <form onSubmit={handleLogin}>
        <p className="justify-center text-xl font-semibold items-center flex mb-6">
          Login
        </p>
        <InputForm
          label="Email"
          name="email"
          type="email"
          placeholder="ayy@gmail.com"
        />

        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="******"
        />
        
        {error && (
          <p className="text-red-500 pl-2 text-sm">
            Email atau Password salah!
          </p>
        )}
        <p className="text-sm mb-2 text-right mr-4">Forgot Password?</p>
        <Button variant="bg-[#3ecf4c]" color="text-white" type="submit">
          Login
        </Button>
        <Button
          variant="bg-[#e2fcd9]"
          color="text-[#3ecf4c]"
          onClick={() => navigate("/")}
        >
          Register
        </Button>
        <p className="text-md my-2 text-center">Or</p>
        <ButtonGoogle />
      </form>
    </div>
  );
};

export default FormLogin;
