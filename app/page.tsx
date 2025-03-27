// import { Button } from "@/components/ui/button";
// import { ArrowRight, Music, Mic, Radio, Headphones, BookOpen } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section 
//         className="relative h-[600px] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-6">Welcome to VL Studios</h1>
//           <p className="text-xl mb-8">
//             Professional Music Production & Recording Studio in Bangalore
//           </p>
//           <Link href="/contact">
//             <Button size="lg" className="bg-primary text-primary-foreground">
//               Book a Session
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Radio,
//                 title: "Podcast Production",
//                 description: "Professional podcast recording and production services",
//                 href: "/podcast"
//               },
//               {
//                 icon: Mic,
//                 title: "Recording Sessions",
//                 description: "State-of-the-art recording facilities for musicians",
//                 href: "/recording"
//               },
//               {
//                 icon: Music,
//                 title: "Rehearsal Space",
//                 description: "Fully equipped rehearsal rooms for bands and artists",
//                 href: "/rehearsal"
//               },
//               {
//                 icon: Headphones,
//                 title: "Music Production",
//                 description: "Complete music production and mixing services",
//                 href: "/production"
//               },
//               {
//                 icon: BookOpen,
//                 title: "Music Lessons",
//                 description: "Professional music education for all skill levels",
//                 href: "/lessons"
//               }
//             ].map((service, index) => (
//               <Link 
//                 key={index}
//                 href={service.href}
//                 className="block p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <service.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-muted-foreground">{service.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">About Victor Logidasan</h2>
//               <p className="text-muted-foreground mb-6">
//                 With years of experience in the music industry, Victor Logidasan brings expertise in music direction, 
//                 composition, and mixing mastering to VL Studios. Our state-of-the-art facility in Bangalore 
//                 is equipped with the latest technology to bring your musical vision to life.
//               </p>
//               <Link href="/contact">
//                 <Button variant="outline">
//                   Get in Touch
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//             </div>
//             <div className="relative h-[400px]">
//               <img
//                 src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
//                 alt="Studio Equipment"
//                 className="rounded-lg object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


//second 

// import { Button } from "@/components/ui/button";
// import { ArrowRight, Music, Mic, Radio, Headphones, BookOpen } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section 
//         className="relative h-[600px] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-6">Welcome to VL Studios</h1>
//           <p className="text-xl mb-8">
//             Professional Music Production & Recording Studio in Bangalore
//           </p>
//           <Link href="/contact">
//             <Button size="lg" className="bg-primary text-primary-foreground">
//               Book a Session
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="py-20 bg-primary/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-primary mb-8">
//             Discover VL Studios in Action
//           </h2>
//           <p className="text-muted-foreground mb-6">
//             Take a closer look at our studio facilities and see what makes us unique.
//           </p>
//           <div className="relative aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
//             <iframe
//               className="rounded-lg shadow-lg"
//               src="https://www.youtube.com/embed/ZirZaR0iNhQ"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Radio,
//                 title: "Podcast Production",
//                 description: "Professional podcast recording and production services",
//                 href: "/podcast"
//               },
//               {
//                 icon: Mic,
//                 title: "Recording Sessions",
//                 description: "State-of-the-art recording facilities for musicians",
//                 href: "/recording"
//               },
//               {
//                 icon: Music,
//                 title: "Rehearsal Space",
//                 description: "Fully equipped rehearsal rooms for bands and artists",
//                 href: "/rehearsal"
//               },
//               {
//                 icon: Headphones,
//                 title: "Music Production",
//                 description: "Complete music production and mixing services",
//                 href: "/production"
//               },
//               {
//                 icon: BookOpen,
//                 title: "Music Lessons",
//                 description: "Professional music education for all skill levels",
//                 href: "/lessons"
//               }
//             ].map((service, index) => (
//               <Link 
//                 key={index}
//                 href={service.href}
//                 className="block p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <service.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-muted-foreground">{service.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">About Victor Logidasan</h2>
//               <p className="text-muted-foreground mb-6">
//                 With years of experience in the music industry, Victor Logidasan brings expertise in music direction, 
//                 composition, and mixing mastering to VL Studios. Our state-of-the-art facility in Bangalore 
//                 is equipped with the latest technology to bring your musical vision to life.
//               </p>
//               <Link href="/contact">
//                 <Button variant="outline">
//                   Get in Touch
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//             </div>
//             <div className="relative h-[400px]">
//               <img
//                 src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
//                 alt="Studio Equipment"
//                 className="rounded-lg object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// third - added whatsapp button

