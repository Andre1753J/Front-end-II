'use client'
import { useState } from "react"

export default function State() {
    const [msg, setMsg] = useState('');
    const [mostrarDiv, setMostrarDiv] = useState(true);

    // const alterarMsg = () => {
    //     setMsg('nye')
    //     console.log('msg: ' + msg)
    // }

    const manipularInpit = (evento) => {
        console.log(evento.target.value);
        setMsg(evento.target.value);
    }

    return (
        <div>
            {/* <p>{msg}</p>
            <button onClick={alterarMsg}>Alterar</button> */}
            <p>Sua mensagem: {msg}</p>
            <input type="text" onChange={manipularInpit} />

            <button onClick={()=>setMostrarDiv(!mostrarDiv)}>{mostrarDiv? 'Esconder':'Mostrar'}</button>
            {/* faz com que o botam troque o valor escrito*/}
            {mostrarDiv && (
                // mostarDiv && faz com que esse paragrafo apareça ou desapareça
                <div>
                <p>pagrafo dinamico</p>
                </div>
            )
            }
        </div>
    )
}