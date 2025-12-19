import mongoose from "mongoose";

const pricingSchema = new mongoose.Schema(
  {
    pricePerPound: {
      type: Number,
      required: true,
      default: 5,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Pricing", pricingSchema);
