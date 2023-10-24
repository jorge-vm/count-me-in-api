import express, { Request, Response } from 'express';
import { setRoutes } from './routes';

const app = express();

// Middleware
app.use(express.json());

// Routes
setRoutes(app);

// Error handling middleware
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});