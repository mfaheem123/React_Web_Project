import { Button, Checkbox, Form, Input, Select, Modal } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import WebLogin from "../../components/Accounts/webLogin";
import Departments from "../../components/Accounts/department";
import Contact from "../../components/Accounts/contact";
import Order from "../../components/Accounts/order";
import CompanyAddress from "../../components/Accounts/companyAddress";



export default function CreateAccount() {
    const { Option } = Select;

    const onFinish = (v) => {
        console.log("Values", v);
    };

    // ✅ States
    const [comp, setComp] = useState("");
    const [modalWidth, setModalWidth] = useState("30%");
    const [isModalOpen, setIsModalOpen] = useState(false);

    // ✅ Show modal + set both component and width
    const showModal = (componentName) => {
        setComp(componentName);

        switch (componentName) {
            case "Web Logins":
                setModalWidth("70%");
                break;
            case "Departments":
                setModalWidth("30%");
                break;
            case "Contacts":
                setModalWidth("70%");
                break;
            case "Order":
                setModalWidth("30%");
                break;
            case "Company Address":
                setModalWidth("30%");
                break;
            default:
                setModalWidth("30%");
        }

        setIsModalOpen(true);
    };

    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    // ✅ Render component based on comp
    const renderComponent = () => {
        switch (comp) {
            case "Web Logins":
                return <WebLogin />;
            case "Departments":
                return <Departments />;
            case "Contacts":
                return <Contact />;
            case "Order":
                return <Order />;
            case "Company Address":
                return <CompanyAddress />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <Form layout="vertical"
                onFinish={onFinish}
            >
                <div className="w-full flex flex-col md:flex-row justify-between gap-4">

                    {/* Left Section */}
                    <div className="w-full md:w-[60%] p-4 shadow-md  text-white rounded-md">

                        {/* Heading Section */}
                        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#424899] p-3">
                            <h2 className="text-2xl md:text-3xl font-semibold w-full md:w-[30%] text-center md:text-left">
                                Accounts
                            </h2>
                            <div className="flex flex-wrap justify-center md:justify-evenly w-full md:w-[60%] gap-2">
                                <Button onClick={() => showModal("Web Logins")}>Web Logins</Button>
                                <Button onClick={() => showModal("Departments")}>Departments</Button>
                                <Button onClick={() => showModal("Contacts")}>Contacts</Button>
                                <Button onClick={() => showModal("Order")}>Order</Button>
                                <Button onClick={() => showModal("Company Address")}>Company Address</Button>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="bg-gray-200 p-5 mt-2 rounded-lg">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                                {/* First Row */}
                                <Form.Item
                                    label="Name"
                                    name="Name"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Code"
                                    name="code"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name="email"
                                >
                                    <Input type="email" className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                >
                                    <Input type="password" className="w-full" />
                                </Form.Item>

                                <Form.Item label="Subsidiary" name="subsidiary">
                                    <Select placeholder="Select Subsidiary">
                                        <Option value="controller">Demo Company</Option>
                                        <Option value="admin">Admin</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Account Type" name="accounttype">
                                    <Select placeholder="Select Account Type">
                                        <Option value="controller">Cash</Option>
                                        <Option value="admin">Account</Option>
                                    </Select>
                                </Form.Item>

                                {/* Second Row */}
                                <Form.Item
                                    label="Phone"
                                    name="phone"
                                >
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Telephone"
                                    name="telephone"
                                >
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Fax"
                                    name="fax"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Website"
                                    name="website"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Account Number"
                                    name="accountNumber"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Credit Card"
                                    name="creditCard"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                {/* Third Row */}
                                <Form.Item
                                    label="Address"
                                    name="address"
                                >
                                    <TextArea className="w-full" />
                                </Form.Item>

                                <Form.Item label="Payment Type" name="paymenttype">
                                    <Select placeholder="Select Payment Type">
                                        <Option value="cash">Cash</Option>
                                        <Option value="creditCard">Credit Card</Option>
                                        <Option value="account">Account</Option>
                                        <Option value="creditCardPay">Credit Card Pay</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="Information"
                                    name="information"
                                >
                                    <TextArea className="w-full]" />
                                </Form.Item>

                                <div>
                                    <Form.Item
                                        label="Contact Name"
                                        name="contactName"
                                    >
                                        <Input className="w-full" />
                                    </Form.Item>
                                    <Form.Item
                                        label="Bank Account"
                                        name="bankAccount"
                                    >
                                        <Input className="w-full" />
                                    </Form.Item>
                                </div>

                                <Form.Item
                                    label="Background Color"
                                    name="bgColor"
                                >
                                    <Input type="color" className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Foreground Color"
                                    name="frColor"
                                >
                                    <Input type="color" className="w-full" />
                                </Form.Item>



                            </div>
                        </div>

                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-[40%] p-4 shadow-md text-white rounded-md">

                        {/* Fees Section */}
                        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#424899] p-3">
                            <h2 className="text-xl md:text-3xl font-semibold w-full md:w-[30%] text-center md:text-left">
                                Fee Section
                            </h2>
                        </div>

                        <div className="bg-gray-200 p-5 mt-2 rounded-lg">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* First Row */}

                                <Form.Item label="Admin Fees Type" name="adminFeeType">
                                    <Select placeholder="Select Admin Fess Type">
                                        <Option value="controller">Percenteage</Option>
                                        <Option value="admin">Amount</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="Admin Fees"
                                    name="adminFees"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                <Form.Item label="Account Fees Type" name="accountFeeType">
                                    <Select placeholder="Select Account Fess Type">
                                        <Option value="controller">Percenteage</Option>
                                        <Option value="admin">Amount</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                >
                                    <Input type="password" className="w-full" />
                                </Form.Item>


                            </div>

                        </div>

                        {/* Agent Commission */}
                        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#424899] p-3 mt-20">
                            <h2 className="text-xl md:text-3xl font-semibold text-center md:text-left">
                                Agent Commission
                            </h2>
                        </div>

                        <div className="bg-gray-200 p-5 mt-2 rounded-lg">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                {/* First Row */}

                                <Form.Item label="Agent Commission Type" name="agentCommissionType">
                                    <Select placeholder="Select Agent Commission Type">
                                        <Option value="controller">Percenteage</Option>
                                        <Option value="admin">Amount</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="Agent Commission"
                                    name="agentCommission"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Bottom Section */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-center mt-4">

                    {/* Information Comtrol */}
                    <div className="w-full sm:w-[40%] p-4 shadow-md rounded-md text-center">
                        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2 bg-[#424899] p-2 text-white">
                            <h2 className="text-xl md:text-3xl font-semibold text-center md:text-left">
                                Information Control
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 bg-gray-200 p-3">

                            <Form.Item label="Order" name="order">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>

                            <Form.Item label="Booked By" name="bookedBy">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>

                            <Form.Item label="Escort" name="escort">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>

                            <Form.Item label="Fare Controller" name="fareController">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>

                            <Form.Item label="Bank Information" name="bankInfo">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>

                        </div>

                    </div>

                    {/* Charges Control */}
                    <div className="w-full sm:w-[30%] p-4 shadow-md bg-gray-100 rounded-md text-center">
                        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2 bg-[#424899] p-2 text-white">
                            <h2 className="text-xl md:text-3xl font-semibold text-center md:text-left">
                                Charges Control
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-gray-200 p-3">

                            <Form.Item label="Admin Fees" name="adminFees">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>

                            <Form.Item label="Account Fees" name="accountFees">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>

                            <Form.Item label="VAT" name="vat">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>
                        </div>
                    </div>

                    {/* Sms Control */}
                    <div className="w-full sm:w-[30%] p-4 shadow-md bg-gray-100 rounded-md text-center">
                        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2 bg-[#424899] p-2 text-white">
                            <h2 className="text-xl md:text-3xl font-semibold text-center md:text-left">
                                SMS Control
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 bg-gray-200 p-3">

                            <Form.Item label="Dispatch SMS" name="dispatchSms">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>

                            <Form.Item label="Confirm SMS" name="confirmSms">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>

                            <Form.Item label="Arrival SMS" name="arrivalSms">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>

                            <Form.Item label="Clear Job SMS" name="clearJobSms">
                                <Checkbox className="transform scale-125" />
                            </Form.Item>

                        </div>
                    </div>


                </div>

                {/* Submit Button */}
                <div>
                    <Form.Item className="mt-8 text-center">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-[#424899] border-none hover:bg-[#5a60d1] px-8 py-3 w-full sm:w-1/2 md:w-1/3"
                        >
                            Save
                        </Button>
                    </Form.Item>
                </div>
            </Form>


            <Modal
                title={comp}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={modalWidth}
            >
                {renderComponent()}
            </Modal>


        </div >
    )
}