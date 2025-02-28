import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const editSeminar = async ({ id, updatedSeminar }) => {
  try {
    const response = await axios.put(
      `http://localhost:5000/seminars/${id}`,
      updatedSeminar
    )
    return response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Ошибка при редактировании семинара"
    )
  }
}

const useSeminarsEdit = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, updatedSeminar }) => editSeminar({ id, updatedSeminar }),
    onSuccess: (data, { id }) => {
      // Обновляем кэш
      queryClient.setQueryData(["seminars"], (oldSeminars) =>
        oldSeminars.map((seminar) => (seminar._id === id ? data : seminar))
      )
    },
  })
}

export default useSeminarsEdit
