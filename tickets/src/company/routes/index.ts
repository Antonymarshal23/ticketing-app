import express, { Request, Response } from "express";
import { Ticket } from "../../models/ticket";
const router = express.Router();

router.get("/api/tickets", async (req: Request, res: Response) => {
  const { offset, limit } = req.query;

  const tickets = await Ticket.find()
    .skip(offset ? parseInt(offset as string) || 0 : 0)
    .limit(limit ? parseInt(limit as string) || 0 : 0)
    .sort({ _id: -1 });

  res.send({ status: 1, data: tickets });
});

export { router as indexTicketRouter };
