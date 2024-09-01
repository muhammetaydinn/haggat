"use client";
import { IProduct } from "@/models/product.model";
import React from "react";
import { Pagination, Navigation } from "swiper/modules";

// core version + navigation, pagination modules:
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
interface ICardsCarouselProps {
  initialData: IProduct[];
}
const HomeCarousel = ({ initialData }: ICardsCarouselProps) => {
  return initialData?.length > 0 ? (
    <div className="flex justify-center items-center">
      <div
        style={{
          width: "calc(100% - 5vw)", // Ekran genişliğinin %5'i kadar çıkar
          height: "calc(100% - 30vh)", // Ekran yüksekliğinin %20'si kadar çıkar
        }}
      >
        <Swiper
          style={{ borderRadius: "10px" }}
          loop={true}
          centeredSlides={true}
          modules={[Pagination, Navigation]}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
        >
          {initialData.map((product) => (
            <SwiperSlide
              key={product.id}
              style={{
                borderRadius: "10px",
              }}
            >
              <div>
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className=" object-cover rounded-3xl"
                  style={{
                    padding: "10px",
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  ) : (
    // initialData.map((product) => (
    //     <div key={product.id} className="p-5 bg-white border border-gray-300 rounded text-center shadow hover:shadow-lg transition-shadow text-black">
    //         <img src={product.images[0]} alt={product.title} className="w-20 h-20 object-cover" />
    //         <p>{product.category.name}</p>
    //         <p>{product.price}</p>
    //     </div>
    // ))
    <div className="text-black">Yükleniyor...</div>
  );
};

export default HomeCarousel;
