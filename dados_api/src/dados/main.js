import mqtt from "mqtt"
import * as dotenv from 'dotenv';

dotenv.config()

const client = mqtt.connect({ host: process.env.HOST, port: process.env.PORT })
const topic_temp = "medicao-rgrillo/temp"
const topic_umid = "medicao-rgrillo/umidade"
const topic_lux = "medicao-rgrillo/lux"


client.on('connect', () => {
    client.subscribe(topic_temp);
    // client.subscribe(topic_umid);
    // client.subscribe(topic_lux);
})

client.on('message', (topic, message) => {
    console.log(`message: ${message}, topic: ${topic_temp}`)

    client.end()
})