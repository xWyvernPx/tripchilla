import React from "react";
import DestHeadline from "../common/DestinationHeadline/DestHeadline";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
const BestChoiceLayout = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  padding: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  background-color: var(--white);
  border-radius: var(--radius);
`;
const BestChoiceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex: 0;
  div {
    display: flex;

    flex-direction: column;
    span {
      font-size: var(--fs-small);
      color: var(--gray);
      &::after {
        content: " Destination found";
      }
    }
  }
`;

const BestChoiceContent = styled(Swiper)`

  width: 100%;
  height: 100%;
  .swiper-slide {
    min-width: 15rem;
    overflow: hidden;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    left: 50%;
    transform: rotate(90deg);
    transform-origin: left center;
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
    top: 10px;
    right: auto;
  }
  .swiper-button-next,
  .swiper-rtl .swiper-button-prev {
    &:after {
      content: "next";
    }
    top: 10px;
    /* left: auto; */
  }
`;
function BestChoice() {
  return (
    <BestChoiceLayout>
      <BestChoiceHeader>
        <div>
          <h2>Best Destination 🌈</h2>
          <span>100</span>
        </div>
        {/* TODO : Filter Button */}
      </BestChoiceHeader>
      <BestChoiceContent
        direction="vertical"
        spaceBetween={10}
        slidesPerView={3}
        autoHeight
        breakpoints={
          {
            // when window width is >= 320px  
            768: {
              slidesPerView: 5,
            },
            1024 :{
              slidesPerView: 3,
            }
          }
        }
      >
        <SwiperSlide>
          <DestHeadline />
        </SwiperSlide>
        <SwiperSlide>
          <DestHeadline />
        </SwiperSlide>
        <SwiperSlide>
          <DestHeadline />
        </SwiperSlide>
        <SwiperSlide>
          <DestHeadline />
        </SwiperSlide>
        <SwiperSlide>
          <DestHeadline />
        </SwiperSlide>
      </BestChoiceContent>
    </BestChoiceLayout>
  );
}

export default BestChoice;
