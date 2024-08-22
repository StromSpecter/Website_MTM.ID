import { useState, useEffect } from "react";
import axios from "axios";
import aksesoris2 from "../assets/aksesoris/Group 1.svg";
import aksesoris3 from "../assets/aksesoris/Ellipse 5.svg";
import aksesoris4 from "../assets/aksesoris/Ellipse 6.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Career = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1500 });

    // Fetch data from API
    const fetchCareers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/careers");
        setCareers(response.data);
      } catch (error) {
        console.error("Failed to fetch careers", error);
      }
    };

    fetchCareers();
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
          <div data-aos="fade-up" className="container relative z-10 flex flex-col items-center w-full h-full gap-5 p-5 mx-auto">
            <div className="flex flex-col w-full h-full text-center">
              <h2 className="mb-3 text-xs font-semibold text-orange-500 uppercase sm:text-sm md:text-base lg:text-lg">
                Job Vacancy
              </h2>
              <h3 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                Let’s Develop the Future Together!
              </h3>
            </div>
            <div className="grid w-full h-full grid-cols-1 gap-5 md:grid-cols-3">
              {/* Render careers from API */}
              {careers.map((career) => (
                <div
                  key={career.id}
                  className="w-full h-full p-5 transition-transform duration-300 ease-in-out transform rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 hover:-translate-y-2"
                >
                  <h2 className="mb-3 text-xs font-semibold text-orange-500 sm:text-sm md:text-base lg:text-lg">
                    {career.location}
                  </h2>
                  <h3 className="mb-2 text-xl font-bold text-white">{career.title}</h3>
                  <p className="mb-4 text-sm font-light text-gray-100">
                    {career.description}
                  </p>
                  <button className="w-full px-5 py-2 text-blue-500 transition duration-300 bg-white rounded-full shadow-md hover:bg-gray-200">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
