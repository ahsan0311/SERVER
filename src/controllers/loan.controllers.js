import Loan from "../models/loan.models.js";

const applyLoan = async (req, res) => {
  try {
    const { loanType, subcategory, amount, duration } = req.body;

    if (!loanType) return res.status.json({message : "Invalid loanType type"})
    if (!subcategory) return res.status.json({message : "Invalid subcategory type"})
    if (!amount ) return res.status.json({message : "Invalid amount type"})
    if (!duration) return res.status.json({message : "Invalid duration type"})


    const newLoan = await Loan.create({  loanType, subcategory, amount, duration });
    res.status(200).json({ message: "Loan application submitted successfully", loan: newLoan });
  } catch (error) {
    res.status(500).json({ message: "Error applying for loan", error: error.message });
  }
};



export {applyLoan}