import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.set('trust proxy', true);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const ip = {
    ip: req.ip,
    ips: req.ips,
    xForwardedFor: req.headers['x-forwarded-for'],
    xRealIp: req.headers['x-real-ip'],
  };

  console.log(`Request IP: ${JSON.stringify(ip)}`);

  res.json({ ip });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
