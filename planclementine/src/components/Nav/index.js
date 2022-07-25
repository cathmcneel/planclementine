import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers'

function Nav({ currentPage, handlePageChange, nav }) {
    // useEffect(() => {
    //   document.title = capitalizeFirstLetter(currentPage)
    // }, [currentPage])
  
    // if (!nav) {
    //   return null
    // }
  
    return (
      <nav id="navbar" className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <span id="title" href='#Home' onClick={() => handlePageChange('Home') } className="font-semibold text-xl tracking-tight">Clementine.</span>
        </div>
        <div id="list-items">
          <ul id="nav-items" className='navFloat'>
          <li className="link">
              <span href='#Signup' onClick={() => handlePageChange('Signup') }
                className= {currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}>
                  sign up.
                </span>
            </li>
          <li className="link">
              <span href='#Plan' onClick={() => handlePageChange('Plan') }
                className={currentPage === 'Plan' ? 'nav-link active' : 'nav-link'}>
                  plan.
                </span>
            </li>
            <li className="link">
              <span href='#About' onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                  about.
                </span>
            </li>
            <li className="link">
              <span href='#Inspiration' onClick={() => handlePageChange('Inspiration')}
                className={currentPage === 'Inspiration' ? 'nav-link active' : 'nav-link'}>
                  get inspired.
                </span>
            </li>
            <li className="link">
              <span href='#Contact' onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                  contact.
                </span>
            </li>
          </ul>
          </div>
        </nav>
    );
  }
  
  export default Nav;