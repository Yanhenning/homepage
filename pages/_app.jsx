import styles from '../styles/global.scss'


export default function MyApp({ Component, pageProps }) {
    return <div className={styles.wrapper}>
        <main>
            <Header/>
            <Component {...pageProps} />
        </main>
        <Player/>
    </div>
}
