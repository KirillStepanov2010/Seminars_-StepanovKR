import express from "express"
import getSeminars from "./controllers/getSeminars.js"
import postSeminar from "./controllers/postSeminar.js"
import putSeminar from "./controllers/putSeminar.js"
import deleteSeminar from "./controllers/deleteSeminar.js"

const router = express.Router()
router.get("/seminars", getSeminars)
router.post("/seminars", postSeminar)
router.put("/seminars/:id", putSeminar)
router.delete("/seminars/:id", deleteSeminar)
export default router
