import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store"


export default function Profile() {

  const data = useSelector((state: RootState) => state.auth)

  return (
    <div>
      <h3>Bonjour PROFILE</h3>
    </div>
  )
}