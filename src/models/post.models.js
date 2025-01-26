import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    // Guarantor 1 Information
    guarantor1_name: {
      type: String,
      required: [true, "Guarantor 1 Name is required"],
    },
    guarantor1_email: {
      type: String,
      required: [true, "Guarantor 1 Email is required"],
    },
    guarantor1_location: {
      type: String,
      required: [true, "Guarantor 1 Location is required"],
    },
    guarantor1_cnic: {
      type: String,
      required: [true, "Guarantor 1 CNIC is required"],
      minlength: [13, "CNIC must be exactly 13 digits"],
      maxlength: [13, "CNIC must be exactly 13 digits"],
    },

    // Guarantor 2 Information
    guarantor2_name: {
      type: String,
      required: [true, "Guarantor 2 Name is required"],
    },
    guarantor2_email: {
      type: String,
      required: [true, "Guarantor 2 Email is required"],
    },
    guarantor2_location: {
      type: String,
      required: [true, "Guarantor 2 Location is required"],
    },
    guarantor2_cnic: {
      type: String,
      required: [true, "Guarantor 2 CNIC is required"],
      minlength: [13, "CNIC must be exactly 13 digits"],
      maxlength: [13, "CNIC must be exactly 13 digits"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt timestamps
  }
);

export default mongoose.model("LoanApproval", UserSchema);
