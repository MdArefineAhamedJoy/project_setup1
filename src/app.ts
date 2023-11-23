import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

// use parsar
app.use(express.json());

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('hello mongoose');
});

export default app;