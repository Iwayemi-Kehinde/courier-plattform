import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { generateCustomerId } from "../utils/generateCustomerId.js";
import { generateUSAAddress } from "../utils/generateUSAAddress.js";

/* SIGN UP */
export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const customerId = generateCustomerId();
    const usaAddress = generateUSAAddress(customerId);

    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      customerId,
      usaAddress,
    });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7*24*60*60*1000 //7 days
    })
    .status(201)
    .json({
      message: "Account created successfully",
      user: {
        fullName: user.fullName,
        email: user.email,
        customerId: user.customerId,
        usaAddress: user.usaAddress,
      },
    });
  
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

/* LOGIN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 7*24*60*60*1000 //7 days
    })
    .status(201)
    .json({
      message: "Logged in successfully",
      user: {
        fullName: user.fullName,
        email: user.email,
        customerId: user.customerId,
        usaAddress: user.usaAddress,
      },
    });
  
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
