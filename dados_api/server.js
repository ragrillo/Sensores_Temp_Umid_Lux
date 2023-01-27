import app from './src/app.js'
import * as dotenv from 'dotenv';

dotenv.config()
const port = process.env.Port || process.env.PORTA;


app.listen(port, () => {
    console.log(`servidor escutando em http://localhost:${port}`)
})
