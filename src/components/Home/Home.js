import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import logo from "../../assets/appLogo.jpg";
import userlogo from "../../assets/userImg.jpg";
import SignUp from "../../pages/SignupPage";
import SignIn from "../../pages/LoginPage";

function Home() {
  const [authType, setAuthType] = useState("signin");

  return (
    <>
      <div className={styles.page}>
        <div className={styles.header}>
          <div className={`${styles.headerL} ${styles.display}`}>
            <div className={styles.logo}>
              <img alt="logo" src={logo} className={styles.logoImg} />
            </div>
            <div className={styles.covert}>
              <h1>Student Job Tracker</h1>
            </div>
          </div>
          <div className={`${styles.headerR} ${styles.display}`}>
            <Link to="/dashboard">
              <button className={styles.buttonView}>Preview</button>{" "}
            </Link>

            <Link to="/" className={styles.link}>
              <i>{"User Name"}</i>.....
            </Link>

            <div className={styles.logoU}>
              <img alt="logo" src={userlogo} className={styles.logoImgU} />
            </div>
          </div>
        </div>
        <div className={styles.midPage}>
          <div className={styles.longS}>
            <div className={styles.ragister}>
              <button
                className={authType === "signin" ? styles.active : ""}
                onClick={() => setAuthType("signin")}
              >
                SignIn
              </button>
              <button
                className={authType === "signup" ? styles.active : ""}
                onClick={() => setAuthType("signup")}
              >
                SignUp
              </button>
            </div>
            <div className={styles.authBox}>
              {authType === "signup" ? <SignUp /> : <SignIn />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
