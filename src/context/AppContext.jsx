import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";
import { BrowserRouter } from "react-router-dom";

export const AppContext = createContext()

const AppContextProvider = (this.props.first) => {
    const value = {
        doctors
    }
    return (
        <BrowserRouter>
            <AppContext.Provider>
                <App />
            </AppContext.Provider>
        </BrowserRouter>

    )
}