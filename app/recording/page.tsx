
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

//main - working

// import { Button } from "@/components/ui/button";
// import { Mic, Music2, Headphones, Settings2 } from "lucide-react";
// import Link from "next/link";


// export default function RecordingPage() {
//   return (
//     <div>
//       <section className="relative h-[400px] flex items-center justify-center">
//         <div
//           className="absolute inset-0"
//           style={{
           
//             backgroundImage: "url('https://i.ytimg.com/vi/iI_klQnlrzw/maxresdefault.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Recording Sessions</h1>
//           <p className="text-xl">State-of-the-art recording facilities for musicians</p>
//           <br />
          
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: Mic,
//                 title: "Professional Microphones",
//                 description: "High-end microphones for every instrument and voice type",
//               },
//               {
//                 icon: Music2,
//                 title: "Acoustic Treatment",
//                 description: "Perfectly treated rooms for optimal sound capture",
//               },
//               {
//                 icon: Headphones,
//                 title: "Monitoring",
//                 description: "Professional monitoring systems for accurate playback",
//               },
//               {
//                 icon: Settings2,
                
//                 title: "Logic Pro X Setup",
//                 description: "Industry-standard recording software and hardware",
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
//           <h2 className="text-3xl font-bold text-center mb-12">Recording Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="space-y-6">
//               <h3 className="text-2xl font-semibold">Instruments We Record</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Vocals</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Drums</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Guitar</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Bass</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Piano</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Music2 className="h-5 w-5 text-primary" />
//                   <span>Orchestral Instruments</span>
//                 </li>
//               </ul>
//             </div>
//             <div className="space-y-6">
//               <h3 className="text-2xl font-semibold">Additional Services</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Multi-track Recording</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Live Band Recording</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Mixing Services</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Mastering</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Session Musicians</span>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <Settings2 className="h-5 w-5 text-primary" />
//                   <span>Audio Restoration</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Record?</h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Contact us to book your recording session and bring your music to life with professional quality.
//           </p>
//           <Link href="/booking">
//             <Button size="lg">
//               Book Recording Session
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }


//trying to experiment - working but without prices

// "use client"

// import { useState } from "react";
// import Image from "next/image";

// import { Button } from "@/components/ui/button";
// import { Mic, Star, Music2, Headphones, Settings2 } from "lucide-react";
// import Link from "next/link";

// const recordingServices = [
//   {
//     title: "Recording Session",
//     price: "₹750.00",
//     duration: "Per Hour",
//     icon: <Mic className="w-6 h-6" />,
//     description: "Vocal booth Recording with MXL 990 / AKG220",
//     features: [
//       "Professional vocal booth",
//       "High-quality microphones",
//       "Sound-treated environment",
//       "Professional monitoring"
//     ],
//     images: [
//       "https://i.pinimg.com/1200x/06/cc/8e/06cc8e506dc149f6442a6fe5700cf7de.jpg",
//       "https://i.pinimg.com/1200x/1c/4b/e5/1c4be541bafe045ed7fae888525da035.jpg",
//     ]
//   },
//   {
//     title: "Premium Room with Rode NT2",
//     price: "₹1,200.00",
//     duration: "Per Hour",
//     icon: <Star className="w-6 h-6" />,
//     description: "Spacious premium recording room",
//     features: [
//       "Rode NT2a microphone",
//       "Space for 6-piece Orchestra",
//       "Drum tracking capability",
//       "Multitracking available",
//       "Air-conditioned environment"
//     ],
//     images: [
//       "https://i.pinimg.com/1200x/62/63/ef/6263ef355acf647b3de5963ce8a0bf6e.jpg",
//       "https://i.pinimg.com/1200x/a9/b4/1d/a9b41d6aaaaf67ee9900ae83fed074b9.jpg",
//     ]
//   },]


// export default function RecordingPage() {

//     const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});
  
//     const nextImage = (serviceIndex: number, maxLength: number) => {
//       setCurrentImageIndex(prev => ({
//         ...prev,
//         [serviceIndex]: ((prev[serviceIndex] || 0) + 1) % maxLength
//       }));
//     };
  
