import Seminar from "./Seminar.jsx"
import Modal from "../components/Modal.jsx"
import SeminarForm from "./SeminarsForm.jsx"
import { useState } from "react"
import useSeminarsGet from "../Hooks/useSeminarsGet"

const SeminarsList = () => {
  const { data, isError, error, isLoading } = useSeminarsGet()

  const [isModalActive, setIsModalActive] = useState(false)

  //Показываем спинер во время получения данных с сервера
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        <p className="ml-4">Загрузка данных...</p>
      </div>
    )
  //Обработка ошибки получшения данных
  if (isError)
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        Ошибка: {error.message}
      </div>
    )

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Список семинаров</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/*Cписок семинаров */}
        {data.map((seminar) => (
          <Seminar key={seminar._id} seminar={seminar} />
        ))}

        {/* Кнопка добавления нового семинара */}
        <li
          key="newSmnrBtn"
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center"
        >
          <button
            className="text-green-600 font-bold text-6xl p-6 hover:scale-110 transition-transform duration-300"
            onClick={() => setIsModalActive(true)}
            title="Добавить новый семинар"
          >
            +
          </button>
        </li>
      </ul>

      {/* Модальное окно для добавления семинара */}
      <Modal isActive={isModalActive} setIsActive={setIsModalActive}>
        <SeminarForm />
      </Modal>
    </div>
  )
}

export default SeminarsList
