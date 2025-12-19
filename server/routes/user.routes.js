// routes/user.routes.js
import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { me, allUser, makeAdmin, removeAdmin, updateProfile } from "../controllers/user.contoller.js";
import { adminOnly } from "../middleware/admin.middleware.js";

const router = express.Router();

router.get("/me", protect, me);
router.get("/", protect,
 adminOnly,
  allUser)
router.put(
    "/make-admin/:id",
    protect,
    adminOnly,
    makeAdmin
);

router.put(
    "/remove-admin/:id",
    protect,
    adminOnly,
   removeAdmin
  );

  router.put("/update-profile", protect, updateProfile);

  
  

export default router;
