import React, { MouseEventHandler } from "react";
import styled from "styled-components";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { DestinationCard } from "_components/common";

interface Props {
  listDestination: any;
  handleCardClick: MouseEventHandler;
}

const Recommend: React.FC<Props> = (props) => {
  const { listDestination, handleCardClick } = props;
  return (
    // <RecommendWrapper>
    <SwiperWrapper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={4}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      className="mySwiper"
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1280: {
          slidesPerView: 3,
        },
        1580: {
          slidesPerView: 4,
        },
      }}
    >
      {listDestination &&
        listDestination.map((item: any, i: number) => (
          <SwiperSlide key={i}>
            <DestinationCard data={item} onSelected={handleCardClick} />
          </SwiperSlide>
        ))}

      {/* <SwiperSlide>
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
      </SwiperSlide> */}
    </SwiperWrapper>
  );
};
const SwiperWrapper = styled(Swiper)`
  width: 100%;
  height: fit-content;
  flex-shrink: 0;
  .swiper-slide {
    width: fit-content;
    max-width: unset;
    /* background-color: red; */
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
    text-shadow: 0px 0px 2px white;
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

export default Recommend;
