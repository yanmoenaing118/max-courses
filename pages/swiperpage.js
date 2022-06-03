import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

export default function SwiperPage() {
  return (
    <>
      <div className="outer-swiper-container">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          slidesOffsetBefore={40}
          slidesOffsetAfter={40}
        >
          <SwiperSlide>item 1</SwiperSlide>
          <SwiperSlide>item 1</SwiperSlide>

          <PrevButton />
          <NextButton />
        </Swiper>

        <style jsx>{`
          .outer-swiper-container {
            width: 400px;
            height: 400px;
            margin: auto;
            box-shadow: 0 0px 3px rgba(0, 0, 0, 0.3);
          }
        `}</style>
      </div>
    </>
  );
}

function NextButton() {
  return <button className="next-btn">Next</button>;
}

function PrevButton() {
  return <button className="prev-btn">Prev</button>;
}
