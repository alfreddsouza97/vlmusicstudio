// components/ui/PromoCarousel.tsx
// components/ui/PromoCarousel.tsx
// working but without link embedded in Promo Carousel
// "use client";

// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// export const PromoCarousel = () => {
//   const images = [
//     "https://i.pinimg.com/1200x/cb/39/6b/cb396b7f5689322befa801cd34dcc33d.jpg",
//     "https://i.pinimg.com/1200x/de/da/05/deda0595dd29b9da14a6c2a39eb5fd88.jpg",
//   ];

//   return (
//     <Carousel
//       autoPlay
//       infiniteLoop
//       showThumbs={false}
//       showStatus={false}
//       interval={3000}
//     >
//       {images.map((image, index) => (
//         <div key={index} className="h-[600px] flex items-center justify-center bg-black">
//           <img
//             src={image}
//             alt={`Promo ${index + 1}`}
//             className="w-full h-full object-contain" // Use object-contain instead of object-cover
//           />
//         </div>
//       ))}
//     </Carousel>
//   );
// };

// trying to embed booking page link in promo

// components/ui/PromoCarousel.tsx
"use client";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Link from 'next/link'; // Import the Link component

export const PromoCarousel = () => {
  const images = [
    "https://i.pinimg.com/1200x/de/da/05/deda0595dd29b9da14a6c2a39eb5fd88.jpg",
    "https://i.pinimg.com/1200x/cb/39/6b/cb396b7f5689322befa801cd34dcc33d.jpg",
    
  ];

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
    >
      {images.map((image, index) => (
        <Link key={index} href="/booking" passHref> {/* Wrap the image in a Link */}
          <div className="h-[600px] flex items-center justify-center bg-black cursor-pointer">
            <img
              src={image}
              alt={`Promo ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        </Link>
      ))}
    </Carousel>
  );
};