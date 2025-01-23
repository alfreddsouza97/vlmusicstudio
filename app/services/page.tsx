// "use client"

// import React from 'react';
// import { Music4, Mic2, Home, Sliders } from 'lucide-react';

// const services = [
//   {
//     title: "Audio Podcast Per Hour",
//     icon: <Sliders className="w-8 h-8 mb-4 text-indigo-600" />,
//     image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000",
//     points: [
//       "Round Table setup with seating arrangements",
//       "Sound proof Room with AC",
//       "Ups for 1 hour to 2 hours backup",
//       "Podcast Mics 2",
//       "Sound Engineer 1",
//       "Muilttracking capable Systems",
//       "Black backgrounds wall 9ft",
//        "Camera for Rent Available - Sony ALFA A7 - 3500 Extra",
//         "Post editing or mastering charges additional",
//          "Basic set-up at the venue will be ready in advance",

//           "Black backgrounds wall 9ft",
        
//           "Schedule time will include Camera placements, Audio testing time",
//           "*50% Advance For booking slots Remaining payment after shoot",
//           "*50% Cancellation charges will apply"

//     ],
//     pricing: [
//       { tier: "Basic without Camera", price: "₹1499", description: "Audio Podcast per Hour" },
//       { tier: "Premium with Sony ALFA A7", price: "₹5000", description: "Audio Podcast per Hour with Sony ALFA A7" },
//       { tier: "Premium", price: "₹11,999", description: "Unlimited tracks" }
//     ]
//   },
//   {
//     title: "Mastering",
//     icon: <Music4 className="w-8 h-8 mb-4 text-indigo-600" />,
//     image: "https://images.unsplash.com/photo-1615671524827-c1fe3e6b7b91?auto=format&fit=crop&q=80&w=2000",
//     points: [
//       "Industry-standard loudness optimization",
//       "Precise frequency balance",
//       "Multi-format delivery",
//       "Stem mastering available",
//       "Reference matching"
//     ],
//     pricing: [
//       { tier: "Single", price: "₹2,499", description: "One song" },
//       { tier: "EP", price: "₹8,999", description: "Up to 5 songs" },
//       { tier: "Album", price: "₹14,999", description: "Up to 12 songs" }
//     ]
//   },
//   {
//     title: "Podcast Production",
//     icon: <Mic2 className="w-8 h-8 mb-4 text-indigo-600" />,
//     image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=2000",
//     points: [
//       "Complete podcast editing",
//       "Noise reduction and cleanup",
//       "Intro/outro music integration",
//       "Voice enhancement",
//       "Multi-speaker balancing"
//     ],
//     pricing: [
//       { tier: "Basic", price: "₹1,999", description: "30 min episode" },
//       { tier: "Standard", price: "₹3,499", description: "60 min episode" },
//       { tier: "Premium", price: "₹5,999", description: "90+ min episode" }
//     ]
//   },
//   {
//     title: "Room Selection",
//     icon: <Home className="w-8 h-8 mb-4 text-indigo-600" />,
//     image: "https://images.unsplash.com/photo-1516223725307-6f76b9182f7c?auto=format&fit=crop&q=80&w=2000",
//     points: [
//       "Acoustic environment analysis",
//       "Room dimension optimization",
//       "Treatment recommendations",
//       "Monitor positioning",
//       "Reflection point identification"
//     ],
//     pricing: [
//       { tier: "Remote", price: "₹6,999", description: "Online consultation" },
//       { tier: "On-site", price: "₹14,999", description: "Physical visit" },
//       { tier: "Complete", price: "₹24,999", description: "Full setup assistance" }
//     ]
//   }
// ];

// function Services() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
//       <div className="container mx-auto px-4 py-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
//           Professional Audio Services
//         </h1>
//         <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
//           Elevate your sound with our professional audio services. From mixing and mastering
//           to podcast production and room acoustics, we've got you covered.
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-gray-800 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
//               <div className="relative h-48 overflow-hidden">
//                 <img
//                   src={service.image}
//                   alt={service.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//                   <div className="text-center">
//                     {service.icon}
//                     <h3 className="text-2xl font-bold">{service.title}</h3>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <ul className="space-y-2 mb-6">
//                   {service.points.map((point, pointIndex) => (
//                     <li key={pointIndex} className="flex items-start">
//                       <span className="text-indigo-400 mr-2">•</span>
//                       <span className="text-gray-300">{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="border-t border-gray-700 pt-6">
//                   <h4 className="text-lg font-semibold mb-4 text-indigo-400">Pricing</h4>
//                   <div className="grid grid-cols-1 gap-4">
//                     {service.pricing.map((tier, tierIndex) => (
//                       <div key={tierIndex} className="flex justify-between items-center bg-gray-700 bg-opacity-50 rounded-lg p-3">
//                         <div>
//                           <span className="font-medium text-white">{tier.tier}</span>
//                           <p className="text-sm text-gray-300">{tier.description}</p>
//                         </div>
//                         <span className="text-lg font-bold text-indigo-300">{tier.price}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

