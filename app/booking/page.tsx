//booking without SEO

// "use client"

// import React, { useState } from 'react';
// import { Calendar,  Send } from 'lucide-react';
// import Link from 'next/link';



// interface CourseOption {
//   id: string;
//   name: string;
//   price: string;
// }

// const courses: CourseOption[] = [
//   { id: '1', name: 'Vocals Mixing Mastering Package', price: '₹2500' },
//   { id: '2', name: 'BEGINNER YouTube Cover song shoot', price: '₹4999' },
//   { id: '3', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '4', name: 'Recording Session Per Hour - AKG 220/ MXL 990', price: '₹750' },
//   { id: '5', name: 'Professional Cover songs Package - Video Shooting, Minus Track Mixing', price: '₹12000' },
//   { id: '6', name: 'Premium Room with Rode NT2 - Spacious', price: '₹1200' },
//   { id: '7', name: 'Podcast Audio & Video Production Package - 4 Hours', price: '₹22000' },
//   { id: '8', name: 'VL Studios Premium', price: '₹1000' },
//   { id: '9', name: 'Intimate Sessions/karaoke sessions', price: '₹7500' },
//   { id: '10', name: 'Jam sessions @550/850/1000 Rs Per Hour', price: '₹1499' },
//   { id: '11', name: 'Guitar/Keyboard Drum Group Classes', price: '₹10000' },
//   { id: '12', name: '10 hours Package for Jam Session', price: '₹5000' },
//   { id: '13', name: '12db - Audios services', price: '₹2499' },
//   { id: '14', name: 'Audio podcast Per hour', price: '₹1499' },
//   {id: '15', name: 'Karaoke Party Venue', price: '₹299'},
//   {id: '16', name: 'Music Classes - 3 Months', price: '₹10000'}
// ];

// //extra code -  experimental 

// function ViewCatalogue() {
//   return (
//     <div className="text-center">
//       <Link legacyBehavior href="/services">
//         <a className="w-full inline-block py-3 px-6 text-center bg-green-600 text-white rounded-md shadow-md hover:bg-green-700">
//           {/* Contact Us */}
//           View Services Catalogue
//         </a>
//       </Link>
//     </div>
//   );
// }
// //-----------
// function Booking() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     selectedCourse: '',
//     date: '',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const message = encodeURIComponent(
//       `Hello! I would like to book:\n\n` +
//       `Course: ${courses.find(c => c.id === formData.selectedCourse)?.name}\n` +
//       `Name: ${formData.name}\n` +
//       `Email: ${formData.email}\n` +
//       `Mobile: ${formData.mobile}\n` +
//       `Preferred Date: ${formData.date}`
//     );
    
//     window.open(`https://wa.me/919742343464?text=${message}`, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
       
//       <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="px-8 py-6">
//           <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
//             Service Booking
//           </h2>

//           <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
//             Check our services catalogue before booking.
//           </h2>

//           <ViewCatalogue/>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               {/* trying to add extra break */}
//               <br />
//               <label htmlFor="course" className="block text-sm font-medium text-gray-700">
//                 Select Service
//               </label>
            
//               <select
//                 id="course"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 value={formData.selectedCourse}
//                 onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
//                 required
//               >
//                 <option value="">Select Service</option>
//                 {courses.map((course) => (
//                   <option key={course.id} value={course.id}>
//                     {course.name} - {course.price}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
//                 Mobile Number
//               </label>
//               <input
//                 type="tel"
//                 id="mobile"
//                 pattern="[0-9]{10}"
//                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                 value={formData.mobile}
//                 onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="date" className="block text-sm font-medium text-gray-700">
//                 Preferred Start Date
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   type="date"
//                   id="date"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   value={formData.date}
//                   onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                   required
//                 />
//                 <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//             >
//               <Send size={20} />
//               Book via WhatsApp
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;

//booking with SEO - dont use

// "use client";

// import React, { useState } from "react";
// import { Calendar, Send } from "lucide-react";
// import Link from "next/link";
// import Head from "next/head"; // Import for meta tags

// interface CourseOption {
//   id: string;
//   name: string;
//   price: string;
// }

// const courses: CourseOption[] = [
//   { id: "1", name: "Vocals Mixing Mastering Package", price: "₹2500" },
//   { id: "2", name: "BEGINNER YouTube Cover song shoot", price: "₹4999" },
//   { id: "3", name: "Audio podcast Per hour", price: "₹1499" },
//   { id: "4", name: "Recording Session Per Hour - AKG 220/ MXL 990", price: "₹750" },
//   { id: "5", name: "Professional Cover songs Package - Video Shooting, Minus Track Mixing", price: "₹12000" },
//   { id: "6", name: "Premium Room with Rode NT2 - Spacious", price: "₹1200" },
//   { id: "7", name: "Podcast Audio & Video Production Package - 4 Hours", price: "₹22000" },
//   { id: "8", name: "VL Studios Premium", price: "₹1000" },
//   { id: "9", name: "Intimate Sessions/karaoke sessions", price: "₹7500" },
//   { id: "10", name: "Jam sessions @550/850/1000 Rs Per Hour", price: "₹1499" },
//   { id: "11", name: "Guitar/Keyboard Drum Group Classes", price: "₹10000" },
//   { id: "12", name: "10 hours Package for Jam Session", price: "₹5000" },
//   { id: "13", name: "12db - Audios services", price: "₹2499" },
//   { id: "14", name: "Audio podcast Per hour", price: "₹1499" },
//   { id: "15", name: "Karaoke Party Venue", price: "₹299" },
//   { id: "16", name: "Music Classes - 3 Months", price: "₹10000" },
// ];

// function ViewCatalogue() {
//   return (
//     <div className="text-center">
//       <Link legacyBehavior href="/services">
//         <a className="w-full inline-block py-3 px-6 text-center bg-green-600 text-white rounded-md shadow-md hover:bg-green-700">
//           View Services Catalogue
//         </a>
//       </Link>
//     </div>
//   );
// }

