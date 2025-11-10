import React, { useState } from "react";
import {
  Menu as LucideMenu,
  CalendarDays,
  Users,
  DollarSign,
  MapPin,
  Car,
  Wallet,
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
import PaymentTypeColorCode from "../pages/Settings/paymentTypeColor";


const Navbar = () => {

  // Extention Button Ka Modal Or Function
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [PaymentTypeColorCodeModal, setPaymentTypeColorCodeModal] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showPaymentTypeModal = () => {
    setPaymentTypeColorCodeModal(true);
  };
  const handlePaymentTypeModalCancel = () => {
    setPaymentTypeColorCodeModal(false);
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
        { label: "Complete Bookings", value: "complete_booking" },
        { label: "Pending Bookings", value: "pending_booking" },
        { label: "Pre Bookings", value: "pre_booking" },
        { label: "Web Bookings", value: "web_booking" },
        { label: "App Bookings", value: "app_booking" },
        { label: "Multi Bookings", value: "multi_booking" },
        { label: "Trash Bookings", value: "trash_booking" },
      ],
    },
    {
      label: "Customer",
      value: "customer",
      icon: <Users className="w-4 h-4" />,
      subItems: [
        {
          label: "Customer Invoice",
          value: "Customer Invoice",
          subItems: [
            { label: "Create Customer Invoices", value: "create_customer_invoice" },
            { label: "Customer Invoices", value: "customer_invoices" },
            { label: "Create Customer Pre Invoice", value: "create_customer_pre_invoice" },
            { label: "Customer Pre Invoices", value: "customer_pre_invoice" },
          ],
        },
        { label: "Add Customer", value: "add_customers" },
        { label: "Customers", value: "customers" },
        { label: "Create Lost Property", value: "add_lost_property" },
        { label: "Lost Properties", value: "lost_property" },
        { label: "Create Complaint", value: "add_complaint" },
        { label: "Complaint", value: "complaints" },
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
        {
          label: "Account Invoice",
          value: "create_account",
          subItems: [
            { label: "Create Account Invoices", value: "create_account_invoices" },
            { label: "Account Invoices", value: "account_invoices" },
            { label: "Create Account Pre Invoice", value: "create_account_pre_invoice" },
            { label: "Account Pre Invoices", value: "account_pre_invoice" },
          ],
        },
        { label: "Create Account", value: "create_account" },
        { label: "Accounts", value: "account_list" },
        { label: "Create Escort", value: "create_escort" },
        { label: "Escort", value: "escort_list" },
      ],
    },
    // {
    //   label: "Invoices",
    //   value: "invoices",
    //   icon: <FileText className="w-4 h-4" />,
    //   subItems: [
    //     { label: "Create Customer Invoice", value: "create_customer_invoice" },
    //     { label: "Customer Invoice", value: "customer_invoices" },
    //     { label: "Create Acount Invoice", value: "create_account_invoices" },
    //     { label: "Acount Invoice", value: "account_invoices" },
    //     { label: "Create Customer Pre Invoice", value: "add-vehicle" },
    //     { label: "Customer Pre Invoice", value: "add-vehicle" },
    //     { label: "Create Acount Pre Invoice", value: "#" },
    //     { label: "Acount Pre Invoice", value: "#" },
    //   ],
    // },
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
          label: "Driver", value: "Driver",
          subItems: [
            { label: "Login", value: "driver_login" },
            { label: "Log", value: "driver_log" },
            { label: "Earnings & Info", value: "earning_info" },
            { label: "Statistics", value: "#" },
            { label: "Feedback", value: "feedback" },
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
      label: "Extension No",
      value: "extension_no",
      modal: true, // ✅ custom key for modal
    },
    { value: "phone", label: <Phone className="w-4 h-4" /> },
    { value: "messages", label: <MessageSquare className="w-4 h-4" /> },
    { value: "notifications", label: <Bell className="w-4 h-4" /> },
    {
      value: "settings",
      label: <Settings className="w-4 h-4" />,
      subItems: [
        { label: "Company Information", value: "#" },
        { label: "Company Configuration", value: "#" },
        {
          label: "Payment Types Color Code",
          onClick: showPaymentTypeModal, // ✅ only function
        },
        { label: "Document Number", value: "#" },
        { label: "Template Settings", value: "template_settings" },
        { label: "Clear Booking", value: "#" },
        { label: "Location Type Shortcuts", value: "location_type_shortcuts" },
        { label: "Voip Settings", value: "voip_settings" },
        { label: "SMS Tracking", value: "#" },
        { label: "Email Tracking", value: "#" },
        { label: "Call Recording", value: "#" },
        { label: "Tutorials", value: "#" },
        { label: "Release Notes", value: "#" },
        { label: "Help", value: "#" },
        { label: "WallBoard", value: "#" },
      ],
    },
    { value: "logout", label: <LogOut className="w-4 h-4" /> },
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
          key={item.value || item.label} // ✅ fallback key
          onClick={() => {
            if (item.onClick) {
              item.onClick(); // ✅ open modal
            } else if (item.value === "create_booking") {
              window.open(`${window.location.origin}/#/create_booking`, "_blank");
            } else if (item.value) {
              navigate(`/${item.value}`); // ✅ only navigate if real value exists
            }
          }}
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
            <NavLink
              to="/"
              onClick={() => {
                localStorage.removeItem("recentTabs"); // remove saved tabs
                // optional: agar tum useState se manage kar rahe ho:
                // setRecentTabs([]);
              }}
            >
              <h1 className="text-white font-extrabold text-4xl tracking-wide">
                Nexus
              </h1>
            </NavLink>

          </div>

          {/* Desktop Nav Items (Large screens) */}
          <div className="hidden lg:flex flex-wrap items-center gap-4 w-[80%]">
            {navGroups.map(group =>
              group.subItems ? (
                <Dropdown
                  key={group.value}
                  overlay={<Menu mode="vertical">{renderMenuItems(group.subItems)}</Menu>}
                  placement="bottomLeft"
                  arrow
                  trigger={['click']}  // ✅ This line makes it open on click/tap
                >
                  <Button
                    className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-white lg:text-sm hover:text-[#757cdd] border-none p-1 min-w-[80px]"
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                  >
                    {group.icon}
                    <span className="whitespace-nowrap">{group.label}</span>
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
            <div className="hidden lg:flex flex-wrap items-center justify-end gap-2 w-[30%]">
              {secondNav.map((item) =>
                item.subItems ? (
                  // ✅ Dropdown for items with subItems
                  <Dropdown
                    key={item.value}
                    overlay={<Menu mode="vertical">{renderMenuItems(item.subItems)}</Menu>}
                    placement="bottomLeft"
                    arrow
                    trigger={["click"]}
                  >
                    <Button
                      className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-white lg:text-sm hover:text-[#757cdd] border-none p-1 min-w-[40px]"
                      style={{ backgroundColor: "transparent", border: "none" }}
                    >
                      {item.icon}
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Button>
                  </Dropdown>
                ) : (
                  // ✅ Normal buttons
                  <Button
                    key={item.value}
                    className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-white lg:text-sm hover:text-[#757cdd] border-none p-1 min-w-[40px]"
                    style={{ backgroundColor: "transparent", border: "none" }}
                    onClick={() => {
                      if (item.modal) {
                        showModal(); // 🔥 Open modal for Extension No
                      } else if (item.value === "logout") {
                        localStorage.clear();
                        navigate("/login");
                      } else {
                        navigate(`/${item.value}`);
                      }
                    }}
                  >
                    {item.icon}
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Button>
                )
              )}
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

                        {/* SubItems */}
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

            {/* Secondary Nav (Tablet) */}
            <div className="flex items-center gap-2">
              {secondNav.map((item) =>
                item.subItems ? (
                  <Dropdown
                    key={item.value}
                    overlay={<Menu mode="vertical">{item.subItems.map(sub => (
                      <Menu.Item key={sub.value} onClick={() => navigate(`/${sub.value}`)}>
                        {sub.label}
                      </Menu.Item>
                    ))}</Menu>}
                    placement="bottomLeft"
                    arrow
                    trigger={['click']}
                  >
                    <Button className="flex items-center gap-1 text-white hover:text-[#757cdd] border-none bg-transparent">
                      {item.icon}
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Button>
                  </Dropdown>
                ) : (
                  <Button
                    key={item.value}
                    className="flex items-center gap-1 text-white hover:text-[#757cdd] border-none bg-transparent"
                    onClick={() => {
                      if (item.modal) showModal();
                      else if (item.value === "logout") {
                        localStorage.clear();
                        navigate("/login");
                      } else navigate(`/${item.value}`);
                    }}
                  >
                    {item.icon}
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu (Small screens) */}
          <div className="flex justify-end md:hidden items-center relative w-[60%]">
            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="flex items-center justify-center px-4 py-2 bg-[#424899] text-white font-semibold rounded-md"
            >
              <LucideMenu className="w-6 h-6 ml-2" />
            </button>

            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#424899] shadow-md rounded-md z-50">
                <div className="flex flex-col">
                  {/* NavGroups */}
                  {navGroups.map(group => (
                    <div key={group.value} className="border-b border-gray-600">
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

                      {openGroups[group.value] && group.subItems && (
                        <div className="flex flex-col pl-6 bg-[#353a8c]">
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

                  {/* Secondary Nav */}
                  {secondNav.map((item) =>
                    item.subItems ? (
                      <Dropdown
                        key={item.value}
                        overlay={<Menu mode="vertical">{item.subItems.map(sub => (
                          <Menu.Item key={sub.value} onClick={() => navigate(`/${sub.value}`)}>
                            {sub.label}
                          </Menu.Item>
                        ))}</Menu>}
                        placement="bottomLeft"
                        arrow
                        trigger={['click']}
                      >
                        <Button className="flex items-center gap-2 text-white hover:text-[#757cdd] border-none bg-transparent w-full text-left">
                          {item.icon}
                          <span className="whitespace-nowrap">{item.label}</span>
                        </Button>
                      </Dropdown>
                    ) : (
                      <Button
                        key={item.value}
                        className="flex items-center gap-2 text-white hover:text-[#757cdd] border-none bg-transparent w-full text-left"
                        onClick={() => {
                          if (item.modal) showModal();
                          else if (item.value === "logout") {
                            localStorage.clear();
                            navigate("/login");
                          } else navigate(`/${item.value}`);
                        }}
                      >
                        {item.icon}
                        <span className="whitespace-nowrap">{item.label}</span>
                      </Button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>


          {/* Modal (should be outside of map) */}
          <Modal
            title="Payment Type Color Code"
            open={PaymentTypeColorCodeModal}
            footer={null}
            onCancel={handlePaymentTypeModalCancel}
            width={'60%'}
          >

            <PaymentTypeColorCode />

          </Modal>


        </div>
      </div>
    </nav >
  )
};

export default Navbar;