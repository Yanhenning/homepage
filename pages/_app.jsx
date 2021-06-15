import Head from 'next/head'

import '../styles/global.scss'
import styles from '../styles/app.module.scss'

export default function MyApp({ Component, pageProps }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Yan's page
                </title>
            </Head>
            <main>
                <Component {...pageProps} />
            </main>
        </div>
    )
}
