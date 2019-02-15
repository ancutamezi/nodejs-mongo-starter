const app = require('express')();
const bodyParser = require('body-parser'); //package used to handle JSON requests in a middleware
const constants =  require('./src/utils/constants');
const port = process.env.port || constants.server.port;
const dbUrl = constants.db.url;
const dbConfig =  require('./src/db/config');
const userRouter = require('./src/routes/users');


return dbConfig.connect(dbUrl)
 .then(() => {
  console.log("Successfully connected to the database");    
  //body-parser middleware
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use('/users', userRouter);
  app.get('/api/hello', (req, res) => res.send('Hello World!'));
  app.listen(port, () => console.log(`The server is started on port ${port}!`)); 
 })
 .catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});





