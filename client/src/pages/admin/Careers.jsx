import { useState, useEffect } from "react";
import axios from "axios";
import { RiAddCircleFill } from "react-icons/ri";
import AddCareerModal from "../../mods/AddCareerModal";

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCareer, setNewCareer] = useState({
    location: "",
    title: "",
    description: "",
  });
  const [careers, setCareers] = useState([]);

  // Fetch data from the API when the component is mounted
  useEffect(() => {
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewCareer({ location: "", title: "", description: "" });
  };

  const handleInputChange = (e) => {
    setNewCareer({ ...newCareer, [e.target.name]: e.target.value });
  };

  const handleAddCareer = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/careers", newCareer);
      // Tambahkan data baru ke state careers
      setCareers([...careers, response.data]);
      closeModal();
    } catch (error) {
      console.error("Failed to add career", error);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen gap-10 p-10">
      <h1 className="text-3xl font-bold">Careers</h1>
      <div className="grid w-full h-full grid-cols-4 gap-10">
        <div
          onClick={openModal}
          className="flex flex-col items-center justify-center w-full h-full text-indigo-500 bg-blue-200 border-2 border-indigo-500 rounded-lg cursor-pointer"
        >
          <RiAddCircleFill className="text-4xl" />
          <p className="text-lg">Add Career</p>
        </div>

        {/* Render careers from API */}
        {careers.map((career) => (
          <div
            key={career.id}
            className="w-full h-full p-5 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500"
          >
            <h2 className="mb-3 text-xs font-semibold text-orange-500 sm:text-sm md:text-base lg:text-lg">
              {career.location}
            </h2>
            <h3 className="mb-2 text-xl font-bold text-white">{career.title}</h3>
            <p className="mb-4 text-sm font-light text-gray-100">
              {career.description}
            </p>
            <div className="flex flex-row gap-2">
              <button className="w-full px-5 py-2 text-blue-500 transition duration-300 bg-white rounded-full shadow-md hover:bg-gray-200">
                Edit
              </button>
              <button className="w-full px-5 py-2 text-blue-500 transition duration-300 bg-white rounded-full shadow-md hover:bg-gray-200">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Menggunakan Modal Add Career dari File Terpisah */}
      <AddCareerModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddCareer={handleAddCareer}
        newCareer={newCareer}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default Careers;
