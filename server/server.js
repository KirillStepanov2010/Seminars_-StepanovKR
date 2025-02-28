import express from "express"
import router from "./router.js"
import mongoose from "mongoose"
import cors from "cors"
import { config } from "dotenv"

const port = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(cors())
app.use("/", router)
config()

async function startApp() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    app.listen(port, () => console.log("Server started at port " + port))
  } catch (e) {
    console.log(e)
  }
}
startApp()
