import Seminar from "../models/seminarModel.js"

async function postSeminar(req, res) {
  try {
    const newSeminar = req.body
    const seminar = await Seminar.create(newSeminar)

    res.status(201).json(seminar)
  } catch (error) {
    console.error("Ошибка при создании семинара:", error)
    res.status(500).json({
      message: "Ошибка при создании семинара",
      error: error.message,
    })
  }
}

export default postSeminar
