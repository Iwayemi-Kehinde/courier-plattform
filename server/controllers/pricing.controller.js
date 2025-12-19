import Pricing from "../models/Pricing.js";

/* GET PRICE */
export const getPricing = async (req, res) => {
  let pricing = await Pricing.findOne();

  if (!pricing) {
    pricing = await Pricing.create({ pricePerPound: 5 });
  }

  res.json(pricing);
};

/* UPDATE PRICE (ADMIN) */
export const updatePricing = async (req, res) => {
  const { pricePerPound } = req.body;

  let pricing = await Pricing.findOne();
  if (!pricing) {
    pricing = new Pricing();
  }

  pricing.pricePerPound = pricePerPound;
  await pricing.save();

  res.json({ message: "Price updated successfully", pricing });
};
