import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/admin.middleware.js";
import { getPricing, updatePricing } from "../controllers/pricing.controller.js";

const router = express.Router();

router.get("/", getPricing);
router.put("/", protect, adminOnly, updatePricing);

export default router;