// import { Button } from "@/components/ui/button";
// import { ArrowRight, Music, Mic, Radio, Headphones, BookOpen } from "lucide-react";
// import Link from "next/link";
// import { MessageCircle } from "lucide-react"; // Icon for WhatsApp-style button

// export default function Home() {
//   return (
//     <div>
//       {/* Floating WhatsApp Button */}
//       <a
//         href="https://wa.me/c/919742343464"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all z-50"
//         aria-label="Contact us on WhatsApp"
//       >
//         <MessageCircle className="w-6 h-6" />
//       </a>

//       {/* Hero Section */}
//       <section 
//         className="relative h-[600px] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-6">Welcome to VL Studios</h1>
//           <p className="text-xl mb-8">
//             Professional Music Production & Recording Studio in Bangalore
//           </p>
//           <Link href="/contact">
//             <Button size="lg" className="bg-primary text-primary-foreground">
//               Book a Session
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="py-20 bg-primary/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-primary mb-8">
//             Discover VL Studios in Action
//           </h2>
//           <p className="text-muted-foreground mb-6">
//             Take a closer look at our studio facilities and see what makes us unique.
//           </p>
//           <div className="relative aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
//             <iframe
//               className="rounded-lg shadow-lg"
//               src="https://www.youtube.com/embed/ZirZaR0iNhQ"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Radio,
//                 title: "Podcast Production",
//                 description: "Professional podcast recording and production services",
//                 href: "/podcast"
//               },
//               {
//                 icon: Mic,
//                 title: "Recording Sessions",
//                 description: "State-of-the-art recording facilities for musicians",
//                 href: "/recording"
//               },
//               {
//                 icon: Music,
//                 title: "Rehearsal Space",
//                 description: "Fully equipped rehearsal rooms for bands and artists",
//                 href: "/rehearsal"
//               },
//               {
//                 icon: Headphones,
//                 title: "Music Production",
//                 description: "Complete music production and mixing services",
//                 href: "/production"
//               },
//               {
//                 icon: BookOpen,
//                 title: "Music Lessons",
//                 description: "Professional music education for all skill levels",
//                 href: "/lessons"
//               }
//             ].map((service, index) => (
//               <Link 
//                 key={index}
//                 href={service.href}
//                 className="block p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <service.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-muted-foreground">{service.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">About Victor Logidasan</h2>
//               <p className="text-muted-foreground mb-6">
//                 With years of experience in the music industry, Victor Logidasan brings expertise in music direction, 
//                 composition, and mixing mastering to VL Studios. Our state-of-the-art facility in Bangalore 
//                 is equipped with the latest technology to bring your musical vision to life.
//               </p>
//               <Link href="/contact">
//                 <Button variant="outline">
//                   Get in Touch
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//             </div>
//             <div className="relative h-[400px]">
//               <img
//                 src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
//                 alt="Studio Equipment"
//                 className="rounded-lg object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// // fourth - working but without SEO

// import { Button } from "@/components/ui/button";
// import { ArrowRight, Music, Mic, Radio, Headphones, BookOpen } from "lucide-react";
// import Link from "next/link";
// import { MessageCircle } from "lucide-react"; // Icon for WhatsApp-style button
// import { Carousel, Carousel1, Carousel2 } from "@/components/ui/carousel";

// export default function Home() {
//   return (
//     <div>
//       {/* Floating WhatsApp Button */}
//       <a
//         href="https://wa.me/c/919742343464"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all z-50"
//         aria-label="Contact us on WhatsApp"
//       >
//         <MessageCircle className="w-6 h-6" />
//       </a>

