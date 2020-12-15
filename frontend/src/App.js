import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
import LoginScreen from "./Pages/LoginScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import Profile from "./Pages/Profile";
import { useEffect, useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem("user")));
  }, [userInfo]);

  const handleLogout = () => {
    localStorage.clear();
    setUserInfo("");
  };

  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#ffe6e6" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 16,
            paddingBottom: 20,
            paddingLeft: 40,
            paddingRight: 40,
            backgroundColor: "#6155a6",
          }}
        >
          <div>
            <Link style={{ paddingRight: 30 }} to="/">
              Login
            </Link>
            <Link to="/register">Register</Link>
          </div>
          <div>
            {userInfo ? (
              <>
                {" "}
                <Link to="/profile" style={{ paddingRight: 30 }}>
                  My Profile
                </Link>
                <span
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  Logout
                </span>
              </>
            ) : (
              <></>
            )}
          </div>
        </header>
        <Route
          path="/"
          component={() => <LoginScreen setUserInfo={setUserInfo} />}
          exact
        />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/profile" component={Profile} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
