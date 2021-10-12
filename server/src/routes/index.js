import express from 'express';
const request = require('request');

let router = express.Router();
const url = 'https://api.chucknorris.io/jokes';

router.get('*', (req, res) => {
    request(`${url}${req.url}`, { json: true }, (err, resp, body) => {
      if (err) { return console.log(err); }
      res.json((body.result) || body);
    });
    
})

export default router;