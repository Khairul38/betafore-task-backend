import express from "express";
import { createPayment } from "./payment.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post("/create-payment-intent", auth(ENUM_USER_ROLE.USER), createPayment);

export const PaymentRoutes = router;
