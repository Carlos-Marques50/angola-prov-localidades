require ('dotenv').config();

import express from 'express'
import cors from 'cors';

import routes from './routes';

const app = express();
const port = process.env.PORT || 8001;

app.listen(port, () => {
      
   app.use(cors());
   app.use(express.json());
   app.use(routes);

   app.use("/v2", routes)
   console.info(`Engine Start on http://localhost:${port}`)

});