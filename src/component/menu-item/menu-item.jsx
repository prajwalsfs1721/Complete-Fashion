import React from 'react';
import './menu-item.scss';
const MenuItem = ({title,imageUrl,size})=>(
    <div  
        className= {`${size} hover menu-item`}
        >
        <div style={
        {backgroundImage:`url(${imageUrl})`}}
            className='background-image'
        />

        <div className='content' >
            <h1 className='title'>{title}    </h1>
            <span className='subtitle'>SHOW NOW</span>
        </div>
        
    </div>
);

export default MenuItem;