import General_physician from './General_physician.svg';
import Gynecologist from './Gynecologist.svg';
import Dermatologist from './Dermatologist.svg';
import Pediatricians from './Pediatricians.svg';
import Neurologist from './Neurologist.svg';
import Gastroenterologist from './Gastroenterologist.svg';
import doc1 from './doc1.png';
import doc2 from './doc2.png';
import doc3 from './doc3.png';
import doc4 from './doc4.png';
import doc5 from './doc5.png';
import doc6 from './doc6.png';
import doc7 from './doc7.png';
import doc8 from './doc8.png';
import doc9 from './doc9.png';
import doc10 from './doc10.png';
import doc11 from './doc11.png';
import doc12 from './doc12.png';
import doc13 from './doc13.png';
import doc14 from './doc14.png';
import doc15 from './doc15.png';
export const specialityData = [
    {
        speciality:'General physician',
        image:General_physician
    },

     {
        speciality:'Gynecologist',
        image:Gynecologist
    },
      {
        speciality:'Dermatologist',
        image:Dermatologist
    },
      {
        speciality:'Pediatricians',
        image:Pediatricians
    },
      {
        speciality:'Neurologist',
        image:Neurologist
    },
    {
    speciality: 'Gastroenterologist', // ✅ new speciality
    image: Gastroenterologist,
  },
    
];
export const doctorsData = [
  {
    id: 1,
    name: "Dr. Ramesh Sharma",
    speciality: "General physician",
    experience: "10 years",
    rating: 4.8,
    slots: ["10:00 AM", "1:00 PM", "4:00 PM"],
    address: {
      line1: "123 Health Street",
      line2: "Sector 5, Delhi"
    },
    image: doc1,
  },
  {
    id: 2,
    name: "Dr. Nisha Verma",
    speciality: "Gynecologist",
    experience: "8 years",
    rating: 4.6,
    slots: ["9:30 AM", "12:30 PM", "3:30 PM"],
    address: {
      line1: "456 Wellness Avenue",
      line2: "Baner, Pune"
    },
    image: doc2,
  },
  {
    id: 3,
    name: "Dr. Aakash Mehta",
    speciality: "Neurologist",
    experience: "12 years",
    rating: 4.9,
    slots: ["11:00 AM", "2:00 PM"],
    address: {
      line1: "789 Care Circle",
      line2: "JP Nagar, Bengaluru"
    },
    image: doc3,
  },
  {
    id: 4,
    name: "Dr. Mohan Lal",
    speciality: "Dermatologist",
    experience: "7 years",
    rating: 4.5,
    slots: ["10:15 AM", "1:45 PM"],
    address: {
      line1: "15 Skin Lane",
      line2: "MG Road, Mumbai"
    },
    image: doc4,
  },
  {
    id: 5,
    name: "Dr. Priya Singh",
    speciality: "Pediatrician",
    experience: "15 years",
    rating: 4.7,
    slots: ["9:00 AM", "12:00 PM", "5:00 PM"],
    address: {
      line1: "22 Children Care",
      line2: "Anna Nagar, Chennai"
    },
    image: doc5,
  },
  {
    id: 6,
    name: "Dr. Samrat Sinha",
    speciality: "Pediatrician",
    experience: "6 years",
    rating: 4.3,
    slots: ["10:30 AM", "3:00 PM"],
    address: {
      line1: "303 KidZone Clinic",
      line2: "Hitech City, Hyderabad"
    },
    image: doc6,
  },
  {
    id: 7,
    name: "Dr. Aditya Rao",
    speciality: "General Physician",
    experience: "9 years",
    rating: 4.4,
    slots: ["11:30 AM", "2:30 PM"],
    address: {
      line1: "12 Wellness Tower",
      line2: "Salt Lake, Kolkata"
    },
    image: doc7,
  },
  {
    id: 8,
    name: "Dr. Farah Qureshi",
    speciality: "Gastroenterologist",
    experience: "11 years",
    rating: 4.8,
    slots: ["10:00 AM", "1:00 PM", "4:00 PM"],
    address: {
      line1: "45 Digestive Health Rd",
      line2: "Gomti Nagar, Lucknow"
    },
    image: doc8,
  },
  {
    id: 9,
    name: "Dr. Jahnavi",
    speciality: "General physician",
    experience: "13 years",
    rating: 4.6,
    slots: ["9:00 AM", "12:00 PM", "3:00 PM"],
    address: {
      line1: "67 Urban Health",
      line2: "Boring Road, Patna"
    },
    image: doc9,
  },
  {
    id: 10,
    name: "Dr. Santhosh",
    speciality: "Gynecologist",
    experience: "10 years",
    rating: 4.9,
    slots: ["11:00 AM", "2:00 PM", "5:00 PM"],
    address: {
      line1: "108 Maternity Ward",
      line2: "Andheri West, Mumbai"
    },
    image: doc10,
  },
  {
    id: 11,
    name: "Dr. Ashmitha",
    speciality: "Dermatologist",
    experience: "6 years",
    rating: 4.9,
    slots: ["09:00 AM", "2:00 PM", "5:00 PM"],
    address: {
      line1: "101 Skin Glow Street",
      line2: "Sector 21, Chandigarh"
    },
    image: doc11,
  },
  {
    id: 12,
    name: "Dr. Makla",
    speciality: "Pediatricians",
    experience: "10 years",
    rating: 4.9,
    slots: ["11:00 AM", "2:00 PM", "5:00 PM"],
    address: {
      line1: "45 Happy Kids Blvd",
      line2: "Indiranagar, Bengaluru"
    },
    image: doc12,
  },
  {
    id: 13,
    name: "Dr. Virasitha",
    speciality: "Neurologist",
    experience: "8 years",
    rating: 4.9,
    slots: ["11:00 AM", "2:00 PM", "5:00 PM"],
    address: {
      line1: "55 NeuroCare Center",
      line2: "Viman Nagar, Pune"
    },
    image: doc13,
  },
  {
    id: 14,
    name: "Dr. Samrat Rao",
    speciality: "Gastroenterologist",
    experience: "9 years",
    rating: 4.9,
    slots: ["11:00 AM", "2:00 PM", "5:00 PM"],
    address: {
      line1: "88 Gut Wellness Hospital",
      line2: "Rajaji Nagar, Bengaluru"
    },
    image: doc14,
  },
  {
    id: 15,
    name: "Dr. Rosy Shetty",
    speciality: "General Physician",
    experience: "5 years",
    rating: 4.9,
    slots: ["11:00 AM", "2:00 PM", "5:00 PM"],
    address: {
      line1: "22 Wellness Road",
      line2: "Beside Metro Station, Kochi"
    },
    image: doc15,
  },
];
