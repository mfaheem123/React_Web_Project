import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/main";
import CreateBooking from "../pages/Booking/CreateBooking.jsx";
// Location Pages Import
import AddLocation from "../pages/Location/AddLoc.jsx";
import LocationTable from '../pages/Location/LocationList.jsx'
import CraeteZone from "../pages/Location/createZone.jsx";
import ZoneList from "../pages/Location/zoneList.jsx";
import LocalizationPage from "../pages/Location/Localization.jsx";
// Vehicle Pages Import
import CreateVehicle from "../pages/Vehicles/createVehicle.jsx";
import VehicleTable from "../pages/Vehicles/vehicleList.jsx";
import CreateCompanyVehicle from "../pages/Vehicles/createCompantVehicle.jsx";


function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create_booking" element={<CreateBooking />} />
        {/* Location pages Routes */}
        <Route path="/add_location" element={<AddLocation />} />
        <Route path="/location_list" element={<LocationTable />} />
        <Route path="/create_zone" element={<CraeteZone />} />
        <Route path="/zone_list" element={<ZoneList />} />
        <Route path="/localization" element={<LocalizationPage />} />
        {/* Vehicles Page Routes  */}
        <Route path="/create_vehicle" element={<CreateVehicle />} />
        <Route path="/vehicle_list" element={<VehicleTable />} />
        <Route path="/create_company_Vehicle" element={<CreateCompanyVehicle />} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
