import React from 'react'
import styles from './MainLayout.css'
import Header from './Header'

function MainLayout({ children, location }) {
  return (
    <div className={styles.normal}>
      <Header location={location} />
      <div className={styles.content}>
        {children}
      </div>
    </div>
    )
}

export default MainLayout
