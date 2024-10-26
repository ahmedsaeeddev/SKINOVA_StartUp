import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <footer className="bg-yellow-400 text-black text-center py-6 rounded-t-lg shadow-lg">
            <p className="text-lg font-semibold mb-4">&copy; 2024 SKINOVA. All Rights Reserved.</p>
            <div className="flex justify-center mt-4">
                {['facebook-f', 'twitter', 'instagram', 'linkedin'].map((icon, index) => (
                    <a
                        key={index}
                        href={`https://${icon}.com`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-4 transition-transform transform hover:scale-110"
                    >
                        <div className="flex items-center justify-center w-12 h-12 bg-black text-yellow-400 rounded-full shadow-lg hover:bg-yellow-400 hover:border-2 border-yellow-400 hover:border-black  hover:text-black transition-colors duration-300">
                            <i className={`fa fa-${icon} fa-lg`} />
                        </div>
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
