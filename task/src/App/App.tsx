import styles from './App.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';

function App() {
    const [credentials, setCredentials] = useState<string>('');
    function toggleCredentials() {
        if (credentials === '') {
            setCredentials('Kacper Makiel');
        } else {
            setCredentials('');
        }
    }
    return (
        <>
            <div className={styles.navbar}>
                <a href="/">
                    <div className={styles.logo__bg}>
                        <img
                            src="https://www.svgrepo.com/show/512355/html-124.svg"
                            alt="Logo"
                            className={styles.logo}
                            srcSet=""
                        />
                    </div>
                </a>
                <p>
                    Zadanie <b>rekrutacyjne</b>
                    {credentials}
                </p>
            </div>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Nagłówek H1</h1>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.block__first}>
                        <h3>BLOK PIERWSZY</h3>
                        <div className={styles.inputs}>
                            <label>
                                <input type="radio" name="options" id="" value="first" />
                                Opcja pierwsza
                            </label>
                            <label>
                                <input type="radio" name="options" id="" value="second" />
                                Opcja druga
                            </label>
                            <label>
                                <input type="radio" name="options" id="" value="random" />
                                Opcja losowa
                            </label>
                        </div>
                    </div>
                    <div className={styles.block__second}>
                        <h3>BLOK DRUGI</h3>
                        <div className={styles.buttons}>
                            <Button>ZASTĄP</Button>
                            <Button>DOKLEJ</Button>
                        </div>
                    </div>
                    <div className={styles.section__text}>
                        <h3>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ...</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea minus officiis hic maxime ad
                            quidem nostrum modi debitis iste commodi labore assumenda, veritatis animi magni facere
                            nulla aliquam provident obcaecati? Alias praesentium voluptatem ab sapiente rem odio aliquam
                            nihil! Quia eaque vitae a ducimus ipsa consectetur vel qui soluta perspiciatis, expedita
                            odit! Omnis obcaecati repellendus totam! Facilis veniam quisquam fuga?
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footer__css}>
                    <span>CSS IS AWESOME</span>
                </div>
                <h2 className={styles.footer__logo}>
                    <span>nabthat</span>
                </h2>
                <button className={styles.footer__button}>POKAŻ ^</button>
                <div className={styles.dropdown}>
                    <button onClick={() => window.location.reload()}>ZRESETUJ USTAWIENIA</button>
                    <button onClick={() => toggleCredentials()}>POKAŻ DANE OSOBOWE</button>
                </div>
            </div>
        </>
    );
}

export default App;
