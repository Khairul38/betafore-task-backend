import Stripe from "stripe";
import config from "../../../config";
import { ApiError } from "../../../errors/apiError";
import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
const stripe = new Stripe(config.stripe_secret as string);

export const createPaymentIntent = async (
  user: JwtPayload | null,
  price: number
): Promise<{ clientSecret: string | null }> => {
  const amount = price * 100;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    payment_method_types: ["card"],
  });
  if (paymentIntent) {
    return { clientSecret: paymentIntent.client_secret };
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create payment!");
  }
};
