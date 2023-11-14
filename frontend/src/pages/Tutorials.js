import React from 'react'

function Tutorials() {
  return (
    <>
        {/* Showcase */}
        <div className='tutor-bg py-5 mb-5 showcase d-flex align-items-center justify-content-center flex-column'>
            <div className='container py-5 d-flex flex-column align-items-center justify-content-center'>
                <h1 className='text-white fw-bold'>TUTORIALS & RESOURCES</h1>
                <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class=" text-color"><a href="#">Home</a></li>
                    <li class="mx-2 active text-light" aria-current="page">/</li>
                    <li class=" active text-light" aria-current="page">Tutorials</li>
                </ol>
                </nav>
            </div>
        </div>

        {/* Message */}
        <div className='container py-5 my-5 text-center'>
            <h1>NO TUTORIALS YET</h1>
            <p>Please Check Out Later :(</p>
        </div>
    </>
  )
}

export default Tutorials