// function Booking() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     selectedCourse: "",
//     date: "",
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     const message = encodeURIComponent(
//       `Hello! I would like to book:\n\n` +
//         `Course: ${courses.find((c) => c.id === formData.selectedCourse)?.name}\n` +
//         `Name: ${formData.name}\n` +
//         `Email: ${formData.email}\n` +
//         `Mobile: ${formData.mobile}\n` +
//         `Preferred Date: ${formData.date}`
//     );

//     window.open(`https://wa.me/919742343464?text=${message}`, "_blank");
//   };

//   return (
//     <>
//       {/* Add meta tags for SEO */}
//       <Head>
//         <title>Service Booking | VL Studios</title>
//         <meta name="description" content="Book your services with VL Studios, including music recording, podcast production, jam sessions, and more. View our services catalogue now!" />
//         <meta name="keywords" content="service booking, VL Studios, music recording, podcast production, jam sessions, karaoke, music classes" />
//         <meta name="author" content="VL Studios" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>

//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="px-8 py-6">
//             <h1 className="text-2xl font-bold text-gray-900 text-center mb-4">
//               Book Your Service
//             </h1>

//             <p className="text-gray-600 text-center mb-6">
//               Check out our services catalogue before booking your preferred service.
//             </p>

//             <ViewCatalogue />

//             <form onSubmit={handleSubmit} className="space-y-6 mt-6">
//               <div>
//                 <label htmlFor="course" className="block text-sm font-medium text-gray-700">
//                   Select Service
//                 </label>
//                 <select
//                   id="course"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   value={formData.selectedCourse}
//                   onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
//                   required
//                 >
//                   <option value="">Select Service</option>
//                   {courses.map((course) => (
//                     <option key={course.id} value={course.id}>
//                       {course.name} - {course.price}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="mobile"
//                   pattern="[0-9]{10}"
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                   value={formData.mobile}
//                   onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="date" className="block text-sm font-medium text-gray-700">
//                   Preferred Start Date
//                 </label>
//                 <div className="mt-1 relative">
//                   <input
//                     type="date"
//                     id="date"
//                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                     value={formData.date}
//                     onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                     required
//                   />
//                   <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//               >
//                 <Send size={20} />
//                 Book via WhatsApp
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Booking;

//used different design

// "use client"

// import React, { useState } from 'react';
// import { Calendar, Send, Music2, Clock, MapPin, Phone } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';

// interface CourseOption {
//   id: string;
//   name: string;
//   price: string;
// }

// const courses: CourseOption[] = [
//   { id: '1', name: 'Vocals Mixing Mastering Package', price: '₹2500' },
//   { id: '2', name: 'BEGINNER YouTube Cover song shoot', price: '₹4999' },
//   { id: '3', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '4', name: 'Recording Session Per Hour - AKG 220/ MXL 990', price: '₹750' },
//   { id: '5', name: 'Professional Cover songs Package', price: '₹12000' },
//   { id: '6', name: 'Premium Room with Rode NT2 - Spacious', price: '₹1200' },
//   { id: '7', name: 'Podcast Audio & Video Production Package - 4 Hours', price: '₹22000' },
//   { id: '8', name: 'VL Studios Premium', price: '₹1000' },
//   { id: '9', name: 'Intimate Sessions/karaoke sessions', price: '₹7500' },
//   { id: '10', name: 'Jam sessions', price: '₹1499' },
//   { id: '11', name: 'Guitar/Keyboard Drum Group Classes', price: '₹10000' },
//   { id: '12', name: '10 hours Package for Jam Session', price: '₹5000' },
//   { id: '13', name: '12db - Audios services', price: '₹2499' },
//   { id: '14', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '15', name: 'Karaoke Party Venue', price: '₹299' },
//   { id: '16', name: 'Music Classes - 3 Months', price: '₹10000' }
// ];

// function Booking() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     selectedCourse: '',
//     date: '',
//     time: '',
//     guests: '1',
//   });

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     const message = encodeURIComponent(
//       `Hello! I would like to book:\n\n` +
//       `Service: ${courses.find(c => c.id === formData.selectedCourse)?.name}\n` +
//       `Name: ${formData.name}\n` +
//       `Email: ${formData.email}\n` +
//       `Mobile: ${formData.mobile}\n` +
//       `Date: ${formData.date}\n` +
//       `Time: ${formData.time}\n` +
//       `Number of Guests: ${formData.guests}`
//     );
    
//     window.open(`https://wa.me/919742343464?text=${message}`, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative h-[40vh] w-full">
//         <Image
//           src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
//           alt="Studio Background"
//           fill
//           className="object-cover brightness-50"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold mb-4">Book Your Session</h1>
//             <p className="text-xl">Experience the magic of music in our professional studio</p>
//           </div>
//         </div>
//       </div>

//       {/* Info Cards */}
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Clock className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Operating Hours</h3>
//             <p>Mon - Sun: 10:00 AM - 10:00 PM</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <MapPin className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Location</h3>
//             <p>Bangalore, India</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Phone className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Contact</h3>
//             <p>+91 97423 43464</p>
//           </div>
//         </div>

//         {/* Booking Form */}
//         <div className="max-w-2xl mx-auto bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
//           <div className="p-8">
//             <div className="flex items-center justify-center mb-8">
//               <Music2 className="h-8 w-8 text-green-500 mr-3" />
//               <h2 className="text-3xl font-bold">Reserve Your Spot</h2>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Select Service
//                   </label>
//                   <select
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.selectedCourse}
//                     onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
//                     required
//                   >
//                     <option value="">Choose a service</option>
//                     {courses.map((course) => (
//                       <option key={course.id} value={course.id}>
//                         {course.name} - {course.price}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Number of Guests
//                   </label>
//                   <input
//                     type="number"
//                     min="1"
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.guests}
//                     onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Date
//                   </label>
//                   <div className="relative">
//                     <input
//                       type="date"
//                       className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                       value={formData.date}
//                       onChange={(e) => setFormData({ ...formData, date: e.target.value })}
//                       required
//                     />
//                     <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Time
//                   </label>
//                   <input
//                     type="time"
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.time}
//                     onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   pattern="[0-9]{10}"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.mobile}
//                   onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full flex justify-center items-center gap-2 py-4 px-4 bg-green-600 hover:bg-green-700 rounded-md text-white font-medium transition-colors duration-200"
//               >
//                 <Send size={20} />
//                 Book via WhatsApp
//               </button>
//             </form>

//             <div className="mt-8 text-center">
//               <Link href="/services" className="text-green-500 hover:text-green-400 font-medium">
//                 View Complete Services Catalogue →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;


//trying to use casa design 


// "use client"

// import React, { useState } from 'react';
// import { Calendar as CalendarIcon, Send, Music2, Clock, MapPin, Phone } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { DayPicker } from 'react-day-picker';
// import { format, addDays, setHours, setMinutes, isBefore, isAfter } from 'date-fns';

// interface CourseOption {
//   id: string;
//   name: string;
//   price: string;
// }

// const courses: CourseOption[] = [
//   { id: '1', name: 'Vocals Mixing Mastering Package', price: '₹2500' },
//   { id: '2', name: 'BEGINNER YouTube Cover song shoot', price: '₹4999' },
//   { id: '3', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '4', name: 'Recording Session Per Hour - AKG 220/ MXL 990', price: '₹750' },
//   { id: '5', name: 'Professional Cover songs Package', price: '₹12000' },
//   { id: '6', name: 'Premium Room with Rode NT2 - Spacious', price: '₹1200' },
//   { id: '7', name: 'Podcast Audio & Video Production Package - 4 Hours', price: '₹22000' },
//   { id: '8', name: 'VL Studios Premium', price: '₹1000' },
//   { id: '9', name: 'Intimate Sessions/karaoke sessions', price: '₹7500' },
//   { id: '10', name: 'Jam sessions', price: '₹1499' },
//   { id: '11', name: 'Guitar/Keyboard Drum Group Classes', price: '₹10000' },
//   { id: '12', name: '10 hours Package for Jam Session', price: '₹5000' },
//   { id: '13', name: '12db - Audios services', price: '₹2499' },
//   { id: '14', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '15', name: 'Karaoke Party Venue', price: '₹299' },
//   { id: '16', name: 'Music Classes - 3 Months', price: '₹10000' }
// ];

