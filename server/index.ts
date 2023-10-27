
import express, { Request, Response , Application } from 'express';
import cors from 'cors';

import './models/interfaces/pizza'
import { pizzas } from './models/data/pizza';

const app: Application = express();
const port = 8000;

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.json(pizzas);
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
