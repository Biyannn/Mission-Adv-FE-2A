const BannerTop = ({ titlepage, textpage, count, rate }) => {
  return (
    <section className="bg-[url('/images/background.jpg')] w-full bg-no-repeat bg-cover bg-center rounded-lg flex justify-center items-center">
      <div className=" bg-gradient-to-t from-black/80 to-black/80 w-full h-auto text-white roundend-lg flex flex-col gap-6 pb-16 pt-20 px-24 rounded-md">
        <h2 className="text-4xl text-white font-semibold justify-start">
          {titlepage}
        </h2>
        <p className="text-base text-white font-medium justify-start">
          {textpage}
        </p>
        <div className="flex my-2">
          {(() => {
            const arr = [];
            for (let i = 0; i < 5; i++) {
              if (i < count) {
                arr.push(
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                );
              } else {
                arr.push(
                  <svg
                    className="w-4 h-4 text-gray-300 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                );
              }
            }
            return arr;
          })()}
          <p className="ml-1 text-sm text-gray-500 dark:text-gray-400 flex flex-col">
            {rate}
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerTop;
