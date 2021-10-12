import React, { useReducer, useEffect } from "react";
import api from "../api/api";

const Context = React.createContext({categories:[]});

const metaDataReducer = (metaData, action) => {
    switch (action.type) {
        case "set_categories":
            return { ...metaData, categories: action.payload };
        default:
            return metaData;
    }
};

const Provider = (props) => {
    const [metaData, dispatch] = useReducer(metaDataReducer, {categories:[]});

    // Make api calls, only on the first DOM render
    useEffect(() => {
        getCategories();
    }, []);

    // Api calls functions
    const getCategories = async () => {
        try {
            const response = await api.get("/categories");
            dispatch({
                type: "set_categories",
                payload: response.data,
            });
        } catch (err) {
            alert(err);
        }
    };

    return (
        <Context.Provider value={metaData}>
            {props.children}
        </Context.Provider>
    );
};

export { Context, Provider };
