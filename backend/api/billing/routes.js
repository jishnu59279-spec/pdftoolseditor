import express from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET);
const router = express.Router();

router.post("/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "subscription",
    line_items: [{
      price_data: {
        currency: "usd",
        recurring: { interval: "month" },
        product_data: { name: "Pro OCR Plan" },
        unit_amount: 999
      },
      quantity: 1
    }],
    success_url: "https://yourdomain/success",
    cancel_url: "https://yourdomain/cancel"
  });
  res.json({ url: session.url });
});

export default router;