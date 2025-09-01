import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import { BrowserRouter } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const value = {
        doctors
    }
    return (
        <AppContext.Provider>
            <App />
        </AppContext.Provider>


    )
}