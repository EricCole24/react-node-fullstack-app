import mongoose = require("mongoose");

const uSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    planguage: String,
    appointmentDate: String,
    appointmentDay: String,
    appointmentTime: String,
    document: String,
  },
  { timestamps: { createdAt: "created_at" } }
);
export default mongoose.model("register", uSchema);