//       {/* Hero Section */}
//       <section 
//         className="relative h-[600px] flex items-center justify-center"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-6">Welcome to VL Studios</h1>
//           <p className="text-xl mb-8">
//             Professional Music Production & Recording Studio in Bangalore
//           </p>
//           <Link href="/booking">
//             <Button size="lg" className="bg-primary text-primary-foreground">
//               Book a Session
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="py-20 bg-primary/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-primary mb-8">
//             Discover VL Studios in Action
//           </h2>
//           <p className="text-muted-foreground mb-6">
//             Take a closer look at our studio facilities and see what makes us unique.
//           </p>
//           <div className="relative aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
//             <iframe
//               className="rounded-lg shadow-lg"
//               src="https://www.youtube.com/embed/ZirZaR0iNhQ"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Radio,
//                 title: "Podcast Production",
//                 description: "Professional podcast recording and production services",
//                 href: "/podcast"
//               },
//               {
//                 icon: Mic,
//                 title: "Recording Sessions",
//                 description: "State-of-the-art recording facilities for musicians",
//                 href: "/recording"
//               },
//               {
//                 icon: Music,
//                 title: "Rehearsal Space",
//                 description: "Fully equipped rehearsal rooms for bands and artists",
//                 href: "/rehearsal"
//               },
//               {
//                 icon: Headphones,
//                 title: "Music Production",
//                 description: "Complete music production and mixing services",
//                 href: "/production"
//               },
//               {
//                 icon: BookOpen,
//                 title: "Music Lessons",
//                 description: "Professional music education for all skill levels",
//                 href: "/lessons"
//               }
//             ].map((service, index) => (
//               <Link 
//                 key={index}
//                 href={service.href}
//                 className="block p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <service.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-muted-foreground">{service.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>
          
//       <section>
//       <h1 className="text-center text-3xl font-bold my-8">
//         Glimpse of our Studio
//       </h1>
//       <Carousel1 />
//     </section>

//     <section>
//       <h1 className="text-center text-3xl font-bold my-8">
//         What our Customers Say
//       </h1>
//       <Carousel2 />
//     </section>

//       {/* About Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">About Victor Logidasan</h2>
//               <p className="text-muted-foreground mb-6">
//                 With years of experience in the music industry, Victor Logidasan brings expertise in music direction, 
//                 composition, and mixing mastering to VL Studios. Our state-of-the-art facility in Bangalore 
//                 is equipped with the latest technology to bring your musical vision to life.
//               </p>
//               <Link href="/contact">
//                 <Button variant="outline">
//                   Get in Touch
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//             </div>
//             <div className="relative h-[400px]">
//               <img
//                 src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
//                 alt="Studio Equipment"
//                 className="rounded-lg object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// sixth - removed - added promo images

// import { Button } from "@/components/ui/button";
// import { ArrowRight, Music, Mic, Radio, Headphones, BookOpen, MessageCircle } from "lucide-react";
// import Link from "next/link";
// import { Carousel1, Carousel2, Carousel3 } from "@/components/ui/carousel";
// import { PromoCarousel } from "@/components/ui/PromoCarousel"; // Import the new carousel

// // Metadata for the page
// export const metadata = {
//   title: "VL Studios - Professional Music Production & Recording Studio in Bangalore",
//   description:
//     "Welcome to VL Studios, the premier music production and recording studio in Bangalore. Offering top-notch facilities for recording, podcast production, music lessons, and more.",
//   keywords: [
//     "music studio Bangalore",
//     "recording studio Bangalore",
//     "podcast production",
//     "music lessons",
//     "music production services",
//     "rehearsal space Bangalore",
//     "VL Studios",
//   ],
//   authors: [{ name: "Victor Logidasan" }],
//   openGraph: {
//     title: "VL Studios - Music Production & Recording in Bangalore",
//     description:
//       "Explore VL Studios' state-of-the-art facilities and services. Bring your musical vision to life with our professional team and cutting-edge equipment.",
//     url: "https://www.vlstudio.com",
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80",
//         alt: "Studio Image",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "VL Studios - Music Production & Recording Studio in Bangalore",
//     description:
//       "Experience professional music production, recording sessions, and more at VL Studios in Bangalore.",
//     images: [
//       "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80",
//     ],
//   },
// };

