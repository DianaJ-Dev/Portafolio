import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../index.css';
import { Card } from './Card';
import { myProject } from '../helpers/proyectos';

import { EffectCoverflow, Navigation } from 'swiper/modules';

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
        navigation={true}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation]}
        className="mySwiper"
        breakpoints={{
          120: { slidesPerView: 1 },
          480: { slidesPerView: 1},
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
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
