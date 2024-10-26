import { images } from '../../Utils/Constants/images';
const HeroSection = () => {
  return (
    <div className="section">
      <div className="flex justify-center m-auto">
        <section className="flex flex-col md:flex-row items-center m-auto w-[110%] justify-center p-8 bg-[#090909] text-[#F9DB02]">
          <div className="md:w-full mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Transform Your Devices</h1>
            <p className="text-lg mb-4">
              Explore our unique and stylish skins for laptops and mobiles that express your personality!
            </p>
            <button className="bg-[#F9DB02] text-[#090909] font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition">
              SHOP NOW
            </button>
          </div>
          <div className="md:w-1/2  flex justify-center">
            <div className="relative group">
              <img
                src={images[1].src}
                alt={images[1].name}
                className="object-contain w-64 h-64 rounded transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
    </section >
      </div>
    </div >
  );
};

export default HeroSection;
