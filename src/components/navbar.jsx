import React, { useState } from "react";
import {
  Menu as LucideMenu,
  CalendarDays,
  Users,
  DollarSign,
  MapPin,
  Car,
  Wallet,
  FileText,
  Truck,
  BarChart3,
  Settings,
  Phone,
  MessageSquare,
  Bell,
  LogOut,
} from "lucide-react"; // icons
import { NavLink, useNavigate } from "react-router-dom";

// Ant Design imports
import { Menu, Dropdown, Button, Modal } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input } from 'antd';



const Navbar = () => {

  // Extention Button Ka Modal Or Function
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = values => {
    console.log('Success:', values);
  };



  const navGroups = [
    {
      label: "Bookings",
      value: "bookings",
      icon: <CalendarDays className="w-4 h-4" />,
      subItems: [
        { label: "Create Bookings", value: "create_booking" },
        { label: "Complete Bookings", value: "#" },
        { label: "Pending Bookings", value: "#" },
        { label: "Pre Bookings", value: "#" },
        { label: "Web Bookings", value: "#" },
        { label: "App Bookings", value: "#" },
        { label: "Multi Bookings", value: "#" },
        { label: "Trash Bookings", value: "#" },
      ],
    },
    {
      label: "Customer",
      value: "customer",
      icon: <Users className="w-4 h-4" />,
      subItems: [
        { label: "Add Customer", value: "add_customers" },
        { label: "Customers", value: "customers" },
        { label: "Create Lost Property", value: "add_lost_property" },
        { label: "Lost Properties", value: "lost_property" },
        { label: "Create Complaint", value: "add_complaint" },
        { label: "Complaint", value: "#" },
      ],
    },
    {
      label: "Fares",
      value: "fares",
      icon: <DollarSign className="w-4 h-4" />,
      subItems: [
        { label: "Create Fare Settings", value: "create_fares_settings" },
        { label: "Create Fixed Fare Settings", value: "create_fixed_fares_settings" },
        { label: "Create Plot Fare", value: "create_plot_fares" },
        { label: "Create Fare By vehicle Settings", value: "create_fare_by_vehicle" },
        { label: "Airport Charges", value: "airport_charges" },
        { label: "Fare Increment", value: "fare_increment" },
        { label: "Surcharges", value: "surcharges" },
        { label: "Fare Meter", value: "faremeter" },
      ],
    },
    {
      label: "Location",
      value: "location",
      icon: <MapPin className="w-4 h-4" />,
      subItems: [
        { label: "Add Location", value: "add_location" },
        { label: "Locations", value: "location_list" },
        { label: "Create Zone", value: "create_zone" },
        { label: "Zones", value: "zone_list" },
        { label: "Localization", value: "localization" },
      ],
    },
    {
      label: "Driver",
      value: "drivermain",
      icon: <Car className="w-4 h-4" />,
      subItems: [
        {
          label: "Driver",
          value: "Driver",
          subItems: [
            { label: "Add Driver", value: "add_driver" },
            { label: "Drivers", value: "driver_list" },
            { label: "Login/Logout Driver", value: "Login_Logout" },
          ],
        },
        {
          label: "Driver Commision And Rent",
          value: "DriverCommisionAndRent",
          subItems: [
            { label: "Create Driver Commission And Rent", value: "create_driver_commission_and_rent" },
            { label: "Driver Commission And Rent", value: "driver_commission_list_and_rent" },
            { label: "Bulk Driver Commission And Rent", value: "bulk_driver_commission_and_rent" },
            { label: "Driver Commission And Rent Pay", value: "driver_commission_and_rent_pay" },
          ],
        },
        { label: "Driver App Features", value: "driver_app_feature" },
        { label: "Driver Sin Bin", value: "driver_sin_Bin" },
      ]
    },
    {
      label: "Accounts",
      value: "accounts",
      icon: <Wallet className="w-4 h-4" />,
      subItems: [
        { label: "Create Account", value: "create_account" },
        { label: "Accounts", value: "account_list" },
        { label: "Create Escort", value: "create_escort" },
        { label: "Escort", value: "escort_list" },
      ],
    },
    {
      label: "Invoices",
      value: "invoices",
      icon: <FileText className="w-4 h-4" />,
      subItems: [
        { label: "Create Customer Invoice", value: "add-vehicle" },
        { label: "Customer Invoice", value: "#" },
        { label: "Create Acount Invoice", value: "#" },
        { label: "Acount Invoice", value: "#" },
        { label: "Create Customer Pre Invoice", value: "add-vehicle" },
        { label: "Customer Pre Invoice", value: "add-vehicle" },
        { label: "Create Acount Pre Invoice", value: "#" },
        { label: "Acount Pre Invoice", value: "#" },
      ],
    },
    {
      label: "Vehicles",
      value: "vehicles",
      icon: <Truck className="w-4 h-4" />,
      subItems: [
        { label: "Create Vehicle Type", value: "create_vehicle" },
        { label: "Vehicle Types", value: "vehicle_list" },
        { label: "Create Company Vehicle ", value: "create_company_Vehicle" },
        { label: "Company Vehicle ", value: "company_Vehicle_list" },
      ],
    },
    {
      label: "Reports",
      value: "reports",
      icon: <BarChart3 className="w-4 h-4" />,
      subItems: [
        {
          label: "Driver", value: "#",
          subItems: [
            { label: "Login", value: "#" },
            { label: "Log", value: "#" },
            { label: "Earnings & Info", value: "#" },
            { label: "Statistics", value: "#" },
            { label: "Feedback", value: "#" },
          ],
        },
        {
          label: "Bookings", value: "#",
          subItems: [
            { label: "All Bookings", value: "#" },
            { label: "Transfered Bookings", value: "#" },

          ],
        },
        {
          label: "Employee", value: "#",
          subItems: [
            { label: "Activity", value: "#" },

          ],

        },
        {
          label: "Income", value: "#",
          subItems: [
            { label: "Income ", value: "#" },
            { label: "Company Invoice", value: "#" },
            { label: "credit Card Paid ", value: "#" },

          ],
        },
        { label: "PCO", value: "#" },
      ],
    },
    {
      label: "Administration",
      value: "administration",
      icon: <Settings className="w-4 h-4" />,
      subItems: [
        { label: "Create User", value: "create_user" },
        { label: "Users", value: "users" },
        { label: "Create Subsdiary", value: "create_subsidiary" },
        { label: "Subsdiary", value: "subsidiaries" },
        { label: "Authorization", value: "#" },
      ],
    },
  ];


  const secondNav = [
    {
      label: "Extention No", icon: <Button
        onClick={showModal}
        className="text-[#424899]"
      >
        Extention No
      </Button>
    },
    { label: "Phone", icon: <Phone className="w-4 h-4" /> },
    { label: "Messages", icon: <MessageSquare className="w-4 h-4" /> },
    { label: "Notifications", icon: <Bell className="w-4 h-4" /> },
    { label: "Settings", icon: <Settings className="w-4 h-4" /> },
    { label: "Logout", icon: <LogOut className="w-4 h-4" /> },
  ];


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState({});
  const navigate = useNavigate();

  const toggleGroup = (value) => setOpenGroups(prev => ({ ...prev, [value]: !prev[value] }));

  // Recursive function for nested subItems
  const renderMenuItems = (items) =>
    items.map(item =>
      item.subItems ? (
        <Menu.SubMenu
          key={item.value}
          title={
            <span className="flex items-center justify-between gap-2">
              {item.icon && item.icon} {item.label}
            </span>
          }
        >
          {renderMenuItems(item.subItems)}
        </Menu.SubMenu>
      ) : (
        <Menu.Item
          key={item.value}
          onClick={() => navigate(`/${item.value}`)}
          style={{ backgroundColor: 'transparent', border: 'none', color: '#000' }}
          className="hover:text-[#757cdd]"
        >
          {item.label}
        </Menu.Item>
      )
    );


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#424899] text-white shadow-md">
      <div className="max-w-[100%] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">

          {/* Heading */}
          <div className="flex items-center flex-shrink-0 w-[10%]">
            <NavLink to={'/'}>
              <h1 className="text-white font-extrabold text-4xl tracking-wide">Nexus</h1>
            </NavLink>
          </div>

          {/* Desktop Nav Items (Large screens) */}
          <div className="hidden lg:flex flex-wrap items-center gap-2 w-[80%]">
            {navGroups.map(group =>
              group.subItems ? (
                <Dropdown
                  key={group.value}
                  overlay={<Menu mode="vertical">{renderMenuItems(group.subItems)}</Menu>}
                  placement="bottomLeft"
                  arrow
                >
                  <Button
                    className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-white lg:text-sm hover:text-[#757cdd] border-none p-1 min-w-[80px]"
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    {group.icon}
                    <span className="whitespace-nowrap">{group.label}</span>
                    <DownOutlined className="mt-1 sm:mt-0" />
                  </Button>
                </Dropdown>
              ) : (
                <Button
                  key={group.value}
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-white lg:text-sm hover:text-[#757cdd] border-none p-1 min-w-[80px]"
                  style={{ backgroundColor: 'transparent', border: 'none' }}
                  onClick={() => navigate(`/${group.value}`)}
                >
                  {group.icon}
                  <span className="whitespace-nowrap">{group.label}</span>
                </Button>
              )
            )}
          </div>


          {/* Desktop Secondary Nav (Large screens) */}
          <>
            <div className="hidden lg:flex items-center space-x-2 w-[20%]">
              {secondNav.map(({ label, icon }) => (

                <button
                  key={label}
                  title={label}
                  className="flex items-center gap-1 rounded-md text-white hover:text-[#757cdd] transition-colors duration-200"
                >

                  {icon}

                </button>
              ))}
            </div>

            {/* Modal (should be outside of map) */}
            <Modal
              open={isModalOpen}
              footer={null}
              onCancel={handleCancel}
            >
              <Form
                name="extension-form"
                layout="vertical"
                className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md"
                initialValues={{ remember: false }}
                autoComplete="off"
              >
                <h2 className="text-xl font-semibold mb-4 text-[#757cdd] text-center">
                  Extension Number
                </h2>

                <Form.Item
                  label={<span className="font-medium text-gray-700">Extension No</span>}
                  name="extensionNo"
                  rules={[{ required: true, message: "Please input your extension number!" }]}
                >

                  <Input
                    type="number"
                    placeholder="Enter extension number"
                    className="h-10"
                  />

                </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  className="mb-3"
                >

                  <Checkbox>Permanent Save</Checkbox>

                </Form.Item>

                <Form.Item className="text-center mb-0">
                  <Button
                    onClick={onFinish}
                    type="primary"
                    htmlType="submit"
                    className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-8 py-2"
                  >
                    Save
                  </Button>

                </Form.Item>

              </Form>

            </Modal>
          </>

          {/* Tablet Menu (Medium screens) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">

            {/* Hamburger for main navGroups */}
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(prev => !prev)}
                className="flex items-center justify-center px-4 py-2 bg-[#424899] text-white font-semibold rounded-md"
              >
                <LucideMenu className="w-6 h-6" />
              </button>

              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-[#424899] shadow-md rounded-md z-50">
                  <div className="flex flex-col">
                    {navGroups.map(group => (
                      <div key={group.value} className="border-b border-gray-600">
                        {/* Top-level group */}
                        <div
                          onClick={() => toggleGroup(group.value)}
                          className="flex justify-between items-center px-4 py-3 cursor-pointer hover:bg-[#757cdd] rounded-md"
                        >
                          <span className="flex items-center gap-2">
                            {group.icon} {group.label}
                          </span>
                          {group.subItems?.length > 0 && (
                            <span>{openGroups[group.value] ? <UpOutlined /> : <DownOutlined />}</span>
                          )}
                        </div>

                        {/* First-level subItems only */}
                        {openGroups[group.value] && group.subItems && (
                          <div className="flex flex-col pl-8 bg-[#353a8c]">
                            {group.subItems.map(sub => (
                              <NavLink
                                key={sub.value}
                                to={`/${sub.value}`}
                                onClick={() => setIsMenuOpen(false)}
                                className="block px-4 py-2 text-white hover:bg-[#757cdd] rounded-md"
                              >
                                {sub.label}
                              </NavLink>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}


            </div>
            {/* Show only secondary nav */}
            {secondNav.map(({ label, icon }) => (
              <button key={label} className="flex items-center gap-1 rounded-md text-white hover:text-[#757cdd] transition-colors duration-200">
                {icon}
              </button>
            ))}
          </div>

          {/* Mobile Menu (Small screens) */}
          <div className="flex justify-end md:hidden items-center relative w-[60%]">
            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="flex items-center justify-center px-4 py-2 bg-[#424899] text-white font-semibold rounded-md"
            >
              Bookings
              <LucideMenu className="w-6 h-6 ml-2" />
            </button>

            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#424899] shadow-md rounded-md z-50">
                <div className="flex flex-col">
                  {/* Only show selected top-level group like "Bookings" */}
                  {navGroups
                    .find(group => group.label.toLowerCase() === "bookings")
                    ?.subItems?.[0] && (  // Sirf pehla item
                      <NavLink
                        key={navGroups.find(group => group.label.toLowerCase() === "bookings")?.subItems[0].value}
                        to={`/${navGroups.find(group => group.label.toLowerCase() === "bookings")?.subItems[0].value}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-4 py-2 text-white hover:bg-[#757cdd] rounded-md"
                      >
                        {navGroups.find(group => group.label.toLowerCase() === "bookings")?.subItems[0].label}
                      </NavLink>
                    )}

                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav >
  )
};

export default Navbar;