import "./SignUp.scss";
import { useNavigate } from "react-router-dom";
import useRegister from "../../hooks/useRegister";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [inputHandler, inputData, setInputData] = useRegister();

  const submitHandler = async () => {
    if (
      inputData.name === "" ||
      inputData.email === "" ||
      inputData.password === ""
    ) {
      alert("Fill the blanks!!!");
    } else {
      const response = await axios.post(
        "http://localhost:3000/users",
        inputData
      );

      if (response.status === 201) {
        setInputData((prev) => !prev);
        setInputData({
          name: "",
          email: "",
          password: "",
        });
      }

      navigate("/main");
    }
  };

  return (
    <div className="signUp">
      <div className="signUp__logo">
        <h1>NEBULA</h1>
      </div>
      <div className="signUp__main">
        <div className="signUp__main--inputs">
          <input
            onChange={inputHandler}
            name="name"
            type="text"
            placeholder="Name"
          />
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
      <div className="signUp__routerSignUp">
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="router">
            Sign In!
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
