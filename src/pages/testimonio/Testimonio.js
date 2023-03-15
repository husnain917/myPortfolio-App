import React from 'react'
import { cardData } from "./UseTestimonio";
import "./testimonio.css";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export default function Testimonio() {
  return (
    <>
      <section id='testimonio'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonioal-container"
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {
            cardData.map((items) => {
              return (
                <SwiperSlide className='testimonial'>
                  <div className='client-avatar'>
                    <img src={items.image} alt="Avater Not Found" />
                  </div>
                  <h5 className='client-name'>
                    {items.name}
                  </h5>
                  <small className='client-review'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus aliquid nesciunt corporis omnis,
                    expedita perferendis consequuntur debitis et rerum,
                    veritatis hic exercitationem dolor veniam totam facilis dolorem sed, natus voluptas.
                  </small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
    </>
  )
}
