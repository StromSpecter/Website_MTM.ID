const AddDireksiModal = ({
  isOpen,
  onClose,
  onAddDireksi,
  newDireksi,
  onInputChange,
  onImageChange,
}) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Add New Direksi</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={newDireksi.name}
            onChange={onInputChange}
            placeholder="Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="position"
            value={newDireksi.position}
            onChange={onInputChange}
            placeholder="Position"
            className="p-2 border border-gray-300 rounded"
          />
          <textarea
            name="description"
            value={newDireksi.description}
            onChange={onInputChange}
            placeholder="Description"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="file"
            name="image"
            onChange={onImageChange}
            accept="image/*"
            className="p-2 border border-gray-300 rounded"
          />
          {newDireksi.image && (
            <img
              src={newDireksi.image}
              alt="Preview"
              className="object-cover w-32 h-32 mt-4 rounded-full shadow-lg"
            />
          )}
        </div>
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
          >
            Cancel
          </button>
          <button
            onClick={onAddDireksi}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Add Direksi
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDireksiModal;
