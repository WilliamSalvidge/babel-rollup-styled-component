import path from 'path';
import express from 'express';
const app = express();

app.use(express.static('public'))

const PORT = 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

