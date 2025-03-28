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
    const fetchData = async () => {
      try {
        const cachedData = localStorage.getItem("portfolioData");
        if (cachedData) {
          setPortfolioItems(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const response = await fetch('http://localhost:5000/api/portfolio', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          });
          const data = await response.json();
          setPortfolioItems(data.portfolio);
          setLoading(false);
          localStorage.setItem("portfolioData", JSON.stringify(data.portfolio));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
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
    speed: 2000,
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
            delay: 2000,
          }}
          modules={[Autoplay]}
          spaceBetween={50}
        >
          {portfolioItems.slice(0, 6).map((item) => (
            <SwiperSlide key={item.id}>
                <div class="component-card" >
                  <Link to={`/project/${item._id}`}>
                  <div class="component-card_image">
                    <div class="component-card_image-inside">
                      <img src={`http://localhost:5000/${item.img}`} alt=""  />
                    </div>
                  </div>
                  </Link>
                  <div class="blog-detail light-bg d-flex align-items-start justify-content-between">
                    <div class="row">
                        <h3>{item.title} </h3>
                    </div>
                    <Link class="btn cta-outline cta-bg rounded-1 text-nowrap mt-2 text-light px-2 ms-2 py-1"  to={`/project/${item._id}`}>View More</Link>
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default PortfolioSlider;
