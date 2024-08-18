
import Button from "../Shared/Button";
import Macbook from "../../assets/category/macbook.png";
import Earphone from "../../assets/category/earphone.png";
import Watch from "../../assets/slider/watch.png";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col  */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Earphone</p>
                <Button text="Browser" bgColor={"bg-primary"} textColor={"text-white"}/>
              </div>
            </div>
            <img src={Earphone} className="w-[320px] absolute bottom-0"/>
          </div>
          {/* second col  */}
          <div className="py-10 pl-5 bg-gradient-to-br from-branchYellow/90 to-branchYellow/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gadget</p>
                <Button text="Browser" bgColor={"bg-primary"} textColor={"text-white"}/>
              </div>
            </div>
            <img src={Watch} className="w-[320px] absolute -right-4 lg:top-[40px]"/>
          </div>
          {/* thirst col  */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="space-y-3 mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Laptop</p>
                <Button text="Browser" bgColor={"bg-white"} textColor={"text-primary"}/>
              </div>
            </div>
            <img src={Macbook} className="w-[290px] absolute top-1/2 -translate-y-1/2 -right-0"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
