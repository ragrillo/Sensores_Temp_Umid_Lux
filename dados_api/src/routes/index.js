import express from "express";
import temperatura from "./temperaturaRoutes.js";
import cors from 'cors'
const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo:"Sensor IOT - ESP8266"})
    })

    app.use(
        cors(),
        express.json(),
        temperatura
    )
}

export default routes;