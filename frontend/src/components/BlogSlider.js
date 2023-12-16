import React, { useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules'
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';


function BlogSlider() {

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
        },
        speed: 1000,
      };

    const Blogs = [
        {
            id: 1,
            blogTitle: "This is Blog One",
            Img: "p1.png"
        },
        {
            id: 2,
            blogTitle: "This is Blog Two",
            Img: "p2.png"
        },
        {
            id: 3,
            blogTitle: "This is Blog Three",
            Img: "p3.png"
        },
        {
            id: 4,
            blogTitle: "This is Blog Four",
            Img: "p4.png"
        }
    ];

    const [blogsData, setBlogsData] = useState(Blogs);

    return (
        <>
            <Swiper {...swiperConfig}
                loop={true}
                autoplay={{
                    delay: 2500,
                    // disableOnInteraction: false,
                    }}
                modules={[Autoplay]}
                slidesPerView={1}
                >
                {blogsData.slice(0, 6)
                .map((blog) => (
                    <SwiperSlide key={blog.id}>
                            <div class="component-card" >
                                <Link to={`/project/${blog._id}`}>
                                    <div class="component-card_image">
                                        <div class="component-card_image-inside">
                                        <img src={blog.Img} alt=""  />
                                        </div>
                                    </div>
                                </Link>
                              <div class="blog-detail light-bg d-flex align-items-center justify-content-between">
                                <div class="row">
                                    <h3>{blog.blogTitle} </h3>
                                    <label>17-12-2023</label>    
                                </div>
                                <Link class="btn cta-outline cta-bg rounded-1 text-nowrap mt-2 text-light px-2 ms-2 py-1"  to=''>View More</Link>
                              </div>
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default BlogSlider;
