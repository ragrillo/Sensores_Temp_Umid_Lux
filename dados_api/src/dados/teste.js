// import mqtt from "mqtt"
// import * as dotenv from 'dotenv';
// import TemperaturaController from "../controllers/temperaturasController.js";


// dotenv.config()

// var dados = ''

// const client = mqtt.connect({ host: process.env.HOST, port: process.env.PORT })
// const topic_temp = "medicao-rgrillo/temp"

// client.on('connect', () => {
//     console.log('conectado')
//     client.subscribe(topic_temp, () => {
//         console.log('Mensagem Recebida')

//     }).on('message', (topic, message) => {
//         TemperaturaController.cadastrarTemperatura(message, res)
        
//     })
// })





// setTimeout(() => {
//     console.log(dados)
// }, 2000)
// client.end()


