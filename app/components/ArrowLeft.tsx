import { AiOutlineArrowLeft } from 'react-icons/ai'

function ArrowLeft() {
  return (
    <div
    className=" left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center hover:bg-black hover:text-white"
    // onClick={handleScrollLeft}
  >
    <AiOutlineArrowLeft />
  </div>
  )
}

export default ArrowLeft