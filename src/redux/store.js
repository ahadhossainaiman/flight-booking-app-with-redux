import { applyMiddleware, createStore } from "redux";
import bookingDataReducer from "./BookingData/bookingDataReducer";
import logger from "redux-logger";

const store = createStore(bookingDataReducer,applyMiddleware(logger))

export default store;