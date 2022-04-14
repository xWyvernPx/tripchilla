import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";

import DestinationCard from "./DestinationCard";
const SwiperWrapper = styled(Swiper)`

  width: 100%;
  height: auto;
  .swiper-slide {
    width: fit-content;
    max-width: unset;
    background-color: red;
    border-radius: var(--radius);
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size) / 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-color);
    &.swiper-button-disabled {
      opacity: 0.35;
      cursor: auto;
      pointer-events: none;
    }
    &:after {
      font-family: swiper-icons;
      font-size: var(--swiper-navigation-size);
      text-transform: none !important;
      letter-spacing: 0;
      text-transform: none;
      font-variant: initial;
      line-height: 1;
    }
  }
  .swiper-button-prev,
  .swiper-rtl .swiper-button-next {
    &:after {
      content: "prev";
    }
    left: 10px;
    right: auto;
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    &:after {
      content: "next";
    }
    right: 10px;
    left: auto;
  }
`;

function Recommend() {
  return (
    // <RecommendWrapper>
    <SwiperWrapper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={4}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 4,
        }
      }}
    >
      <SwiperSlide>
        <DestinationCard />
      </SwiperSlide>
      <SwiperSlide>
        <DestinationCard />
      </SwiperSlide>
      <SwiperSlide>
        <DestinationCard />
      </SwiperSlide>
      <SwiperSlide>
        <DestinationCard />
      </SwiperSlide>
      <SwiperSlide>
        <DestinationCard />
      </SwiperSlide>
    </SwiperWrapper>
    // </RecommendWrapper>
  );
}

export default Recommend;
