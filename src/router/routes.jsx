import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../pages/main";
// Booking
import OpenCreateBooking from "../pages/openCreateBooking.jsx";
import CompleteBooking from "../pages/Booking/completeBooking.jsx";
import PendingBooking from "../pages/Booking/pendingBooking.jsx";
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
import CreateFaresByvehicle from "../pages/Fares/fareByVehicle.jsx";
import AirportCharges from "../pages/Fares/airportcharges.jsx";
import FareIncrement from "../pages/Fares/fareIncrement.jsx";
import SurCharges from "../pages/Fares/surcharges.jsx";
import FareMeter from "../pages/Fares/fareMeter.jsx";
// Administration
import CreateUser from "../pages/Administration/createUser.jsx";
import UserList from "../pages/Administration/userList.jsx";
import SubsidiaryList from "../pages/Administration/subsidiaryList.jsx";
import CreateSubssidiary from "../pages/Administration/createSubsidiary.jsx";
// Account
import CreateAccount from "../pages/Account/createAccount.jsx";
import AccountList from "../pages/Account/accountList.jsx";
import EscortList from "../pages/Account/escortList.jsx";
import AddEscort from "../pages/Account/createEscort.jsx";
// Customer
import AddCustomer from '../pages/Customer/addCustomer.jsx'
import CustomerList from "../pages/Customer/customerList.jsx";
import AddLostProperty from "../pages/Customer/addLostProperty.jsx";
import LostPropertyList from "../pages/Customer/lostPropertyList.jsx";
import AddComplaint from "../pages/Customer/addComplaint.jsx";
import ComplaintList from "../pages/Customer/complaintList.jsx";
// Invoices
import CreateInvoice from "../pages/Invoices/createCustomerInvoice.jsx";
import CustomerInvoices from "../pages/Invoices/customerInvoices.jsx";
import CreateAccountInvoice from "../pages/Invoices/createAccountInvoice.jsx";
import AccountInvoices from "../pages/Invoices/accountInvoice.jsx";



function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Booking */}
        <Route path="/open_create_booking" element={<OpenCreateBooking />} />
        <Route path="/complete_booking" element={<CompleteBooking />} />
        <Route path="/pending_booking" element={<PendingBooking />} />

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
        <Route path="/create_fare_by_vehicle" element={<CreateFaresByvehicle />} />
        <Route path="/airport_charges" element={<AirportCharges />} />
        <Route path="/fare_increment" element={<FareIncrement />} />
        <Route path="/surcharges" element={<SurCharges />} />
        <Route path="/faremeter" element={<FareMeter />} />
        {/* Administration */}
        <Route path="/create_user" element={<CreateUser />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/subsidiaries" element={<SubsidiaryList />} />
        <Route path="/create_subsidiary" element={<CreateSubssidiary />} />
        {/* Account */}
        <Route path="/create_account" element={<CreateAccount />} />
        <Route path="/account_list" element={<AccountList />} />
        <Route path="/create_escort" element={<AddEscort />} />
        <Route path="/escort_list" element={<EscortList />} />
        {/* Customer */}
        <Route path="/add_customers" element={<AddCustomer />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/add_lost_property" element={<AddLostProperty />} />
        <Route path="/lost_property" element={<LostPropertyList />} />
        <Route path="/add_complaint" element={<AddComplaint />} />
        <Route path="/complaints" element={<ComplaintList />} />
        {/* Invoice */}
        <Route path="/create_customer_invoice" element={<CreateInvoice />} />
        <Route path="/customer_invoices" element={<CustomerInvoices />} />
        <Route path="/create_account_invoices" element={<CreateAccountInvoice />} />
        <Route path="/account_invoices" element={<AccountInvoices />} />
        





      </Routes>
    </Router>
  );
}

export default MyRoutes;
