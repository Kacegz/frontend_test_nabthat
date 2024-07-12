import styles from './Button.module.scss';
export default function Button({ click, children }: { children: React.ReactNode; click: () => void }) {
    return (
        <button className={styles.button} onClick={click}>
            {children}
        </button>
    );
}
