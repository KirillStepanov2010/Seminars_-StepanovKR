import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const deleteSeminars = async (_id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/seminars/${_id}`)
    return response.data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Ошибка при удалении семинара"
    )
  }
}

const useSeminarsDelete = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ["seminars"],
    mutationFn: (_id) => deleteSeminars(_id),
    onSuccess: (_, _id) => {
      // Обновляем кэш
      queryClient.setQueryData(["seminars"], (oldSeminars) =>
        oldSeminars.filter((seminar) => seminar._id !== _id)
      )
    },
  })
}

export default useSeminarsDelete
