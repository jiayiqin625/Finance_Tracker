import express from "express";
import {
  getBalance,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionById,
} from "../controllers/financeControllers.js";

const router = express.Router();

router.get("/", getBalance);
router.get("/:id", getTransactionById);
router.post("/", createTransaction);
router.put("/:id", updateTransaction);
router.delete("/:id", deleteTransaction);

export default router;
