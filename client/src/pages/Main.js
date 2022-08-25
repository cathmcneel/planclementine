import React, { useState } from 'react';
import Nav from './Nav';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Head from './components/head';
import Footer from './components/Footer'

function Main() {
    // const [currentPage, setCurrentPage] = useState('Home');


    // const renderPage = () => {
    //     if (currentPage === 'Home') {
    //       return <Home />;
    //     }
    //     if (currentPage === 'About') {
    //       return <About />;
    //     }
    //     // if (currentPage === 'TBD') {
    //     //   return <TBD />;
    //     // }
    //     // if (currentPage === 'TBD') {
    //     //     return <TBD />;
    //     //   }
    //     return <Contact />;
    //   };
     
      // const handlePageChange = (page) => setCurrentPage(page);

      return (
      //   <div>
      //     <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      //     {renderPage()}
      //   </div>
        <div>
          <Head></Head>
       
        
          <Footer></Footer>
        </div>
      );
    }

export default Main;