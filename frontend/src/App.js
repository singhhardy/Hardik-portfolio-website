import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../src/components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import { useEffect, useState } from 'react';
import Tutorials from './pages/Tutorials';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import './App.css';
import Admin from './pages/Admin';
import ProjectPage from './pages/ProjectPage';

function App() {
  const  [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
              <Route path='/Admin' element={<Admin />}/>
              <Route path='/project/:id' element={<ProjectPage />} />
            </Routes>
          </div>
        </BrowserRouter>
        )}
      <Footer />
      </>
  )
}

export default App
