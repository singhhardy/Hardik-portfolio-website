import Header from '../components/Header';
import {Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay} from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/swiper-bundle.css';

import BlogSlider from '../components/BlogSlider';

function Home(){

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

    //   Testimonial slider

    const swiperConfigReviews = {
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

    return (
        <>
        {/* showcase */}
          <div className='container mt-5 pt-3 mb-2'>
             <div className='row'>
                <div className='col-lg-7'>
                    <h1 className='show-text ff-roboto'><span className='cta-text'>MERN</span> STACK DEVELOPER</h1>
                    <p className=' fs-5 py-3 fw-bold'>
                        Leveraging the Strength of MERN Stack and for Over 3 Years, Crafting Exceptional Web Solutions with a Proven Track Record of Excellence.</p>
                    <div className='d-flex flex-wrap g-2'>
                        <a href='/contact' className='btn cta-outline cta-bg w-sm-100 text-light rounded-1 py-3 px-5 fw-bold'>CONTACT</a>
                        <a href='/tutorials' className='btn cta-outline cta-text w-sm-100  rounded-1 py-3 px-5 fw-bold'>COURSES</a>
                    </div>
                </div>
                <div className='col-lg-5'>
                    <img src='showcase.png' className='img-fluid mt-md-0 mt-5' alt=''/>
                </div>
             </div>
          </div>

          {/* PORTFOLIO */}
          <div className='container'>
            <h1 className='fw-bold fs-2 mt-md-2 mt-5 pt-md-0 mt-5'>MY Portfolio</h1>
          </div>
          <div className='my-4 mx-md-0 mx-5 mb-5'>
            <Swiper {...swiperConfig}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        // disableOnInteraction: false,
                      }}
                    modules={[Autoplay]}
                    spaceBetween={50}
                    slidesPerView={1}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    >
                <SwiperSlide>
                    <a className='portfolio-card' href=''>
                    <div className='card rounded-2 shadow-lg'>
                        <img className='card-img-top rounded-3' src='p1.png' />
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a  className='portfolio-card' href=''>
                    <div className='card rounded-2 shadow-lg'>
                        <img className='card-img-top rounded-3' src='p2.png' />
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className='portfolio-card' href=''>
                    <div className='card rounded-2 shadow-lg'>
                        <img className='card-img-top rounded-3' src='p3.png' />
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className='portfolio-card' href=''>
                    <div className='card rounded-2 shadow-lg'>
                        <img className='card-img-top rounded-3' src='p4.png' />
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className='portfolio-card' href=''>
                    <div className='card rounded-2 shadow-lg'>
                        <img className='card-img-top rounded-3' src='p5.png' />
                    </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a className='portfolio-card' href=''>
                    <div className='card rounded-2 shadow-lg'>
                        <img className='card-img-top rounded-3' src='p4.png' />
                    </div>
                    </a>
                </SwiperSlide>
            </Swiper>   
            </div>
            
            {/* ABOUT ME */}
            <div className='highlight-bg'>
                <div className='container my-2 py-5'>
                    <div  className='row g-4 py-5'>
                        <div  className='col-lg-6'>
                        <img src='https://media.istockphoto.com/id/1469706272/photo/web-design-coding-and-asian-man-with-a-computer-for-programming-a-website-at-night-cyber.webp?b=1&s=170667a&w=0&k=20&c=7_2joeyiBtZQ_y-OhD-qxIh5cgeI5MXqgk87O7tjNZs=' 
                        className='img-fluid rounded-2' alt='About Image' />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-center'>
                            <h1 className='fw-bold'>About Me</h1>
                            <p className='fw-bold'>I'm a seasoned Full Stack Developer with over 3 years of expertise in MERN Stack and MVC web applications. 
                            I am currently employed as a Web Application Developer at "VOIPED TELECOM" and have a successful track record on freelancing platforms and within organizations. 
                            My core competencies include MERN Stack development and MVC web applications. I'm dedicated to delivering exceptional results and maintaining the highest professional standards in my work.
                            </p>
                            <a href='#' className='btn act-bg rounded-1 text-nowrap w-50 py-2 px-5 text-light'>Learn More <i className='fa fa-arrow-right'></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blogs Slider */}
            <div className='container my-5 py-5'>
                <h1 className='py-4 fw-bold'>Check Out My Blogs</h1>
                <BlogSlider swiperConfig={swiperConfig} />
            </div>

            {/* Visit tutorials */}
            <div className='tutor-bg py-5 '>
                <div className='container w-50 mx-auto text-center py-5'>
                      <h1 className='fw-bold text-light'>COURSES & RESOURCES</h1>
                      <p className='text-light'>Grab Latest Courses along with Resources and Learn New Technologies while building Cool Projects while Upgrading Your Skills :D</p>
                      <a href='/tutorials' className='btn cta-outline cta-text rounded-1 py-3 px-5 fw-bold'>Visit Now</a>
                </div>    
            </div>

            {/* Testimonials */}
            
            <div className='highlight-bg my-md-5 py-5'>
                <h1 className='text-center fw-bold'>Testimonials</h1>
                <div className='container'>
                      <Swiper {...swiperConfigReviews}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            // disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1} 
                        speed={1000}                     
                        >
                        <SwiperSlide>
                            <div className='rounded-3 p-5 shadow-primary light-bg text-start border m-md-5'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quibusdam officia voluptate dignissimos 
                                    numquam aliquid qui ipsum reprehenderit? Excepturi, porro!
                                </p>
                                <span className='fw-bold'>Ferry Stienstra.</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='rounded-3 p-5 text-start  light-bg shadow-primary border m-md-5'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quibusdam officia voluptate dignissimos 
                                    numquam aliquid qui ipsum reprehenderit? Excepturi, porro!
                                </p>
                                <span className='fw-bold'>Ferry Stienstra.</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='rounded-3 p-5 text-start border  light-bg shadow-primary m-md-5'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quibusdam officia voluptate dignissimos 
                                    numquam aliquid qui ipsum reprehenderit? Excepturi, porro!
                                </p>
                                <span className='fw-bold'>Ferry Stienstra.</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='rounded-3 p-5 text-start border light-bg shadow-primary m-md-5'>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit quibusdam officia voluptate dignissimos 
                                    numquam aliquid qui ipsum reprehenderit? Excepturi, porro!
                                </p>
                                <span className='fw-bold'>Ferry Stienstra.</span>
                            </div>
                        </SwiperSlide>
                      </Swiper>
                </div>
            </div>

            {/* Request Quote */}
            <div className='tutor-bg mb-5'>
                <div className='container w-md-50 mx-auto text-center py-5'>
                      <h1 className='fw-bold text-light pt-5'>"Request a Quote"</h1>
                      <p className='text-light'>Transform your development dreams into tangible realities with a custom quote tailored to meet your visionary requirements for your website project.</p>
                      <a href='/contact' className='btn cta-outline mb-5 cta-text rounded-1 py-3 px-5 fw-bold'>Contact</a>
                </div>    
            </div>
        </>
    )
}

export default Home