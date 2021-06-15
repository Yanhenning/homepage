import Link from 'next/link'
import React from 'react'

import styles from './styles.module.scss'

const Header = () => {

    const getMenuItem = (name, path) => {
        return (
            <Link href={`/${path}`} as={`${process.env.BACKEND_URL}/${path}`}>
                <a className={styles.menuItem}>{name.toUpperCase()}</a>
            </Link>
        )
    }

    return (
        <header className={styles.headerContainer}>
            <div className={styles.sectionItem}>
                {getMenuItem('About me', 'about')}
                {getMenuItem('home', '')}
                {getMenuItem('projects', 'projects')}
            </div>
        </header>
    )
}

export default Header
