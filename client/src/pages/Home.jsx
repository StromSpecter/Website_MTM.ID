import futureict from "../assets/futureict.avif";
import aksesoris2 from "../assets/aksesoris/Group 1.svg";
import aksesoris3 from "../assets/aksesoris/Ellipse 5.svg";
import aksesoris4 from "../assets/aksesoris/Ellipse 6.svg";
import aksesoris5 from "../assets/aksesoris/Group 2.svg";
import { RiUser2Fill, RiMedalFill, RiShieldCheckFill, RiGroupFill,  } from "react-icons/ri";
import logoaws from "../assets/logoaws.svg";
import logoazure from "../assets/logomsazure.svg";
import logofortinet from "../assets/logofortinet.svg";
import logohawlett from "../assets/logohawlettpackard.svg";
import logojuniper from "../assets/logojuniper.svg";
import logovmware from "../assets/logovmware.svg";
import Marquee from "react-fast-marquee";
import server from "../assets/server.avif";
import service from "../assets/service.avif";
import satellite from "../assets/satellite.avif";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="relative flex flex-col w-full h-full">
      <section className="relative w-full h-screen pt-20">
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
          <div data-aos="fade-up" className="container relative z-10 flex flex-col w-full h-full gap-5 p-5 mx-auto md:flex-row">
            <div className="flex items-center justify-center w-full h-full md:w-1/2">
              <div className="w-40 h-40 rounded-full sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80">
                <img
                  src={futureict}
                  alt="futureict"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center w-full h-full text-center md:w-1/2 md:text-left">
              <h2 className="mb-3 text-xs font-semibold text-orange-500 uppercase sm:text-sm md:text-base lg:text-lg">
                YourFutureICT
              </h2>
              <h3 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                Revamp Your Future, Now.
              </h3>
              <p className="text-sm font-light sm:text-base md:text-lg lg:text-xl">
                MTM is a customer-oriented experienced ICT solutions company
                providing services & products to increase clients efficiency,
                productivity and profitability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-full bg-blue-100">
        {/* Aksesoris Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={aksesoris3}
            alt=""
            className="absolute w-20 h-20 -scale-y-100 sm:w-32 sm:h-32 lg:w-40 lg:h-40 left-5 sm:left-10 lg:left-20"
            style={{ zIndex: 1 }}
          />
          <img
            src={aksesoris4}
            alt=""
            className="absolute w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 right-5 sm:right-10 lg:right-20 -scale-y-100"
            style={{ zIndex: 1 }}
          />
          <img
            src={aksesoris5}
            alt=""
            className="absolute bottom-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 left-5 sm:left-10 lg:left-20"
            style={{ zIndex: 1 }}
          />
        </div>

        {/* Konten Utama */}
        <div className="relative z-10 w-full h-full">
          <div className="container relative z-10 flex flex-col items-center justify-center w-full h-full gap-5 px-5 py-20 mx-auto md:ga md:px-0 md:flex-row">
            <div data-aos="fade-right"  className="flex flex-col justify-center w-full h-full text-center md:w-1/2 md:text-left">
              <h3 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                Our Corporate Culture
              </h3>
              <p className="text-sm font-light sm:text-base md:text-lg lg:text-xl">
                Here are our values, ethics, vision, behaviors and work
                environment. It is what makes us unique and it impacts
                everything from clients services to employee engagement and
                retention.
              </p>
              <button className="px-4 py-2 mt-5 text-white bg-blue-500 rounded-full w-fit">
                More About Us
              </button>
            </div>
            <div data-aos="fade-left" className="grid w-full h-full grid-cols-1 gap-10 sm:grid-cols-2 md:w-1/2">
              <div className="flex flex-col w-full h-full gap-2">
                <div className="p-5 bg-white rounded-3xl h-fit w-fit">
                  <RiUser2Fill className="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-base font-bold sm:text-lg">
                  Service Oriented
                </h3>
                <p className="text-xs font-light sm:text-sm">
                  Focuses on providing the highest quality and best service.
                </p>
              </div>
              <div className="flex flex-col w-full h-full gap-2">
                <div className="p-5 bg-white rounded-3xl h-fit w-fit">
                  <RiMedalFill className="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-base font-bold sm:text-lg">
                  Trustworthy
                </h3>
                <p className="text-xs font-light sm:text-sm">
                  Always giving the best solution for your needs is our promise.
                </p>
              </div>
              <div className="flex flex-col w-full h-full gap-2">
                <div className="p-5 bg-white rounded-3xl h-fit w-fit">
                  <RiShieldCheckFill className="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-base font-bold sm:text-lg">
                  Accountable
                </h3>
                <p className="text-xs font-light sm:text-sm">
                  Responsible for providing the best plans, product, and decisions to suit your needs.
                </p>
              </div>
              <div className="flex flex-col w-full h-full gap-2">
                <div className="p-5 bg-white rounded-3xl h-fit w-fit">
                  <RiGroupFill className="w-8 h-8 text-blue-500 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-base font-bold sm:text-lg">
                  Respectful
                </h3>
                <p className="text-xs font-light sm:text-sm">
                  Respectful is an obligation in our company so that we can bring the best results for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-full">
        {/* Aksesoris Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={aksesoris5}
            alt=""
            className="absolute w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 right-5 sm:right-10 lg:right-20"
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
          <div data-aos="fade-up" className="container relative z-10 flex flex-col w-full h-full gap-5 px-5 py-20 mx-auto md:px-0">
            <h2 className="mb-3 text-xs font-semibold text-orange-500 uppercase sm:text-sm md:text-base lg:text-lg">
              PRODUCT & SERVICES
            </h2>
            <div className="flex flex-col w-full h-full gap-5 md:flex-row">
              <div className="w-full h-full">
                <div className="w-full bg-red-500 rounded-lg h-60">
                  <img
                    src={service}
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-between h-64 py-5">
                  <h3 className="text-xl font-bold">
                    Managed Service Connectivity & Service
                  </h3>
                  <p className="font-light">
                    Provide, manage, evaluate, and secure network and
                    information on your ICT assets.
                  </p>
                  <button className="px-5 py-2 text-blue-500 border-2 border-blue-500 rounded-full w-fit">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="w-full bg-red-500 rounded-lg h-60">
                  <img
                    src={server}
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-between h-64 py-5">
                  <h3 className="text-xl font-bold">
                    Communication And Network Infrastructure
                  </h3>
                  <p className="font-light">
                    Enabling network connectivity, communication, operations and
                    management of your enterprise network.
                  </p>
                  <button className="px-5 py-2 text-blue-500 border-2 border-blue-500 rounded-full w-fit">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="w-full h-full">
                <div className="w-full bg-red-500 rounded-lg h-60">
                  <img
                    src={satellite}
                    alt=""
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <div className="flex flex-col justify-between h-64 py-5">
                  <h3 className="text-xl font-bold">Satellite Business</h3>
                  <p className="font-light">
                    Providing geostationary satellite (GSO) VSAT network, and
                    value added services for your busines.
                  </p>
                  <button className="px-5 py-2 text-blue-500 border-2 border-blue-500 rounded-full w-fit">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-full bg-blue-100">
        {/* Aksesoris Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={aksesoris3}
            alt=""
            className="absolute w-20 h-20 -scale-y-100 sm:w-32 sm:h-32 lg:w-40 lg:h-40 left-5 sm:left-10 lg:left-20"
            style={{ zIndex: 1 }}
          />
          <img
            src={aksesoris4}
            alt=""
            className="absolute w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 right-5 sm:right-10 lg:right-20 -scale-y-100"
            style={{ zIndex: 1 }}
          />
          <img
            src={aksesoris5}
            alt=""
            className="absolute bottom-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 left-5 sm:left-10 lg:left-20"
            style={{ zIndex: 1 }}
          />
        </div>

        {/* Konten Utama */}
        <div className="relative z-10 w-full h-full">
          <div data-aos="fade-up" className="container relative z-10 flex flex-col items-center justify-center w-full h-full gap-5 px-5 py-10 mx-auto sm:py-20 md:px-0">
            <h2 className="text-xs font-semibold text-orange-500 uppercase sm:text-sm md:text-base lg:text-lg">
              OUR PARTNERS
            </h2>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
              We Are Partnering With Many Reputable Company
            </h3>
            <Marquee gradient={false} play={true} direction="left" speed={50}>
              <div className="flex flex-row w-screen h-20 gap-5 px-2.5">
                <div className="w-56 h-full bg-white rounded-lg md:w-full">
                  <img src={logoaws} alt="AWS Logo" className="w-full h-full" />
                </div>
                <div className="w-56 h-full bg-white rounded-lg md:w-full">
                  <img src={logoazure} alt="AWS Logo" className="w-full h-full" />
                </div>
                <div className="w-56 h-full bg-white rounded-lg md:w-full">
                  <img src={logojuniper} alt="AWS Logo" className="w-full h-full" />
                </div>
                <div className="w-56 h-full bg-white rounded-lg md:w-full">
                  <img src={logovmware} alt="AWS Logo" className="w-full h-full" />
                </div>
                <div className="w-56 h-full bg-white rounded-lg md:w-full">
                  <img src={logofortinet} alt="AWS Logo" className="w-full h-full" />
                </div>
                <div className="w-56 h-full bg-white rounded-lg md:w-full">
                  <img src={logohawlett} alt="AWS Logo" className="w-full h-full" />
                </div>
              </div>
            </Marquee>
            <div className="flex flex-col items-center justify-center w-full h-full gap-5 pt-10 md:flex-row lg:px-60">
              <h2 className="text-4xl font-bold text-orange-500">We`re Ready To Enabling Limitless Opportunities For You</h2>
              <div className="flex flex-row w-full h-full gap-5">
                <button className="px-5 py-2 text-white bg-blue-500 border-2 border-blue-500 rounded-full">Enquire Now</button>
                <button className="px-5 py-2 text-blue-500 border-2 border-blue-500 rounded-full">Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
