import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const postSeminars = async (newSeminar) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/seminars",
      newSeminar
    )

    return response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Ошибка при отправке данных"
    )
  }
}

const useSeminarsPost = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["seminars"],
    mutationFn: postSeminars,
    onSuccess: (newSeminar) => {
      // Обновляем кэш
      queryClient.setQueryData(["seminars"], (oldSeminars) => [
        ...oldSeminars,
        newSeminar,
      ])
    },
  })
}
export default useSeminarsPost
