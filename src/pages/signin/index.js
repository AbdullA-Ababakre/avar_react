import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import logo from "../../images/signin/logo.png";
import { Login, Register } from "../../utils/api/user";

export default function SignIn() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [type, setType] = useState({
    typeAction: "signIn",
    typeText: "注册",
  });

  const signInUser = async () => {
    if (email === "" || password === "") {
      setMessage("请填写所有信息");
      return;
    }

    Login({ email, password }).then((content) => {
      if (content.status === 200) {
        setMessage("登陆成功");
        const token = content.data.token;
        localStorage.setItem("token", token);
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      } else {
        setMessage(content.message);
      }
    });
  };

  const signUpUser = async () => {
    if (name === "" || email === "" || password === "") {
      setMessage("请填写所有信息");
      return;
    }

    Register({ name, email, password }).then((content) => {
      if (content.status === 200) {
        setMessage("注册成功");
        const token = content.data.token;
        localStorage.setItem("token", token);
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 1000);
      } else {
        setMessage(content.message);
      }
    });
  };

  const signUser = () => {
    if (type.typeAction === "signIn") {
      signInUser();
    } else {
      signUpUser();
    }
  };

  const changeSignType = () => {
    if (type.typeAction === "signIn") {
      setType({
        typeAction: "signUp",
        typeText: "登陆",
      });
    } else {
      setType({
        typeAction: "signIn",
        typeText: "注册",
      });
    }
  };

  return (
    <>
      <div className="bg">
        <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.logoImg}>
            <img priority="true" src={logo} alt="logo" />
          </div>
          {type.typeAction === "signUp" && (
            <input
              className={`${styles.input} ${styles.nameInput}`}
              type="name"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          )}
          <input
            style={{
              marginTop: type.typeAction === "signIn" ? "36px" : "24px",
            }}
            className={`${styles.input} ${styles.emailInput}`}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            className={`${styles.input} ${styles.passwordInput}`}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <p style={{ color: "red" }}>{message}</p>
          <button
            className={`${styles.btn} ${styles.signInBtn}`}
            onClick={signUser}
          >
            {type.typeAction}
          </button>
          {/* <div className={styles.privacy}>
            <span className={styles.privacyText}>隐私政策</span>
          </div> */}
          <div className={styles.more}>
            <span className={styles.moreWarning}>还没有Avar账户?</span>
            <span className={styles.moreText} onClick={changeSignType}>
              {type.typeText}
            </span>
          </div>
        </div>
      </div> 
     </div>
    </>
  );
}
