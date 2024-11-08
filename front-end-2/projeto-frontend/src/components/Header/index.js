// const Header = () => {
//     return (
//         <main>
//             <h1>Yeet2</h1>
//             <p>nitroglicerina</p>
//         </main>
//     )
// }
// export default Header
import Link from "next/link"
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.lit}>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className={styles.lit}>
                        <Link href='/sobre'>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}