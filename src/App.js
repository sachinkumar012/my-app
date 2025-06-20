import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Applayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userDetails, setUserDetails] = useState(null);

  const isUserLoggedIn = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5001/auth/is-userlogged-in",
        {},
        { withCredentials: true }
      );
      setUserDetails(response.data.user);
    } catch (error) {
      setUserDetails(null);
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Applayout><Home /></Applayout>} />
      <Route path="/login" element={<Applayout><Login /></Applayout>} />
    </Routes>
  );
}

export default App;