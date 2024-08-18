import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Products from "./components/Products/Products";
import Headphone from "./assets/slider/headphone.png";
import SmartWatch from "./assets/category/smartwatch.png";
import IBanner from "./utils/Banner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

const bannerData: IBanner = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: Headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  description: "Nhanh tay hốt về liền, không là hết hàng",
  bgColor: "#f42c37"
}

const bannerData2: IBanner = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Jan to 28 Jan",
  image: SmartWatch,
  title2: "Smart Solo Bass",
  title3: "Winter Sale",
  description: "Nhanh tay hốt về liền, không là hết hàng",
  bgColor: "#2dcc6f"
}

const App = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services/>
      <Banner data={bannerData}/>
      <Products/>
      <Banner data={bannerData2}/>
      <Blogs/>
      <Footer/>
    </div>
  );
};

export default App;
