const app = require('express')();
const bodyParser = require('body-parser');
const port = process.env.port || 5000;

//body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/hello', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`The server is started on port ${port}!`));




