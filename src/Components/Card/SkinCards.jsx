import { images } from '../../Utils/Constants/images.js';

const skins = [
    {
        id: 1,
        title: "Stylish Laptop Skin",
        description: "Protect your laptop with our stylish skin that adds a unique touch to your device.",
        imageUrl: images[1].src,
    },
    {
        id: 2,
        title: "Sleek Mobile Skin",
        description: "Give your phone a makeover with our sleek mobile skins that offer both style and protection.",
        imageUrl: images[3].src,
    },
    {
        id: 3,
        title: "Custom Skin Design",
        description: "Unleash your creativity! Design your own custom skin to make your device truly yours.",
        imageUrl: images[4].src,
    },
];

const SkinCards = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center">
            <div className="flex flex-wrap justify-center gap-6">
                {skins.map((skin) => (
                    <div key={skin.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 w-80 h-96">
                        <img 
                            src={skin.imageUrl} 
                            alt={skin.title} 
                            className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-80"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">{skin.title}</h2>
                            <p className="mt-2 text-gray-600 text-sm">{skin.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkinCards;
