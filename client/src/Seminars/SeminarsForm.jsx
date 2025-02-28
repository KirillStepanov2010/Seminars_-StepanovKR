import React, { useState } from "react"
import useSeminarsPost from "../Hooks/useSeminarsPost"

const SeminarsForm = () => {
  const [errors, setErrors] = useState({}) // Состояние для ошибок валидации

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [photo, setPhoto] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")

  const resetForm = () => {
    setTitle("")
    setDescription("")
    setPhoto("")
    setDate("")
    setTime("")
    setErrors({})
  }

  const { mutate, isLoading, isError, error } = useSeminarsPost()

  // Функция для валидации полей
  const validateForm = () => {
    const newErrors = {}

    if (!title.trim()) newErrors.title = "Название обязательно"
    if (!description.trim()) newErrors.description = "Описание обязательно"
    if (!photo.trim()) newErrors.photo = "Ссылка на фото обязательна"
    if (!date.trim()) newErrors.date = "Дата обязательна"
    if (!time.trim()) newErrors.time = "Время обязательно"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 // Возвращает true, если ошибок нет
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!validateForm()) return

    const newSeminar = { title, description, photo, date, time }

    mutate(newSeminar, {
      onSuccess: () => {
        resetForm() // Сбрасываем при успешной мутации данных на сервере
        alert("Семинар успешно добавлен")
      },
      onError: () => {
        alert("Ошибка при добавлении семинара.") // Всплывающее окно с ошибкой
      },
    })
  }

  return (
    <div className="space-y-4">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Название семинара */}
        <div>
          <label
            htmlFor="seminarName"
            className="block text-sm font-medium text-gray-700"
          >
            Название семинара
          </label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            id="seminarName"
            type="text"
            placeholder="Название семинара"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required //валидация
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Описание */}
        <div>
          <label
            htmlFor="seminarDesc"
            className="block text-sm font-medium text-gray-700"
          >
            Описание
          </label>
          <input
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            id="seminarDesc"
            type="text"
            placeholder="Описание"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        {/* Фото */}
        <div>
          <label
            htmlFor="seminarPhoto"
            className="block text-sm font-medium text-gray-700"
          >
            Фото
          </label>
          <input
            value={photo}
            onChange={(event) => setPhoto(event.target.value)}
            id="seminarPhoto"
            type="text"
            placeholder="Приложите ссылку на фото семинара"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {errors.photo && (
            <p className="text-red-500 text-sm mt-1">{errors.photo}</p>
          )}
        </div>

        {/* Дата */}
        <div>
          <label
            htmlFor="seminarDate"
            className="block text-sm font-medium text-gray-700"
          >
            Дата
          </label>
          <input
            value={date}
            onChange={(event) => setDate(event.target.value)}
            id="seminarDate"
            type="text"
            placeholder="Дата проведения"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>

        {/* Время */}
        <div>
          <label
            htmlFor="seminarTime"
            className="block text-sm font-medium text-gray-700"
          >
            Время
          </label>
          <input
            value={time}
            onChange={(event) => setTime(event.target.value)}
            id="seminarTime"
            type="text"
            placeholder="Время проведения"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>

        {/* Кнопка отправки формы */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            disabled={isLoading} // Блокируем кнопку при загрузке
          >
            {isLoading ? "Отправка..." : "Сохранить"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default SeminarsForm
