import Heading from "../Shared/Heading"
import Blog1 from "../../assets/blogs/blog-1.jpg";
import Blog2 from "../../assets/blogs/blog-2.jpg";
import Blog3 from "../../assets/blogs/blog-3.jpg";

const blogData = [
  {
    title: "How to choose perfect smartwatch",
    subTitle: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem sequi vero a consectetur ratione accusamus hic aliquid officiis eveniet.",
    publicshed: "Aug 18, 2024 by Danieldev",
    image: Blog1
  },
  {
    title: "How to choose perfect gadget",
    subTitle: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem sequi vero a consectetur ratione accusamus hic aliquid officiis eveniet.",
    publicshed: "Aug 18, 2024 by Danieldev",
    image: Blog2
  },
  {
    title: "How to choose perfect vr headset",
    subTitle: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit exercitationem sequi vero a consectetur ratione accusamus hic aliquid officiis eveniet.",
    publicshed: "Aug 18, 2024 by Danieldev",
    image: Blog3
  }  
]

const Blogs = () => {
  return (
    <div className="py-12">
      <div className="container">
          {/* Header section  */}
          <Heading title="Recent News" subTitle="Explore Our Blogs"/>

          {/* Body section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 md:gap-7 sm:gap-4">
            {/* Blog Card  */}
            {
              blogData.map((data) => (
                <div key={data.title} className="bg-white dark:bg-gray-900 cursor-pointer">
                  {/* Image section  */}
                  <div className="overflow-hidden rounded-2xl mb-2">
                    <img src={data.image} className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500" />
                  </div>
                  {/* Content section  */}
                  <div className="space-y-2">
                    <p className="text-sx text-gray-500">{data.publicshed}</p>
                    <p className="font-bold line-clamp-1">{data.title}</p>
                    <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subTitle}</p>
                  </div>
                </div>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Blogs