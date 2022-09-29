import { createContext, useState, useContext } from "react";

const InfoContext = createContext();

const InfoProvider = ({ children }) => {

    const [number, setNumber] = useState("");
    const values = {
        number,
        setNumber
    }

    return (
        <InfoContext.Provider value={values}>
            {children}
        </InfoContext.Provider>
    )
};

const useInfo = () => {
    return useContext(InfoContext);
};

export { useInfo, InfoProvider };