import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["role1", "role2", "role3", "role4"],
      default: "role1",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", schema);