import React from "react"
import useSeminarsDelete from "../Hooks/useSeminarsDelete"

function ConfirmationAndDelete({ _id }) {
  const { mutate } = useSeminarsDelete()

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Вы уверены, что хотите удалить этот элемент?"
    )

    if (isConfirmed) {
      mutate(_id, {
        onSuccess: () => {
          alert("Семинар успешно удален!")
        },
        onError: (error) => {
          alert("Ошибка при удалении семинара.")
          console.log(error.message)
        },
      })
    } else {
      window.alert("Удаление отменено.")
    }
  }

  return (
    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg
        className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
        onClick={handleDelete}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="#2977ff"
          d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
        />
      </svg>
    </div>
  )
}

export default ConfirmationAndDelete
