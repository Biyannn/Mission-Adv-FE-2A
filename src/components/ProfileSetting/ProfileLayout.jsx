import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../Elements/Input/InputForm";
import Number from "../Elements/Input/Number";
import Button from "../Elements/Button";
import { useAuthStore } from "../../../service/User";

const ProfileLayout = () => {
  const navigate = useNavigate();

  // Ambil fungsi dari store secara terpisah untuk menjaga referensi stabil
  const fetchUsers = useAuthStore((state) => state.fetchUsers);
  const updateProfile = useAuthStore((state) => state.updateProfile);
  const deleteUser = useAuthStore((state) => state.deleteUser);
  // Ambil data currentUser
  const currentUser = useAuthStore((state) => state.currentUser);

  // Local form state
  const [formData, setFormData] = useState({
    name: "",
    nameDisplay: "",
    email: "",
    emailDisplay: "",
    phone: "",
    phoneDisplay: "",
  });
  const [error, setError] = useState(null);
  

  // Fetch users sekali saat mount
  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Saat currentUser tersedia, populate formData
  useEffect(() => {
    if (currentUser) {
      setFormData({
        name: currentUser.name || "",
        nameDisplay: currentUser.name || "",
        email: currentUser.email || "",
        emailDisplay: currentUser.email || "",
        phone: currentUser.phone || "",
        phoneDisplay: currentUser.phone || "",
      });
    }
  }, [currentUser]);

  // Redirect ke register kalau belum login
  useEffect(() => {
    if (!currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    setError(null);
    try {
      await updateProfile(currentUser.id, formData);
      alert("Profil berhasil diperbarui");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Yakin hapus akun? Ini tidak bisa dibatalkan."
    );
    if (!confirmed) return;
    try {
      await deleteUser(currentUser.id);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  // Guard: tunggu currentUser
  if (!currentUser) return null;

  return (
    <div>
      <div className="py-16 px-28 justify-between md:flex grid grid-cols-auto-fill max-md:space-y-2">
        {/* Left Section start */}
        <div className="flex flex-col my-2">
          <div className="justify-start items-start flex flex-col ">
            <h3 className="text-xl font-semibold py-2">Ubah Profil</h3>
            <p className="text-base font-normal pb-6">Ubah data diri anda</p>
            {error && <p className="text-red-500 mb-2">{error}</p>}
          </div>
          <div className="flex flex-col bg-white p-6 border-2 border-[#3A35411F] rounded-lg">
            <p className="flex hover:bg-[#FFBD3A] hover:bg-opacity-20 hover:text-[#FFBD3A] hover:border-[#FFBD3A] hover:border-2 hover:rounded-md text-center p-3 text-lg font-bold text-[#3A354161]">
              <img src="./icons/Person.png" alt="" className="w-9 mr-2" />
              Profil Saya
            </p>
            <p className="flex hover:bg-[#FFBD3A] hover:bg-opacity-20 hover:text-[#FFBD3A] hover:border-[#FFBD3A] hover:border-2 hover:rounded-md text-center p-3 text-lg font-bold text-[#3A354161]">
              <img src="./icons/Book.png" alt="" className="w-9 mr-2" />
              Kelas Saya
            </p>
            <p className="flex hover:bg-[#FFBD3A] hover:bg-opacity-20 hover:text-[#FFBD3A] hover:border-[#FFBD3A] hover:border-2 hover:rounded-md text-center p-3 text-lg font-bold text-[#3A354161]">
              <img src="./icons/Keranjang.png" alt="" className="w-9 mr-2" />
              Pesanan Saya
            </p>
          </div>
        </div>
        {/* Left Section end */}

        {/* Right Section Start  */}
        <div className="bg-white p-6 border-2 border-[#3A35411F] rounded-lg max-md:space-x-2">
          <div className="flex">
            <img
              src="./Avatar/profile layout.png"
              alt=""
              className="w-24 h-24"
            />
            <div className="flex flex-col px-4 space-y-2">
              <p className="text-xl font-semibold text-[#222325]">
                {formData.nameDisplay}
              </p>
              <p className="text-base font-normal text-[#222325] max-md:pr-2">
                {formData.emailDisplay}
              </p>
              <a href="#" className="text-[#F64920] text-base font-semibold">
                Ganti Foto Profile
              </a>
            </div>
          </div>
          {/* Right Section End */}
          <img
            src="./icons/Horizontal"
            alt=""
            className="w-11/12 justify-center items-center text-center my-10 bg-[#3A35411F] border-2 border-[#3A35411F] flex"
          />
          {/* Form Input Start */}
          <div className="flex md:space-x-6 max-md:space-y-2 justify-center max-md:flex-col">
            <label className="flex flex-col text-sm font-normal  hover:text-[#3ECF4C]">
              <InputForm
                label="Full Name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label className="flex flex-col text-sm font-normal  hover:text-[#3ECF4C]">
              <InputForm
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <Number
              label="Phone Number"
              name="phone"
              type="text"
              placeholder="0812xxxx"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="pr-5">
            <Button
              onClick={handleUpdate}
              variant="bg-[#3ecf4c]"
              color="text-white"
            >
              Update
            </Button>
            <Button
              onClick={handleDelete}
              variant="bg-red-500"
              color="text-white"
            >
              Delete Account
            </Button>
          </div>
        </div>
      </div>
      {/* Form Input End */}
    </div>
  );
};

export default ProfileLayout;
