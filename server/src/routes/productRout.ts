import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productsController.ts";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);

export default router;
