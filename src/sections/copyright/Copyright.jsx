import Link from 'next/link'
import React from 'react'
import styles from './copyright.module.css'

const Copyright = (props) => {

  return (
    <div className={styles.copyright}>
      &copy; 2024 {props.title}. All rights reserved.
      <span> | </span>
      <Link href="/privacy-policy"> Privacy Notice</Link>
    </div>
  )
}

export default Copyright