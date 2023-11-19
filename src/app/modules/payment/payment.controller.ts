import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import httpStatus from "http-status";
import { sendResponse } from "../../../shared/sendResponse";
import { createPaymentIntent } from "./payment.service";

export const createPayment = catchAsync(async (req: Request, res: Response) => {
  const user = req.user;
  const { price } = req.body;

  const result = await createPaymentIntent(user, price);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Payment intent created successfully",
    data: result,
  });
});
