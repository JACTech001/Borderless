import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// helper hook for accessing auth context
export const useAuth = () => useContext(AuthContext);
