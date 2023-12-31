import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { DEFAULT_CARD_URL } from "../constants/api";

const DataContext = createContext({});

const getLocalCards = () => {
    let cards = localStorage.getItem("cards");

    if (cards) {
        return JSON.parse(localStorage.getItem("cards"));
    } else {
        const data = [];
        const fetchCards = async () => {
            try {
                const reponse = await axios.get(DEFAULT_CARD_URL);
                const results = reponse.data;
                data = results;
            } catch (error) {
                console.log(error);
            }
        };

        fetchCards();
        return data;
    }
};

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(getLocalCards());

    useEffect(() => {
        localStorage.setItem("cards", JSON.stringify(data));
    }, [data]);

    return (
        <DataContext.Provider value={{
            data,
            setData,
        }}>
            {children}
        </DataContext.Provider>
    )
};

export default DataContext;