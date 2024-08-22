import iso from "../assets/ISO9001 1536x351.png"

const Footer = () => {
  return (
    <div className="p-5 border-t-2 md:p-10">
      <div className="container grid grid-cols-1 gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="mb-4 text-lg font-bold">HQ Office</h3>
          <ul>
            <li className="mb-4">Komp. Ruko CBD Jababeka, Jl. Niaga Raya Jababeka II, Pasirsari, Cikarang Selatan Kab. Bekasi - 17856</li>
            <li className="mb-1"><a href="tel:+622129083808" className="hover:underline">Phone: (021) 290 83808</a></li>
            <li className="mb-1"><a href="tel:+6221320118999" className="hover:underline">Phone: (021) 320118999</a></li>
            <li className="mb-1"><a href="#" className="hover:underline">Fax: (021) 290 83808</a></li>
            <li className="mb-1"><a href="mailto:sales@mtm.id" className="hover:underline">Email: sales@mtm.id</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold">Company</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">CSIRT</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Product & Services</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Project Referensi</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold">Blog</h3>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">News & Events</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Sharing Knowledge</a></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-bold">Subscribe Our Newsletter</h3>
          <div className="flex flex-col mb-4">
            <input
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              type="text"
              placeholder="Enter your email"
            />
            <button className="px-5 py-3 text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-600">
              Send
            </button>
          </div>
          <div className="h-20 w-[350px]">
            <img src={iso} alt="iso" className="object-cover w-full h-full"/>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center">
        <p className="text-sm">&copy; 2024 PT Media Telekomunikasi Mandiri. All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
