import { motion } from 'framer-motion';
import custom1 from "../assets/custom0.png"
import custom from "../assets/custom1.png"

const CustomDesigns = () => {
    return (
        <div className="flex justify-center items-center custom w-full h-auto bg-[#f4c542] text-[#1a1a1a] px-4 py-12 sm:py-16">
            <div className="w-full max-w-6xl mb-10 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1a1a1a] mb-6">
                    Custom Designs
                </h2>
                <p className="mb-10 text-base text-gray-700 md:text-lg">
                    At SKINOVA, we believe your laptop should reflect your style. Explore our collection of customizable laptop skins, designed to add personality and flair to your device.
                </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-3">
                {/* Design 1 */}
                <motion.div
                    className="relative overflow-hidden rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <img
                        src={custom1}
                        alt="Custom Laptop Skin 1"
                        className="w-[200px] "
                    />
                    <div className="absolute inset-0 transition-opacity duration-300 opacity-25 hover:opacity-0"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 hover:opacity-100">
                        <h3 className="text-lg font-bold">Minimal / Aesthetic</h3>
                    </div>
                </motion.div>

                {/* Design 2 */}
                <motion.div
                    className="relative overflow-hidden rounded-lg shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <img
                        src={custom}
                        alt="Custom Laptop Skin 2"
                        className="w-[230px] h-full object-contain"
                    />
                    <div className="absolute inset-0 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white transition-opacity duration-300 opacity-0 hover:opacity-100">
                        <h3 className="text-lg font-bold">All Customs</h3>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default CustomDesigns;