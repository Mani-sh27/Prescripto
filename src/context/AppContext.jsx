import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import { BrowserRouter } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = () => {
    const  value = {
        doctors
    }
    return (
        <Bro=ouse></Bro=ouse>
        <AppContext.Provider>
            <App />
        </AppContext.Provider>
    )
}