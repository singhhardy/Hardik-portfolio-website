import React from 'react'

function Footer() {
  return (
    <>
        <div className="container">
        <footer className="row d-flex flex-wrap justify-content-md-between justify-content-center align-items-center py-3 my-4 border-top">
            <div className="col-lg-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-color">© 2023 Hardik Singh. All Rights Reserved</span>
            </div>

            <ul className="nav col-lg-4 justify-content-md-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-color fs-2" href="https://instargram.com/prideofrajput" target='_blank'><i className='fa-brands fa-instagram'></i></a></li>
            <li className="ms-3"><a className="text-color fs-2" href="https://www.linkedin.com/in/hardik-singh-8b18001a1/" target='_blank'><i className="fa-brands fa-linkedin-in"></i></a></li>
            {/* <li className="ms-3"><a className="text-color" href="" ><i class="fa-brands fa-facebook"></i></a></li> */}
            </ul>
        </footer>
    </div>    
    </>
  )
}

export default Footer
