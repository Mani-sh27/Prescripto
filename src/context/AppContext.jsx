import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import { BrowserRouter } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = () => {
    const  value = {
        doctors
    }
    return (
        <Bro></Bro>
        <AppContext.Provider>
            <App />
        </AppContext.Provider>
    )
}