import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import profile from "../../app/services/userProfileService";
import editUser from "../../app/services/editUserService";

function ProfileHeader() {
  const dispatch: AppDispatch = useDispatch();

  // GET THE RIGHT PROFILE
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);

  const userInfos = useSelector((state: RootState) => state.user);
  const { firstName, lastName } = userInfos;

  // EDIT NAMES
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState(firstName ?? "");
  const [editedLastName, setEditedLastName] = useState(lastName ?? "");

  const handleEdit = () => {
    const newFirstName = editedFirstName !== "" ? editedFirstName : firstName;
    const newLastName = editedLastName !== "" ? editedLastName : lastName;
    dispatch(editUser(newFirstName, newLastName));
    setIsEditing(false);
  };

  // Refresh values inside inputs if user change
  useEffect(() => {
    setEditedFirstName(firstName ?? "");
    setEditedLastName(lastName ?? "");
  }, [firstName, lastName]);

  return (
    <div className="header">
      {isEditing ? (
        <div className="edit-container">
          <h1>Welcome back</h1>
          <div className="container-edit-inputs">
            <input
              type="text"
              value={editedFirstName}
              onChange={(e) => setEditedFirstName(e.target.value)}
            />
            <input
              type="text"
              value={editedLastName}
              onChange={(e) => setEditedLastName(e.target.value)}
            />
          </div>
          <div className="container-edit-btn">
            <button onClick={() => handleEdit()}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <>
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}!
          </h1>
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Name
          </button>
        </>
      )}
    </div>
  );
}

export default ProfileHeader;
