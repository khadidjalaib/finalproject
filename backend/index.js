import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import serviceRoutes from './routes/services.js'
const app = express();


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/services',serviceRoutes);

const CONNECTION_URL = "mongodb://mabase:khadidja1996@cluster0-shard-00-00.m55mq.mongodb.net:27017,cluster0-shard-00-01.m55mq.mongodb.net:27017,cluster0-shard-00-02.m55mq.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-fik22o-shard-0&authSource=admin&retryWrites=true&w=majority"
const PORT = process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

// mongoose.set('useFindAndModify', false);