//     const prevImage = (serviceIndex: number, maxLength: number) => {
//       setCurrentImageIndex(prev => ({
//         ...prev,
//         [serviceIndex]: ((prev[serviceIndex] || 0) - 1 + maxLength) % maxLength
//       }));
//     };
//   return (
//     <div>
//       <section className="relative h-[400px] flex items-center justify-center">
//         <div
//           className="absolute inset-0"
//           style={{
           
//             backgroundImage: "url('https://i.ytimg.com/vi/iI_klQnlrzw/maxresdefault.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-4">Recording Sessions</h1>
//           <p className="text-xl">State-of-the-art recording facilities for musicians</p>
//           <br />
          
//         </div>
//       </section>

      // <section className="py-16">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      //       {[
      //         {
      //           icon: Mic,
      //           title: "Professional Microphones",
      //           description: "High-end microphones for every instrument and voice type",
      //         },
      //         {
      //           icon: Music2,
      //           title: "Acoustic Treatment",
      //           description: "Perfectly treated rooms for optimal sound capture",
      //         },
      //         {
      //           icon: Headphones,
      //           title: "Monitoring",
      //           description: "Professional monitoring systems for accurate playback",
      //         },
      //         {
      //           icon: Settings2,
                
      //           title: "Logic Pro X Setup",
      //           description: "Industry-standard recording software and hardware",
      //         },
      //       ].map((feature, index) => (
      //         <div key={index} className="p-6 bg-card rounded-lg shadow-lg">
      //           <feature.icon className="h-12 w-12 text-primary mb-4" />
      //           <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      //           <p className="text-muted-foreground">{feature.description}</p>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </section>

      // <section className="py-16 bg-secondary/50">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <h2 className="text-3xl font-bold text-center mb-12">Recording Services</h2>
      //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      //       <div className="space-y-6">
      //         <h3 className="text-2xl font-semibold">Instruments We Record</h3>
      //         <ul className="space-y-3">
      //           <li className="flex items-center gap-2">
      //             <Music2 className="h-5 w-5 text-primary" />
      //             <span>Vocals</span>
      //           </li>
      //           <li className="flex items-center gap-2">
      //             <Music2 className="h-5 w-5 text-primary" />
      //             <span>Drums</span>
      //           </li>
      //           <li className="flex items-center gap-2">
      //             <Music2 className="h-5 w-5 text-primary" />
      //             <span>Guitar</span>
      //           </li>
      //           <li className="flex items-center gap-2">
      //             <Music2 className="h-5 w-5 text-primary" />
      //             <span>Bass</span>
      //           </li>
      //           <li className="flex items-center gap-2">
      //             <Music2 className="h-5 w-5 text-primary" />
      //             <span>Piano</span>
      //           </li>
      //           <li className="flex items-center gap-2">
      //             <Music2 className="h-5 w-5 text-primary" />
      //             <span>Orchestral Instruments</span>
      //           </li>
      //         </ul>
      //       </div>
      //       <div className="space-y-6">
      //         <h3 className="text-2xl font-semibold">Additional Services</h3>
      //         <ul className="space-y-3">
      //           <li className="flex items-center gap-2">
      //             <Settings2 className="h-5 w-5 text-primary" />
      //             <span>Multi-track Recording</span>
      //           </li>
      //           <li className="flex items-center gap-2">
      //             <Settings2 className="h-5 w-5 text-primary" />
      //             <span>Live Band Recording</span>
      //           </li>
      //           <li className="flex items-center gap-2">
      //             <Settings2 className="h-5 w-5 text-primary" />
      //             <span>Mixing Services</span>
      //           </li>
      //           <li className="flex items-center gap-2">
      //             <Settings2 className="h-5 w-5 text-primary" />
      //             <span>Mastering</span>
      //           </li>
      //           <li className="flex items-center gap-2">
      //             <Settings2 className="h-5 w-5 text-primary" />
      //             <span>Session Musicians</span>
      //           </li>
      //           <li className="flex items-center gap-2">
      //             <Settings2 className="h-5 w-5 text-primary" />
      //             <span>Audio Restoration</span>
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </div>
      // </section>

