import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black p-4">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full"
            >
                <h2 className="text-2xl font-bold text-center text-black mb-6">Contact Us</h2>
                <div className="mb-4">
                    <label className="block text-black mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2" htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
                        rows="4"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-600 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
