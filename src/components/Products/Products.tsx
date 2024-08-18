import Heading from "../Shared/Heading"
import ProductCard from "./ProductCard"
import Product1 from "../../assets/product/p-1.jpg";
import Product2 from "../../assets/product/p-2.jpg";
import Product3 from "../../assets/product/p-3.jpg";
import Product4 from "../../assets/product/p-4.jpg";
import Product5 from "../../assets/product/p-5.jpg";
import Product6 from "../../assets/product/p-9.jpg";
import Product7 from "../../assets/product/p-7.jpg";
import Product8 from "../../assets/product/p-2.jpg";
import Product from "../../utils/Product";

const productsData: Product[] = [
  {
    id: 1,
    image: Product1,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0"
  },
  {
    id: 2,
    image: Product2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200"
  },
  {
    id: 3,
    image: Product3,
    title: "Goggles",
    price: "320",
    aosDelay: "400"
  },
  {
    id: 4,
    image: Product4,
    title: "Printed",
    price: "220",
    aosDelay: "600"
  }

];

const productsData2: Product[] = [
  {
    id: 1,
    image: Product5,
    title: "Boat Headphone",
    price: "120",
    aosDelay: "0"
  },
  {
    id: 2,
    image: Product6,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200"
  },
  {
    id: 3,
    image: Product7,
    title: "Goggles",
    price: "320",
    aosDelay: "400"
  },
  {
    id: 4,
    image: Product8,
    title: "Printed",
    price: "220",
    aosDelay: "600"
  }

];
const Products = () => {
  return (
    <div>
      <div className='container'>
        {/* Header section  */}
        <Heading title="Our Products" subTitle="Explore Our Products"/>
        <ProductCard data={productsData}/>
        <ProductCard data={productsData2}/>

        <div></div>
      </div>
    </div>
  )
}

export default Products