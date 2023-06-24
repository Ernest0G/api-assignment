const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
const accessToken = process.env.API_KEY;

app.get('/getRandomHero', async (req, res) => {
    const randId = Math.floor(Math.random() * 731);
    try {
        const url = `https://superheroapi.com/api/${accessToken}/${randId}`;
        const response = await fetch(url);
        const data = await response.json();

        res.json(data)
    } catch (error) {
        console.log(error)
    }


});

app.get('/getHeroByName/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const url = `https://superheroapi.com/api/${accessToken}/search/${name}`;
        const response = await fetch(url);
        const data = await response.json();

        res.json(data);
    } catch (error) {
        console.log(error)
    }

});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
