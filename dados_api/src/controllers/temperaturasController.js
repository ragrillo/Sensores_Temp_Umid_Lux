import temperaturas from "../models/Temperatura.js";

class TemperaturaController {

    static listarTemperatura = (req, res) => {
        temperaturas.find((err, temperatura) =>{
            res.status(200).json(temperatura)
        }
        )
    }

    static cadastrarTemperatura = (req, res) => {
        let temperatura = new temperaturas(req.body);

        temperatura.save((err) => {
            if (err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar temperatura`})
            } else {
                res.status(200).send(temperatura.json)
            }
        })
    }

}

export default TemperaturaController