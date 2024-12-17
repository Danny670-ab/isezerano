import React, { useState } from 'react';

const EditProfile = ({ onClose, defaultValues, onSave }) => {
  // Controlled state for form inputs
  const [name, setName] = useState(defaultValues.name || '');
  const [location, setLocation] = useState(defaultValues.location || '');
  const [phone, setPhone] = useState(defaultValues.phone || '');
  const [email, setEmail] = useState(defaultValues.email || '');

  const handleSave = () => {
    // Package updated data into an object
    const updatedProfile = { name, location, phone, email };
    onSave(updatedProfile); // Pass updated data back to parent
  };

  return (
    <div className=" ">
      <div className="flex justify-center items-center">
       
      </div>
      <div className="flex flex-col justify-cente items-center ">
         <label>
         <span>
          
         </span>
          <input>
            
          </input>
         </label>
        <label className="block">
          <span className="text-white text-sm ml-3">change Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-black py-1 mt-1  rounded-md border-gray-300 shadow-sm flex justify-cente items-center"
          />
        </label>
        <label className="block">
          <span className="text-white ml-3">change Location</span>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="text-black mt-1 block py-1  rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
        <label className="block">
          <span className="text-white ml-3">change Phone</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="text-black block py-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </label>
       
      </div>
      <div className="mt-6 flex justify-center space-x-3">
      
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600  justify-center items-center"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
