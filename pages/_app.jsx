import Head from 'next/head'
import Footer from '../components/Footer/Footer'

import Header from '../components/Header/Header'

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
                <Header/>
                <Component {...pageProps} />
                <Footer/>
            </main>
        </div>
    )
}
