import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"
import {Login} from "../pages/Login"
import {TodosScreen} from "../pages/TodosScreen"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={ 
          <PublicRoutes>
            <Login/>
          </PublicRoutes>
        } />

        <Route path='/*' element={
          <PrivateRoutes>
            <TodosScreen/>
          </PrivateRoutes>
        } />

      </Routes>
    </BrowserRouter>
  )
}
