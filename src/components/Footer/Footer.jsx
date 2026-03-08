
import footerImg from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-[#020b24] text-white absolute mt-32 w-full">
      {/* Newsletter */}
      <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-10">
        <div className="bg-gradient-to-r from-[#d9f2ff] via-white to-[#ffe6a7] rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#131313] mb-3">
            Subscribe to our Newsletter
          </h2>

          <p className="text-gray-600 mb-6">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-full md:w-80 border border-gray-300 text-black"
            />

            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center mt-20">
        <img src={footerImg} alt="logo" className="w-20" />
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About Us</h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            We are a passionate team dedicated to providing the best services
            to our customers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:text-center">
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

          <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside inline-block text-left">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>

          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-l-lg text-black bg-white"
            />

            <button className="px-4 py-2 bg-gradient-to-r from-pink-400 to-yellow-400 text-black font-semibold rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-5 text-gray-400 text-sm">
        ©2024 Your Company All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

