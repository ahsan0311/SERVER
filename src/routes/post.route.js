import express from "express"
const router = express.Router();
import LoanApproval from "../models/post.models.js"

router.post("/addApprove", async (req, res) => {
  try {
    const newUser = new LoanApproval(req.body);
    await newUser.save();
    res.status(200).json({ message: "User added successfully!", data: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error saving user", error });
  }
});



export default router