// export default function Home() {
//   return (
//     <div>
//       {/* Promotional Images Carousel */}
//       <PromoCarousel />

//       {/* Floating WhatsApp Button */}
//       <a
//         href="https://wa.me/c/919742343464"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all z-50"
//         aria-label="Contact us on WhatsApp"
//       >
//         <MessageCircle className="w-6 h-6" />
//       </a>

//       {/* Hero Section */}
//       <section
//         className="relative h-[600px] flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-6">Welcome to VL Studios</h1>
//           <p className="text-xl mb-8">
//             Professional Music Production & Recording Studio in Bangalore
//           </p>
//           <Link href="/booking">
//             <Button size="lg" className="bg-primary text-primary-foreground">
//               Book a Session
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="py-20 bg-primary/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-primary mb-8">
//             Discover VL Studios in Action
//           </h2>
//           <p className="text-muted-foreground mb-6">
//             Take a closer look at our studio facilities and see what makes us unique.
//           </p>
//           <div className="relative aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
//             <iframe
//               className="rounded-lg shadow-lg"
//               src="https://www.youtube.com/embed/ZirZaR0iNhQ"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Radio,
//                 title: "Podcast Production",
//                 description: "Professional podcast recording and production services",
//                 href: "/podcast",
//               },
//               {
//                 icon: Mic,
//                 title: "Recording Sessions",
//                 description: "State-of-the-art recording facilities for musicians",
//                 href: "/recording",
//               },
//               {
//                 icon: Music,
//                 title: "Rehearsal Space",
//                 description: "Fully equipped rehearsal rooms for bands and artists",
//                 href: "/rehearsal",
//               },
//               {
//                 icon: Headphones,
//                 title: "Music Production",
//                 description: "Complete music production and mixing services",
//                 href: "/production",
//               },
//               {
//                 icon: BookOpen,
//                 title: "Music Lessons",
//                 description: "Professional music education for all skill levels",
//                 href: "/lessons",
//               },
//             ].map((service, index) => (
//               <Link
//                 key={index}
//                 href={service.href}
//                 className="block p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <service.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-muted-foreground">{service.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Studio Carousel Section */}
//       <section>
//         <h1 className="text-center text-3xl font-bold my-8">Glimpse of our Studio</h1>
//         <Carousel1 />
//       </section>

//       {/* Customer Testimonials */}
//       <section>
//         <h1 className="text-center text-3xl font-bold my-8">What our Customers Say</h1>
//         <Carousel2 />
//       </section>

//       {/* About Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">About Victor Logidasan</h2>
//               <p className="text-muted-foreground mb-6">
//                 With years of experience in the music industry, Victor Logidasan brings expertise in music direction,
//                 composition, and mixing mastering to VL Studios. Our state-of-the-art facility in Bangalore
//                 is equipped with the latest technology to bring your musical vision to life.
//               </p>
//               <Link href="/contact">
//                 <Button variant="outline">
//                   Get in Touch
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//             </div>
//             <div className="relative h-[400px]">
//               <section>
//                 <h1 className="text-center text-3xl font-bold my-8">Explore our Studio</h1>
//                 <Carousel3 />
//               </section>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// fifth - added SEO  - working - WITHOUT VIDEO

// app/page.js (or app/home/page.js if you use nested routing)

// import { Button } from "@/components/ui/button";
// import { ArrowRight, Music, Mic, Radio, Headphones, BookOpen, MessageCircle } from "lucide-react";
// import Link from "next/link";
// import { Carousel1, Carousel2, Carousel3 } from "@/components/ui/carousel";