// // Generate time slots from 10 AM to 10 PM
// const generateTimeSlots = () => {
//   const slots = [];
//   for (let hour = 10; hour <= 22; hour++) {
//     for (let minute = 0; minute < 60; minute += 30) {
//       const time = setMinutes(setHours(new Date(), hour), minute);
//       slots.push(time);
//     }
//   }
//   return slots;
// };

// function Booking() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     selectedCourse: '',
//     guests: '1',
//   });

//   const [selectedDate, setSelectedDate] = useState<Date>();
//   const [selectedTime, setSelectedTime] = useState<Date>();
//   const [showTimeSlots, setShowTimeSlots] = useState(false);

//   const timeSlots = generateTimeSlots();
//   const today = new Date();
//   const thirtyDaysFromNow = addDays(today, 30);

//   const handleDateSelect = (date: Date | undefined) => {
//     setSelectedDate(date);
//     setShowTimeSlots(true);
//     setSelectedTime(undefined);
//   };

//   const handleTimeSelect = (time: Date) => {
//     setSelectedTime(time);
//   };

//   const isTimeSlotAvailable = (time: Date) => {
//     if (!selectedDate) return false;
    
//     const slotDateTime = new Date(
//       selectedDate.getFullYear(),
//       selectedDate.getMonth(),
//       selectedDate.getDate(),
//       time.getHours(),
//       time.getMinutes()
//     );

//     // If the selected date is today, disable past time slots
//     if (format(selectedDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')) {
//       return isAfter(slotDateTime, new Date());
//     }

//     return true;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!selectedDate || !selectedTime) return;

//     const message = encodeURIComponent(
//       `Hello! I would like to book:\n\n` +
//       `Service: ${courses.find(c => c.id === formData.selectedCourse)?.name}\n` +
//       `Name: ${formData.name}\n` +
//       `Email: ${formData.email}\n` +
//       `Mobile: ${formData.mobile}\n` +
//       `Date: ${format(selectedDate, 'MMMM d, yyyy')}\n` +
//       `Time: ${format(selectedTime, 'h:mm a')}\n` +
//       `Number of Guests: ${formData.guests}`
//     );
    
//     window.open(`https://wa.me/919742343464?text=${message}`, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative h-[40vh] w-full">
//         <Image
//           src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
//           alt="Studio Background"
//           fill
//           className="object-cover brightness-50"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold mb-4">Book Your Session</h1>
//             <p className="text-xl">Experience the magic of music in our professional studio</p>
//           </div>
//         </div>
//       </div>

//       {/* Info Cards */}
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Clock className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Operating Hours</h3>
//             <p>Mon - Sun: 10:00 AM - 10:00 PM</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <MapPin className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Location</h3>
//             <p>Bangalore, India</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Phone className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Contact</h3>
//             <p>+91 97423 43464</p>
//           </div>
//         </div>

//         {/* Booking Form */}
//         <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
//           <div className="p-8">
//             <div className="flex items-center justify-center mb-8">
//               <Music2 className="h-8 w-8 text-green-500 mr-3" />
//               <h2 className="text-3xl font-bold">Reserve Your Spot</h2>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Select Service
//                   </label>
//                   <select
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.selectedCourse}
//                     onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
//                     required
//                   >
//                     <option value="">Choose a service</option>
//                     {courses.map((course) => (
//                       <option key={course.id} value={course.id}>
//                         {course.name} - {course.price}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Number of Guests
//                   </label>
//                   <input
//                     type="number"
//                     min="1"
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.guests}
//                     onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Select Date
//                   </label>
//                   <div className="bg-zinc-800 rounded-lg p-4">
//                     <DayPicker
//                       mode="single"
//                       selected={selectedDate}
//                       onSelect={handleDateSelect}
//                       disabled={[
//                         { before: today },
//                         { after: thirtyDaysFromNow }
//                       ]}
//                       className="!bg-zinc-800 text-white"
//                       classNames={{
//                         day_selected: "bg-green-500 text-white",
//                         day_today: "text-green-500 font-bold",
//                         day: "text-white hover:bg-zinc-700",
//                         day_disabled: "text-zinc-600",
//                         head_cell: "text-green-500",
//                         caption: "text-white",
//                         nav_button_previous: "text-green-500 hover:text-green-400",
//                         nav_button_next: "text-green-500 hover:text-green-400",
//                       }}
//                     />
//                   </div>
//                 </div>

//                 {showTimeSlots && (
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Select Time
//                     </label>
//                     <div className="bg-zinc-800 rounded-lg p-4 h-[350px] overflow-y-auto">
//                       <div className="grid grid-cols-2 gap-2">
//                         {timeSlots.map((time, index) => (
//                           <button
//                             key={index}
//                             type="button"
//                             disabled={!isTimeSlotAvailable(time)}
//                             onClick={() => handleTimeSelect(time)}
//                             className={`p-2 rounded-md text-center transition-colors duration-200 ${
//                               selectedTime && format(selectedTime, 'HH:mm') === format(time, 'HH:mm')
//                                 ? 'bg-green-500 text-white'
//                                 : isTimeSlotAvailable(time)
//                                 ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
//                                 : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'
//                             }`}
//                           >
//                             {format(time, 'h:mm a')}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   pattern="[0-9]{10}"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.mobile}
//                   onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={!selectedDate || !selectedTime}
//                 className="w-full flex justify-center items-center gap-2 py-4 px-4 bg-green-600 hover:bg-green-700 rounded-md text-white font-medium transition-colors duration-200 disabled:bg-zinc-700 disabled:cursor-not-allowed"
//               >
//                 <Send size={20} />
//                 Book via WhatsApp
//               </button>
//             </form>

//             <div className="mt-8 text-center">
//               <Link href="/services" className="text-green-500 hover:text-green-400 font-medium">
//                 View Complete Services Catalogue →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;


//updating time slots from 7 am to 12 am

// "use client"

// import React, { useState } from 'react';
// import { Calendar as CalendarIcon, Send, Music2, Clock, MapPin, Phone } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { DayPicker } from 'react-day-picker';
// import { format, addDays, setHours, setMinutes, isBefore, isAfter } from 'date-fns';

// interface CourseOption {
//   id: string;
//   name: string;
//   price: string;
// }

