import Headphone from "../../assets/slider/headphone.png";


const bannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: Headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  description: "Nhanh tay hốt về liền, không là hết hàng",
  bgColor: "#f42c37"
}
const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
      <div className="container bg-primary rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
        {/* first col  */}
        <div className='p-6 sm:p-8'>
          <p className="text-sm">{bannerData.discount}</p>
          <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{bannerData.title}</h1>
          <p className='text-sm'>{bannerData.date}</p>
        </div>
        {/* second col  */}
        <div data-aos="zoom-in" className='h-full flex items-center aos-init aos-animate'>
          <img src={bannerData.image} className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover" />
        </div>
        {/* thirst col  */}
        <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
          <p className='font-bold text-xl'>{bannerData.title2}</p>
          <p className='text-3xl sm:text-5xl font-bold'>{bannerData.title3}</p>
          <p className='text-sm tracking-wide leading-5'>{bannerData.description}</p>
          <div>
            <button className='bg-white text-primary py-2 px-4 rounded-full'>Shop Now</button>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Banner