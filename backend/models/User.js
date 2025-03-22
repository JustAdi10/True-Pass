const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  walletAddress: String, // MetaMask Wallet Address
  role: { type: String, enum: ["buyer", "host"], default: "buyer" },
});

module.exports = mongoose.model("User", UserSchema);
