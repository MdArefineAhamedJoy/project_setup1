import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { router } from './modules/student.router';


const app: Application = express();

// use parsar
app.use(express.json());
app.use(cors());

// application use 

app.use("/api/v1/student" , router)
app.use("/api/v1" , router)
app.use("/students" , router)

app.get('/students', (req: Request, res: Response) => {
  res.send('hello mongoose');
});

export default app;
