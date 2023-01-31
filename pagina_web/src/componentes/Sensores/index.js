import styled from "styled-components"
import OpcoesSensores from "../OpcoesSensores"
import { useState } from 'react'
import axios from 'axios'

const SensoresContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`

const tipos_dados = ['Temperatura', 'Umidade', 'Lux']
const tipos_unidade = ['°', '%', 'Lux']



const Sensores = () => {

    const [dadosRegistrados, setDadosRegistrados] = useState([])

    function atualizaDados(evento){
        
        axios.get('http://localhost:4000/temperatura')
        .then(resposta => {
            setDadosRegistrados(resposta.data[resposta.data.length - 1])
            
        })
        // .then(dados => {
        //     console.log(dados)
        // })   
        .catch(erro => {
            console.log(erro)
        })
        
    }

  
    return (
        <SensoresContainer>
            {tipos_dados.map((dado, index) => (
                <OpcoesSensores
                    tipo_dados={dado}
                    unidade={tipos_unidade[index]}
                    valor_dado={dadosRegistrados.dados}
                    funcao = {atualizaDados}
                />
                
            ))}
        </SensoresContainer>
        
    )

}

export default Sensores

