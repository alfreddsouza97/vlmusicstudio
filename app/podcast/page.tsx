



//extra code -  experimental

// export function ContactUsButton() {
//   return (
//     <div className="text-center">
//       {/* Adding experimental break */}
//       <br />

//       <Link legacyBehavior href="/booking">
//         <a className="w-full inline-block py-3 px-6 text-center bg-gray-600 text-white rounded-md shadow-md hover:bg-blue-700">
//           {/* Contact Us */}
//           Book your Service now
//         </a>
//       </Link>
//     </div>
//   );
// }


// working but without services mentioned in podcast page

// import { Button } from "@/components/ui/button";
// import { Mic, Radio, Settings, Music } from "lucide-react";
// import Link from "next/link";

// export default function PodcastPage() {
//   return (
//     <div>
//       <section className="relative h-[400px] flex items-center justify-center">
//         <div
//           className="absolute inset-0"
//           style={{
//             // backgroundImage: "url('https://i.pinimg.com/736x/7e/73/1f/7e731f6b9b4086c7a3356b3461e78812.jpg')",

//             backgroundImage: "url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Podcast Production</h1>
//           <p className="text-xl">Professional podcast recording and production services</p>

//           {/* <ContactUsButton/> */}
          
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Mic,
//                 title: "Professional Equipment",
//                 description: "High-quality microphones and recording equipment for crystal clear audio",
//               },
//               {
//                 icon: Settings,
//                 title: "Post-Production",
//                 description: "Expert editing, mixing, and mastering services",
//               },
//               {
//                 icon: Radio,
//                 title: "Live Streaming",
//                 description: "Capability to live stream your podcast with professional quality",
//               },
//             ].map((feature, index) => (
//               <div key={index} className="p-6 bg-card rounded-lg shadow-lg">
//                 <feature.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-muted-foreground">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-2xl font-semibold mb-4">Recording</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Professional recording environment with acoustic treatment</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Multiple microphone options for different voice types</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Real-time monitoring and feedback</span>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold mb-4">Post-Production</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Professional editing and cleanup</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Sound design and music integration</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Final mixing and mastering</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Start Your Podcast?</h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Get in touch with us to discuss your podcast project and how we can help bring your vision to life.
//           </p>
//           <Link href="/booking">
//             <Button size="lg">
//               Book a Consultation
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// images are not correct and slide not working, also whatsapp button not present
// "use client";

// import { Button } from "@/components/ui/button";
// import { Mic, Radio, Settings, Music, Video } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";

// const podcastServices = [
//   {
//     title: "Audio Podcast",
//     price: "₹1,499.00",
//     duration: "Per hour",
//     icon: <Radio className="w-6 h-6" />,
//     description: "Round Table setup with seating arrangements in a sound proof room",
//     features: [
//       "Sound proof Room with AC",
//       "UPS backup (1-2 hours)",
//       "Podcast Mics",
//       "Sound Engineer",
//       "Multitracking capable Systems",
//       "Black backgrounds wall 9ft",
//       "Camera Rental: Sony alfa A7 (₹3500 per camera)",
//       "Post editing/mastering charges additional",
//       "50% Advance payment required"
//     ],
//     images: [
//       "https://i.pinimg.com/1200x/de/da/05/deda0595dd29b9da14a6c2a39eb5fd88.jpg",
//       "https://i.pinimg.com/736x/7e/73/1f/7e731f6b9b4086c7a3356b3461e78812.jpg",
//     ]
//   },
//   {
//     title: "Podcast Audio & Video Production",
//     price: "₹22,000.00",
//     duration: "4 hours",
//     icon: <Video className="w-6 h-6" />,
//     description: "Complete half-day podcast production package",
//     features: [
//       "2 day lights (300W) with Floor Stand",
//       "8ft brown/Black background screen",
//       "Basic Properties (lamps, plants)",
//       "Sound proof Room with AC",
//       "UPS backup",
//       "Client waiting room with AC",
//       "Two DSLR cameras (HD Quality)",
//       "Two podcast microphones",
//       "Multi-tracking audio recording",
//       "Professional crew included",
//       "4K Quality available at ₹35,000"
//     ],
//     images: [
//       "https://i.pinimg.com/736x/6d/89/52/6d895209bb2d3ce0c21861c7339284dd.jpg",
//       "https://i.pinimg.com/1200x/de/7e/b0/de7eb0299b0b01e844e22fb61ed3342f.jpg",
//       "https://i.pinimg.com/736x/28/b3/a7/28b3a769af199c4556ca907b39ba0ffb.jpg",
//     ]
//   }
// ];

