import React from 'react'
import { useState, useEffect } from 'react';

function Header() {
    const storedMode = localStorage.getItem('dark') == 'true';
    const [isDarkMode, setIsDarkMode] = useState(storedMode)
    const [activeLink, setActiveLink] = useState('')
    const [showSideNav, setShowSideNav] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        localStorage.setItem('dark', isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        const body = document.body;
        if (isDarkMode) {
        body.classList.add('dark');
        } else {
        body.classList.remove('dark');
        }
    }, [isDarkMode]);


    // ACTIVE CLASS ON ROUTE

    useEffect(() => {
      const currentPath = window.location.pathname.toLowerCase();

      if (currentPath === '/') {
        setActiveLink('home');
      } else if (currentPath === '/tutorials') {
        setActiveLink('tutorials');
      } else if (currentPath === '/blogs') {
        setActiveLink('blog');
      } else if (currentPath === '/contact') {
        setActiveLink('contact');
      }
    }, []);

    // SIDE NAV

    const toggleSidenav = () => {
      setShowSideNav(!showSideNav);

    };

  return (
    <>
        {/* <h1 className={`primary-text ff-proto main-text ${isDarkMode ? 'dark' : ''}`} onClick={toggleDarkMode}>Dark Text</h1>
          <p>Hello this is for test</p> */}
        <div className='main-navbar px-md-4 py-md-2 py-3'>
          <div className='d-flex align-items-center justify-content-between'>

              <div className='navbar-brand'>
                <a href='/' className='brand-logo ff-proto fs-1 dark-text fw-bold  ms-2'>HARDIK</a>
              </div>

              <div id="desknav" className='nav-links w-50 d-flex justify-content-evenly align-items-center '>
                  <a href='/' className={`nav-link fw-bold ${activeLink === 'home' ? 'nav-active mt-1' : ''}`}>
                    HOME
                  </a>
                  <a href='/tutorials' className={`nav-link fw-bold ${activeLink === 'tutorials' ? 'nav-active  mt-1' : ''}`}>
                    TUTORIALS
                  </a>
                  <a href='/blogs' className={`nav-link fw-bold ${activeLink === 'blog' ? 'nav-active  mt-1' : ''}`}>
                    BLOGS
                  </a>
                  <a href='/contact' className={`nav-link fw-bold ${activeLink === 'contact' ? 'nav-active  mt-1' : ''}`}>
                    CONTACT
                  </a>

                  <button className='btn btn cta-outline cta-text fw-bold' onClick={toggleDarkMode}>
                    {isDarkMode ? (
                      <span>
                        Light MODE <i className="fa-solid fa-lightbulb"></i>
                      </span>
                    ) : (
                      <span>
                        Dark MODE <i className="fa fa-moon"></i>
                      </span>
                    )}
                  </button>
              </div>

              <div className='hamburger' onClick={toggleSidenav}>
                <button className='btn cta-btn p-0'>
                <svg  className={`ham hamRotate ham1 ${showSideNav ? 'active': ''}`} viewBox="0 0 100 100" width="80">
                  <path
                        className="line top"
                        d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
                  <path
                        className="line middle"
                        d="m 30,50 h 40" />
                  <path
                        className="line bottom"
                        d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
                </svg>
                </button>
              </div>

          </div>

          {showSideNav && (
              <div className={`mobnav ${showSideNav ? 'open' : ''}`}>
                <div className='nav-links mob-nav-links'>
                <a href='/' className={`nav-link  ff-proto fs-1 py-2 fw-bold ${activeLink === 'home' ? 'nav-active mt-1' : ''}`}>
                    HOME
                  </a>
                  <a href='/tutorials' className={`nav-link ff-proto  fs-1 py-2 fw-bold ${activeLink === 'tutorials' ? 'nav-active  mt-1' : ''}`}>
                    TUTORIALS
                  </a>
                  <a href='/blogs' className={`nav-link ff-proto  fs-1 py-2 fw-bold ${activeLink === 'blog' ? 'nav-active  mt-1' : ''}`}>
                    BLOGS
                  </a>
                  <a href='/contact' className={`nav-link  ff-proto fs-1 py-2 fw-bold ${activeLink === 'contact' ? 'nav-active  mt-1' : ''}`}>
                    CONTACT
                  </a>
                  <button className='btn btn cta-outline cta-text mt-3 py-3 w-100 fw-bold' onClick={toggleDarkMode}>
                    {isDarkMode ? (
                      <span>
                        Light MODE <i className="fa-solid fa-lightbulb"></i>
                      </span>
                    ) : (
                      <span>
                        Dark MODE <i className="fa fa-moon"></i>
                      </span>
                    )}
                  </button>
                </div>
            </div>
        
          )}

        </div>
    </>
  )
}

export default Header
