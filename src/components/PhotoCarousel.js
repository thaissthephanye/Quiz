import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Estilos personalizados
const styles = {
  swiper: {
    width: "100%",
    height: "1000px",
    maxWidth: "1000px",
    margin: "0 auto",
    borderRadius: "16px",
    overflow: "hidden",
    border: "2px solid #8a2be2",
    boxShadow: "0 0 30px rgba(138, 43, 226, 0.5)",
  },
  slideImg: {
    width: "100%",
    height: "1000px",
    objectFit: "cover",
  },
};

export default function PhotoCarousel() {
  return (
    <Swiper
      style={styles.swiper}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.id}>
          <div style={{ position: "relative" }}>
            <img src={photo.src} alt={photo.caption} style={styles.slideImg} />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                padding: "20px",
                color: "white",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: "1.2rem",
                  textShadow: "0 2px 5px rgba(0,0,0,0.5)",
                }}
              >
                {photo.caption}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
