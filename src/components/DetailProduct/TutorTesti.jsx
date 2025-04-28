const TutorTesti = ({ titleTutor, background }) => {
  return (
    <div className="p-6 gap-6 border-2 rounded-lg border-[#3A35411F] bg-white">
      <h2 className="text-xl font-semibold pb-2">{titleTutor}</h2>
      <div className="justify-between flex md:space-x-4 max-md:flex-col max-md:space-y-2">
        {background &&
          background.map((tutor) => (
            <div
              key={tutor.id}
              className="border-4 border-solid border-[#3A35411F] rounded-md bg-white p-2"
            >
              <div className="p-2 gap-4 bg-white border-1 border-[#3A35411F] rounded-sm border-solid flex justify-start items-center">
                <img src={tutor.img} alt="" className="h-10 w-10 rounded-md" />
                <div className="flex flex-col">
                  <p className="text-base font-medium text-[#222325]">
                    {tutor.name}
                  </p>
                  <p className="text-sm font-normal text-[#333333AD]">
                    {tutor.position}{" "}
                    <a href="#" className="font-bold">
                      {tutor.work}
                    </a>
                  </p>
                </div>
                <div className="flex flex-col"></div>
              </div>
              <p className="text-base font-normal text-[#222325] flex px-2">
                {tutor.text}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TutorTesti;
