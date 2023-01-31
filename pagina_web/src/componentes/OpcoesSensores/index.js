import styled from "styled-components";

const SensorDados = styled.div`
    border: 1px solid var(--cor-fonte-secundaria);
    border-radius: 1em;
    margin: 2em;
    width: 40%;
    padding: 1em;
`

const ContainerTitulo = styled.h2`
    text-transform: uppercase;
    margin-bottom: 0.5em; 
`



function OpcoesSensores({tipo_dados, unidade, valor_dado, funcao }) {
    return (
        <SensorDados>
            <ContainerTitulo>{tipo_dados}</ContainerTitulo>
            <p>{valor_dado} {unidade}</p>
            <button onClick={funcao}>Atualiza dados</button>
        </SensorDados>
    )
}

export default OpcoesSensores