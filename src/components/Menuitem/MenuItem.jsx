import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
  <div className='menu_app_item'>
    <div className='menu_app_head'>
      <div className='menu_app_head_name'>
        <p className='para2' style={{color:"#dcca87"}}>{title}</p>
      </div>
      <div className='menu_app_dash'/>
      <div className='menu_app_price'>
        <p className='para1'>{price}</p>
      </div>
    </div>

    <div className='menu_app_subhead'>
      <p className='para1' style={{color:"#aaa"}}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
