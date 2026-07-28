"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type GameSliderProps = {
  title: string;
  banners: string[];
};

export default function GameSlider({
  title,
  banners,
}: GameSliderProps) {
  return (
    <section className="py-10">
      <h2 className="mb-6 text-center text-3xl font-bold text-white">
        {title}
      </h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="rounded-3xl overflow-hidden"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
              <Image
                src={banner}
                alt={`${title} ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}