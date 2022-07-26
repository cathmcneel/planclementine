import React from 'react';
// import { Card } from 'react-bootstrap';

const Vendor = ( {name, description, img } ) => {

    return (
        <div className="container vendors">
            <div style={{ width: '' }} class="vendor-card">
                <div className="row">
                <h1 className="col-sm vendor-title" id="vendor-title"> {name}</h1>
                <p className="vendorDescription">{description} </p>
                <div id="singleVendorContainer"></div>
                <div>
                    <img id="singleVendorImg" src={`/images/${img}.jpg`} alt={`${name} vendor screenshot`}></img>
                </div>
               </div>
            </div>

        </div>
    )
};

export default Vendor;