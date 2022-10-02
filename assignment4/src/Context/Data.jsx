import { useContext, createContext } from "react";

const InfoContext = createContext();

const InfoProvider = ({ children }) => {

    const values = {
        name: "hello world!"
    }

    return (
        <InfoContext.Provider value={values}>
            {children}
        </InfoContext.Provider>
    );
};

const useInfo = () => {
    return useContext(InfoContext);
};

export { useInfo, InfoProvider };