import express from 'express';
import cors from 'cors';
import helloController
  from "./controllers/hello-controller.js";
import tuitsController from "./controllers/tuits-controller.js"
import userController   from "./controllers/user-controller.js";
import mongoose from "mongoose"

const app = express();
//app.get('/hello', (req, res) => {res.send('Life is Good!')})
app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb+srv://dhorgan:Ho.66421@cluster0.robom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//console.log("logging process.env.DB_CONNECTION_STRING!")
//console.log(process.env.DB_CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);
