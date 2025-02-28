import Seminar from "../models/seminarModel.js"

async function getSeminars(req, res) {
  try {
    const seminars = await Seminar.find({})
    res.status(200).send(seminars)
  } catch (error) {
    console.error("Ошибка при получении семинаров:", error)
    res.status(500).send({ message: "Произошла ошибка при получении данных" })
  }
}

export default getSeminars
