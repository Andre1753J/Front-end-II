import styles from "./listas.module.css";
import Image from "next/image";

export default function Listas() {
    const nomes = ['Wagner', 'Eduardo', 'Erika', 'aka', 'Ikaruzinkk', 'André'];
    const carros = [
        {
            id: 1,
            modelo: 'Fusca',
            ano: 1975,
            cor: 'Preto',
        },
        {
            id: 2,
            modelo: 'Fusquinha',
            ano: 2000,
            cor: 'Azul',
        },
        {
            id: 3,
            modelo: 'Gol bolinha',
            ano: 1999,
            cor: 'Prata',
        },
        {
            id: 4,
            modelo: 'Lek',
            ano: 2999,
            cor: 'Laranja Escuro sem sombra aka Marrom',
        }
    ]
    return (
        <div>
            <h1>Pagina Listas</h1>
            <h2>lista Comum</h2>
            <ul style={{ marginLeft: '50px' }}>
                {nomes.map((nome, id) => (
                    <li key={id}>{id + 1} - {nome}</li>
                ))}
            </ul>
            <div>
                <h2>lista de Objetos</h2>
                {
                    carros.map((carro) => (
                        <div key={carro.id}>
                            <h3>{carro.id} - {carro.modelo}</h3>
                            <p>{carro.cor}</p>
                            <p>{carro.ano}</p>
                        </div>
                    ))
                }
                {/* <ul style={{ marginLeft: '50px' }}>
                {carros.map((carro, id) => (
                    <li key={id}>{carro}</li>
                ))}
                </ul> tentativa falha :/*/}
            </div>
        </div>
    )
}