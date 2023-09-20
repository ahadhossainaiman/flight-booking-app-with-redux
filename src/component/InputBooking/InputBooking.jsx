import { useDispatch, useSelector} from "react-redux";
import { addBookingData } from "../../redux/BookingData/action";
import { useState } from "react";


const InputBooking = () => {
    const [isDisabled,setIsDisabled] = useState(false)
    const dispatch = useDispatch();
    const getBookingData = useSelector((state)=>state.bookingData)
    
    
    
   

    const handlebookSubmit = (e) =>{
        e.preventDefault();
        console.log(getBookingData.length);
        if(getBookingData.length===3){
          setIsDisabled(true)
         return
        }
    
        const bookingData = {
            destinationFrom:e.target.from.value,
            destinationTo:e.target.to.value,
            joureyDate:e.target.date.value,
            guests:e.target.guests.value,
            className:e.target.ticketClass.value
        }
        dispatch(addBookingData(bookingData))
        
        // console.log(bookingData);
        // console.log(e.target.from.value);
    }

    

    return (
        <div className="mt-[160px] mx-4 md:pt-[200px] relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
          <form className="first-hero lws-inputform" onSubmit={handlebookSubmit}>
            {/* <!-- From --> */}
            <div className="des-from">
              <p>Destination From</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                  <option value="" hidden>Please Select</option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>
  
            {/* <!-- To --> */}
            <div className="des-from">
              <p>Destination To</p>
              <div className="flex flex-row">
                <img src="./img/icons/Frame.svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                  <option value="" hidden>Please Select</option>
                  <option>Dhaka</option>
                  <option>Sylhet</option>
                  <option>Saidpur</option>
                  <option>Cox's Bazar</option>
                </select>
              </div>
            </div>
  
            {/* <!-- Date --> */}
            <div className="des-from">
              <p>Journey Date</p>
              <input type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
            </div>
  
            {/* <!-- Guests --> */}
            <div className="des-from">
              <p>Guests</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (1).svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                  <option value="" hidden>Please Select</option>
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4 Persons</option>
                </select>
              </div>
            </div>
  
            {/* <!-- Class --> */}
            <div className="des-from !border-r-0">
              <p>Class</p>
              <div className="flex flex-row">
                <img src="./img/icons/Vector (3).svg" alt="" />
                <select className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                  <option value="" hidden>Please Select</option>
                  <option>Business</option>
                  <option>Economy</option>
                </select>
              </div>
            </div>
  
            <button disabled={isDisabled} className="addCity" type="submit" id="lws-addCity">
              <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span  className="text-sm">Book</span>
            </button>
          </form>
        </div>
      </div>
    );
};

export default InputBooking;