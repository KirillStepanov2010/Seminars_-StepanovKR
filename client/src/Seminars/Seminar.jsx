import React, { useState } from "react"
import Modal from "../components/Modal"
import ConfirmationAndDelete from "../components/ConfirmationAndDelete"
import EditSeminarForm from "../components/EditSeminarForm"

const Seminar = ({ seminar }) => {
  //Состояния модальных окон
  const [isActiveMore, setIsActiveMore] = useState(false)
  const [isActiveEdit, setIsActiveEdit] = useState(false)

  const handleEditSuccess = () => {
    setIsActiveEdit(false)
    alert("Семинар успешно отредактирован!")
  }

  return (
    <li className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col relative">
      {/* Иконка редактирования (появляется при наведении) */}
      <div className="absolute top-4 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <svg
          onClick={() => setIsActiveEdit(true)}
          className="aw-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="#2977ff"
            d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"
          />
        </svg>
      </div>

      {/* Иконка удаления (появляется при наведении) */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <ConfirmationAndDelete _id={seminar._id} />
      </div>

      {/* Изображение семинара */}
      <img
        src={seminar.photo}
        alt={seminar.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Контент семинара */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mt-4">{seminar.title}</h2>
        <p className="text-gray-600 mt-2 flex-grow">{seminar.description}</p>

        {/* Кнопка Подробнее и дата проведения */}
        <div className="flex justify-between items-end mt-4">
          <button
            onClick={() => setIsActiveMore(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 mr-4"
          >
            Подробнее
          </button>
          <p className="text-gray-600 text-sm">
            Дата проведения: {seminar.date} {seminar.time}
          </p>
        </div>
      </div>

      {/* Модальные окна */}
      <Modal isActive={isActiveMore} setIsActive={setIsActiveMore}>
        <div>Подробности</div>
      </Modal>

      <Modal isActive={isActiveEdit} setIsActive={setIsActiveEdit}>
        <EditSeminarForm seminar={seminar} onSuccess={handleEditSuccess} />
      </Modal>
    </li>
  )
}

export default Seminar
