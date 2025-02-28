import Seminar from "../models/seminarModel.js"

async function deleteSeminar(req, res) {
  try {
    const { id } = req.params
    const result = await Seminar.deleteOne({ _id: id })

    // Проверяем, был ли удален документ
    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: "Семинар с указанным id не найден" })
    }
    res.status(204).end() // 204 No Content
  } catch (error) {
    console.error("Ошибка при удалении семинара:", error)
    res.status(500).json({ message: "Ошибка сервера при удалении семинара" })
  }
}

export default deleteSeminar
