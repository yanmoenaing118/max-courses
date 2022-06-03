import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./swiper.module.css";

export default function SwiperComponent() {
  return (
    <div className="outer-swiper-container">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        slidesOffsetBefore={23}
        slidesOffsetAfter={23}
        onSwiper={(swiper) => console.log(swiper)}
        className={styles.mySwiper}
        breakpoints={{
          580: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },

          992: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {new Array(30).fill(1).map((_, i) => (
          <SwiperSlide className={styles.mySlide} key={_ + i}>
            <SlideItem item={_ + i} />
          </SwiperSlide>
        ))}
        <PrevButton />
        <NextButton />
      </Swiper>

      <style jsx>{`
        .outer-swiper-container {
          height: 400px;
          margin: auto;
          box-shadow: 0 0px 3px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}

function SlideItem({ item }) {
  return (
    <div>
      {item}
      <style jsx>{`
        div {
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: red;
        }
      `}</style>
    </div>
  );
}

const buttonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-90%)",
  zIndex: 3,
  width: "20px",
  height: "50px",
  display: "block",
};

function NextButton() {
  const swiper = useSwiper();
  return (
    <button
      className="next-btn"
      style={buttonStyle}
      onClick={() => swiper.slideNext()}
    >
      {">"}
      <style jsx>{`
        button {
          right: 0;
        }
      `}</style>
    </button>
  );
}

function PrevButton() {
  const swiper = useSwiper();

  return (
    <button
      className="prev-btn"
      style={buttonStyle}
      onClick={() => swiper.slidePrev()}
    >
      {"<"}
      <style jsx>{`
        button {
          left: 0;
        }
      `}</style>
    </button>
  );
}
