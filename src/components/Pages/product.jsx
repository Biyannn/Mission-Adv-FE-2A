import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import DetailProduct from "../Fragments/DetailProduct";
const product = () => {
  return (
    <div className=" lg:gap-16 lg:py-16 lg:px-[120px] px-7 py-5 gap-6">
      <Header />
      <DetailProduct />
      <Footer />
    </div>
  );
};

export default product;
