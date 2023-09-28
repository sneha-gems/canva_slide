import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import CustomSwiper from "./components/CustomCarousel";
import { authContext } from "./contexts/AuthContext";

function App() {
  const { auth } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.data) {
      navigate("/signin");
    }
  }, [auth, navigate]);
  return (
    <div className="App">
      <CustomSwiper />
    </div>
  );
}

export default App;
