import React from 'react'
import { Link } from 'react-router-dom';

const Setting = () => {
  return (
    <div>
         <Link
        to='./'
        className='relative flex h-8 w-8 items-center justify-center rounded-full'
      >
        <img src='./icons/setting.png' alt='Setting' />
      </Link>
    </div>
  )
}

export default Setting