import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/main";
import CreateBooking from "../pages/Booking/CreateBooking.jsx";
import AddLocation from "../pages/Location/AddLoc.jsx";
import LocationTable from '../pages/Location/LocationList.jsx'


function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create_booking" element={<CreateBooking />} />
        <Route path="/add_location" element={<AddLocation />} />
        <Route path="/location_list" element={<LocationTable />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
