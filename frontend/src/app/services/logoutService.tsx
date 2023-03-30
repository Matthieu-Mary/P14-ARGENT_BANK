import { logoutUser } from "../features/authSlice";
import { AppDispatch } from "../store";

export const logout = () => (dispatch: AppDispatch) => {
    sessionStorage.clear();
    localStorage.removeItem("token");
    dispatch(logoutUser())
}  

export default logout;