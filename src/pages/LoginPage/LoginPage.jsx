import useRegister from "../../hooks/useRegister";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();

  const [inputHandler, inputData] = useRegister();

  const submitHandler = async () => {
    if (inputData.email && inputData.password) {
      const { data } = await axios.get("http://localhost:3000/users");
      const user = data.find((u) => u.email === inputData.email);
      if (user) {
        if (inputData.password === user.password) {
          if (inputData.email === "admin@gmail.com") {
            localStorage.setItem(
              "user",
              JSON.stringify({ ...user, role: 777, token: Date.now() })
            );
            alert("success");
            navigate("/adminPage");
          } else {
            localStorage.setItem(
              "user",
              JSON.stringify({ ...user, role: 1000, token: Date.now() })
            );
            navigate("/main");
            alert("success");
          }
        } else{
          alert('wrong password')
        }
      }else{
        alert('wrong email')
      }
    }else{
      alert('error')
    }
  };

  return (
    <div className="login">
      <div className="login__logo">
        <h1>NEBULA</h1>
      </div>
      <div className="login__main">
        <div className="login__main--inputs">
          <input
            onChange={inputHandler}
            name="email"
            type="text"
            placeholder="Email"
          />
          <input
            onChange={inputHandler}
            name="password"
            type="password"
            placeholder="Password"
          />
          <button onClick={submitHandler}>Login</button>
        </div>
      </div>
      <div className="login__routerSignUp">
        <p>
          Dont have an account?{" "}
          <span onClick={() => navigate("/signUp")} className="router">
            Create account
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
