const Contact = () => {
    return (
        <div className="mx-auto py-8 px-4 bg-white w-screen min-h-screen">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10 text-gray-900">
                Contact Us
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Address</h2>
                    <p className="text-lg text-gray-800 mb-4">
                        Your Business Address<br />
                        City, State, Zip Code
                    </p>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                    <p className="text-lg text-gray-800 mb-4">
                        <strong>WhatsApp:</strong> <a href="https://wa.me/+917000770007">+91 7000770007</a><br />
                        <strong>Email:</strong> <a href="mailto:info@yourbusiness.com">info@yourbusiness.com</a><br />
                        <strong>Phone:</strong> <a href="tel:+1234567890">+1 234-567-890</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