// const courses: CourseOption[] = [
//   { id: '1', name: 'Vocals Mixing Mastering Package', price: '₹2500' },
//   { id: '2', name: 'BEGINNER YouTube Cover song shoot', price: '₹4999' },
//   { id: '3', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '4', name: 'Recording Session Per Hour - AKG 220/ MXL 990', price: '₹750' },
//   { id: '5', name: 'Professional Cover songs Package', price: '₹12000' },
//   { id: '6', name: 'Premium Room with Rode NT2 - Spacious', price: '₹1200' },
//   { id: '7', name: 'Podcast Audio & Video Production Package - 4 Hours', price: '₹22000' },
//   { id: '8', name: 'VL Studios Premium', price: '₹1000' },
//   { id: '9', name: 'Intimate Sessions/karaoke sessions', price: '₹7500' },
//   { id: '10', name: 'Jam sessions', price: '₹1499' },
//   { id: '11', name: 'Guitar/Keyboard Drum Group Classes', price: '₹10000' },
//   { id: '12', name: '10 hours Package for Jam Session', price: '₹5000' },
//   { id: '13', name: '12db - Audios services', price: '₹2499' },
//   { id: '14', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '15', name: 'Karaoke Party Venue', price: '₹299' },
//   { id: '16', name: 'Music Classes - 3 Months', price: '₹10000' }
// ];

// // Generate time slots from 7 AM to 12 AM
// const generateTimeSlots = () => {
//   const slots = [];
//   for (let hour = 7; hour <= 23; hour++) {
//     for (let minute = 0; minute < 60; minute += 30) {
//       const time = setMinutes(setHours(new Date(), hour), minute);
//       slots.push(time);
//     }
//   }
//   return slots;
// };

// function Booking() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     selectedCourse: '',
//     guests: '1',
//   });

//   const [selectedDate, setSelectedDate] = useState<Date>();
//   const [selectedTime, setSelectedTime] = useState<Date>();
//   const [showTimeSlots, setShowTimeSlots] = useState(false);

//   const timeSlots = generateTimeSlots();
//   const today = new Date();
//   const thirtyDaysFromNow = addDays(today, 30);

//   const handleDateSelect = (date: Date | undefined) => {
//     setSelectedDate(date);
//     setShowTimeSlots(true);
//     setSelectedTime(undefined);
//   };

//   const handleTimeSelect = (time: Date) => {
//     setSelectedTime(time);
//   };

//   const isTimeSlotAvailable = (time: Date) => {
//     if (!selectedDate) return false;

//     const slotDateTime = new Date(
//       selectedDate.getFullYear(),
//       selectedDate.getMonth(),
//       selectedDate.getDate(),
//       time.getHours(),
//       time.getMinutes()
//     );

//     // If the selected date is today, disable past time slots
//     if (format(selectedDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')) {
//       return isAfter(slotDateTime, new Date());
//     }

//     return true;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!selectedDate || !selectedTime) return;

//     const message = encodeURIComponent(
//       `Hello! I would like to book:\n\n` +
//       `Service: ${courses.find(c => c.id === formData.selectedCourse)?.name}\n` +
//       `Name: ${formData.name}\n` +
//       `Email: ${formData.email}\n` +
//       `Mobile: ${formData.mobile}\n` +
//       `Date: ${format(selectedDate, 'MMMM d, yyyy')}\n` +
//       `Time: ${format(selectedTime, 'h:mm a')}\n` +
//       `Number of Guests: ${formData.guests}`
//     );

//     window.open(`https://wa.me/919742343464?text=${message}`, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative h-[40vh] w-full">
//         <Image
//           src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
//           alt="Studio Background"
//           fill
//           className="object-cover brightness-50"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold mb-4">Book Your Session</h1>
//             <p className="text-xl">Experience the magic of music in our professional studio</p>
//           </div>
//         </div>
//       </div>

//       {/* Info Cards */}
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Clock className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Operating Hours</h3>
//             <p>Mon - Sun: 7:00 AM - 12:00 AM</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <MapPin className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Location</h3>
//             <p>Bangalore, India</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Phone className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Contact</h3>
//             <p>+91 97423 43464</p>
//           </div>
//         </div>

//         {/* Booking Form */}
//         <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
//           <div className="p-8">
//             <div className="flex items-center justify-center mb-8">
//               <Music2 className="h-8 w-8 text-green-500 mr-3" />
//               <h2 className="text-3xl font-bold">Reserve Your Spot</h2>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Select Service
//                   </label>
//                   <select
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.selectedCourse}
//                     onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
//                     required
//                   >
//                     <option value="">Choose a service</option>
//                     {courses.map((course) => (
//                       <option key={course.id} value={course.id}>
//                         {course.name} - {course.price}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Number of Guests
//                   </label>
//                   <input
//                     type="number"
//                     min="1"
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.guests}
//                     onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Select Date
//                   </label>
//                   <div className="bg-zinc-800 rounded-lg p-4">
//                     <DayPicker
//                       mode="single"
//                       selected={selectedDate}
//                       onSelect={handleDateSelect}
//                       disabled={[
//                         { before: today },
//                         { after: thirtyDaysFromNow }
//                       ]}
//                       className="!bg-zinc-800 text-white"
//                       classNames={{
//                         day_selected: "bg-green-500 text-white",
//                         day_today: "text-green-500 font-bold",
//                         day: "text-white hover:bg-zinc-700",
//                         day_disabled: "text-zinc-600",
//                         head_cell: "text-green-500",
//                         caption: "text-white",
//                         nav_button_previous: "text-green-500 hover:text-green-400",
//                         nav_button_next: "text-green-500 hover:text-green-400",
//                       }}
//                     />
//                   </div>
//                 </div>

//                 {showTimeSlots && (
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Select Time
//                     </label>
//                     <div className="bg-zinc-800 rounded-lg p-4 h-[350px] overflow-y-auto">
//                       <div className="grid grid-cols-2 gap-2">
//                         {timeSlots.map((time, index) => (
//                           <button
//                             key={index}
//                             type="button"
//                             disabled={!isTimeSlotAvailable(time)}
//                             onClick={() => handleTimeSelect(time)}
//                             className={`p-2 rounded-md text-center transition-colors duration-200 ${
//                               selectedTime && format(selectedTime, 'HH:mm') === format(time, 'HH:mm')
//                                 ? 'bg-green-500 text-white'
//                                 : isTimeSlotAvailable(time)
//                                 ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
//                                 : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'
//                             }`}
//                           >
//                             {format(time, 'h:mm a')}
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   pattern="[0-9]{10}"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.mobile}
//                   onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={!selectedDate || !selectedTime}
//                 className="w-full flex justify-center items-center gap-2 py-4 px-4 bg-green-600 hover:bg-green-700 rounded-md text-white font-medium transition-colors duration-200 disabled:bg-zinc-700 disabled:cursor-not-allowed"
//               >
//                 <Send size={20} />
//                 Book via WhatsApp
//               </button>
//             </form>

//             <div className="mt-8 text-center">
//               <Link href="/services" className="text-green-500 hover:text-green-400 font-medium">
//                 View Complete Services Catalogue →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;


// adding end time


// "use client"

// import React, { useState, useEffect } from 'react';
// import { Calendar as CalendarIcon, Send, Music2, Clock, MapPin, Phone } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { DayPicker } from 'react-day-picker';
// import { format, addDays, setHours, setMinutes, isBefore, isAfter, addMinutes } from 'date-fns';

