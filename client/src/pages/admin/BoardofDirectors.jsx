import { useState, useEffect } from "react";
import axios from "axios";
import { RiAddCircleFill } from "react-icons/ri";
import AddDireksiModal from "../../mods/AddDireksiModal";

const BoardofDirectors = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [direksiList, setDireksiList] = useState([]);
  const [newDireksi, setNewDireksi] = useState({
    name: "",
    position: "",
    description: "",
    image: "",
  });

  // Fetch data from the API
  useEffect(() => {
    const fetchDireksi = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/direksi");
        setDireksiList(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDireksi();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDireksi((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewDireksi((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddDireksi = async () => {
    try {
      const formData = new FormData();
      formData.append("name", newDireksi.name);
      formData.append("position", newDireksi.position);
      formData.append("description", newDireksi.description);

      // If there's an image, append it to the formData
      if (newDireksi.image) {
        const imageBlob = await fetch(newDireksi.image).then((res) =>
          res.blob()
        );
        formData.append("image", imageBlob, "image.png"); // Assuming the file type is png, adjust as necessary
      }

      // Post the data to the API
      const response = await axios.post(
        "http://localhost:3000/api/direksi",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Add the new direksi to the list after successful POST request
      setDireksiList((prev) => [...prev, response.data]);
      setModalOpen(false);
      setNewDireksi({
        name: "",
        position: "",
        description: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding new direksi:", error);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen gap-10 p-10">
      <h1 className="text-3xl font-bold">Direksi</h1>
      <div className="grid w-full h-full grid-cols-4 gap-10">
        <div
          className="flex flex-col items-center justify-center w-full h-full text-indigo-500 bg-blue-200 border-2 border-indigo-500 rounded-lg cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <RiAddCircleFill className="text-4xl" />
          <p className="text-lg">Add Direksi</p>
        </div>

        {direksiList.map((direksi) => (
          <div
            key={direksi.id}
            className="w-full h-full p-5 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500"
          >
            <div className="w-16 h-16 mb-1 rounded-lg">
              <img src={direksi.image} alt="direksi" className="object-cover w-full h-full"/>
            </div>
            <h2 className="mb-1 text-xs font-semibold text-orange-500 sm:text-sm md:text-base lg:text-lg">
              {direksi.position}
            </h2>
            <h3 className="mb-2 text-xl font-bold text-white">
              {direksi.name}
            </h3>
            <p className="mb-4 text-sm font-light text-gray-100">
              {direksi.description}
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
      <AddDireksiModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAddDireksi={handleAddDireksi}
        newDireksi={newDireksi}
        onInputChange={handleInputChange}
        onImageChange={handleImageChange}
      />
    </div>
  );
};

export default BoardofDirectors;
