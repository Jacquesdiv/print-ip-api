import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const clientIp = req.ip ?? req.socket.remoteAddress ?? "unknown";
  console.log(`Request IP: ${clientIp}`);

  res.json({
    ip: clientIp,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
