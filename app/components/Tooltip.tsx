import {SlArrowUp} from 'react-icons/sl';

function Tooltip() {
  return (
<div className="flex flex-col justify-center absolute top-5 right-[-30px] content-center h-[150px] w-[130px] ">
    <SlArrowUp  size={25} color="grey" className="w-full  group-hover:flex hidden  " />
  <div className="font-medium flex flex-col   h-[150px] w-[130px] px-3  text-sm text-black bg-white rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
   <div className="flex flex-row text-[10px] font-medium justify-between content-around h-full flex-wrap">
    <div className="flex flex-col">Quantity
      <span>0-5</span>
      <span>5-10</span>
      <span>10-15</span>
      <span>15-20</span>
    </div>
    <div className="flex flex-col">Discount
    <span>0%</span>
      <span>5%</span>
      <span>10%</span>
      <span>15%</span>

    </div>
   </div>
  </div>
</div>
  )
}

export default Tooltip;
