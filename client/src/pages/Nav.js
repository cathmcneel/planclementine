import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';


function Nav({ currentPage, handlePageChange }) {
  // useEffect(() => {
  //   document.title= capitalizeFirstLetter(currentPage)
  // }, [currentPage])

  // if (!nav) {
  //   return null
  // }

  return (
    <div className='navAnchor'>
      <ul className='navFloat'>
        <li className='link'>
        <span href='#About' onClick={() => handlePageChange('About') }
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            About
          </span>
        </li>
        <li className='link'>
          <span href='#Contact' onClick={() => handlePageChange('Contact') }
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </span>
        </li>
        <li className='link'>
          <span href='#Plan-Your-Event' onClick={() => handlePageChange('Plan-Your-Event')}
            className={currentPage === 'Plan-Your-Event' ? 'nav-link active' : 'nav-link'}>
              Plan your next event
            </span>
        </li>
        <li className='link'>
          <span href='#Home' onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>
              Home
            </span>
        </li>
      </ul>
    </div>
    // <header className="flex-row px-1">
    //   <h2>
    //     {/* <a data-testid="link" href="/">Catherine McNeel</a> */}
    //   </h2>
    //   <div>
    //     <ul className="flex-row">
    //       <li className="About">
    //       <span href='#About' onClick={() => handlePageChange('About')}
    //         className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
    //           About
    //         </span>
    //       </li>
    //       <li className="Contact">
    //       <span href='#contact' onClick={() => handlePageChange('Contact')}
    //         className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
    //           Contact
    //         </span>
    //       </li>
    //       <li className="TBD">
    //         <span href='#tbd' onClick={() => handlePageChange('TBD')}
    //         className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
    //           TBD
    //         </span>
    //       </li>
    //       <li className="TBD">
    //         <span href='#tbd' onClick={() => handlePageChange('TBD')}
    //         className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
    //           TBD
    //         </span>
    //       </li>
       
          
          
    //     </ul>
    //   </div>
    // </header>
  );
}

export default Nav;