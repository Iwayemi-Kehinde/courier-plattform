import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", protect, (req, res) => {
    res.cookie("token", "", {
      httpOnly: true,
    });
  
    res.json({ message: "Logged out successfully" });
  });

export default router;
