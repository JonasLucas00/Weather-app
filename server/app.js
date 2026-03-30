import express from 'express';
const app = express();
import weatherRoutes from './src/routes/weatherRoutes.js'
import cors from 'cors'

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS config
app.use(cors({
    origin: process.env.ALLOWED_ORIGIN  // você coloca no .env
}))


app.use('/weather', weatherRoutes );


app.listen(3000, () => {
    console.log(`Server online: http://localhost:${process.env.PORT}`)
})