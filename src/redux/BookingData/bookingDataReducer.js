import { ADDBOOKINGDATA, DELETE_SINGLE_BOOKING_DATA, GETBOOKINGDATA } from "./actionType"


const initialState = {
    bookingData:[]
}

const bookingDataReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADDBOOKINGDATA :return {
            ...state,
            bookingData:[...state.bookingData, {
                ...action.payload, id: state.bookingData.length + 1
            }]
        }
        case GETBOOKINGDATA :return {
            bookingData:[...state.bookingData]
        }
        case DELETE_SINGLE_BOOKING_DATA:return {
           bookingData:[...action.payload] 
        }
        default: return state
    }
}

export default bookingDataReducer;