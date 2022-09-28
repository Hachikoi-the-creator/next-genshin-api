import mongoose from "mongoose";
const { Schema, model } = mongoose;

const mango = new Schema({
  name: {
    type: String,
    required: true,
    default: "Nameless",
  },
  sizeCm: {
    type: Number,
    required: true,
    default: "101",
  },
});

export default model("Mango", mango);
