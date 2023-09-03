import React from 'react'
import groupTitle1 from '../assests/groupTitle1.svg';

import groupTitle from '../assests/groupTitle.svg';
const GroupTitle = () => {
  return (
    <div className='groupImage'>
      <div className='groupText'>
        <p>Computer Engineering</p>
        <p>142,765 Computer Engineers follow this</p>
      </div>
      <img src={groupTitle} alt="" className='img1'/>
      <img src={groupTitle1} alt="" className='img2'/>
    </div>
  )
}

export default GroupTitle
