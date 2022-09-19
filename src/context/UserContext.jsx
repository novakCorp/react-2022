import { useEffect, useState, createContext } from "react";

// creates a context for the user
const UserContext = createContext();

// This is the component that will pass the global state to all its children
const UserContextProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({});
  useEffect(() => {
    setUsuario({
      name: "Miguel Angel Gonzales",
      registered: "19/09/2022",
    });
  }, []);

  return (
    // This is the global context that you are returning, to make the data globally,
    // assignt the value to the property value.
    <UserContext.Provider value={usuario}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
