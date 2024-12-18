'use client';
import { useEffect, useState } from "react";

export default function Efeitos() {
    // const [cont1, setCont1] = useState(0);
    // const [cont2, setCont2] = useState(0);
    const [ufs, setUfs] = useState([]);
    const [estado, setEstado] = useState('');

    const getUfs = async () => {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados ' + response.statusText)
        }
        const data = await response.json();
        setUfs(data)
        console.log(data)
    }

    const getMuni = async () => {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome');
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados ' + response.statusText)
        }
        const municipios = await response.json();
    }

    useEffect(() => {
        getUfs();
    }, []);

    return (
        <div>
            <h1>Efects Yeee</h1>
            <select
                onChange={(ev) => setEstado(ev.target.value)}
            >
                <option value="" key="">Escolha o Estado</option>
                {ufs.map((uf) => (
                    <option value={uf.id} key={uf.id}>{uf.nome}</option>
                ))}
            </select>

            {/* <ul>
                <li>
                    <button onClick={() => setCont1(cont1 + 1)}>Adicionar</button>
                    <p>Cont 1 = {cont1}</p>
                    <button onClick={() => setCont1(cont1 - 1)}>Subtrair</button>
                </li>
                <br/>
                <li>
                    <button onClick={() => setCont2(cont2 - 1)}>Subtrair</button> 
                    <p>Cont 2 = {cont2}</p>
                    <button onClick={() => setCont2(cont2 + 1)}>Adicionar</button>
                </li>
            </ul> */}
        </div>
    )
};