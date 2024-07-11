import styles from './App.module.scss';
import Button from '../Button/Button';

function App() {
    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logoBg}>
                    <a href="/">
                        <img
                            src="https://www.svgrepo.com/show/512355/html-124.svg"
                            alt="Logo"
                            className={styles.logo}
                            srcSet=""
                        />
                    </a>
                </div>
                <p>
                    Zadanie <b>rekrutacyjne</b>
                </p>
            </div>
            <div className={styles.main}>
                <div className={styles.header}>
                    <h1>Nagłówek H1</h1>
                </div>
                <div className={styles.blocks}>
                    <div className={styles.firstBlock}>
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
                    <div className={styles.secondBlock}>
                        <h3>BLOK DRUGI</h3>
                        <div className={styles.buttons}>
                            <Button>ZASTĄP</Button>
                            <Button>DOKLEJ</Button>
                        </div>
                    </div>
                    <div className={styles.textSection}>
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
                <div className={styles.footerBox}>CSS IS AWESOME</div>
                <button className={styles.footerButton}>POKAŻ ^</button>
            </div>
        </>
    );
}

export default App;
