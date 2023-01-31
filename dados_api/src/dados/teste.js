import mqtt from "mqtt"
import * as dotenv from 'dotenv';
import axios from 'axios'


dotenv.config()

const client = mqtt.connect({ host: process.env.HOST, port: process.env.PORT })
const topic_temp = "medicao-rgrillo/temp"
const topic_umid = "medicao-rgrillo/umidade"
const topic_lux = "medicao-rgrillo/lux"

var dados = ""



client.on('connect', (err)=> {
    if (!err){
        console.log(conectado)
    }
})

client.subscribe(topic_temp, () => {
    console.log('Mensagem Recebida')
})
client.on('message', (topic, message) => {
    axios.post('http://localhost:4000/temperatura', {
        dados: message.toString()
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        console.log(error)
    })
    
})


