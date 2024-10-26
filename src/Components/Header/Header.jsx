import { images } from '../../Utils/Constants/images.js';

function Header() {
    return (
        <div className="flex justify-center items-center shadow-lg bg-white w-full px-4 py-3">
            <div className="flex items-center w-full max-w-screen-sm justify-between">
                <div className="flex items-center">
                    <img className="w-16 md:w-24" src={images[0].src} alt="Logo" />
                    <p className="text-2xl md:text-4xl font-bold mx-2 md:mx-3">
                        <span className="bg-gradient-to-r from-[#F9DB02] to-[#090909] text-transparent bg-clip-text">
                            SKIN
                        </span>
                        <span className="text-[#090909]">
                            OVA
                        </span>
                    </p>
                </div>
                <div>
                    <button className="bg-transparent border-2 border-[#F9DB02] text-[#090909] hover:bg-[#F9DB02] hover:text-white font-semibold py-1 md:py-2 px-3 md:px-4 rounded transition duration-300 hover:shadow-lg text-sm md:text-base">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
