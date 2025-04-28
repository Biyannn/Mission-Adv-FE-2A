const DescriptionBox = ({ description }) => {
    return (
      <div className="p-6 gap-6 flex flex-col border-2 rounded-lg border-[#3A35411F] bg-white w-full">
        <h5 className="text-xl font-semibold text-[#222325]">Deskripsi</h5>
        <p className="text-base font-normal text-[#333333AD]">{description}</p>
      </div>
    );
  };

  export default DescriptionBox;