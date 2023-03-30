import axios from "axios"
import { AppDispatch } from "../store"
import { editUserFulfilled, editUserRejected } from "../features/userSlice";

const editUser = (firstName: string|null, lastName: string|null) => (dispatch: AppDispatch) => {
    const token = localStorage.getItem("token") ? localStorage.getItem("token") : sessionStorage.getItem("token") ? sessionStorage.getItem("token") : null;
    const formatedToken = token ? token.replace(/['"]+/g, '') : null;
    axios.put("http://localhost:3001/api/v1/user/profile", {firstName, lastName}, {headers: {"Authorization": `Bearer ${formatedToken}`}})
    .then(response => dispatch(editUserFulfilled(response.data)))
    .catch(err => editUserRejected(err))
}

export default editUser;