// export default function PodcastPage() {
//   return (
//     <div>
//       <section className="relative h-[400px] flex items-center justify-center">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Podcast Production</h1>
//           <p className="text-xl">Professional podcast recording and production services</p>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Mic,
//                 title: "Professional Equipment",
//                 description: "High-quality microphones and recording equipment for crystal clear audio",
//               },
//               {
//                 icon: Settings,
//                 title: "Post-Production",
//                 description: "Expert editing, mixing, and mastering services",
//               },
//               {
//                 icon: Radio,
//                 title: "Live Streaming",
//                 description: "Capability to live stream your podcast with professional quality",
//               },
//             ].map((feature, index) => (
//               <div key={index} className="p-6 bg-card rounded-lg shadow-lg">
//                 <feature.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                 <p className="text-muted-foreground">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {podcastServices.map((service, index) => (
//               <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
//                 <div className="relative h-64">
//                   <Image
//                     src={service.images[0]}
//                     alt={service.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center gap-2">
//                       {service.icon}
//                       <h3 className="text-2xl font-semibold">{service.title}</h3>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-xl font-bold text-primary">{service.price}</div>
//                       <div className="text-sm text-muted-foreground">{service.duration}</div>
//                     </div>
//                   </div>
//                   <p className="text-muted-foreground mb-4">{service.description}</p>
//                   <div className="space-y-2">
//                     {service.features.map((feature, featureIndex) => (
//                       <div key={featureIndex} className="flex items-start gap-2">
//                         <div className="rounded-full bg-primary/10 p-1">
//                           <Settings className="w-4 h-4 text-primary" />
//                         </div>
//                         <span className="text-sm">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="mt-6">
//                     <Link href="/booking">
//                       <Button className="w-full">Book Now</Button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h3 className="text-2xl font-semibold mb-4">Recording</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Professional recording environment with acoustic treatment</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Multiple microphone options for different voice types</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Real-time monitoring and feedback</span>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold mb-4">Post-Production</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Professional editing and cleanup</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Sound design and music integration</span>
//                 </li>
//                 <li className="flex items-start">
//                   <Music className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <span>Final mixing and mastering</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Start Your Podcast?</h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Get in touch with us to discuss your podcast project and how we can help bring your vision to life.
//           </p>
//           <Link href="/booking">
//             <Button size="lg">
//               Book a Consultation
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import { Button } from "@/components/ui/button";
import { Mic, Radio, Settings, Music, Video, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const podcastServices = [
  {
    title: "Audio Podcast",
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
      "https://i.pinimg.com/1200x/de/da/05/deda0595dd29b9da14a6c2a39eb5fd88.jpg",
      "https://i.pinimg.com/736x/7e/73/1f/7e731f6b9b4086c7a3356b3461e78812.jpg",
    ]
  },
  {
    title: "Podcast Audio & Video Production",
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
      "https://i.pinimg.com/736x/6d/89/52/6d895209bb2d3ce0c21861c7339284dd.jpg",
      "https://i.pinimg.com/1200x/de/7e/b0/de7eb0299b0b01e844e22fb61ed3342f.jpg",
      "https://i.pinimg.com/736x/28/b3/a7/28b3a769af199c4556ca907b39ba0ffb.jpg",
    ]
  }
];

export default function PodcastPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const nextImage = (serviceIndex: number, maxLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceIndex]: ((prev[serviceIndex] || 0) + 1) % maxLength
    }));
  };

  const prevImage = (serviceIndex: number, maxLength: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [serviceIndex]: ((prev[serviceIndex] || 0) - 1 + maxLength) % maxLength
    }));
  };

  return (
    <div>
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Podcast Production</h1>
          <p className="text-xl">Professional podcast recording and production services</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Professional Equipment",
                description: "High-quality microphones and recording equipment for crystal clear audio",
              },
              {
                icon: Settings,
                title: "Post-Production",
                description: "Expert editing, mixing, and mastering services",
              },
              {
                icon: Radio,
                title: "Live Streaming",
                description: "Capability to live stream your podcast with professional quality",
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-card rounded-lg shadow-lg">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {podcastServices.map((service, index) => (
              <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-[400px] group">
                  <Image
                    src={service.images[currentImageIndex[index] || 0]}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                  {service.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(index, service.images.length)}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ←
                      </button>
                      <button
                        onClick={() => nextImage(index, service.images.length)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        →
                      </button>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
                        {service.images.map((_, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`w-2 h-2 rounded-full ${
                              (currentImageIndex[index] || 0) === imgIndex
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      {service.icon}
                      <h3 className="text-2xl font-semibold">{service.title}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <Settings className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    {/* <a
                      href={`https://wa.me/919742343464?text=Hi, I am interested in your ${service.title} service. Please provide more information.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full flex items-center justify-center gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Enquire on WhatsApp
                      </Button>
                    </a> */}
                    <a
  href={`https://wa.me/919742343464?text=${encodeURIComponent(`Hi, I am interested in your ${service.title} service. Please provide more information.`)}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="w-full flex items-center justify-center gap-2">
    <MessageCircle className="w-5 h-5" />
    Enquire on WhatsApp
  </Button>
</a>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Recording</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Professional recording environment with acoustic treatment</span>
                </li>
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Multiple microphone options for different voice types</span>
                </li>
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Real-time monitoring and feedback</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Post-Production</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Professional editing and cleanup</span>
                </li>
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Sound design and music integration</span>
                </li>
                <li className="flex items-start">
                  <Music className="h-6 w-6 text-primary mr-2 mt-1" />
                  <span>Final mixing and mastering</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Podcast?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with us to discuss your podcast project and how we can help bring your vision to life.
          </p>
          <Link href="/booking">
            <Button size="lg">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}