// // Metadata for the page
// export const metadata = {
//   title: "VL Studios - Professional Music Production & Recording Studio in Bangalore",
//   description:
//     "Welcome to VL Studios, the premier music production and recording studio in Bangalore. Offering top-notch facilities for recording, podcast production, music lessons, and more.",
//   keywords: [
//     "music studio Bangalore",
//     "recording studio Bangalore",
//     "podcast production",
//     "music lessons",
//     "music production services",
//     "rehearsal space Bangalore",
//     "VL Studios",
//   ],
//   authors: [{ name: "Victor Logidasan" }],
//   openGraph: {
//     title: "VL Studios - Music Production & Recording in Bangalore",
//     description:
//       "Explore VL Studios' state-of-the-art facilities and services. Bring your musical vision to life with our professional team and cutting-edge equipment.",
//     url: "https://www.vlstudio.com",
//     images: [
//       {
//         url: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80",
//         alt: "Studio Image",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "VL Studios - Music Production & Recording Studio in Bangalore",
//     description:
//       "Experience professional music production, recording sessions, and more at VL Studios in Bangalore.",
//     images: [
//       "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80",
//     ],
//   },
// };

// export default function Home() {
//   return (
//     <div>
//       {/* Floating WhatsApp Button */}
//       <a
//         href="https://wa.me/c/919742343464"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all z-50"
//         aria-label="Contact us on WhatsApp"
//       >
//         <MessageCircle className="w-6 h-6" />
//       </a>

//       {/* Hero Section */}
//       <section
//         className="relative h-[600px] flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/60" />
//         <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
//           <h1 className="text-5xl font-bold mb-6">Welcome to VL Studios</h1>
//           <p className="text-xl mb-8">
//             Professional Music Production & Recording Studio in Bangalore
//           </p>
//           <Link href="/booking">
//             <Button size="lg" className="bg-primary text-primary-foreground">
//               Book a Session
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="py-20 bg-primary/10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-primary mb-8">
//             Discover VL Studios in Action
//           </h2>
//           <p className="text-muted-foreground mb-6">
//             Take a closer look at our studio facilities and see what makes us unique.
//           </p>
//           <div className="relative aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
//             <iframe
//               className="rounded-lg shadow-lg"
//               src="https://www.youtube.com/embed/ZirZaR0iNhQ"
//               title="YouTube video player"
//               frameBorder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 bg-secondary/50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: Radio,
//                 title: "Podcast Production",
//                 description: "Professional podcast recording and production services",
//                 href: "/podcast",
//               },
//               {
//                 icon: Mic,
//                 title: "Recording Sessions",
//                 description: "State-of-the-art recording facilities for musicians",
//                 href: "/recording",
//               },
//               {
//                 icon: Music,
//                 title: "Rehearsal Space",
//                 description: "Fully equipped rehearsal rooms for bands and artists",
//                 href: "/rehearsal",
//               },
//               {
//                 icon: Headphones,
//                 title: "Music Production",
//                 description: "Complete music production and mixing services",
//                 href: "/production",
//               },
//               {
//                 icon: BookOpen,
//                 title: "Music Lessons",
//                 description: "Professional music education for all skill levels",
//                 href: "/lessons",
//               },
//             ].map((service, index) => (
//               <Link
//                 key={index}
//                 href={service.href}
//                 className="block p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
//               >
//                 <service.icon className="h-12 w-12 text-primary mb-4" />
//                 <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
//                 <p className="text-muted-foreground">{service.description}</p>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Studio Carousel Section */}
//       <section>
//         <h1 className="text-center text-3xl font-bold my-8">Glimpse of our Studio</h1>
//         <Carousel1 />
//       </section>

//       {/* Customer Testimonials */}
//       <section>
//         <h1 className="text-center text-3xl font-bold my-8">What our Customers Say</h1>
//         <Carousel2 />
//       </section>

