import { Router } from "express";
import { getExpensesByCategory } from "../controllers/expenseController.ts";

const router = Router();

router.get("/", getExpensesByCategory);

export default router;
