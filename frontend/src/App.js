import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import { useEffect, useState } from 'react';
import Tutorials from './Pages/Tutorials';
import Blogs from './Pages/Blogs';
import Contact from './pages/Contact';

function App() {
  const  [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setIsLoading(false);
        }, 1000);
      });

    return () => {
      window.removeEventListener('load', () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
    }
  }, []);


  return (
    <>
      <Header/>
        {isLoading ? (
              <Spinner/>
        ) : (
          <BrowserRouter>
          <div className='app mt-5 pt-5'>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/tutorials' element={<Tutorials />}/>
              <Route path='/blogs' element={<Blogs />}/>
              <Route path='/contact' element={<Contact />}/>
            </Routes>
          </div>
        </BrowserRouter>
        )}
      <Footer />
      </>
  )
}

export default App
