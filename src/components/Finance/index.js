import React from "react";
import "../../css/style.css";
import FinanceCard from "../FinanceCard";
import FinanceData from "../../data/finance";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"


SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Finance() {
  console.log("The width of the screen is : "+window.innerWidth);
  return (
    <div style={{backgroundColor:'#F8F9F9'}}>
      <section className="pt-2 mb-5">
        <h4 className="text-center">
          Finance Alliances
        </h4>
        <div className="featured-title"></div>
      </section>
      <div className="container-finance">
        <Swiper
          className="align-self-center"
          slidesPerView={1}
          spaceBetween={40}
          navigation
          pagination={{ clickable: true, dynamicBullets: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1600:{
              slidesPerView: 5,

            },
          }}
        >
            {FinanceData.map((value, indno) => {
              return (
                <SwiperSlide className="mb-5">
                  <FinanceCard
                    key={indno}
                    imgsrc={value.imgsrc}
                    loan={value.loan}
                    contact={value.contact}
                    />
                </SwiperSlide>

              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
