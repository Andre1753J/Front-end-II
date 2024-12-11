'use client'
import { useState } from "react";

export default function Filter() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pares = nums.filter((num) => (num % 2 == 0));
    const nomes = ['Pablo', 'Kawazaki', 'Eduardo', 'Ikarus', 'Erika'];
    const [busca, setBusca] = useState('');
    const nBusca = nomes.filter((nome) => (nome.toLowerCase().includes(busca.toLowerCase())));

    console.log(pares)
    return (
        <div>
            <h1>Filtro</h1>
            <input 
                value={busca}
                type="text"
                onChange={(ev) => setBusca(ev.target.value)}
            />
            <ul>
            {nBusca.map((nome, i) => (
                        <li key={i}>- {nome}</li>
                ))}
            </ul>
        </div>
    )
}