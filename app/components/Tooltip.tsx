import { SlArrowUp } from "react-icons/sl"; 


function Tooltip() {
  return (
<div className="flex flex-col justify-center absolute top-5 right-[-30px] content-center h-[150px] w-[130px] ">
    <SlArrowUp  size={25} color="grey" className="w-full  group-hover:flex hidden  " />
  <div className="   h-[150px] w-[130px] px-3  text-sm text-black bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
    Tooltip content
  </div>
</div>
  )
}

export default Tooltip;