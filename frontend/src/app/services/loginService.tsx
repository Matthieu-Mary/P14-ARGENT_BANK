import axios from "axios";
import { loginFulfilled, loginRejected } from "../features/authSlice";
import { AppDispatch } from "../store";


const login = (email: string, password: string, remember: boolean) => (dispatch: AppDispatch) => {
  axios.post("http://localhost:3001/api/v1/user/login", {email, password})
  .then(response => {
    if (remember) {
        localStorage.setItem("token", JSON.stringify(response.data.body.token))
    } else {
        sessionStorage.setItem("token", JSON.stringify(response.data.body.token))
    }
    dispatch(loginFulfilled(response.data))
  })
  .catch(err => dispatch(loginRejected(err.response.data.message)));
};

export default login;
