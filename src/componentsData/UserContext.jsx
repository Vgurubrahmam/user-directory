import React, { createContext, useContext, useState, useEffect } from "react";

const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("selectedUser");
        if (storedUser) {
            setSelectedUser(JSON.parse(storedUser));
        }
    }, []);

    const setUserDetails = (user) => {
        setSelectedUser(user);
        localStorage.setItem("selectedUser", JSON.stringify(user));
    };

    return (
        <userContext.Provider value={{ selectedUser, setUserDetails }}>
            {children}
        </userContext.Provider>
    );
};

export const userUser = () => {
    return useContext(userContext);
};

export default userContext;