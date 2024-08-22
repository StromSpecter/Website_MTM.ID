const AddCareerModal = ({
  isOpen,
  onClose,
  onAddCareer,
  newCareer,
  onInputChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-1/3 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-xl font-bold">Add New Career</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="location"
            value={newCareer.location}
            onChange={onInputChange}
            placeholder="Location"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="title"
            value={newCareer.title}
            onChange={onInputChange}
            placeholder="Title"
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            name="description"
            value={newCareer.description}
            onChange={onInputChange}
            placeholder="Description"
            className="p-2 border border-gray-300 rounded"
            rows="4"
          />
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              Cancel
            </button>
            <button
              onClick={onAddCareer}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Add Career
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCareerModal;
