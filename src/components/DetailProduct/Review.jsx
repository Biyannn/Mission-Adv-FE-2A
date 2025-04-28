const Review = ({ background, count, rate, titlereview }) => {
    return (
      <div className="p-6 gap-6 border-2 rounded-lg border-[#3A35411F] bg-white">
        <h2 className="text-xl font-semibold pb-2">{titlereview}</h2>
        <div className="justify-between flex md:space-x-4 max-md:flex-col max-md:space-y-2">
          {background &&
            background.map((review) => (
              <div
                key={review.id}
                className="border-4 border-solid border-[#3A35411F] rounded-md bg-white p-2"
              >
                <div className="p-2 gap-4 bg-white border-1 border-[#3A35411F] rounded-sm border-solid flex justify-start items-center">
                  <img src={review.img} alt="" className="h-10 w-10 rounded-md" />
                  <div className="flex flex-col">
                    <p className="text-base font-semibold text-[#222325]">
                      {review.name}
                    </p>
                    <p className="text-sm font-light">{review.title}</p>
                  </div>
                  <div className="flex flex-col"></div>
                </div>
                <p className="text-base font-normal text-[#222325] flex px-2">
                  {review.text}
                </p>
                <div className="flex pt-4 pl-2">
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
                  <p className="pl-2 text-sm text-gray-500 dark:text-gray-400 flex flex-col">
                    {rate}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };

  export default Review;