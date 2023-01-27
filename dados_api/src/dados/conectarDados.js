import mqtt from "mqtt"
import * as dotenv from 'dotenv';

dotenv.config()

const client = mqtt.connect({ host: process.env.HOST, port: process.env.PORT })
const topic_temp = "medicao-rgrillo/temp"
const topic_umid = "medicao-rgrillo/umidade"
const topic_lux = "medicao-rgrillo/lux"

var dados = ''


function conectarDados() {
    client.on('connect', () => {
        console.log('conectado')
        client.subscribe(topic_temp, () => {
            console.log('Mensagem Recebida')
            client.on('message', (topic, message) => {
                dados = message.toString()  
              
                
            })
        })
    })
    
}

function pegarDados(){
    setTimeout(() => {
       return dados
    }, 1000);
}

conectarDados()

pegarDados()

export default pegarDados()