//       {/* About Section */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">About Victor Logidasan</h2>
//               <p className="text-muted-foreground mb-6">
//                 With years of experience in the music industry, Victor Logidasan brings expertise in music direction,
//                 composition, and mixing mastering to VL Studios. Our state-of-the-art facility in Bangalore
//                 is equipped with the latest technology to bring your musical vision to life.
//               </p>
//               <Link href="/contact">
//                 <Button variant="outline">
//                   Get in Touch
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </Link>
//             </div>
//             <div className="relative h-[400px]">
//               {/* <img
//                 src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
//                 alt="Studio Equipment"
//                 className="rounded-lg object-cover w-full h-full"
//               /> */}

// <section>
//         <h1 className="text-center text-3xl font-bold my-8">Explore our Studio</h1>
//         <Carousel3 />

//       </section>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// adding a new video - FINAL

import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Mic, Radio, Headphones, BookOpen, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Carousel1, Carousel2, Carousel3 } from "@/components/ui/carousel";

// Metadata for the page
export const metadata = {
  title: "VL Studios - Professional Music Production & Recording Studio in Bangalore",
  description:
    "Welcome to VL Studios, the premier music production and recording studio in Bangalore. Offering top-notch facilities for recording, podcast production, music lessons, and more.",
  keywords: [
    "music studio Bangalore",
    "recording studio Bangalore",
    "podcast production",
    "music lessons",
    "music production services",
    "rehearsal space Bangalore",
    "VL Studios",
  ],
  authors: [{ name: "Victor Logidasan" }],
  openGraph: {
    title: "VL Studios - Music Production & Recording in Bangalore",
    description:
      "Explore VL Studios' state-of-the-art facilities and services. Bring your musical vision to life with our professional team and cutting-edge equipment.",
    url: "https://www.vlstudio.com",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80",
        alt: "Studio Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VL Studios - Music Production & Recording Studio in Bangalore",
    description:
      "Experience professional music production, recording sessions, and more at VL Studios in Bangalore.",
    images: [
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80",
    ],
  },
};

export default function Home() {
  return (
    <div>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/c/919742343464"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all z-50"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to VL Studios</h1>
          <p className="text-xl mb-8">
            Professional Music Production & Recording Studio in Bangalore
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-primary text-primary-foreground">
              Book a Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">
            Discover VL Studios in Action
          </h2>
          <p className="text-muted-foreground mb-6">
            Take a closer look at our studio facilities and see what makes us unique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg shadow-lg w-full h-[315px]"
                src="https://www.youtube.com/embed/ZirZaR0iNhQ"
                title="VL Studios Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                className="rounded-lg shadow-lg w-full h-[315px]"
                src="https://www.youtube.com/embed/y_FtLQeXucY"
                title="VL Studios Showcase"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Radio,
                title: "Podcast Production",
                description: "Professional podcast recording and production services",
                href: "/podcast",
              },
              {
                icon: Mic,
                title: "Recording Sessions",
                description: "State-of-the-art recording facilities for musicians",
                href: "/recording",
              },
              {
                icon: Music,
                title: "Rehearsal Space",
                description: "Fully equipped rehearsal rooms for bands and artists",
                href: "/rehearsal",
              },
              {
                icon: Headphones,
                title: "Music Production",
                description: "Complete music production and mixing services",
                href: "/production",
              },
              {
                icon: BookOpen,
                title: "Music Lessons",
                description: "Professional music education for all skill levels",
                href: "/lessons",
              },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="block p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Carousel Section */}
      <section>
        <h1 className="text-center text-3xl font-bold my-8">Glimpse of our Studio</h1>
        <Carousel1 />
      </section>

      {/* Customer Testimonials */}
      <section>
        <h1 className="text-center text-3xl font-bold my-8">What our Customers Say</h1>
        <Carousel2 />
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Victor Logidasan</h2>
              <p className="text-muted-foreground mb-6">
                With years of experience in the music industry, Victor Logidasan brings expertise in music direction,
                composition, and mixing mastering to VL Studios. Our state-of-the-art facility in Bangalore
                is equipped with the latest technology to bring your musical vision to life.
              </p>
              <Link href="/contact">
                <Button variant="outline">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px]">
              <section>
                <h1 className="text-center text-3xl font-bold my-8">Explore our Studio</h1>
                <Carousel3 />
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}