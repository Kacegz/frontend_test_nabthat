import styles from './App.module.scss';
import Button from '../Button/Button';
import { data } from '../../data.json';
import { useRef, useState } from 'react';

function App() {
    const [credentials, setCredentials] = useState<string>('');
    const [option, setOption] = useState<string>('0');
    const [text, setText] = useState<string>(data[0].text);
    const [remainingData, setRemainingData] = useState(data.slice(1));
    const dropdownRef = useRef<HTMLDivElement>(null);

    function handleButtonClick(choice: string) {
        let index = 0;
        if (option === 'random') {
            index = Math.floor(Math.random() * remainingData.length);
        } else if (option === '1') {
            index = 1;
        }
        if (choice === 'ZASTĄP') {
            setText(data[index].text);
            setRemainingData(data.filter((element) => element.text !== data[index].text));
        } else {
            if (remainingData.length === 1) {
                return;
            }
            setText(text + ' ' + remainingData[index].text);
            setRemainingData((prevRemainingData) => prevRemainingData.filter((_, i) => i !== index));
        }
    }

    function toggleCredentials() {
        if (credentials === '') {
            setCredentials('Kacper Makiel');
        } else {
            setCredentials('');
        }
    }
    function toggleDropdown() {
        if (dropdownRef.current === null) return;
        if (dropdownRef.current.style.display === 'none') {
            dropdownRef.current.style.display = 'flex';
        } else {
            dropdownRef.current.style.display = 'none';
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
                    <br />
                    <span>{credentials}</span>
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
                                <input
                                    type="radio"
                                    name="options"
                                    id=""
                                    value="0"
                                    defaultChecked
                                    onChange={(e) => setOption(e.target.value)}
                                />
                                Opcja pierwsza
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="options"
                                    id=""
                                    value="1"
                                    onChange={(e) => setOption(e.target.value)}
                                />
                                Opcja druga
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="options"
                                    id=""
                                    value="random"
                                    onChange={(e) => setOption(e.target.value)}
                                />
                                Opcja losowa
                            </label>
                        </div>
                    </div>
                    <div className={styles.block__second}>
                        <h3>BLOK DRUGI</h3>
                        <div className={styles.buttons}>
                            <Button click={() => handleButtonClick('ZASTĄP')}>ZASTĄP</Button>
                            <Button click={() => handleButtonClick('DOKLEJ')}>DOKLEJ</Button>
                        </div>
                    </div>
                    <div className={styles.section__text}>
                        <h3>BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE ...</h3>
                        <p>{text}</p>
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
                <button className={styles.footer__button} onClick={() => toggleDropdown()}>
                    POKAŻ ^
                </button>
                <div ref={dropdownRef} className={styles.dropdown}>
                    <button onClick={() => window.location.reload()}>ZRESETUJ USTAWIENIA</button>
                    <button onClick={() => toggleCredentials()}>POKAŻ DANE OSOBOWE</button>
                </div>
            </div>
        </>
    );
}

export default App;