// second
// import React, { useState, useEffect } from 'react';
// import { Music4, Mic2, Home, Sliders, ChevronLeft, ChevronRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const services = [
//   {
//     title: "Mixing",
//     icon: <Sliders className="w-8 h-8 mb-4 text-indigo-600" />,
//     images: [
//       "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000",
//       "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?auto=format&fit=crop&q=80&w=2000",
//       "https://images.unsplash.com/photo-1626126525134-fbbc07afb32c?auto=format&fit=crop&q=80&w=2000"
//     ],
//     points: [
//       "Professional multi-track mixing",
//       "Genre-specific mixing techniques",
//       "Analog and digital processing",
//       "Detailed mix revisions",
//       "Stereo and spatial enhancement"
//     ],
//     pricing: [
//       { tier: "Basic", price: "₹4,999", description: "Up to 16 tracks" },
//       { tier: "Standard", price: "₹7,999", description: "Up to 32 tracks" },
//       { tier: "Premium", price: "₹11,999", description: "Unlimited tracks" }
//     ]
//   },
//   {
//     title: "Mastering",
//     icon: <Music4 className="w-8 h-8 mb-4 text-indigo-600" />,
//     images: [
//       "https://images.unsplash.com/photo-1615671524827-c1fe3e6b7b91?auto=format&fit=crop&q=80&w=2000",
//       "https://images.unsplash.com/photo-1621976360623-004223992275?auto=format&fit=crop&q=80&w=2000",
//       "https://images.unsplash.com/photo-1631223046052-4919a4c8b0bb?auto=format&fit=crop&q=80&w=2000"
//     ],
//     points: [
//       "Industry-standard loudness optimization",
//       "Precise frequency balance",
//       "Multi-format delivery",
//       "Stem mastering available",
//       "Reference matching"
//     ],
//     pricing: [
//       { tier: "Single", price: "₹2,499", description: "One song" },
//       { tier: "EP", price: "₹8,999", description: "Up to 5 songs" },
//       { tier: "Album", price: "₹14,999", description: "Up to 12 songs" }
//     ]
//   },
//   {
//     title: "Podcast Production",
//     icon: <Mic2 className="w-8 h-8 mb-4 text-indigo-600" />,
//     images: [
//       "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=2000",
//       "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=2000",
//       "https://images.unsplash.com/photo-1609092334626-5c033c7b5f9f?auto=format&fit=crop&q=80&w=2000"
//     ],
//     points: [
//       "Complete podcast editing",
//       "Noise reduction and cleanup",
//       "Intro/outro music integration",
//       "Voice enhancement",
//       "Multi-speaker balancing"
//     ],
//     pricing: [
//       { tier: "Basic", price: "₹1,999", description: "30 min episode" },
//       { tier: "Standard", price: "₹3,499", description: "60 min episode" },
//       { tier: "Premium", price: "₹5,999", description: "90+ min episode" }
//     ]
//   },
//   {
//     title: "Room Selection",
//     icon: <Home className="w-8 h-8 mb-4 text-indigo-600" />,
//     images: [
//       "https://images.unsplash.com/photo-1516223725307-6f76b9182f7c?auto=format&fit=crop&q=80&w=2000",
//       "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=2000",
//       "https://images.unsplash.com/photo-1559732277-7453b141e3a1?auto=format&fit=crop&q=80&w=2000"
//     ],
//     points: [
//       "Acoustic environment analysis",
//       "Room dimension optimization",
//       "Treatment recommendations",
//       "Monitor positioning",
//       "Reflection point identification"
//     ],
//     pricing: [
//       { tier: "Remote", price: "₹6,999", description: "Online consultation" },
//       { tier: "On-site", price: "₹14,999", description: "Physical visit" },
//       { tier: "Complete", price: "₹24,999", description: "Full setup assistance" }
//     ]
//   }
// ];

