import React from "react";
import { useState } from "react";
import style from "./Mainpage.module.css";

const MainPage = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setisLogin] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    console.log(userName, password);
    setUsername("");
    setPassword("");
    if (userName === "admin" && password === "admin") {
      setisLogin(true);
    }
  };
  return (
    <>
      <div className="container">
        {!isLogin ? (
          <>
            {" "}
            <div>Login</div>
            <div
              className={`col-md-12 mt-5 d-flex flex-column justify-content-center align-items-center ${style.MainPageContainer}`}
            >
              <label>USERNAME:</label>
              <input type="text" value={userName} onChange={handleChange} />
              <label>PASSWORD:</label>
              <input
                type="password"
                value={password}
                onChange={hanldePassword}
              />
              <button onClick={handleSubmit}>Submit</button>
            </div>
          </>
        ) : (
          <div className={`m-0 col-md-12 `}>
            <label>Details</label>
          </div>
        )}
      </div>
    </>
  );
};

export default MainPage;
