import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/main";
import CreateBooking from "../pages/Booking/CreateBooking.jsx";
import AddLocation from "../pages/Location/AddLoc.jsx";
import LocationTable from '../pages/Location/LocationList.jsx'
import CraeteZone from "../pages/Location/createZone.jsx";
import ZoneList from "../pages/Location/zoneList.jsx";


function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create_booking" element={<CreateBooking />} />
        <Route path="/add_location" element={<AddLocation />} />
        <Route path="/location_list" element={<LocationTable />} />
        <Route path="/create_zone" element={<CraeteZone />} />
        <Route path="/zone_list" element={<ZoneList />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
