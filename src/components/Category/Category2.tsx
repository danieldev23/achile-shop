import Button from "../Shared/Button";
import Vr from "../../assets/category/vr.png";
import Gaming from "../../assets/category/gaming.png";
import Speaker from "../../assets/category/speaker.png";

const Category2 = () => {
  return (
    <div className="">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* thirst col  */}
                  <div className="col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-300/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="space-y-3 mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Laptop</p>
                <Button text="Browser" bgColor={"bg-primary"} textColor={"text-white"}/>
              </div>
            </div>
            <img src={Gaming} className="w-[290px] absolute top-1/2 -translate-y-1/2 -right-0"/>
          </div>
          {/* first col  */}
          <div className="py-10 pl-5 bg-gradient-to-br from-branchGreen/90 to-branchGreen/70 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">Gaming</p>
                <Button text="Browser" bgColor={"bg-white"} textColor={"text-branchGreen"}/>
              </div>
            </div>
            <img src={Vr} className="w-[250px] absolute bottom-0"/>
          </div>
          {/* second col  */}
          <div className="py-10 pl-5 bg-gradient-to-br from-branchBlue to-branchBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gadget</p>
                <Button text="Browser" bgColor={"bg-white"} textColor={"text-branchBlue"}/>
              </div>
            </div>
            <img src={Speaker} className="w-[200px] absolute bottom-0 right-0"/>
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Category2;
