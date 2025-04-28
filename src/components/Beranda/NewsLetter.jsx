const NewsLetter = () => {
  return (
    <div className="py-10">
    <section className="bg-[url('/images/background.jpg')] w-full bg-no-repeat bg-cover bg-center rounded-lg flex justify-center items-center">
      <div className="bg-gradient-to-t from-black/80 to-black/80 w-full h-auto text-white justify-center text-center items-center roundend-lg gap-6 py-10 flex flex-col">
        <h4 className="text-lg text-center  font-medium">NEWSLETTER</h4>
        <h2 className="text-3xl text-center font-semibold">
          Mau Belajar Lebih Banyak?
        </h2>
        <p className="text-base font-normal flex flex-col ">
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id!
        </p>
        <div className=" py-2 px-2 bg-white rounded-xl flex">
          <input
            type="email"
            placeholder="Masukan Emailmu"
            className="grow border-none pb-2 pl-6 py-2 gap-5 text-base rounded-lg text-slate-800 flex"
          />
          <button className="bg-[#ffbd3a] text-white py-2 px-6 gap-2 border-none rounded-lg cursor-pointer text-base flex">
            Subscribe
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default NewsLetter;
