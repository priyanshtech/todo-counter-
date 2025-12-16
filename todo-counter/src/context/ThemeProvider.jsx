import { useState, useEffect } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();
//we have to create the context by using createContext method and then export the the context to other components so that they can use the context values . 
//also we have to wrap the components which need to use the context values with the provider component of this context.
//then we have to provide the values to the provider component so that the wrapped components can access those values.


export default function ThemeProvider({ children }) {
  
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const[num , setNum]= useState(0)
  const handleNum=()=>setNum(prev=>prev+1)
  //we have given the props that we have to pass in diffrent components we can give any number of props but here we have given only one prop children which is used to wrap the components which need to use the context values.
  

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme ,num ,setNum,handleNum}}>
      {children}
    </ThemeContext.Provider>
    //this is the provider component of ThemeContext in which we have wrapped the children components so that they can acess the context values , and we have provided the values(theme and setTheme) to the provider component so that the wrapped components can access those values.
  );
}
