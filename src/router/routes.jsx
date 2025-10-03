import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/main";
import CreateBooking from "../pages/Booking/CreateBooking.jsx";


function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create_booking" element={<CreateBooking />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
