import { createContext, useState } from "react";

const initialState =false || localStorage.getItem('isValid') === 'true';
const UserContext = createContext(); const UserProvider = ({children})=>{
const [isValid, setIsValid] = useState(initialState);
console.log(`UserProvider isValid: ${isValid}`);
return (
    <UserContext.Provider value={{ isValid, setIsValid }}>
      {children}
    </UserContext.Provider>
  );
}
export { UserContext, UserProvider };