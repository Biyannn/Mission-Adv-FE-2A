import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Products } from "../Beranda/Data";
import BannerTop from "../DetailProduct/BannerTop";
import DescriptionBox from "../DetailProduct/DescriptionBox";
import TutorTesti from "../DetailProduct/TutorTesti";
import CardBuy from "../DetailProduct/CardBuy";
import Introduction from "../DetailProduct/Introduction";
import Review from "../DetailProduct/Review";
import { CardHeader, CardBody, Card, CardFooter } from "../Beranda/Card";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const DetailProduct = () => {
  const { id } = useParams();
  // console.log("id", id);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const foundProduct = Products.find((item) => item.id === parseInt(id));
    setProduct(foundProduct);

    // console.log("foundProduct", foundProduct);
  }, [id]);
  // console.log("product", product);
  const navigate = useNavigate();
  const limitedData = Products.slice(0, 3);
  // console.log("limitedData", limitedData);

  return (
    <>
      <Header />
      <div className=" lg:gap-16 lg:py-16 lg:px-[120px] px-7 py-5 gap-6 space-y-4">
        {/* Title Above Banner top Start */}
        <p className="text-sm font-normal text-[#3A3541AD] py-4">
          Beranda / Desain /{" "}
          <span className="text-[#222325] font-normal text-base">
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
            Manager.
          </span>
        </p>
        {/* Title Above Banner top End */}

        <BannerTop
          titlepage={product && product.titlepage}
          textpage={product && product.textpage}
          count={product && product.count}
          rate={product && product.rate}
        ></BannerTop>
        <div className="flex max-md:flex-col-reverse justify-between md:space-x-2 gap-6">
          <div className="flex flex-col space-y-4 md:w-[150%] max-md:flex-none">
            <DescriptionBox
              description={product && product.description}
            ></DescriptionBox>
            <TutorTesti
              titleTutor={product && product.titletutor}
              background={product && product.background}
            ></TutorTesti>
            <Introduction
              course={product && product.course}
              materi={product && product.materi}
            ></Introduction>
            <Review
              titlereview={product && product.titlereview}
              background={product && product.background}
              count={product && product.count}
              rate={product && product.rate}
            ></Review>
          </div>
          <CardBuy />
        </div>

        {/* Title Above Card Product Start */}
        <h1 className="font-semibold text-3xl text-[#222325] pt-4 pb-1">
          Video Pembelajaran Terkait Lainnya
        </h1>
        <p className="font-normal text-base text-[#333333AD] pb-6">
          Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!
        </p>
        {/* Title Above Card Product End */}

        {/* Card Product Start */}
        <div className="w-full grid grid-cols-auto-fill gap-6 flex-col">
          {limitedData.map((product, i) => (
            <div key={i} onClick={() => navigate(`/homepage`)}>
              <Card>
                <CardHeader image={product && product.imgProduct} />
                <CardBody
                  title={product && product.title}
                  description={product && product.text}
                  photo={product && product.imgProfile}
                  name={product && product.author}
                  jabatan={product && product.position}
                  work={product && product.work}
                />
                <CardFooter
                  count={product && product.count}
                  rate={product && product.rate}
                  price={product && product.price}
                />
              </Card>
            </div>
          ))}
        </div>
        {/* Card Product End */}
      </div>
      <Footer />
    </>
  );
};

export default DetailProduct;
