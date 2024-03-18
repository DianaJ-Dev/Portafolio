import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import '../index.css';
import { Pagination } from 'swiper/modules';
import { Card } from './Card';
import { myProject } from '../helpers/proyectos';


import { EffectCoverflow } from 'swiper/modules';

export const Carrusel = () => {

  
  return (
    <>
    <h1 className = "proyec-title fw-bold">Proyectos</h1>
      <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 50,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          myProject.map((project) => (
          <SwiperSlide key = {project.id}>
            <Card {...project} />
          </SwiperSlide>
          ))
        }  
      </Swiper>
    </>
  )
}