// interface CourseOption {
//   id: string;
//   name: string;
//   price: string;
// }

// const courses: CourseOption[] = [
//   { id: '1', name: 'Vocals Mixing Mastering Package', price: '₹2500' },
//   { id: '2', name: 'BEGINNER YouTube Cover song shoot', price: '₹4999' },
//   { id: '3', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '4', name: 'Recording Session Per Hour - AKG 220/ MXL 990', price: '₹750' },
//   { id: '5', name: 'Professional Cover songs Package', price: '₹12000' },
//   { id: '6', name: 'Premium Room with Rode NT2 - Spacious', price: '₹1200' },
//   { id: '7', name: 'Podcast Audio & Video Production Package - 4 Hours', price: '₹22000' },
//   { id: '8', name: 'VL Studios Premium', price: '₹1000' },
//   { id: '9', name: 'Intimate Sessions/karaoke sessions', price: '₹7500' },
//   { id: '10', name: 'Jam sessions', price: '₹1499' },
//   { id: '11', name: 'Guitar/Keyboard Drum Group Classes', price: '₹10000' },
//   { id: '12', name: '10 hours Package for Jam Session', price: '₹5000' },
//   { id: '13', name: '12db - Audios services', price: '₹2499' },
//   { id: '14', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '15', name: 'Karaoke Party Venue', price: '₹299' },
//   { id: '16', name: 'Music Classes - 3 Months', price: '₹10000' }
// ];

// // Generate time slots from 7 AM to 12 AM
// const generateTimeSlots = () => {
//   const slots = [];
//   for (let hour = 7; hour <= 23; hour++) {
//     for (let minute = 0; minute < 60; minute += 30) {
//       const time = setMinutes(setHours(new Date(), hour), minute);
//       slots.push(time);
//     }
//   }
//   return slots;
// };

// function Booking() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     selectedCourse: '',
//     guests: '1',
//   });

//   const [selectedDate, setSelectedDate] = useState<Date>();
//   const [selectedStartTime, setSelectedStartTime] = useState<Date>();
//   const [selectedEndTime, setSelectedEndTime] = useState<Date>();
//   const [showTimeSlots, setShowTimeSlots] = useState(false);
//   const [availableEndTimes, setAvailableEndTimes] = useState<Date[]>([]);

//   const timeSlots = generateTimeSlots();
//   const today = new Date();
//   const thirtyDaysFromNow = addDays(today, 30);

//   useEffect(() => {
//     if (selectedStartTime) {
//       const endTimeSlots = timeSlots.filter(time => 
//         isAfter(time, selectedStartTime) && 
//         time.getHours() <= 23
//       );
//       setAvailableEndTimes(endTimeSlots);
//       setSelectedEndTime(undefined);
//     }
//   }, [selectedStartTime]);

//   const handleDateSelect = (date: Date | undefined) => {
//     setSelectedDate(date);
//     setShowTimeSlots(true);
//     setSelectedStartTime(undefined);
//     setSelectedEndTime(undefined);
//   };

//   const handleStartTimeSelect = (time: Date) => {
//     setSelectedStartTime(time);
//   };

//   const handleEndTimeSelect = (time: Date) => {
//     setSelectedEndTime(time);
//   };

//   const isTimeSlotAvailable = (time: Date) => {
//     if (!selectedDate) return false;

//     const slotDateTime = new Date(
//       selectedDate.getFullYear(),
//       selectedDate.getMonth(),
//       selectedDate.getDate(),
//       time.getHours(),
//       time.getMinutes()
//     );

//     // If the selected date is today, disable past time slots
//     if (format(selectedDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')) {
//       return isAfter(slotDateTime, new Date());
//     }

//     return true;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!selectedDate || !selectedStartTime || !selectedEndTime) return;

//     const message = encodeURIComponent(
//       `Hello! I would like to book:\n\n` +
//       `Service: ${courses.find(c => c.id === formData.selectedCourse)?.name}\n` +
//       `Name: ${formData.name}\n` +
//       `Email: ${formData.email}\n` +
//       `Mobile: ${formData.mobile}\n` +
//       `Date: ${format(selectedDate, 'MMMM d, yyyy')}\n` +
//       `Start Time: ${format(selectedStartTime, 'h:mm a')}\n` +
//       `End Time: ${format(selectedEndTime, 'h:mm a')}\n` +
//       `Number of Guests: ${formData.guests}`
//     );

//     window.open(`https://wa.me/919742343464?text=${message}`, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative h-[40vh] w-full">
//         <Image
//           src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
//           alt="Studio Background"
//           fill
//           className="object-cover brightness-50"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold mb-4">Book Your Session</h1>
//             <p className="text-xl">Experience the magic of music in our professional studio</p>
//           </div>
//         </div>
//       </div>

//       {/* Info Cards */}
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Clock className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Operating Hours</h3>
//             <p>Mon - Sun: 7:00 AM - 12:00 AM</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <MapPin className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Location</h3>
//             <p>Bangalore, India</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Phone className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Contact</h3>
//             <p>+91 97423 43464</p>
//           </div>
//         </div>

//         {/* Booking Form */}
//         <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
//           <div className="p-8">
//             <div className="flex items-center justify-center mb-8">
//               <Music2 className="h-8 w-8 text-green-500 mr-3" />
//               <h2 className="text-3xl font-bold">Reserve Your Spot</h2>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Select Service
//                   </label>
//                   <select
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.selectedCourse}
//                     onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
//                     required
//                   >
//                     <option value="">Choose a service</option>
//                     {courses.map((course) => (
//                       <option key={course.id} value={course.id}>
//                         {course.name} - {course.price}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Number of Guests
//                   </label>
//                   <input
//                     type="number"
//                     min="1"
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.guests}
//                     onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Select Date
//                   </label>
//                   <div className="bg-zinc-800 rounded-lg p-4">
//                     <DayPicker
//                       mode="single"
//                       selected={selectedDate}
//                       onSelect={handleDateSelect}
//                       disabled={[
//                         { before: today },
//                         { after: thirtyDaysFromNow }
//                       ]}
//                       className="!bg-zinc-800 text-white"
//                       classNames={{
//                         day_selected: "bg-green-500 text-white",
//                         day_today: "text-green-500 font-bold",
//                         day: "text-white hover:bg-zinc-700",
//                         day_disabled: "text-zinc-600",
//                         head_cell: "text-green-500",
//                         caption: "text-white",
//                         nav_button_previous: "text-green-500 hover:text-green-400",
//                         nav_button_next: "text-green-500 hover:text-green-400",
//                       }}
//                     />
//                   </div>
//                 </div>

