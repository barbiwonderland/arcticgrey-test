import {SlArrowUp} from 'react-icons/sl';

function Tooltip() {
  return (
    <div className="flex flex-col justify-center absolute top-5 right-[-30px] content-center h-auto w-[130px] ">
      <SlArrowUp
        size={25}
        color="#C9C9C9"
        className="w-full  group-hover:flex hidden  "
      />
      <div className="h-auto w-[130px] p-2  text-sm text-black bg-white rounded-md shadow-md hidden group-hover:flex transition-opacity duration-200">
        <table  className="table-auto font-main text-[11px] w-full [&_:is(th,td):where(:nth-child(2))]:text-right [&_:is(th,td):where(:nth-child(1))]:text-left">
          <thead>
            <tr className='text-[#1B1F23] '>
              <th>Quantity</th>
              <th>Discount</th>
            </tr>
          </thead>
          <tbody className='text-[#30363C] font-extralight'>
            <tr>
              <td>0-5</td>
              <td>0% </td>
            </tr>
            <tr>
              <td>5-10</td>
              <td>5% </td>
            </tr>
            <tr>
              <td>10-15</td>
              <td>10% </td>
            </tr>
            <tr>
              <td>15-20</td>
              <td>15% </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tooltip;