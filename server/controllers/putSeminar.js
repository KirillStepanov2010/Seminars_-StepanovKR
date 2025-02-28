import Seminar from "../models/seminarModel.js"

async function putSeminar(req, res) {
  try {
    const { id } = req.params
    const { title, description, date, time, photo } = req.body

    const updatedSeminar = await Seminar.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title: title,
          description: description,
          date: date,
          time: time,
          photo: photo,
        },
      },
      { new: true } // Возвращает обновленный документ
    )

    // Проверяем, был ли обновлен семинар
    if (!updatedSeminar) {
      return res
        .status(404)
        .json({ message: "Семинар с указанным id не найден" })
    }

    res.status(200).json(updatedSeminar)
  } catch (error) {
    console.error("Ошибка при обновлении семинара:", error)
    res.status(500).json({
      message: "Ошибка при обновлении семинара",
      error: error.message,
    })
  }
}

export default putSeminar
