import React from 'react';
import star from '../../images/icon/star_1_.png'

const Hotels = (props) => {

    const hotel=props.hotel

    return (
        <div class="d-flex flex-row">

        <div class="p-3">

            <img src={hotel.photo} alt="" width="270px" height="188px"/>

           
        </div>

        
        
        <div class="p-3">

            <h5>{hotel.name}</h5>
            <p>{hotel.description}</p>

            {
               hotel.features.map(feature=><p>{feature}</p>)
            }

            <img style={{marginBottom:'3px'}} src={star} height="15px" alt=""/><span> {hotel.rating}({hotel.reviewer})</span> 

            <span style={{fontWeight:"500",marginLeft:'15vh'}}>{hotel.Cost} <small>BDT/ night</small></span>

            
            
            

            



        </div>
      </div>
    );
};

export default Hotels;