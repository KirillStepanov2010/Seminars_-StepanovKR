import React from "react"

const Modal = ({ isActive, setIsActive, children }) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsActive(false)}
      ></div>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity ${
          isActive ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full mx-4">
          {children}
          <div className="flex justify-center mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setIsActive(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