// function ImageSlideshow({ images }: { images: string[] }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(timer);
//   }, [images.length]);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <div className="relative h-48 overflow-hidden group">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${
//             index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
//           }`}
//         >
//           <img
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       ))}
//       <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-8 h-8 mb-4 text-indigo-600 mx-auto"></div>
//         </div>
//       </div>
//       <button
//         onClick={goToPrevious}
//         className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={goToNext}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>
//       <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-2 h-2 rounded-full transition-colors duration-300 ${
//               index === currentIndex ? 'bg-white' : 'bg-gray-400'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
//       <div className="container mx-auto px-4 py-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
//           Professional Audio Services
//         </h1>
//         <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
//           Elevate your sound with our professional audio services. From mixing and mastering
//           to podcast production and room acoustics, we've got you covered.
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-gray-800 rounded-xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
//               <ImageSlideshow images={service.images} />
//               <div className="p-6">
//                 <div className="flex items-center justify-center mb-6">
//                   {service.icon}
//                   <h3 className="text-2xl font-bold ml-2">{service.title}</h3>
//                 </div>
//                 <ul className="space-y-2 mb-6">
//                   {service.points.map((point, pointIndex) => (
//                     <li key={pointIndex} className="flex items-start">
//                       <span className="text-indigo-400 mr-2">•</span>
//                       <span className="text-gray-300">{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <div className="border-t border-gray-700 pt-6">
//                   <h4 className="text-lg font-semibold mb-4 text-indigo-400">Pricing</h4>
//                   <div className="grid grid-cols-1 gap-4">
//                     {service.pricing.map((tier, tierIndex) => (
//                       <div key={tierIndex} className="flex justify-between items-center bg-gray-700 bg-opacity-50 rounded-lg p-3">
//                         <div>
//                           <span className="font-medium text-white">{tier.tier}</span>
//                           <p className="text-sm text-gray-300">{tier.description}</p>
//                         </div>
//                         <span className="text-lg font-bold text-indigo-300">{tier.price}</span>
//                       </div>
//                     ))}
//                   </div>
//                   <Link href="/booking" className="block w-full mt-6">
//                     <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
//                       Start Your Project
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


//final 

"use client";

import { useState } from "react";
import { Mic, Music, Radio, Video, Users, Guitar, Calendar, Headphones, Speaker, Youtube, Star, Building, PartyPopper } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "react-day-picker";
import Link from "next/link";

