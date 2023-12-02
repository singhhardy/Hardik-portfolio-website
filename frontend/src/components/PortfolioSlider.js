import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import Spinner from "./Spinner";

function PortfolioSlider() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/portfolio', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(data => {
        setPortfolioItems(data.portfolio);
        setLoading(false); // Set loading to false when data is loaded
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  const swiperConfig = {
    spaceBetween: 20,
    breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
    speed: 1000,
  };

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <Swiper
          {...swiperConfig}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          modules={[Autoplay]}
          spaceBetween={50}
        >
          {portfolioItems.slice(0, 6).map((item) => (
            <SwiperSlide key={item.id}>
              <a className="portfolio-card py-4 my-4" href="">
                <div className="card rounded-2 shadow-lg">
                  <img
                    className="img-fluid portfolio-img rounded-2"
                    src={`http://localhost:5000/${item.img}`}
                    alt="Portfolio item"
                  />
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default PortfolioSlider;
