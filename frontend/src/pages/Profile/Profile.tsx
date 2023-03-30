import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../app/store";
import profile from "../../app/services/userProfileService";
import editUser from "../../app/services/editUserService";

export default function Profile() {
  const dispatch: AppDispatch = useDispatch();

  // GET THE RIGHT PROFILE
  useEffect(() => {
    dispatch(profile());
  }, [dispatch]);
  
  const userInfos = useSelector((state: RootState) => state.user);
  const { firstName, lastName } = userInfos;

  

  // EDIT NAMES
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState("");
  const [editedLastName, setEditedLastName] = useState("");

  const handleEdit = () => {
    const newFirstName = editedFirstName !== "" ? editedFirstName : firstName;
    const newLastName = editedLastName !== "" ? editedLastName : lastName;
    dispatch(editUser(newFirstName, newLastName));
    setIsEditing(false);
  };

  return (
    <main className="user-account">
      <div className="header">
        {isEditing ? (
          <div className="edit-container">
            <h1>Welcome back</h1>
            <div className="container-edit-inputs">
              <input type="text" value={firstName ?? ""} onChange={(e) => setEditedFirstName(e.target.value)} />
              <input type="text" value={lastName ?? ""} onChange={(e) => setEditedLastName(e.target.value)} />
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
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}
