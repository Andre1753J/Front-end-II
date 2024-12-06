import Card from '@/components/Card';

export default function Props() {
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
    ];

    return (
        <div>
            <h1>Props aka</h1>
            {
                carros.map((carro) => (
                <Card key={carro.id} 
                    id={carro.id} 
                    modelo={carro.modelo} 
                    ano={carro.ano} 
                    cor={carro.cor} 
                />
            ))}
        </div>
    )
}