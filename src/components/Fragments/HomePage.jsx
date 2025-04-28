import BannerTop from "../Beranda/BannerTop";
import CourseSection from "../Beranda/CourseSection";
import CourseCategory from "../Beranda/CourseCategory";
import ProductPage from "../Beranda/ProductsCard";
import NewsLetter from "../Beranda/NewsLetter";

const HomePage = () => {
  return (
      <div className=" lg:gap-16 lg:py-16 lg:px-[120px] px-7 py-5 gap-6">
        <BannerTop></BannerTop>
        <CourseSection></CourseSection>
        <CourseCategory></CourseCategory>
        <ProductPage></ProductPage>
        <NewsLetter></NewsLetter>
      </div>
  );
};

export default HomePage;