const services = [
  {
    title: "1. Audio Podcast",
    price: "₹1,499.00",
    duration: "Per hour",
    icon: <Radio className="w-6 h-6" />,
    description: "Round Table setup with seating arrangements in a sound proof room",
    features: [
      "Sound proof Room with AC",
      "UPS backup (1-2 hours)",
      "Podcast Mics",
      "Sound Engineer",
      "Multitracking capable Systems",
      "Black backgrounds wall 9ft",
      "Camera Rental: Sony alfa A7 (₹3500 per camera)",
      "Post editing/mastering charges additional",
      "50% Advance payment required"
    ],
    images: [
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc",
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618",
    ]
  },
  {
    title: "2. Podcast Audio & Video Production",
    price: "₹22,000.00",
    duration: "4 hours",
    icon: <Video className="w-6 h-6" />,
    description: "Complete half-day podcast production package",
    features: [
      "2 day lights (300W) with Floor Stand",
      "8ft brown/Black background screen",
      "Basic Properties (lamps, plants)",
      "Sound proof Room with AC",
      "UPS backup",
      "Client waiting room with AC",
      "Two DSLR cameras (HD Quality)",
      "Two podcast microphones",
      "Multi-tracking audio recording",
      "Professional crew included",
      "4K Quality available at ₹35,000"
    ],
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
      "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b",
    ]
  },
  {
    title: "3. Recording Session",
    price: "₹750.00",
    duration: "Per Hour",
    icon: <Mic className="w-6 h-6" />,
    description: "Vocal booth Recording with MXL 990 / AKG220",
    features: [
      "Professional vocal booth",
      "High-quality microphones",
      "Sound-treated environment",
      "Professional monitoring"
    ],
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625",
    ]
  },
  {
    title: "4. Premium Room with Rode NT2",
    price: "₹1,200.00",
    duration: "Per Hour",
    icon: <Star className="w-6 h-6" />,
    description: "Spacious premium recording room",
    features: [
      "Rode NT2a microphone",
      "Space for 6-piece Orchestra",
      "Drum tracking capability",
      "Multitracking available",
      "Air-conditioned environment"
    ],
    images: [
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    ]
  },
  {
    title: "5. Vocals Mixing Mastering Package",
    price: "₹2,500.00",
    duration: "Package",
    icon: <Headphones className="w-6 h-6" />,
    description: "Complete vocal recording and mixing package",
    features: [
      "Recording with MXL 990/AKG220",
      "1 hour recording session",
      "Karaoke/minus Track",
      "Professional mixing",
      "Mastering included",
      "50% Advance payment"
    ],
    images: [
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0",
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625",
    ]
  },
  {
    title: "6. BEGINNER YouTube Cover Song",
    price: "₹4,999.00",
    duration: "Package",
    icon: <Youtube className="w-6 h-6" />,
    description: "Starter package for YouTube cover videos",
    features: [
      "Professional video shoot",
      "Basic editing",
      "Quality equipment",
      "Perfect for beginners",
      "Sample videos available"
    ],
    images: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81",
      "https://images.unsplash.com/photo-1516280030429-27679b3dc9a7",
    ]
  },
  {
    title: "7. Professional Cover Songs Package",
    price: "₹12,000.00",
    duration: "Package",
    icon: <Star className="w-6 h-6" />,
    description: "Complete professional cover song production",
    features: [
      "Recording with minus track",
      "Professional mixing & mastering",
      "DSLR video shoot",
      "Professional cameraman",
      "Lighting setup",
      "Indoor venue",
      "50% advance required"
    ],
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625",
    ]
  },
  {
    title: "8. VL Studios PREMIUM",
    price: "₹1,000.00",
    duration: "Per Hour",
    icon: <Building className="w-6 h-6" />,
    description: "Premium venue for podcasts and events",
    features: [
      "Intimate sessions",
      "Open mics",
      "Various events",
      "Capacity: 20-30 members",
      "Professional setup"
    ],
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
      "https://images.unsplash.com/photo-1501612780327-45045538702b",
    ]
  },
  {
    title: "9. Intimate Sessions/Karaoke",
    price: "₹7,500.00",
    duration: "4 hours",
    icon: <Users className="w-6 h-6" />,
    description: "Perfect for small musical gatherings",
    features: [
      "Acoustically treated room with AC",
      "1-2 hours power backup",
      "25-30 seating capacity",
      "1000W PA system",
      "8 channel mixer",
      "Dynamic mics (SM57/SM58)",
      "Wireless microphone available",
      "Professional equipment"
    ],
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
      "https://images.unsplash.com/photo-1501612780327-45045538702b",
    ]
  },
  {
    title: "10. Jam Sessions",
    price: "₹550.00",
    duration: "Per Hour",
    icon: <Music className="w-6 h-6" />,
    description: "Professional jam room with full equipment",
    features: [
      "Sound proof room with UPS",
      "Tama drum kit",
      "1000W speakers",
      "Dynamic microphones",
      "16 Channel mixer",
      "Blackstar 150 ID",
      "Hartke A70 Bass Combo",
      "Equipment rental available"
    ],
    images: [
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    ]
  },
  {
    title: "11. Music Classes",
    price: "₹10,000.00",
    duration: "3 months",
    icon: <Guitar className="w-6 h-6" />,
    description: "Guitar/Keyboard/Drum group classes",
    features: [
      "3-month hobby course",
      "8 classes per month",
      "Weekly 2 classes",
      "1-hour sessions",
      "Weekend/weekday options",
      "All age groups welcome",
      "Music theory basics",
      "Performance training"
    ],
    images: [
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
    ]
  },
  {
    title: "12. 10 Hours Jam Package",
    price: "₹5,000.00",
    duration: "Package",
    icon: <Music className="w-6 h-6" />,
    description: "10 hours of jam session time",
    features: [
      "Valid for 30 days",
      "5-6 piece band setup",
      "Advance payment required",
      "Flexible scheduling",
      "Professional equipment",
      "Cancellation charges apply"
    ],
    images: [
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    ]
  },
  {
    title: "13. 12db Audio Services",
    price: "₹2,499.00",
    duration: "Package",
    icon: <Speaker className="w-6 h-6" />,
    description: "Professional audio distribution package",
    features: [
      "Additional mastering",
      "Release on 20 major platforms",
      "Professional quality",
      "Digital distribution"
    ],
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625",
    ]
  },
  {
    title: "14. Karaoke Party Venue",
    price: "₹299.00",
    duration: "Per Head",
    icon: <PartyPopper className="w-6 h-6" />,
    description: "Perfect venue for karaoke parties",
    features: [
      "Air-conditioned venue",
      "UPS backup",
      "Professional sound system",
      "Karaoke equipment",
      "Comfortable seating",
      "Group booking available"
    ],
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
      "https://images.unsplash.com/photo-1501612780327-45045538702b",
    ]
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">VL Studios</h1>
          <p className="text-xl mb-8">Professional Audio & Video Production Services</p>
          <Calendar className="w-12 h-12 mx-auto animate-bounce" />

       
        </div>

        

        


       
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <div className="text-xl font-bold text-primary mb-2">
                {service.price}
                <span className="text-sm text-gray-500 ml-2">{service.duration}</span>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <Carousel className="w-full mb-4">
                <CarouselContent>
                  {service.images.map((image, imgIndex) => (
                    <CarouselItem key={imgIndex}>
                      <div className="aspect-video relative rounded-lg overflow-hidden">
                        <img
                          src={image}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>

              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Book Your Session Today</h2>
          <p className="mb-8">50% advance payment required for booking. Contact us for availability.</p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </main>

    
  );
}