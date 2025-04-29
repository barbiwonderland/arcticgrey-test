import {AiOutlineArrowRight} from 'react-icons/ai';
import { ButtonProps } from '~/types/common-types';



function ArrowRight({action}: ButtonProps) {
  return (
    <div
      className="left-arrow h-10 w-10 border-2 border-gray-300 rounded-lg text-center flex justify-center items-center hover:bg-black hover:text-white active:bg-black active:text-white "
      onClick={action}
    >
      <AiOutlineArrowRight />
    </div>
  );
}

export default ArrowRight;
