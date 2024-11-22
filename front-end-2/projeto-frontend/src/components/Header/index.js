import Link from "next/link"
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <header>
            <nav>
                <ul className={styles.list}>
                    <Image className={styles.img} src='/images/iconSenku.jpg' width={100} height={100}/>
                    <li className={styles.lit}>
                        <Link href='/'>Holmes</Link>
                    </li>
                    <li className={styles.lit}>
                        <Link href='/sobre'>Sobre</Link>
                    </li>
                    <li className={styles.lit}>
                        <Link href='/state'>State</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}