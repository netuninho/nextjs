'use client';
import React from "react";

export default function IMC() {
    const [peso, setPeso] = React.useState('');
    const [altura, setAltura] = React.useState('');
    const [imc, setImc] = React.useState('');

    function calcularIMC() {
        const alturaMetro = Number(altura) /100;
        const total = (Number(peso) / (alturaMetro * alturaMetro)).toFixed(2);
        setImc(total);
    }

    return(
        <div>
            <div>
                <label htmlFor="peso">Peso</label>
                <input type="number" name="peso" id="peso" placeholder="54" value={peso} onChange={(e) => setPeso(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="altura">Altura</label>
                <input type="number" name="altura" id="altura" placeholder="148" value={altura} onChange={(e) => setAltura(e.target.value)}/>
            </div>
            <button onClick={calcularIMC}>Calcular</button>

            <h4>Seu IMC é: {imc}</h4> 
        </div>
    )
}