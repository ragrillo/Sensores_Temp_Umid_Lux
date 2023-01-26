import express from 'express';
import TemperaturaController from "../controllers/temperaturasController.js";

const router = express.Router();

router
    .get('/temperatura', TemperaturaController.listarTemperatura)
    .post('/temperatura', TemperaturaController.cadastrarTemperatura)




export default router