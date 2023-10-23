import { useContext, useState, useEffect } from "react";
import "./UserProfile.css";
import { User } from "../../Types/Types";
import { Link } from "react-router-dom";
import { IsLoggedContext } from "../../Context/IsLoggedContext";
import {
  LogoutIcon,
  ShoppingCartIcon,
  ReceiptLongIcon,
} from "../../assets/Imports/Imports.tsx";

export function UserProfile() {
  const { loggedUserInfo, isLogged, logOut } = useContext(IsLoggedContext);
  const [user, setUser] = useState<User>();

  const USER_URL = `https://dummyjson.com/users/${loggedUserInfo.id}`;

  async function fetchLoggedUser() {
    const response = await fetch(USER_URL);
    const userInfo = await response.json();
    setUser(userInfo);
  }
  useEffect(() => {
    if (isLogged && loggedUserInfo) {
      fetchLoggedUser();
    }
  }, [isLogged, loggedUserInfo]);

  return (
    <>
      <div className="user">
        <div className="user-addInfo">
          <Link to={"/"}>
            <img
              className="user-home-logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8eIB0ABwAABQAAAACfn56jpKIbHRrDw8MZHBjMzMzAwcAbHhrExcQDCQDS0tIVGBQKDgi4ubjl5eVxcnEQEw/29vbe396ur66YmJdeX13Z2di1trUlJyRRUlFlZmRERkQ5Ozg0NjN4eXhTVFLuQuL+AAADfUlEQVR4nO2dbU/bQBCE/XLFdvxSO06CAwQI9P//xiaASiDjVqrOWt3cPN8jzeh2vbt3ji9JhBBCCCGEEEIIIYQQQgghhBBC/AfjtN9Po7WK5Rg3znWdc3f31koWYlUN6Rtb92CtZRFKV6QfFK60VrMA9afBNK0OO2s93qmzC4Np6iZrQb5p3ReDaf9orcgz3w2eFtFakl/qK4NkDr/l4NvTdLAW5ZPyegXT7ZO1Ko8gg6mrrWX5o86Bwf7ZWpY/StdcG6yGW2td3oAhWnU/rXV5A5SJ8wqurHV5A5QJLoMwRIucx+B1q3ZeQaccDIYyQ2WiIzLIXiawwZzHIH2ZaFGrVjgegzhEM6IQZS8T9DmIW7WM3KBatYAoc7VqYYNDlMkge5mAAy9Tq4YnerVq4UCfg2rVQqeGnQxViCKDRBu/atVCJ9IyQd+qMW38qlULHJyD9FsWTDmI3pOptkwrqMOXsFGZCB3692T4J3r2HNThS+jgEGWqg+xlgv7wRa1a6NDnoA5fQqeGA++BxyCc6NP+6eZHwEzt7sIgCNGzxSxknHOb8e8Gw2d4LwX3AwpRDqrh/Cg59tY6FqQ/JsnaWatYFLdONsxLeFrETfLC+ph5p3hJrCUszYF+DY/JZmstYlG2r/TP0pK8Hm4f33oa3kzs+1vqvrTpio/5D+6xpefZIg+Y02zx+md+atGR9mk+nG4C5qG9/JRTiSwWKc+MH8FmcBwWO7QZRXSsFsE7UHEEKn5NqLXW5ZGyQ6s4MFmMIlD5LaJDNrJcxEWDyWIMgYosNlyBCotGRmURByqTxZlA5cpF/gYO1cWGKhcjeKLO1EUqi+ijcw3V99bhm25NzmQxhkDFFom+gzzTwHFZxKvIlYuwu4nAIlOgwj9bcllU0WCghMc2VBZhA8dlcSZQVTSCoo62gWOyGEHRaNFfaAu3ttblkZmiwWQxhkDFm4xMqzhTNKgsKhcJgA0cWS7CYxsqi7CBa8gClX8V8bENk0V8bENlcaZoyGJQzDRwTLdyx9vAcVmEUz/TX1HwXbJHa1k+wfcBM8UpvtP5zlqVV9C93J21KL/Q360OikbD5vDKYv/LWpF3vuWim6wF+edLLlaH3b9/ERwXRYPr4PSTVTN8FMOMabq4ZNw413XO3d1bK1mOcdrvp9FahRBCCCGEEEIIIYQQQgghhBBCRMtv7PxEggm3iH4AAAAASUVORK5CYII="
            />
          </Link>
          <div className="phone-user-name">
            <h1>
              {user?.firstName} {user?.lastName}
            </h1>
          </div>
          <div className="user-img">
            <img src={user?.image} alt="" />
          </div>
          <div className="user-info">
            <div className="user-email">
              <img
                src="https://img.freepik.com/premium-vector/mail-simple-icon-white-mail-icon-black-circle-vector-illustration-stock-image_797523-1729.jpg"
                alt=""
                width="35px"
                height="35px"
              />
              <p className="additional-info">{user?.email}</p>
            </div>
            <div className="user-phone">
              <img
                src="data:image/png;base64,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"
                alt="Phone Img"
                width="30px"
                height="30px"
              />
              <p className="additional-info">{user?.phone}</p>
            </div>
            <div className="user-address">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                alt=""
                width="25px"
                height="25px"
              />
              <p className="additional-info">
                {user?.address.address}, {user?.address.city}
              </p>
            </div>
            <div className="user-website">
              <img
                src="data:image/png;base64,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"
                alt=""
                width="30px"
                height="30px"
              />
              <p className="additional-info">{user?.domain}</p>
            </div>
            <div className="log-out-container">
              <Link to="/">
                <div
                  id="log-out-button"
                  onClick={() => {
                    logOut();
                  }}
                >
                  <LogoutIcon />
                  Log Out
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="user-rightside">
          <div className="inner-rightside">
            <div className="name-rightside">
              {user?.firstName} {user?.lastName}
            </div>
            <div className="name-buttons">
              <Link to={"/cart"}>
                <button>
                  <ShoppingCartIcon />
                  CART
                </button>
              </Link>
              <Link to={"/wishlist"}>
                <button>
                  <ReceiptLongIcon />
                  WISHLIST
                </button>
              </Link>
            </div>
            <div className="boughtrecently">
              <h2>Bought Recently</h2>
              <div className="boughtrecently-card-wrapper">
                <div className="boughtrecently-card">
                  <div className="boughtrecently-card-rating">
                    <p>Rating producto</p>
                  </div>
                  <img src="https://images.squarespace-cdn.com/content/v1/57e49a19414fb5b5169a9161/1544028066142-TRPGM8PJC6M1TIASZ941/GT3_0015_VIRED_3water_FLT-1244_FINAL.jpg" />
                  <div className="boughtrecently-card-bottom">
                    <h2>Nombre producto</h2>
                    <p>Descripcion producto</p>
                    <p>Precio producto</p>
                  </div>
                </div>
                <div className="boughtrecently-card">
                  <div className="boughtrecently-card-rating">
                    <p>Rating producto</p>
                  </div>
                  <img src="https://images.squarespace-cdn.com/content/v1/57e49a19414fb5b5169a9161/1544028066142-TRPGM8PJC6M1TIASZ941/GT3_0015_VIRED_3water_FLT-1244_FINAL.jpg" />
                  <div className="boughtrecently-card-bottom">
                    <h2>Nombre producto</h2>
                    <p>Descripcion producto</p>
                    <p>Precio producto</p>
                  </div>
                </div>
                <div className="boughtrecently-card">
                  <div className="boughtrecently-card-rating">
                    <p>Rating producto</p>
                  </div>
                  <img src="https://images.squarespace-cdn.com/content/v1/57e49a19414fb5b5169a9161/1544028066142-TRPGM8PJC6M1TIASZ941/GT3_0015_VIRED_3water_FLT-1244_FINAL.jpg" />
                  <div className="boughtrecently-card-bottom">
                    <h2>Nombre producto</h2>
                    <p>Descripcion producto</p>
                    <p>Precio producto</p>
                  </div>
                </div>
                <div className="boughtrecently-card">
                  <div className="boughtrecently-card-rating">
                    <p>Rating producto</p>
                  </div>
                  <img src="https://images.squarespace-cdn.com/content/v1/57e49a19414fb5b5169a9161/1544028066142-TRPGM8PJC6M1TIASZ941/GT3_0015_VIRED_3water_FLT-1244_FINAL.jpg" />
                  <div className="boughtrecently-card-bottom">
                    <h2>Nombre producto</h2>
                    <p>Descripcion producto</p>
                    <p>Precio producto</p>
                  </div>
                </div>
                <div className="boughtrecently-card">
                  <div className="boughtrecently-card-rating">
                    <p>Rating producto</p>
                  </div>
                  <img src="https://images.squarespace-cdn.com/content/v1/57e49a19414fb5b5169a9161/1544028066142-TRPGM8PJC6M1TIASZ941/GT3_0015_VIRED_3water_FLT-1244_FINAL.jpg" />
                  <div className="boughtrecently-card-bottom">
                    <h2>Nombre producto</h2>
                    <p>Descripcion producto</p>
                    <p>Precio producto</p>
                  </div>
                </div>
                <div className="boughtrecently-card">
                  <div className="boughtrecently-card-rating">
                    <p>Rating producto</p>
                  </div>
                  <img src="https://images.squarespace-cdn.com/content/v1/57e49a19414fb5b5169a9161/1544028066142-TRPGM8PJC6M1TIASZ941/GT3_0015_VIRED_3water_FLT-1244_FINAL.jpg" />
                  <div className="boughtrecently-card-bottom">
                    <h2>Nombre producto</h2>
                    <p>Descripcion producto</p>
                    <p>Precio producto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
