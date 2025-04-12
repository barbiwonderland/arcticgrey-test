import { AiOutlineArrowRight } from 'react-icons/ai'

function ArrowRight() {
  return (
<div
            className="left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center hover:bg-black hover:text-white"
            // onClick={handleScrollLeft}
          >
            <AiOutlineArrowRight />
          </div>
  )
}

export default ArrowRight