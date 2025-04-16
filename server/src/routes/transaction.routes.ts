import express from "express";
import {
  createStripePayementIntent,
  createTransaction,
  listTransactions,
} from "../controllers/transaction.controller";

const router = express.Router();
router.get("/", listTransactions);
router.post("/", createTransaction);
router.post("/stripe/payment-intent", createStripePayementIntent);

export default router;
