import cors from 'cors';
import express, { Application, Request, Response } from 'express';
// import { StudentRouter } from './modules/student.router';
import globalErrorHandelar from './app/middelware/middelware';
import notFound from './app/middelware/not-found';
import router from './app/routes';

const app: Application = express();

// use parsar
app.use(express.json());
app.use(cors());

// application use
app.use('/api/v1', router);
// app.use('/students', StudentRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('hello mongoose');
});

app.use(globalErrorHandelar);
// not found route
app.use(notFound);

export default app;
