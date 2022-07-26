import React from 'react';
import { Card } from 'react-bootstrap';

const SingleVendor = ( {name, description, image } ) => {

    return (
        <div className="vendors">
            <div style={{ width: '' }} class="row project-card">
                <h1 class="col-sm vendor-title" id="vendor-title"> {name}</h1>
                <div id="singlevendorcontainer"></div>
                <div>
                <img id="singleVendorImg" src={`/images/${img}.jpg`} alt={`${name} vendor screenshot`}></img>
                </div>
               
            </div>

        </div>
    )
};

export default SingleVendor;