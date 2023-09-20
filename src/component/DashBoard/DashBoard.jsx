import { useSelector } from "react-redux";
import TableContent from "../TableContent/TableContent";


const DashBoard = () => {
    const getBookingData = useSelector((state)=>state.bookingData)
    console.log(getBookingData);
    
    

    return (
        <div className="table-container">
        <table className="booking-table">
          <thead className="bg-gray-100/50">
            <tr className="text-black text-left">
              <th>Destination From</th>
              <th>Destination To</th>
              <th className="text-center">Journey Date</th>
              <th className="text-center">Guests</th>
              <th className="text-center">Class</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          {
           getBookingData?.map((bookingItem,index)=><TableContent bookingItem={bookingItem} key={index}/>)
          }
          
        </table>
      </div>
    );
};

export default DashBoard;