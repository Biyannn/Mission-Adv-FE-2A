import InputForm from "../Elements/Input/InputForm";
import Button from "../Elements/Button";
import ButtonGoogle from "../Elements/Button/Google";
import Number from "../Elements/Input/Number";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../service/User";

const FormRegister = () => {
  const navigate = useNavigate();
  const register = useAuthStore((state) => state.register);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("handleChange", name, value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (form.password !== form.confirmPassword) {
      setError("Password dan konfirmasi tidak cocok");
      return;
    }

    try {
      await register({
        name: form.name,
        email: form.email,
        password: form.password,
        phone: form.phone,
      });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-white border-2 rounded-lg border-solid border-black w-1/2 h-auto py-6 items-center mx-auto mt-28 justify-center">
      <form onSubmit={handleSubmit}>
        <p className="justify-center text-xl font-semibold items-center flex mb-6">
          Register
        </p>
        <InputForm
          label="Fullname"
          name="name"
          type="text"
          placeholder="Insert your fullname"
          value={form.name}
          onChange={handleChange}
        />
        <InputForm
          label="Email"
          name="email"
          type="email"
          placeholder="ayy@gmail.com"
          value={form.email}
          onChange={handleChange}
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          placeholder="******"
          value={form.password}
          onChange={handleChange}
        />
        <Number
          label="Phone Number"
          name="phone"
          type="number"
          placeholder="Insert your phone number"
          value={form.phone}
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
        <InputForm
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your new passsword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <p className="text-sm mb-2 text-right mr-4">Forgot Password?</p>
        <Button variant="bg-[#3ecf4c]" color="text-white" type="submit">
          Register
        </Button>
        <Button
          variant="bg-[#e2fcd9]"
          color="text-[#3ecf4c]"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <p className="text-md my-2 text-center">Or</p>
        <ButtonGoogle />
      </form>
    </div>
  );
};

export default FormRegister;
