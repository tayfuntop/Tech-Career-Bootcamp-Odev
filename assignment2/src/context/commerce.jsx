import { useState, useContext, createContext } from "react";

const CommerceContext = createContext();

const CommerceProvider = ({children}) => {

    const [shoppingCard, setShoppingCard] = useState([]);
    const [display, setDisplay] = useState(false);

    const values = {
        shoppingCard,
        setShoppingCard,
        display,
        setDisplay,
    } 

    return (
        <CommerceContext.Provider value={values}>
            {children}
        </CommerceContext.Provider>
    );
};

const useCommerce = () => {
    return useContext(CommerceContext);
};

export { useCommerce, CommerceProvider };