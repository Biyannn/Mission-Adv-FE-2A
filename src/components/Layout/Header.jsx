import { Link, useLocation } from "react-router-dom";

const email = localStorage.getItem("email");

const Header = () => {
  const location = useLocation();
  const hiddenPages = ["/login", "/"];
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("fullname");
    localStorage.removeItem("phone");
    window.location.href = "/login";
  };
  return (
    <header className="w-full py-3 px-4 bg-white flex justify-between items-center border-b-2 border-solid border-gray-300">
      <Link to="/homepage">
      <img src="/images/logo.png" alt="logo" />
      </Link>
      <div className="text-base font-medium flex space-x-4">
        {!hiddenPages.includes(location.pathname) && (
          <div className="justify-center flex space-x-2">
            <p className="text-base font-medium text-center flex justify-center pt-2 text-[#272525ad]">
              Kategori
            </p>
            <Link
              to="/profile"
            >
              <img
                src="/Avatar/Foto akun.png"
                alt=""
                className="w-11 h-11 flex rounded-full flex-grow"
                name={email}
              />
            </Link>

            <button
              className="px-5 bg-black text-white rounded-full text-center justify-center"
              onClick={handleLogout}
            >
              {" "}
              LOGOUT{" "}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
