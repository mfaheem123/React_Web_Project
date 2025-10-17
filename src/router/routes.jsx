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
import CreateCompanyVehicle from "../pages/Vehicles/createCompanyVehicle.jsx";
import CompanyVehicleTable from "../pages/Vehicles/companyVehicleList.jsx";
// Driver pages Import
// Driver
import AddDriver from "../pages/Driver/addDriver.jsx";
import DriverList from "../pages/Driver/driverList.jsx";
import LoginLogout from "../pages/Driver/Login-Logout.jsx";
// Driver Commission
import CreateDriverCommission from "../pages/Driver/createDriverCommision.jsx";
import DriverCommision from "../pages/Driver/driverCommision.jsx";
import BulkDriverCommission from "../pages/Driver/bulkDriverCommission.jsx";
import CommissionPay from "../pages/Driver/commissionPay.jsx";
// Driver App Features
import DriverAppFeature from "../pages/Driver/driverAppfeature.jsx";
// Driver Sin Bin
import DriverSinBin from "../pages/Driver/driverSinBin.jsx";
// fares
import CreateFaresSettings from "../pages/Fares/createFaresSettings.jsx";
import CreateFixedFaresSettings from "../pages/Fares/fixedFare.jsx";
import CreatePlotFares from "../pages/Fares/plotfare.jsx";

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
        <Route path="/company_Vehicle_list" element={<CompanyVehicleTable />} />
        {/* Driver Pages Routes */}
        {/* Driver */}
        <Route path="/add_driver" element={<AddDriver />} />
        <Route path="/driver_list" element={<DriverList />} />
        <Route path="/Login_Logout" element={<LoginLogout />} />
        {/* Commission And Rent */}
        <Route path="/create_driver_commission_and_rent" element={<CreateDriverCommission />} />
        <Route path="/driver_commission_list_and_rent" element={<DriverCommision />} />
        <Route path="/bulk_driver_commission_and_rent" element={<BulkDriverCommission />} />
        <Route path="/driver_commission_and_rent_pay" element={<CommissionPay />} />
        {/* Driver App Feature */}
        <Route path="/driver_app_feature" element={<DriverAppFeature />} />
        {/* Driver Sin Bin */}
        <Route path="/driver_sin_Bin" element={<DriverSinBin />} />
        {/* Fares */}
        <Route path="/create_fares_settings" element={<CreateFaresSettings />} />
        <Route path="/create_fixed_fares_settings" element={<CreateFixedFaresSettings />} />
        <Route path="/create_plot_fares" element={<CreatePlotFares />} />


      </Routes>
    </Router>
  );
}

export default MyRoutes;
