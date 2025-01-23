// components/Carousel.tsx
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import { Navigation, Pagination } from "swiper/modules";

// import "./1.jpeg"

// const Carousel = () => {
//   const images = [
//     "1.jpeg",
//     "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80",
//     "https://images.unsplash.com/photo-1601758175243-90bb5a3c8681?auto=format&fit=crop&q=80",
//   ];

//   return (
//     <Swiper
//       modules={[Navigation, Pagination]}
//       navigation
//       pagination={{ clickable: true }}
//       loop
//       className="w-full h-[400px]"
//     >
//       {images.map((image, index) => (
//         <SwiperSlide key={index}>
//           <img
//             src={image}
//             alt={`Slide ${index + 1}`}
//             className="w-full h-full object-cover rounded-lg"
//           />
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default Carousel;


import Slider from "react-slick";
import Image from "next/image";

const images = [
  "https://i.pinimg.com/736x/23/45/6f/23456f3538af5f20726ca92be671994d.jpg",
  "https://i.pinimg.com/736x/ff/fb/91/fffb910379ab7ca0d7df217e592fec71.jpg",
  "https://i.pinimg.com/736x/37/b4/f2/37b4f24c0daac4b6851d08d410ff9767.jpg",
  "https://i.pinimg.com/474x/92/f5/bb/92f5bb550ce33d1576c5aaea1d5c1f18.jpg",
  "https://i.pinimg.com/736x/89/6d/61/896d6145bc1f75dae45f8c3069862e40.jpg",
  "https://i.pinimg.com/736x/52/c3/90/52c390d5fb9cdfcc140a82e9a8d88b4a.jpg",
  "https://i.pinimg.com/736x/b5/bf/0a/b5bf0af0a86f8b29e98805ff89f8061f.jpg",
  "https://i.pinimg.com/736x/a3/c2/5b/a3c25b1f8d0891d194dbe4c142161837.jpg",
  "https://i.pinimg.com/736x/8c/ab/1e/8cab1e6861bbc8b3914c0f660fe0544c.jpg",
];

export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="p-2">
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              className="rounded-lg shadow-lg object-cover"
              width={1200}
              height={600}
              priority={index === 0} // Prioritize the first image for faster load
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
