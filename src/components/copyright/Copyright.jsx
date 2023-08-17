import Link from 'next/link'
import React from 'react'
import styles from './copyright.module.css'

const Footer = (props) => {

  return (
    <div className={styles.copyright}>
      &copy; 2023 {props.title}. All rights reserved. 
      <span> | </span>
      <Link href="/privacy-policy"> Privacy Notice</Link>
    </div>
  )
}

export default Footer