import { createContext } from "react";

const ThemeContext = createContext(["light", ()=>{}]);  // (defaultly passing array) -> passing (or) it can expect a callBack also

export default ThemeContext;