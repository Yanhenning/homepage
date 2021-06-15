import React from 'react'

import styles from  './styles.module.scss'

const Page = (props) => {
    return (
        <div className={styles.container}>
            { props.children }
        </div>
    )
}

export default Page
