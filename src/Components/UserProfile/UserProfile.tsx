import { useContext } from "react";
import "./UserProfile.css";
import { UserContext } from "../../Context/UserContext";
import { User } from "../../Types/Types";

export function UserProfile() {
  const users: User[] | undefined = useContext(UserContext);
  const user: User | undefined = users ? users[0] : undefined;
  return (
    <>
      <div className="user">
        <div className="user-addInfo">
          <div className="user-img">
            <img src={user?.image} alt="" />
          </div>
          <div className="user-info">
            <div className="user-email">
              <img src="" alt="" width="30px" height="30px" />
              <p className="additional-info">{user?.email}</p>
            </div>
            <div className="user-phone">
              <img src="" alt="" width="30px" height="30px" />
              <p className="additional-info">{user?.phone}</p>
            </div>
            <div className="user-address">
              <img src="" alt="" width="30px" height="30px" />
              <p className="additional-info">
                {user?.address.address}, {user?.address.city}
              </p>
            </div>
            <div className="user-website">
              <img src="" alt="" width="30px" height="30px" />
              <p className="additional-info">{user?.domain}</p>
            </div>
          </div>
        </div>
        <div className="user-rightside">
          <h1>
            {user?.firstName} {user?.lastName}
          </h1>
          <div className="name-buttons"></div>
          <h2>Bought Recently</h2>
          <div className="boughtrecently"></div>
        </div>
      </div>
    </>
  );
}
