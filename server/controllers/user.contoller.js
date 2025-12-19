import User from "../models/User.js";

export const me = async (req, res) => {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
}

export const allUser = async (req, res) => {
    const users = await User.find().select("-password");
    res.json(users);
}

export const makeAdmin =  async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = "admin";
    await user.save();

    res.json({ message: "User promoted to admin" });
}

export const removeAdmin = async (req, res) => {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user._id.toString() === req.user.id) {
      return res
        .status(400)
        .json({ message: "You cannot remove your own admin role" });
    }

    user.role = "user";
    await user.save();

    res.json({ message: "Admin privilege removed" });
  }


  export const updateProfile = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const { fullName, email, address } = req.body;
  
      if (!fullName || !email) {
        return res.status(400).json({
          message: "Name and email are required",
        });
      }
  
      const emailExists = await User.findOne({
        email,
        _id: { $ne: userId },
      });
  
      if (emailExists) {
        return res.status(400).json({
          message: "Email already in use",
        });
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          fullName,
          email,
          usaAddress: address,
        },
        {
          new: true,
          runValidators: true,
        }
      ).select("-password");
  
      if (!updatedUser) {
        return res.status(404).json({
          message: "User not found",
        });
      }
  
      res.json(updatedUser);
    } catch (error) {
      console.error("Update profile error:", error);
      res.status(500).json({
        message: "Server error updating profile",
      });
    }
  };