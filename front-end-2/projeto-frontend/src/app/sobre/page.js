import styles from "./Sobre.module.css";
import Image from "next/image";

export default function Sobre() {
    return (
        <div>
            <h1>Pagina sobres</h1>
            <Image className={styles.img} src='/images/senku_soando.jpg' alt="Senku soando" width={400} height={200} />
            <p className="pala">Ainda não tem nada não sei o que escrever</p>
        </div>
    )
}