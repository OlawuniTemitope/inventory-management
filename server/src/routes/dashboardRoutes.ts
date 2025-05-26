import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController.ts";

const router = Router();

router.get("/", getDashboardMetrics);

export default router
