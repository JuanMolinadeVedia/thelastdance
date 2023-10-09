import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img src="" alt="logo" />
      <div className="userPass">
        <input className="user" type="text" placeholder="User" />
        <input className="password" type="password" placeholder="Password" />
      </div>
      <button>Log In</button>
    </div>
  );
}

export { Login };
