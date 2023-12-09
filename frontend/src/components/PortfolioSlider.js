import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.css";
import Spinner from "./Spinner";
import { Link } from "react-router-dom";

function PortfolioSlider() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fair-red-wildebeest-garb.cyclic.app/api/portfolio', {
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
          <Swiper
          {...swiperConfig}
          loop={true}
          autoplay={{
            delay: 1500,
          }}
          modules={[Autoplay]}
          spaceBetween={50}
        >
            <SwiperSlide>
              <div className="portfolio-card portfolio-img bg-skeleton rounded-2 py-4 my-4" >
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio-card portfolio-img bg-skeleton rounded-2 py-4 my-4" >
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio-card portfolio-img bg-skeleton rounded-2 py-4 my-4" >
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio-card portfolio-img bg-skeleton rounded-2 py-4 my-4" >
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio-card portfolio-img bg-skeleton rounded-2 py-4 my-4" >
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio-card portfolio-img bg-skeleton rounded-2 py-4 my-4" >
              </div>
            </SwiperSlide>
        </Swiper>
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
              <Link className="portfolio-card py-4 my-4" to={`/project/${item._id}`}>
                <div className="card rounded-2 shadow-lg">
                  <img
                    className="img-fluid portfolio-img rounded-2"
                    src={`https://fair-red-wildebeest-garb.cyclic.app/${item.img}`}
                    alt="Portfolio item"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default PortfolioSlider;
