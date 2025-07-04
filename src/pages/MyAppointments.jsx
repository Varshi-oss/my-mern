import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const doctor = doctors.find(doc => doc.id === parseInt(docId));
  const [selectedSlot, setSelectedSlot] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleBooking = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          doctorId: doctor.id,
          slot: selectedSlot,
        }),
      });
      const result = await res.json();
      if (res.ok) {
        setSuccessMsg('Appointment booked successfully!');
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!doctor) return <p>Doctor not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Book Appointment with {doctor.name}</h1>
      <p className="mb-2">Speciality: {doctor.speciality}</p>
      <p className="mb-4">Experience: {doctor.experience}</p>

      <label>Select a time slot:</label>
      <select
        value={selectedSlot}
        onChange={(e) => setSelectedSlot(e.target.value)}
        className="block border px-4 py-2 mt-2 mb-4"
      >
        <option value="">Select Slot</option>
        {doctor.slots.map((slot, index) => (
          <option key={index} value={slot}>{slot}</option>
        ))}
      </select>

      <button
        onClick={handleBooking}
        disabled={!selectedSlot}
        className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Book Now
      </button>

      {successMsg && <p className="text-green-600 mt-4">{successMsg}</p>}
    </div>
  );
};

export default Appointment;
