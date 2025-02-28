import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const getSeminars = async () => {
  try {
    const response = await axios.get("http://localhost:5000/seminars")
    return response.data
  } catch (error) {
    if (error.response) {
      // Ошибка от сервера
      throw new Error(
        error.response.data?.message || "Ошибка при загрузке данных"
      )
    } else if (error.request) {
      // Ошибка сети (сервер недоступен)
      throw new Error("Сервер недоступен. Пожалуйста, попробуйте позже.")
    } else {
      // Другие ошибки
      throw new Error("Произошла ошибка при выполнении запроса.")
    }
  }
}

const useSeminarsGet = () => {
  return useQuery({
    queryKey: ["seminars"],
    queryFn: getSeminars,
  })
}

export default useSeminarsGet
