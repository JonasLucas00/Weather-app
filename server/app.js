import express, { urlencoded } from 'express';
const app = express();
import router from './src/routes/testRou.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS config
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    next()
})

app.use('/', router);

app.listen(3000, () => {
    console.log(`Server online: http://localhost:3000`)
})