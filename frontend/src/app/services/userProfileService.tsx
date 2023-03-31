import axios from "axios";
import { AppDispatch } from "../store";
import { userFulfilled, userRejected } from "../features/userSlice";

const profile = () => (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null;
    const formatedToken = token ? token.replace(/['"]+/g, '') : null;
    axios.post("http://localhost:3001/api/v1/user/profile", {formatedToken}, {headers: {"Authorization": `Bearer ${formatedToken}`}})
    .then(response => {
        localStorage.setItem("firstName", JSON.stringify(response.data.body.firstName))
        dispatch(userFulfilled(response.data))
    })
    .catch(err => dispatch(userRejected(err)))
}

export default profile;