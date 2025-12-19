import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.cookies.token;
   console.log("Token: " + token)
  if (!token) {
    return res.status(401).json({ message: "Not authorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, role }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};
