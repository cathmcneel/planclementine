import { useState } from 'react';
import About from '../About/index.js';
import Contact from '../Contact/index';
import Inspiration from '../Inspiration/index';
import Landing from '../Landing/index';
import Signup from '../Signup/index';
import Home from '../Home/index';
import Nav from '../Nav/index';


function Head() {
    const [nav, setNav] = useState(false);
    const [currentPage, setcurrentPage] = useState('Home');

    const menu = () => {
        setTimeout(() => setNav(false), 4000)
        setNav(true);
    }

    const handlePageChange = (page) => setcurrentPage(page);

    const renderPage = () => {
        if (currentPage === 'Signup') {
            return <Signup />;
          }
          if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Landing') {
            return <Landing />;
          }
          if (currentPage === 'Inspiration') {
            return <Inspiration />;
          }
          if (currentPage === 'Contact') {
            return <Contact />;
          }
          return < Home/>;
    };
    return (
        <header>
            <Nav nav={nav} currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <p>
              HOME!
            </p>
    </header>
    );
}

export default Head;