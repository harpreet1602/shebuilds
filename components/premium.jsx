import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { useEffect, useState, useRef } from "react";

const Premium = () => {
  const swiperRef = useRef();

  const [width, setWidth] = useState(null);

  let mobile = false;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  if (width < 1000) {
    mobile = true;
  } else {
    mobile = false;
  }

  return (
    <>
      <div>THIS IS PREMIUM SECTION</div>
      <button
        className="border-black rounded-full bg-white w-40"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <img src="https://img.icons8.com/ios-glyphs/40/null/chevron-left.png" />
      </button>
      <Swiper
        slidesPerView={mobile ? 1 : 3}
        loop={true}
        centeredSlides={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      ></Swiper>
      <button
        className="border-black rounded-full bg-white w-40"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <img src="https://img.icons8.com/ios-glyphs/40/null/chevron-left.png" />
      </button>
    </>
  );
};

export default Premium;
