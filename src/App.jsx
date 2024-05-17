import "./App.scss";
import Landing from "./pages/Landing/Landing";
import LoginPage from "./pages/LoginPage/LoginPage";
import useLanding from "./hooks/useLanding";
import AdminPage from "./pages/AdminPage/AdminPage";

function App() {

  const [landingPage] = useLanding()

  return <>
  <div className="app"> 
   {
    landingPage ? (
      <Landing/>
    ) : (
      <LoginPage/>
    )
  }
  {/* <AdminPage/> */}
  </div>

  </>;
}

export default App;