//                 {showTimeSlots && (
//                   <div className="space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">
//                         Select Start Time
//                       </label>
//                       <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
//                         <div className="grid grid-cols-2 gap-2">
//                           {timeSlots.map((time, index) => (
//                             <button
//                               key={index}
//                               type="button"
//                               disabled={!isTimeSlotAvailable(time)}
//                               onClick={() => handleStartTimeSelect(time)}
//                               className={`p-2 rounded-md text-center transition-colors duration-200 ${
//                                 selectedStartTime && format(selectedStartTime, 'HH:mm') === format(time, 'HH:mm')
//                                   ? 'bg-green-500 text-white'
//                                   : isTimeSlotAvailable(time)
//                                   ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
//                                   : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'
//                               }`}
//                             >
//                               {format(time, 'h:mm a')}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {selectedStartTime && (
//                       <div>
//                         <label className="block text-sm font-medium mb-2">
//                           Select End Time
//                         </label>
//                         <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
//                           <div className="grid grid-cols-2 gap-2">
//                             {availableEndTimes.map((time, index) => (
//                               <button
//                                 key={index}
//                                 type="button"
//                                 onClick={() => handleEndTimeSelect(time)}
//                                 className={`p-2 rounded-md text-center transition-colors duration-200 ${
//                                   selectedEndTime && format(selectedEndTime, 'HH:mm') === format(time, 'HH:mm')
//                                     ? 'bg-green-500 text-white'
//                                     : 'bg-zinc-700 hover:bg-zinc-600 text-white'
//                                 }`}
//                               >
//                                 {format(time, 'h:mm a')}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   pattern="[0-9]{10}"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.mobile}
//                   onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={!selectedDate || !selectedStartTime || !selectedEndTime}
//                 className="w-full flex justify-center items-center gap-2 py-4 px-4 bg-green-600 hover:bg-green-700 rounded-md text-white font-medium transition-colors duration-200 disabled:bg-zinc-700 disabled:cursor-not-allowed"
//               >
//                 <Send size={20} />
//                 Book via WhatsApp
//               </button>
//             </form>

//             <div className="mt-8 text-center">
//               <Link href="/services" className="text-green-500 hover:text-green-400 font-medium">
//                 View Complete Services Catalogue →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;

//Making sure that user can atleast book minimum time of 1 hour


// "use client"

// import React, { useState, useEffect } from 'react';
// import { Calendar as CalendarIcon, Send, Music2, Clock, MapPin, Phone } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { DayPicker } from 'react-day-picker';
// import { format, addDays, setHours, setMinutes, isBefore, isAfter, addHours } from 'date-fns';

// interface CourseOption {
//   id: string;
//   name: string;
//   price: string;
// }

// const courses: CourseOption[] = [
//   { id: '1', name: 'Vocals Mixing Mastering Package', price: '₹2500' },
//   { id: '2', name: 'BEGINNER YouTube Cover song shoot', price: '₹4999' },
//   { id: '3', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '4', name: 'Recording Session Per Hour - AKG 220/ MXL 990', price: '₹750' },
//   { id: '5', name: 'Professional Cover songs Package', price: '₹12000' },
//   { id: '6', name: 'Premium Room with Rode NT2 - Spacious', price: '₹1200' },
//   { id: '7', name: 'Podcast Audio & Video Production Package - 4 Hours', price: '₹22000' },
//   { id: '8', name: 'VL Studios Premium', price: '₹1000' },
//   { id: '9', name: 'Intimate Sessions/karaoke sessions', price: '₹7500' },
//   { id: '10', name: 'Jam sessions', price: '₹1499' },
//   { id: '11', name: 'Guitar/Keyboard Drum Group Classes', price: '₹10000' },
//   { id: '12', name: '10 hours Package for Jam Session', price: '₹5000' },
//   { id: '13', name: '12db - Audios services', price: '₹2499' },
//   { id: '14', name: 'Audio podcast Per hour', price: '₹1499' },
//   { id: '15', name: 'Karaoke Party Venue', price: '₹299' },
//   { id: '16', name: 'Music Classes - 3 Months', price: '₹10000' }
// ];

// // Generate time slots from 7 AM to 12 AM
// const generateTimeSlots = () => {
//   const slots = [];
//   for (let hour = 7; hour <= 23; hour++) {
//     for (let minute = 0; minute < 60; minute += 30) {
//       const time = setMinutes(setHours(new Date(), hour), minute);
//       slots.push(time);
//     }
//   }
//   return slots;
// };

// function Booking() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     selectedCourse: '',
//     guests: '1',
//   });

//   const [selectedDate, setSelectedDate] = useState<Date>();
//   const [selectedStartTime, setSelectedStartTime] = useState<Date>();
//   const [selectedEndTime, setSelectedEndTime] = useState<Date>();
//   const [showTimeSlots, setShowTimeSlots] = useState(false);
//   const [availableEndTimes, setAvailableEndTimes] = useState<Date[]>([]);

//   const timeSlots = generateTimeSlots();
//   const today = new Date();
//   const thirtyDaysFromNow = addDays(today, 30);

//   useEffect(() => {
//     if (selectedStartTime) {
//       // Calculate minimum end time (1 hour after start time)
//       const minEndTime = addHours(selectedStartTime, 1);
      
//       const endTimeSlots = timeSlots.filter(time => {
//         // Convert both times to the same date for comparison
//         const timeToCompare = new Date(
//           today.getFullYear(),
//           today.getMonth(),
//           today.getDate(),
//           time.getHours(),
//           time.getMinutes()
//         );
        
//         const minTimeToCompare = new Date(
//           today.getFullYear(),
//           today.getMonth(),
//           today.getDate(),
//           minEndTime.getHours(),
//           minEndTime.getMinutes()
//         );

//         return isAfter(timeToCompare, minTimeToCompare) && 
//                time.getHours() <= 23;
//       });
      
//       setAvailableEndTimes(endTimeSlots);
//       setSelectedEndTime(undefined);
//     }
//   }, [selectedStartTime]);

//   const handleDateSelect = (date: Date | undefined) => {
//     setSelectedDate(date);
//     setShowTimeSlots(true);
//     setSelectedStartTime(undefined);
//     setSelectedEndTime(undefined);
//   };

//   const handleStartTimeSelect = (time: Date) => {
//     setSelectedStartTime(time);
//   };

//   const handleEndTimeSelect = (time: Date) => {
//     setSelectedEndTime(time);
//   };

//   const isTimeSlotAvailable = (time: Date) => {
//     if (!selectedDate) return false;

//     const slotDateTime = new Date(
//       selectedDate.getFullYear(),
//       selectedDate.getMonth(),
//       selectedDate.getDate(),
//       time.getHours(),
//       time.getMinutes()
//     );

//     // If the selected date is today, disable past time slots
//     if (format(selectedDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')) {
//       return isAfter(slotDateTime, new Date());
//     }

//     return true;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!selectedDate || !selectedStartTime || !selectedEndTime) return;

