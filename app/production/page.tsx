


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

// working correctly - no problem

// import { Button } from "@/components/ui/button";
// import { Music2, Headphones, Settings2, Radio } from "lucide-react";
// import Link from "next/link";

// export default function ProductionPage() {
//   return (
//     <div>
      // <section className="relative h-[400px] flex items-center justify-center">
      //   <div
      //     className="absolute inset-0"
      //     style={{
      //       backgroundImage: "url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')",
      //       backgroundSize: "cover",
      //       backgroundPosition: "center",
      //     }}
      //   >
      //     <div className="absolute inset-0 bg-black/60" />
      //   </div>
      //   <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
      //     <h1 className="text-4xl font-bold mb-4">Music Production</h1>
      //     <p className="text-xl">Professional music production and mixing services</p>
      //     <br />
      //     {/* <ContactUsButton/> */}
      //   </div>
      // </section>

      // <section className="py-16">
      //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      //       {[
      //         {
      //           icon: Music2,
      //           title: "Composition",
      //           description: "Original music composition and arrangement services",
      //         },
      //         {
      //           icon: Headphones,
      //           title: "Mixing",
      //           description: "Professional mixing to perfect your sound",
      //         },
      //         {
      //           icon: Settings2,
      //           title: "Mastering",
      //           description: "Final polish for commercial-ready releases",
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
      //     <h2 className="text-3xl font-bold text-center mb-12">Our Production Process</h2>
      //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      //       {[
      //         {
      //           step: "1",
      //           title: "Pre-Production",
      //           description: "Song arrangement, reference tracks, and production planning",
      //         },
      //         {
      //           step: "2",
      //           title: "Recording",
      //           description: "High-quality recording of all instruments and vocals",
      //         },
      //         {
      //           step: "3",
      //           title: "Mixing",
      //           description: "Detailed mixing process to balance and enhance your tracks",
      //         },
      //         {
      //           step: "4",
      //           title: "Mastering",
      //           description: "Final polish for commercial-ready sound",
      //         },
      //       ].map((phase, index) => (
      //         <div key={index} className="relative p-6 bg-card rounded-lg shadow-lg">
      //           <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
      //             {phase.step}
      //           </div>
      //           <h3 className="text-xl font-semibold mb-2 mt-4">{phase.title}</h3>
      //           <p className="text-muted-foreground">{phase.description}</p>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </section>

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Production Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-2xl font-semibold mb-6">Music Production</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <div>
//                     <span className="font-semibold">Original Composition</span>
//                     <p className="text-muted-foreground">Custom music composition for various genres</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <div>
//                     <span className="font-semibold">Arrangement</span>
//                     <p className="text-muted-foreground">Professional arrangement and orchestration</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <div>
//                     <span className="font-semibold">Sound Design</span>
//                     <p className="text-muted-foreground">Custom sound design and synthesis</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-2xl font-semibold mb-6">Post-Production</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-start">
//                   <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <div>
//                     <span className="font-semibold">Mixing</span>
//                     <p className="text-muted-foreground">Professional mixing and sound balancing</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <div>
//                     <span className="font-semibold">Mastering</span>
//                     <p className="text-muted-foreground">Industry-standard mastering for all platforms</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <Radio className="h-6 w-6 text-primary mr-2 mt-1" />
//                   <div>
//                     <span className="font-semibold">Stem Mixing</span>
//                     <p className="text-muted-foreground">Detailed stem mixing for maximum control</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold mb-6">Ready to Produce Your Music?</h2>
//           <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Let's work together to bring your musical vision to life with professional production.
//           </p>
//           <Link href="/booking">
//             <Button size="lg">
//               Start Your Project
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }


//working -- with all services
"use client";

import { Button } from "@/components/ui/button";
import { Music2, Settings2, Mic, Star, Headphones, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const productionServices = [
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
  },
  {
    title: "Vocals Mixing Mastering Package",
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
      "https://i.pinimg.com/1200x/ae/19/8f/ae198f1af59b8603314c32a54f9b4959.jpg",
      "https://i.pinimg.com/1200x/e2/6e/0c/e26e0ccde3f6119e6c229602ae19a28a.jpg",
    ]
  },
  {
    title: "BEGINNER YouTube Cover Song",
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
      "https://i.pinimg.com/1200x/a6/3a/ab/a63aab39e3173eaf25a8d24227be81b1.jpg",
      "https://i.pinimg.com/1200x/46/2f/0b/462f0b0a21fc5059c6675d806bf0a79c.jpg",
    ]
  }
];

export default function ProductionPage() {
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

      {/* extra */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Music Production</h1>
          <p className="text-xl">Professional music production and mixing services</p>
          <br />
          {/* <ContactUsButton/> */}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Music2,
                title: "Composition",
                description: "Original music composition and arrangement services",
              },
              {
                icon: Headphones,
                title: "Mixing",
                description: "Professional mixing to perfect your sound",
              },
              {
                icon: Settings2,
                title: "Mastering",
                description: "Final polish for commercial-ready releases",
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Production Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Pre-Production",
                description: "Song arrangement, reference tracks, and production planning",
              },
              {
                step: "2",
                title: "Recording",
                description: "High-quality recording of all instruments and vocals",
              },
              {
                step: "3",
                title: "Mixing",
                description: "Detailed mixing process to balance and enhance your tracks",
              },
              {
                step: "4",
                title: "Mastering",
                description: "Final polish for commercial-ready sound",
              },
            ].map((phase, index) => (
              <div key={index} className="relative p-6 bg-card rounded-lg shadow-lg">
                <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      

      



      {/* extra */}
      <section className="py-16 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productionServices.map((service, index) => (
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
