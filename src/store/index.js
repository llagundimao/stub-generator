import { configureStore } from "@reduxjs/toolkit"
import master from "./reducer/masterReducer"

export default configureStore({
  reducer: {
    master
  }
})