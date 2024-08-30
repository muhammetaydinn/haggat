import { ICategory } from '@/models/category.model';
import { IProduct } from '@/models/product.model';
import React from 'react'
import { Pagination,Navigation } from "swiper/modules";

// core version + navigation, pagination modules:
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
interface ICardsCarouselProps {
  initialData: IProduct[];
}
const HomeCarousel = ({ initialData }: ICardsCarouselProps) => {
    return initialData?.length > 0 ? (
      <div className="p-1 bg-gray-800">
        <Swiper
          loop={true}
          // install Swiper modules
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
        >
          {initialData.map((product) => (
              <SwiperSlide key={product.id}
                  
                  style={{
                      accentColor: "red",
                      
                  }}
                  
              >
              <div className="p-5 bg-gray-100 border border-gray-300 rounded text-center shadow hover:shadow-lg transition-shadow text-black">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="w-20 h-20 object-cover"
                />
                <p>{product.title}</p>
                <p>{product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default HomeCarousel