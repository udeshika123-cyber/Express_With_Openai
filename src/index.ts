
import express, { Request, Response } from 'express';
import { Routes } from './routes';
import { OpenAiService } from './service';

const app = express();
const PORT = process.env.PORT || 3000;
const openAi=OpenAiService.getInstance();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send ('Hellow world');
})

app.use('/api', new Routes().router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