//     const message = encodeURIComponent(
//       `Hello! I would like to book:\n\n` +
//       `Service: ${courses.find(c => c.id === formData.selectedCourse)?.name}\n` +
//       `Name: ${formData.name}\n` +
//       `Email: ${formData.email}\n` +
//       `Mobile: ${formData.mobile}\n` +
//       `Date: ${format(selectedDate, 'MMMM d, yyyy')}\n` +
//       `Start Time: ${format(selectedStartTime, 'h:mm a')}\n` +
//       `End Time: ${format(selectedEndTime, 'h:mm a')}\n` +
//       `Number of Guests: ${formData.guests}`
//     );

//     window.open(`https://wa.me/919742343464?text=${message}`, '_blank');
//   };

//   return (
//     <div className="min-h-screen bg-black text-white">
//       {/* Hero Section */}
//       <div className="relative h-[40vh] w-full">
//         <Image
//           src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
//           alt="Studio Background"
//           fill
//           className="object-cover brightness-50"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-5xl font-bold mb-4">Book Your Session</h1>
//             <p className="text-xl">Experience the magic of music in our professional studio</p>
//           </div>
//         </div>
//       </div>

//       {/* Info Cards */}
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Clock className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Operating Hours</h3>
//             <p>Mon - Sun: 7:00 AM - 12:00 AM</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <MapPin className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Location</h3>
//             <p>Bangalore, India</p>
//           </div>
//           <div className="bg-zinc-900 p-6 rounded-lg text-center">
//             <Phone className="mx-auto mb-4 h-8 w-8 text-green-500" />
//             <h3 className="text-xl font-semibold mb-2">Contact</h3>
//             <p>+91 97423 43464</p>
//           </div>
//         </div>

//         {/* Booking Form */}
//         <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
//           <div className="p-8">
//             <div className="flex items-center justify-center mb-8">
//               <Music2 className="h-8 w-8 text-green-500 mr-3" />
//               <h2 className="text-3xl font-bold">Reserve Your Spot</h2>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Select Service
//                   </label>
//                   <select
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.selectedCourse}
//                     onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
//                     required
//                   >
//                     <option value="">Choose a service</option>
//                     {courses.map((course) => (
//                       <option key={course.id} value={course.id}>
//                         {course.name} - {course.price}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Number of Guests
//                   </label>
//                   <input
//                     type="number"
//                     min="1"
//                     className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                     value={formData.guests}
//                     onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium mb-2">
//                     Select Date
//                   </label>
//                   <div className="bg-zinc-800 rounded-lg p-4">
//                     <DayPicker
//                       mode="single"
//                       selected={selectedDate}
//                       onSelect={handleDateSelect}
//                       disabled={[
//                         { before: today },
//                         { after: thirtyDaysFromNow }
//                       ]}
//                       className="!bg-zinc-800 text-white"
//                       classNames={{
//                         day_selected: "bg-green-500 text-white",
//                         day_today: "text-green-500 font-bold",
//                         day: "text-white hover:bg-zinc-700",
//                         day_disabled: "text-zinc-600",
//                         head_cell: "text-green-500",
//                         caption: "text-white",
//                         nav_button_previous: "text-green-500 hover:text-green-400",
//                         nav_button_next: "text-green-500 hover:text-green-400",
//                       }}
//                     />
//                   </div>
//                 </div>

//                 {showTimeSlots && (
//                   <div className="space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium mb-2">
//                         Select Start Time
//                       </label>
//                       <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
//                         <div className="grid grid-cols-2 gap-2">
//                           {timeSlots.map((time, index) => (
//                             <button
//                               key={index}
//                               type="button"
//                               disabled={!isTimeSlotAvailable(time)}
//                               onClick={() => handleStartTimeSelect(time)}
//                               className={`p-2 rounded-md text-center transition-colors duration-200 ${
//                                 selectedStartTime && format(selectedStartTime, 'HH:mm') === format(time, 'HH:mm')
//                                   ? 'bg-green-500 text-white'
//                                   : isTimeSlotAvailable(time)
//                                   ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
//                                   : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'
//                               }`}
//                             >
//                               {format(time, 'h:mm a')}
//                             </button>
//                           ))}
//                         </div>
//                       </div>
//                     </div>

//                     {selectedStartTime && (
//                       <div>
//                         <label className="block text-sm font-medium mb-2">
//                           Select End Time <span className="text-xs text-zinc-400">(Minimum 1 hour duration)</span>
//                         </label>
//                         <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
//                           <div className="grid grid-cols-2 gap-2">
//                             {availableEndTimes.map((time, index) => (
//                               <button
//                                 key={index}
//                                 type="button"
//                                 onClick={() => handleEndTimeSelect(time)}
//                                 className={`p-2 rounded-md text-center transition-colors duration-200 ${
//                                   selectedEndTime && format(selectedEndTime, 'HH:mm') === format(time, 'HH:mm')
//                                     ? 'bg-green-500 text-white'
//                                     : 'bg-zinc-700 hover:bg-zinc-600 text-white'
//                                 }`}
//                               >
//                                 {format(time, 'h:mm a')}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.email}
//                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium mb-2">
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   pattern="[0-9]{10}"
//                   className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
//                   value={formData.mobile}
//                   onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={!selectedDate || !selectedStartTime || !selectedEndTime}
//                 className="w-full flex justify-center items-center gap-2 py-4 px-4 bg-green-600 hover:bg-green-700 rounded-md text-white font-medium transition-colors duration-200 disabled:bg-zinc-700 disabled:cursor-not-allowed"
//               >
//                 <Send size={20} />
//                 Book via WhatsApp
//               </button>
//             </form>

//             <div className="mt-8 text-center">
//               <Link href="/services" className="text-green-500 hover:text-green-400 font-medium">
//                 View Complete Services Catalogue →
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;


// ensuring correct end time

"use client"

import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Send, Music2, Clock, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { DayPicker } from 'react-day-picker';
import { format, addDays, setHours, setMinutes, isBefore, isAfter, addMinutes } from 'date-fns';

interface CourseOption {
  id: string;
  name: string;
  price: string;
}

const courses: CourseOption[] = [
  { id: '1', name: 'Vocals Mixing Mastering Package', price: '₹2500' },
  { id: '2', name: 'BEGINNER YouTube Cover song shoot', price: '₹4999' },
  { id: '3', name: 'Audio podcast Per hour', price: '₹1499' },
  { id: '4', name: 'Recording Session Per Hour - AKG 220/ MXL 990', price: '₹750' },
  { id: '5', name: 'Professional Cover songs Package', price: '₹12000' },
  { id: '6', name: 'Premium Room with Rode NT2 - Spacious', price: '₹1200' },
  { id: '7', name: 'Podcast Audio & Video Production Package - 4 Hours', price: '₹22000' },
  { id: '8', name: 'VL Studios Premium', price: '₹1000' },
  { id: '9', name: 'Intimate Sessions/karaoke sessions', price: '₹7500' },
  { id: '10', name: 'Jam sessions @ 550/850/1000Rs', price: '₹550' },
  { id: '11', name: 'Guitar/Keyboard Drum Group Classes', price: '₹10000' },
  { id: '12', name: '10 hours Package for Jam Session', price: '₹5000' },
  { id: '13', name: '12db - Audios services', price: '₹2499' },
  { id: '14', name: 'Audio podcast Per hour', price: '₹1499' },
  { id: '15', name: 'Karaoke Party Venue', price: '₹299' },
  { id: '16', name: 'Music Classes - 3 Months', price: '₹10000' }
];

