import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";
export const AppContext = createContext()

const AppContextProvider = (props) => {
    const value = {
        doctors
    }
    return (
        <AppContext.Provider>
            {}
        </AppContext.Provider>
    )
}