import aksesoris2 from "../assets/aksesoris/Group 1.svg";
import aksesoris3 from "../assets/aksesoris/Ellipse 5.svg";
import aksesoris4 from "../assets/aksesoris/Ellipse 6.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Contact = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="relative flex flex-col w-full h-full">
      <section className="relative flex flex-row w-full min-h-screen pt-40">
        {/* Aksesoris Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={aksesoris2}
            alt=""
            className="absolute w-40 h-40 top-5 right-10 sm:w-60 sm:h-60 lg:w-80 lg:h-80"
            style={{ zIndex: 1 }}
          />
          <img
            src={aksesoris3}
            alt=""
            className="absolute bottom-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 left-5 sm:left-10 lg:left-20"
            style={{ zIndex: 1 }}
          />
          <img
            src={aksesoris4}
            alt=""
            className="absolute bottom-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 right-5 sm:right-10 lg:right-20"
            style={{ zIndex: 1 }}
          />
        </div>

        {/* Konten Utama */}
        <div className="relative z-10 w-full h-full">
          <div data-aos="fade-up" className="container relative z-10 flex flex-col items-center w-full h-full gap-10 p-5 mx-auto">
            <div className="flex flex-col w-full h-full text-center">
              <h2 className="mb-3 text-xs font-semibold text-orange-500 uppercase sm:text-sm md:text-base lg:text-lg">
                Contact Us
              </h2>
              <h3 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                We`re Here to Help You!
              </h3>
              <p className="mb-5 text-gray-700 sm:text-base md:text-lg lg:text-xl">
                Please reach out to us using the form below or visit us at our
                office.
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-64 overflow-hidden bg-gray-200 rounded-lg sm:h-80 md:h-96 lg:h-[400px]">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0014751068115!2d106.84128307517263!3d-6.263534361320804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2499a4631a5%3A0x7207f00405983185!2sITS%20TOWER!5e0!3m2!1sid!2sid!4v1723688556002!5m2!1sid!2sid"
                className="w-full h-full shadow-md rounded-xl"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="w-full p-5 rounded-lg md:w-2/3 lg:w-1/2">
              <form className="flex flex-col gap-5">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 text-gray-900 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 text-gray-900 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="mb-1 text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 text-gray-900 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your message"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
