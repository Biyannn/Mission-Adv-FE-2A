import { useState } from "react";
const Introduction = ({ course }) => {
    const [show, setShow] = useState({});
    const tutup = (id) => {
      setShow({ ...show, [id]: !show[id] });
    };
    return (
      <div className="p-6 gap-6 bg-white border-2 rounded-lg border-[#3A35411F]">
        <h4 className="text-xl font-semibold gap-6 pb-6">Kamu akan Mempelajari</h4>
        <div>
          {course &&
            course.map((bundle) => (
              <div key={bundle.id}>
                <div className="justify-between flex">
                  <h2 className="text-lg font-semibold text-[#3ECF4C] gap-6 pb-2">
                    {bundle.Judul}
                  </h2>
  
                  <img
                    src={bundle.icon}
                    alt=""
                    className="w-6 h-6"
                    onClick={() => tutup(bundle.id)}
                  />
                </div>
                {show[bundle.id] &&
                  bundle.materi.map((pack) => (
                    <div
                      key={pack.id}
                      className="flex justify-between py-2 px-2 border-2 border-[#3A35411F] rounded-sm mb-2 max-md:flex max-md:flex-col"
                    >
                      <p>{pack.isi}</p>
                      <div className="flex space-x-2 max-md:flex">
                        <img src={pack.img} alt="" />
                        <p>{pack.video}</p>
                        <img src={pack.icon} alt="" />
                        <p>{pack.duration}</p>
                      </div>
                      {/* {console.log(pack)} */}
                    </div>
                  ))}
                {/* {console.log(bundle)} */}
              </div>
            ))}
        </div>
      </div>
    );
  };

  export default Introduction;