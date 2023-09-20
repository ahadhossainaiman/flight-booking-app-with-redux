import { ADDBOOKINGDATA, DELETE_SINGLE_BOOKING_DATA, GETBOOKINGDATA } from "./actionType"


export const addBookingData = (booking) =>{
    return {
        type:ADDBOOKINGDATA,
        payload:booking
    }
}

export const getBookingData = () =>{
    return { 
        type:GETBOOKINGDATA
    }
}

export const deleteSingleBookingData = (updateBookingData) =>{
    return {
        type:DELETE_SINGLE_BOOKING_DATA,
        payload: updateBookingData
    }
}