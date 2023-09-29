import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import CustomSwiper from "./components/CustomCarousel";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [navigate, token]);
  return (
    <div className="App">
      <CustomSwiper />
    </div>
  );
}

export default App;