//        <section className="py-16 bg-secondary/50">
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl font-bold text-center mb-12">Our Recording Services</h2>
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                   {recordingServices.map((service, index) => (
//                     <div key={index} className="bg-card rounded-lg shadow-lg overflow-hidden">
//                       <div className="relative h-[400px] group">
//                         <Image
//                           src={service.images[currentImageIndex[index] || 0]}
//                           alt={service.title}
//                           fill
//                           className="object-contain"
//                         />
//                         {service.images.length > 1 && (
//                           <>
//                             <button
//                               onClick={() => prevImage(index, service.images.length)}
//                               className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                             >
//                               ←
//                             </button>
//                             <button
//                               onClick={() => nextImage(index, service.images.length)}
//                               className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
//                             >
//                               →
//                             </button>
//                           </>
//                         )}
//                       </div>
//                       <div className="p-6">
//                         <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
//                         <p className="text-muted-foreground mb-4">{service.description}</p>
//                         <ul className="space-y-2">
//                           {service.features.map((feature, featureIndex) => (
//                             <li key={featureIndex} className="flex items-start gap-2">
//                               <span className="text-sm">{feature}</span>
//                             </li>
//                           ))}
//                         </ul>
//                         <div className="mt-6">
//                           <a
//                             href={`https://wa.me/919742343464?text=${encodeURIComponent(`Hi, I am interested in your ${service.title} service. Please provide more information.`)}`}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             <Button className="w-full flex items-center justify-center gap-2">Enquire on WhatsApp</Button>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Record?</h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Contact us to book your recording session and bring your music to life with professional quality.
//           </p>
//           <Link href="/booking">
//             <Button size="lg">
//               Book Recording Session
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

//final

"use client"

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Mic, Star, Music2, Headphones, Settings2 } from "lucide-react";
import Link from "next/link";

const recordingServices = [
  {
    title: "Recording Session",
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
      "https://i.pinimg.com/1200x/06/cc/8e/06cc8e506dc149f6442a6fe5700cf7de.jpg",
      "https://i.pinimg.com/1200x/1c/4b/e5/1c4be541bafe045ed7fae888525da035.jpg",
    ]
  },
  {
    title: "Premium Room with Rode NT2",
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
      "https://i.pinimg.com/1200x/62/63/ef/6263ef355acf647b3de5963ce8a0bf6e.jpg",
      "https://i.pinimg.com/1200x/a9/b4/1d/a9b41d6aaaaf67ee9900ae83fed074b9.jpg",
    ]
  },]

export default function RecordingPage() {

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
           
            backgroundImage: "url('https://i.ytimg.com/vi/iI_klQnlrzw/maxresdefault.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Recording Sessions</h1>
          <p className="text-xl">State-of-the-art recording facilities for musicians</p>
          <br />
          
        </div>
      </section>

      {/* extra */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Mic,
                title: "Professional Microphones",
                description: "High-end microphones for every instrument and voice type",
              },
              {
                icon: Music2,
                title: "Acoustic Treatment",
                description: "Perfectly treated rooms for optimal sound capture",
              },
              {
                icon: Headphones,
                title: "Monitoring",
                description: "Professional monitoring systems for accurate playback",
              },
              {
                icon: Settings2,
                
                title: "Logic Pro X Setup",
                description: "Industry-standard recording software and hardware",
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
          <h2 className="text-3xl font-bold text-center mb-12">Recording Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Instruments We Record</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Vocals</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Drums</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Guitar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Bass</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Piano</span>
                </li>
                <li className="flex items-center gap-2">
                  <Music2 className="h-5 w-5 text-primary" />
                  <span>Orchestral Instruments</span>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Additional Services</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Multi-track Recording</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Live Band Recording</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Mixing Services</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Mastering</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Session Musicians</span>
                </li>
                <li className="flex items-center gap-2">
                  <Settings2 className="h-5 w-5 text-primary" />
                  <span>Audio Restoration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* extra */}

      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Recording Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recordingServices.map((service, index) => (
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
                    </>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-lg font-bold text-primary mb-2">{service.price} <span className="text-sm text-muted-foreground">({service.duration})</span></p>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href={`https://wa.me/919742343464?text=${encodeURIComponent(`Hi, I am interested in your ${service.title} service. Please provide more information.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full flex items-center justify-center gap-2">Enquire on WhatsApp</Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
