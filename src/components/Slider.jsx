import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { space1, space2, space3 } from "../constant";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={space1} alt="slide img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={space2} alt="slide img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={space3} alt="slide img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={space1} alt="slide img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={space2} alt="slide img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={space3} alt="slide img" />
        </SwiperSlide>
        
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
