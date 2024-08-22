import aksesoris2 from "../assets/aksesoris/Group 1.svg";
import aksesoris3 from "../assets/aksesoris/Ellipse 5.svg";
import aksesoris4 from "../assets/aksesoris/Ellipse 6.svg";
import aksesoris5 from "../assets/aksesoris/Group 2.svg";
import poto1 from "../assets/poto1.avif";
import {
  BsFillLightningFill,
  BsHandThumbsUpFill,
  BsLightbulbFill,
} from "react-icons/bs";
import bod1 from "../assets/bod/bod1.svg";
import bod2 from "../assets/bod/bod2.svg";
import bod3 from "../assets/bod/bod3.svg";
import bod4 from "../assets/bod/bod4.svg";
import bod5 from "../assets/bod/bod5.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="relative flex flex-col w-full h-full">
      <section className="relative flex flex-row items-center justify-center w-full min-h-screen pt-20">
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
          <div
            data-aos="fade-up"
            className="container relative z-10 flex flex-col items-center w-full h-full gap-5 p-5 mx-auto md:flex-row"
          >
            <div className="flex flex-col w-full h-full md:w-1/2">
              <h2 className="mb-3 text-xs font-semibold text-orange-500 uppercase sm:text-sm md:text-base lg:text-lg">
                Future-Ready Service Company
              </h2>
              <h3 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                PT Media Telekomunikasi Mandiri (MTM)
              </h3>
              <div className="space-y-4">
                <p className="font-light text-gray-700 indent-8">
                  As business evolve, we continue to transform our company. From
                  a System Integrator into a service company. PT Media
                  Telekomunikasi Mandiri (MTM) established in 2008. Along with
                  the support of our professional team, we always committed to
                  deliver customer requirement and satisfaction.
                </p>
                <p className="font-light text-gray-700 indent-8">
                  Currently, MTM has been in this business for more than 15
                  years and possesses the capabilities to conduct business and
                  deliverables in accordance with customer requirements. The
                  leadership and all levels of management of PT Media
                  Telekomunikasi Mandiri are committed to implementing an
                  information security management system in providing Manage
                  Service Connectivity & Security services to customers,
                  through: Determination of information security goals by
                  maintaining the level of confidentiality, upholding integrity,
                  and maintaining the availability of information based on the
                  results of risk identification & assessment.
                </p>
                <p className="font-light text-gray-700 indent-8">
                  MTM as a ICT services solution company providing and managing
                  the resources needed to implement an information security
                  management system by increasing awareness of all employees on
                  the importance of information security, carrying out HR
                  development activities related to the management of Manage
                  Service Connectivity & Security services, as well as
                  maintaining and maintaining all facilities and devices
                  supporting the technology services used, continuous
                  improvement and improvement in compliance with laws and
                  regulations relating to information security and the
                  requirements of the ISO 27001, 9001 and is in the process of
                  obtaining ISO 37001 and 45001 international certifications. we
                  already have a CSIRT (Computer Security Incident Response
                  Team) from BSSN.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-full rounded-tl-[100px] rounded-br-[100px] md:w-1/2">
              <img
                src={poto1}
                alt=""
                className="object-cover w-full h-full rounded-tl-[100px] rounded-br-[100px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-row items-center justify-center w-full h-full py-20">
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
          <div
            data-aos="fade-up"
            className="container relative z-10 grid items-center w-full h-full grid-cols-1 gap-5 mx-auto md:px-40 md:grid-cols-3"
          >
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="p-5">
                <BsHandThumbsUpFill className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-lg font-bold">Reliable</h3>
              <p className="mt-3 text-sm font-light text-center">
                Our work is consistently excellent in quality and performance.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="p-5">
                <BsFillLightningFill className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-lg font-bold">Proactive</h3>
              <p className="mt-3 text-sm font-light text-center">
                Endeavours to solve a problem before it has occurred.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="p-5">
                <BsLightbulbFill className="text-5xl text-blue-500" />
              </div>
              <h3 className="text-lg font-bold">Proactive</h3>
              <p className="mt-3 text-sm font-light text-center">
                Ensure you get the right solution to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-row items-center justify-center w-full min-h-screen">
        {/* Aksesoris Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={aksesoris5}
            alt=""
            className="absolute top-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 right-5 sm:right-10 lg:right-20"
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
          <div className="container relative z-10 flex flex-col items-center w-full h-full gap-5 p-5 mx-auto md:flex-row">
            <div
              data-aos="fade-right"
              className="flex flex-col w-full h-full px-0 md:px-40 md:w-1/2"
            >
              <h2 className="mb-3 text-xs font-semibold text-orange-500 uppercase sm:text-sm md:text-base lg:text-lg">
                Our Vision
              </h2>
              <h3 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                Our Great vision
              </h3>
              <div className="space-y-4">
                <p className="font-light text-gray-700">
                  Become a leading as a provider of solutions, facilities and
                  services in the field of technology information and data
                  communication.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex items-center justify-center w-full h-full rounded-tl-[100px] rounded-br-[100px] md:w-1/2"
            >
              <img
                src={poto1}
                alt=""
                className="object-cover w-full h-full rounded-tl-[100px] rounded-br-[100px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-row items-center justify-center w-full min-h-screen">
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
          <div className="container relative z-10 flex flex-col items-center w-full h-full gap-5 p-5 mx-auto md:flex-row">
            <div
              data-aos="fade-right"
              className="flex items-center justify-center w-full h-full rounded-tl-[100px] rounded-br-[100px] md:w-1/2"
            >
              <img
                src={poto1}
                alt=""
                className="object-cover w-full h-full rounded-tl-[100px] rounded-br-[100px]"
              />
            </div>
            <div
              data-aos="fade-left"
              className="flex flex-col w-full h-full px-0 md:px-40 md:w-1/2"
            >
              <h2 className="mb-3 text-xs font-semibold text-orange-500 uppercase sm:text-sm md:text-base lg:text-lg">
                our mission
              </h2>
              <h3 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                Our Mission to give the best results
              </h3>
              <div className="space-y-4">
                <p className="font-light text-gray-700">
                  Providing the best solution facilities and services in the
                  field of technology information and data communication.
                </p>
                <p className="font-light text-gray-700">
                  Consistently developing employee competencies and corporate
                  values.
                </p>
                <p className="font-light text-gray-700">
                  Providing the best benefits for all stackholder, in
                  particularly, customer, employees shareholders and business
                  partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-row items-center justify-center w-full min-h-screen">
        {/* Aksesoris Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={aksesoris5}
            alt=""
            className="absolute top-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 right-5 sm:right-10 lg:right-20"
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
          <div className="container relative z-10 flex flex-col items-center w-full h-full gap-5 p-5 mx-auto md:flex-row">
            <div
              data-aos="fade-right"
              className="flex flex-col w-full h-full px-0 md:px-40 md:w-1/2"
            >
              <h2 className="mb-3 text-xs font-semibold text-orange-500 uppercase sm:text-sm md:text-base lg:text-lg">
                our facts
              </h2>
              <h3 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                Facts on Our Solid Service
              </h3>
              <div className="space-y-4">
                <p className="font-light text-gray-700">
                  30+ certified engineers (Professional & Expert).
                </p>
                <p className="font-light text-gray-700">
                  20 projects managers, some are PMP certified
                </p>
                <p className="font-light text-gray-700">
                  8 application programmers/developers
                </p>
                <p className="font-light text-gray-700">130+ employee</p>
                <p className="font-light text-gray-700">
                  Advanced level carrier class solutions
                </p>
                <p className="font-light text-gray-700">
                  24x7 support and manage services operation
                </p>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex items-center justify-center w-full h-full rounded-tl-[100px] rounded-br-[100px] md:w-1/2"
            >
              <img
                src={poto1}
                alt=""
                className="object-cover w-full h-full rounded-tl-[100px] rounded-br-[100px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-row items-center justify-center w-full h-full py-20">
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
          <div
            data-aos="fade-up"
            className="container relative z-10 flex flex-col items-center w-full h-full gap-5 mx-auto md:px-40"
          >
            <h2 className="mb-3 text-xs font-semibold text-orange-500 uppercase sm:text-sm md:text-base lg:text-lg">
              our history
            </h2>
            <h3 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
              The historical and growth
            </h3>
            <div className="grid grid-cols-1 gap-5 px-5 md:grid-cols-3 md:px-0">
              <p className="font-light text-gray-700">
                PT Media Telekomunikasi Mandiri (MTM) established in 2008
                started it`s first years in ICT industry through the provision
                of services and supporting materials for the implementation and
                roll-out metro ethernet network.
              </p>
              <p className="font-light text-gray-700">
                PT Media Telekomunikasi Mandiri (MTM) established in 2008
                started it`s first years in ICT industry through the provision
                of services and supporting materials for the implementation and
                roll-out metro ethernet network.
              </p>
              <p className="font-light text-gray-700">
                PT Media Telekomunikasi Mandiri (MTM) established in 2008
                started it`s first years in ICT industry through the provision
                of services and supporting materials for the implementation and
                roll-out metro ethernet network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-row items-center justify-center w-full min-h-screen">
        {/* Aksesoris Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <img
            src={aksesoris5}
            alt=""
            className="absolute top-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 right-5 sm:right-10 lg:right-20"
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
          <div
            data-aos="fade-up"
            className="container relative z-10 flex flex-col items-center w-full h-full gap-5 p-5 mx-auto"
          >
            <div className="flex flex-col w-full h-full">
              <h2 className="mb-3 text-xs font-semibold text-orange-500 uppercase sm:text-sm md:text-base lg:text-lg">
                board of directors
              </h2>
              <h3 className="mb-5 text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl">
                Get to know our board of directors
              </h3>
            </div>
            <div className="grid items-center justify-center w-full h-full grid-cols-1 gap-5 md:grid-cols-3">
              <div className="w-full h-full p-5 ">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-20 h-20 rounded-full">
                    <img
                      src={bod1}
                      alt="kowim"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold">Nurul Kowim</p>
                    <p className="text-lg font-light">
                      President Director & Chief of Executive Officer
                    </p>
                  </div>
                </div>
                <p className="mt-5 font-light">
                  The goal-driven leader who leads MTM with progressive mindset,
                  and consistency, Nurul Kowim have 2 decades experiences in ICT
                  industry.
                </p>
              </div>
              <div className="w-full h-full p-5 ">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-20 h-20 rounded-full">
                    <img
                      src={bod3}
                      alt="kowim"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold">Sugeng Jadmoko</p>
                    <p className="text-lg font-light">
                      Operation & Technology Director
                    </p>
                  </div>
                </div>
                <p className="mt-5 font-light">
                  A straightforward businessmen with tremendous care towards
                  process and attention to details, Sugeng Jadmoko has been
                  arround the industry for 20 years.
                </p>
              </div>
              <div className="w-full h-full p-5 ">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-20 h-20 rounded-full">
                    <img
                      src={bod5}
                      alt="kowim"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold">Harnaka Harto</p>
                    <p className="text-lg font-light">Sales Director</p>
                  </div>
                </div>
                <p className="mt-5 font-light">
                  over 23 years of all-round – from technical field to executive
                  boardroom – professional experience with financial services,
                  petrominer and IT solution services industries exposure.
                </p>
              </div>
              <div className="w-full h-full p-5 ">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-20 h-20 rounded-full">
                    <img
                      src={bod4}
                      alt="kowim"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold">Dody Taufiq Wijaya</p>
                    <p className="text-lg font-light">Finance Director</p>
                  </div>
                </div>
                <p className="mt-5 font-light">
                  Experienced auditor & accounting background with a
                  demonstrated strong leadership as Director of a listed co and
                  has exposure in the investment, manufacture, oil & gas, energy
                  industries.
                </p>
              </div>
              <div className="w-full h-full p-5 ">
                <div className="flex flex-row items-center gap-2">
                  <div className="w-20 h-20 rounded-full">
                    <img
                      src={bod2}
                      alt="kowim"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-2xl font-bold">Mohammad Abdulloh</p>
                    <p className="text-lg font-light">
                      Corporate Services Director
                    </p>
                  </div>
                </div>
                <p className="mt-5 font-light">
                  An optimistic and caring leader who always deliver MTM target,
                  Mohammad Abdulloh decade os experience has been a significant
                  strength of the company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
