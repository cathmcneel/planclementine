import { useState } from 'react';
import Nav from '../Nav';
import logo from '../../assets/img/logo.png';
import dot from '../../assets/img/navbar-logo.png';
import Contact from '../Contact';
import About from '../About';
import Home from '../Home';
import Login from './login';
import SignUp from './signup';


function Head() {
    // const [nav, setNav] = useState(false);
    const [currentPage, setCurrentPage] = useState('Home');
    // const showMenu = () => {
    //     setNav(true);
    // }

    // const menu = () => {
    //     setTimeout(() => setNav(false), 4000)
    //     setNav(true);
    // }

  
    const renderPage = () => {
        if (currentPage === 'Login') {
          return <Login />;
        }
        if (currentPage === 'SignUp') {
          return <SignUp />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
          }
        // if (currentPage === 'Product') {
        //   return <Product />;
        // }
        // if (currentPage === 'Contact') {
        //   return <Contact handlePageChange={handlePageChange} />;
        // }
        // if (currentPage === 'Signup') {
        //   return <SignUp />;
        // }
        // if (currentPage === 'Home') {
        //   return <Home />;
        // }
        // if (currentPage === 'product/:id') {
        //   return <Detail />;
        // }
        return < Home/>;
      };

        const handlePageChange = (page) => setCurrentPage(page);


      return (
        <header>
            {/* <div className='title' onMouseOver={menu}>
            <img src={logo} className="clemlogo" alt="clem" onClick={() => setCurrentPage('Home')}/>
            <img src={dot} className="clemdot" alt="a round round circle" />
            </div> */}
            <div>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
                {renderPage()}
            </div>
        </header>
    );
}

export default Head;