// Generate time slots from 7 AM to 12 AM
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 7; hour <= 23; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = setMinutes(setHours(new Date(), hour), minute);
      slots.push(time);
    }
  }
  return slots;
};

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    selectedCourse: '',
    guests: '1',
  });

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedStartTime, setSelectedStartTime] = useState<Date>();
  const [selectedEndTime, setSelectedEndTime] = useState<Date>();
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [availableEndTimes, setAvailableEndTimes] = useState<Date[]>([]);

  const timeSlots = generateTimeSlots();
  const today = new Date();
  const thirtyDaysFromNow = addDays(today, 30);

  useEffect(() => {
    if (selectedStartTime) {
      // Get hours and minutes from the selected start time
      const startHours = selectedStartTime.getHours();
      const startMinutes = selectedStartTime.getMinutes();
      
      const endTimeSlots = timeSlots.filter(time => {
        const endHours = time.getHours();
        const endMinutes = time.getMinutes();
        
        // Convert times to minutes for easier comparison
        const startTimeInMinutes = startHours * 60 + startMinutes;
        const endTimeInMinutes = endHours * 60 + endMinutes;
        
        // Ensure at least 60 minutes difference
        return (endTimeInMinutes - startTimeInMinutes) >= 60 && endHours <= 23;
      });
      
      setAvailableEndTimes(endTimeSlots);
      setSelectedEndTime(undefined);
    }
  }, [selectedStartTime]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    setShowTimeSlots(true);
    setSelectedStartTime(undefined);
    setSelectedEndTime(undefined);
  };

  const handleStartTimeSelect = (time: Date) => {
    setSelectedStartTime(time);
  };

  const handleEndTimeSelect = (time: Date) => {
    setSelectedEndTime(time);
  };

  const isTimeSlotAvailable = (time: Date) => {
    if (!selectedDate) return false;

    const slotDateTime = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
      time.getHours(),
      time.getMinutes()
    );

    // If the selected date is today, disable past time slots
    if (format(selectedDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')) {
      return isAfter(slotDateTime, new Date());
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedDate || !selectedStartTime || !selectedEndTime) return;

    const message = encodeURIComponent(
      `Hello! I would like to book:\n\n` +
      `Service: ${courses.find(c => c.id === formData.selectedCourse)?.name}\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Mobile: ${formData.mobile}\n` +
      `Date: ${format(selectedDate, 'MMMM d, yyyy')}\n` +
      `Start Time: ${format(selectedStartTime, 'h:mm a')}\n` +
      `End Time: ${format(selectedEndTime, 'h:mm a')}\n` +
      `Number of Guests: ${formData.guests}`
    );

    window.open(`https://wa.me/919742343464?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh] w-full">
        <Image
          // src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
          src="https://i.ytimg.com/vi/iI_klQnlrzw/maxresdefault.jpg"
          alt="Studio Background"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Book Your Session</h1>
            <p className="text-xl">Experience the magic of music in our professional studio</p>
          </div>
        </div>
      </div>

      {/* Info Cards */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-zinc-900 p-6 rounded-lg text-center">
            <Clock className="mx-auto mb-4 h-8 w-8 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Operating Hours</h3>
            <p>Mon - Sun: 7:00 AM - 12:00 AM</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg text-center">
            <MapPin className="mx-auto mb-4 h-8 w-8 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p>Bangalore, India</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg text-center">
            <Phone className="mx-auto mb-4 h-8 w-8 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Contact</h3>
            <p>+91 97423 43464</p>
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto bg-zinc-900 rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-center mb-8">
              <Music2 className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold">Reserve Your Spot</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Service
                  </label>
                  <select
                    className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
                    value={formData.selectedCourse}
                    onChange={(e) => setFormData({ ...formData, selectedCourse: e.target.value })}
                    required
                  >
                    <option value="">Choose a service</option>
                    {courses.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.name} - {course.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Date
                  </label>
                  <div className="bg-zinc-800 rounded-lg p-4">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      disabled={[
                        { before: today },
                        { after: thirtyDaysFromNow }
                      ]}
                      className="!bg-zinc-800 text-white"
                      classNames={{
                        day_selected: "bg-green-500 text-white",
                        day_today: "text-green-500 font-bold",
                        day: "text-white hover:bg-zinc-700",
                        day_disabled: "text-zinc-600",
                        head_cell: "text-green-500",
                        caption: "text-white",
                        nav_button_previous: "text-green-500 hover:text-green-400",
                        nav_button_next: "text-green-500 hover:text-green-400",
                      }}
                    />
                  </div>
                </div>

                {showTimeSlots && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Select Start Time
                      </label>
                      <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time, index) => (
                            <button
                              key={index}
                              type="button"
                              disabled={!isTimeSlotAvailable(time)}
                              onClick={() => handleStartTimeSelect(time)}
                              className={`p-2 rounded-md text-center transition-colors duration-200 ${
                                selectedStartTime && format(selectedStartTime, 'HH:mm') === format(time, 'HH:mm')
                                  ? 'bg-green-500 text-white'
                                  : isTimeSlotAvailable(time)
                                  ? 'bg-zinc-700 hover:bg-zinc-600 text-white'
                                  : 'bg-zinc-900 text-zinc-600 cursor-not-allowed'
                              }`}
                            >
                              {format(time, 'h:mm a')}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {selectedStartTime && (
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Select End Time
                        </label>
                        <div className="bg-zinc-800 rounded-lg p-4 h-[150px] overflow-y-auto">
                          <div className="grid grid-cols-2 gap-2">
                            {availableEndTimes.map((time, index) => (
                              <button
                                key={index}
                                type="button"
                                onClick={() => handleEndTimeSelect(time)}
                                className={`p-2 rounded-md text-center transition-colors duration-200 ${
                                  selectedEndTime && format(selectedEndTime, 'HH:mm') === format(time, 'HH:mm')
                                    ? 'bg-green-500 text-white'
                                    : 'bg-zinc-700 hover:bg-zinc-600 text-white'
                                }`}
                              >
                                {format(time, 'h:mm a')}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  className="w-full bg-zinc-800 rounded-md border-zinc-700 text-white focus:ring-green-500 focus:border-green-500"
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!selectedDate || !selectedStartTime || !selectedEndTime}
                className="w-full flex justify-center items-center gap-2 py-4 px-4 bg-green-600 hover:bg-green-700 rounded-md text-white font-medium transition-colors duration-200 disabled:bg-zinc-700 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                Book via WhatsApp
              </button>
            </form>

            <div className="mt-8 text-center">
              <Link href="/services" className="text-green-500 hover:text-green-400 font-medium">
                View Complete Services Catalogue →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;