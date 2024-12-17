import React, { useState } from 'react';
import EditProfile from './EditProfile';
import Img1 from '../../assets/shous1.png';
import { IoCloseOutline } from 'react-icons/io5'; // Import the close icon

const ProfileSidebar = () => {
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit form visibility

  const handleEditClick = () => {
    setIsEditing(true); // Only show the edit form (hide button)
  };

  const handleSave = (updatedProfile) => {
    console.log('Updated Profile:', updatedProfile); // Log updated data (replace with actual logic)
    setIsEditing(false); // Close the edit form after saving
  };

  const handleCloseEdit = () => {
    setIsEditing(false); // Close the EditProfile form when the close icon is clicked
  };

  return (
    <div
      className={`bg-gradient-to-t from-purple-300 to-blue-500 w-72 rounded-2xl ml-10 text-white mt-8 transition-all duration-500 ${
        isEditing ? 'h-auto pb-6' : 'h-80'
      }`}
    >
      <div className="relative">
        {/* Profile Image */}
        <img src={Img1} alt="" className="h-20 w-20 rounded-full mt-8 mx-auto" />

        {/* Close Icon positioned at the top-right */}
        {isEditing && (
          <button
            onClick={handleCloseEdit}
            className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full"
          >
            <IoCloseOutline size={24} className="text-gray-700" />
          </button>
        )}
      </div>

      <div className="flex ml-7 mt-2 text-2xl font-bold">Kamariza Esther</div>
      <div>
        <ul>
          <li className="ml-7">ISEZERANO Choir</li>
          <li className="ml-7">Kigali-Rwanda</li>
          <li className="ml-7">Tel: 0788-288-122</li>
        </ul>

        {/* Show "Click Edit Profile" button only when not editing */}
        {!isEditing && (
          <button
            className="bg-purple-200 mt-14 h-10 w-36 flex items-center justify-center ml-16 rounded-t-2xl"
            onClick={handleEditClick}
          >
            Click Edit Profile
          </button>
        )}

        {isEditing && (
          <div className="mt-6 px-4">
            <EditProfile
              onClose={handleCloseEdit} // Allow closing from within the form
              defaultValues={{
                name: 'Kamariza Esther',
                location: 'Kigali-Rwanda',
                phone: '0788-288-122',
                email: 'kamariza@example.com',
              }}
              onSave={handleSave}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSidebar;
