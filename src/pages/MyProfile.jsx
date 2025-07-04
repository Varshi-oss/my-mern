import React, { useState } from 'react';
import { assets } from '../assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Elisanabeth',
    image: assets.profile,
    email: 'elisanabeth23@gmail.com',
    phone: '+1 234 456 7890',
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, West Church Road, Bangalore',
    },
    gender: 'Male',
    dob: '2000-01-20',
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="p-4 space-y-4 text-gray-800">
      <div className="flex items-center justify-between">
        <img src={userData.image} alt="Profile" className=" " />
        
      </div>

      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
          className="border px-2 py-1 rounded"
        />
      ) : (
        <p className="font-semibold text-lg">{userData.name}</p>
      )}

      <hr />

      <div>
        <p className="font-semibold mb-1">CONTACT INFORMATION</p>
        <div className="space-y-2">
          <p>Email id:</p>
          <p>{userData.email}</p>

          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
              className="border px-2 py-1 rounded"
            />
          ) : (
            <p>{userData.phone}</p>
          )}

          <p>Address:</p>
          {isEdit ? (
            <div className="space-y-1">
              <input
                type="text"
                value={userData.address.line1}
                onChange={e =>
                  setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                className="border px-2 py-1 rounded w-full"
              />
              <input
                type="text"
                value={userData.address.line2}
                onChange={e =>
                  setUserData(prev => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                className="border px-2 py-1 rounded w-full"
              />
            </div>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="font-semibold mb-1">BASIC INFORMATION</p>
        <div className="space-y-2">
          <p>Gender:</p>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}
              className="border px-2 py-1 rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}

          <p>Birthday:</p>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={e => setUserData(prev => ({ ...prev, dob: e.target.value }))}
              className="border px-2 py-1 rounded"
            />
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      <button
          className="px-4 py-1 text-sm text-white bg-primary rounded-full"
          onClick={() => setIsEdit(!isEdit)}
        >
          {isEdit ? 'Save' : 'Edit'}
        </button>
    </div>
    
  );
};

export default MyProfile;
