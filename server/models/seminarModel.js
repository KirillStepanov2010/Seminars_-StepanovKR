import mongoose from "mongoose"

const Seminar = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  time: String,
  photo: String,
})

export default mongoose.model("Seminar", Seminar)
