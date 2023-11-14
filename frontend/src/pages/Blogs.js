import React from 'react'
import BlogSlider from '../components/BlogSlider'

function Blogs() {
  return (
    <>
     {/* Showcase */}
     <div className='tutor-bg py-5 mb-5 showcase d-flex align-items-center justify-content-center flex-column'>
            <div className='container py-5 d-flex flex-column align-items-center justify-content-center'>
                <h1 className='text-white fw-bold'>BLOG POSTS</h1>
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class=" text-color"><a href="#">Home</a></li>
                    <li class="mx-2 active text-light" aria-current="page">/</li>
                    <li class=" active text-light" aria-current="page">Blogs</li>
                </ol>
                </nav>
            </div>
        </div> 

        {/* Blogs Slider 1 */}
        <div className='container'>
            <h1>Featured Blogs</h1>
            <BlogSlider />
        </div>
    </>
  )
}

export default Blogs
