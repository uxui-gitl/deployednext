import React from 'react'
import styles from './subscribe.module.css'

import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';
const Subscribe = () => {
  return (
    <div className={`${styles['container']} max-w-screen-lg flex justify-center flex-col text-center mx-auto bg-white`}>
      <div className="mx-4 mt-[5em] mb-[2em] flex justify-center flex-col sm:flex-col">
        <h3>Subscribe to our newsletter for all <br /> the latest updates</h3>
        <h5>The latest news, articles, and resources, sent to your inbox weekly.</h5>
        <div className='flex justify-center text-center items-center'>
          <form action="" className='flex justify-center flex-col sm:flex-row items-center'>
            <input type="email" name="" id="" placeholder='Email Address' />
            <button type="submit"  className='flex'>Subscribe <Icon path={mdiArrowRight} style={{marginLeft: '0.5em'}} size={1}/></button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscribe