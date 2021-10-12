// server.js
import bodyParser from 'body-parser';
import express from 'express';
import router from '././routes';
const cors = require('cors');

const app = express();
const PORT = 8080;
app.use(cors());
app.options('*', cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/api', router);

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

export default app;
