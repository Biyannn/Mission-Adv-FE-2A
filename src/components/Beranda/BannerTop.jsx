// my-0 mx-10 mt-28
const BannerTop = () => {
  return (
    <section className="bg-[url('/images/background.jpg')] w-full bg-no-repeat bg-cover bg-center rounded-lg flex justify-center items-center">
      <div className=" bg-gradient-to-t from-black/80 to-black/80 w-full h-auto text-white justify-center text-center items-center roundend-lg flex flex-col gap-6 pb-6">
        <h1 className="text-5xl text-center font-bold py-10 pb-10">
          Revolusi Pembelajaran: Temukan <br />
          Ilmu Baru melalui Platform Video Interaktif!
        </h1>
        <p className="font-medium text-base text-center flex flex-col text-[#c1c2c4]">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
        <button className="items-center justify-center bg-[#3ecf4c] border-none rounded-lg py-3 px-7 font-bold text-base text-white">
          Temukan Video Course untuk Dipelajari!
        </button>
      </div>
    </section>
  );
};

export default BannerTop;
