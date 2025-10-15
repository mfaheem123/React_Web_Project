import Navbar from "../../components/navbar"
import RecentTabsHeader from "../../components/recentTabs"
import { Button, Input, Select, Form } from "antd";
import DynamicTable from "../../components/dynamicTable";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";



export default function CreateDriverCommission() {

    const { Option } = Select;

    const onFinishPersonal = (values) => {
        console.log("Personal Info:", values);
    };

    // Table 
    const locationData = [
        {
            key: 1,
            name: "Central Park",
            postcode: "NW10 2PN",
            shortcut: "CP",
            address: "114A High Road London",
            locationType: "Office",
            zone: "London Zone 1",
        },
        {
            key: 2,
            name: "West End",
            postcode: "E13 9LF",
            shortcut: "WE",
            address: "65 Jedburgh Road, London",
            locationType: "Residential",
            zone: "London Zone 2",
        },
        {
            key: 3,
            name: "City Center",
            postcode: "NW6 1AA",
            shortcut: "CC",
            address: "Cholmley Gardens, London",
            locationType: "Business",
            zone: "London Zone 1",
        },
    ];


    const [data, setData] = useState(locationData);

    const handleUpdate = (record) => {
        console.log("Update", record);
    };

    const handleDelete = (record) => {
        console.log("Delete", record);
        setData(data.filter((item) => item.key !== record.key));
    };

    // Dynamic table ke liye action column add karna
    const enhancedData = data.map((row) => ({
        ...row,
        action: (
            <div className="flex gap-2 justify-center">
                <Button
                    className="bg-[#424899] text-white"
                    icon={<Edit size={16} />}
                    onClick={() => handleUpdate(row)}
                />
                <Button
                    className="bg-red-700 text-white"
                    icon={<Trash2 size={16} />}
                    onClick={() => handleDelete(row)}
                />
            </div>
        ),
    }));

    const [type, setType] = useState("Commission");

    const handleTypeChange = (value) => {
        setType(value);
    };
    return (
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div>
                <h1 className="bg-gray-200 p-5 text-3xl">Driver {type}</h1>
            </div>
            <div className="w-full flex justify-center">
                <Form
                    name="personalForm"
                    layout="vertical"
                    className="w-full max-w-full p-6 shadow-md bg-gray-200 rounded-xl"
                    onFinish={onFinishPersonal}
                    autoComplete="off"
                >
                    {/* Top Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-6">
                        <Form.Item
                            label="Driver"
                            name="driver"
                        >
                            <Select placeholder="Select Driver">
                                <Option value="sindh">Sindh</Option>
                                <Option value="punjab">Punjab</Option>
                                <Option value="kpk">KPK</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Transaction Date"
                            name="transactionDate"
                        >
                            <Input type="date" />
                        </Form.Item>

                        {/* Commission Or Rent Wala drop down or field */}
                        <Form.Item
                            label="Type"
                            name="type"
                            rules={[{ required: true, message: "Please select a Type!" }]}
                        >
                            <Select
                                placeholder="Select Commission / Rent"
                                onChange={handleTypeChange}
                                value={type}
                            >
                                <Option value="Commission">Commission</Option>
                                <Option value="Rent">Rent</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label={type === "Commission" ? "Commission Amount" : "Rent Amount"}
                            name="amount"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        type === "Commission"
                                            ? "Please enter commission amount!"
                                            : "Please enter rent amount!",
                                },
                            ]}
                        >
                            <Input
                                type="number"
                                placeholder={
                                    type === "Commission" ? "Enter Commission" : "Enter Rent"
                                }
                            />
                        </Form.Item>


                        <Form.Item
                            label="PDA Rent (Per Week)"
                            name="pdaRent"
                        >
                            <Input placeholder="Enter Rent" />
                        </Form.Item>

                        <Form.Item label="From" name="from" className="mb-2">
                            <Input type="date" />
                        </Form.Item>

                        <Form.Item label="To" name="to" className="mb-2">
                            <Input type="date" />
                        </Form.Item>

                        <Form.Item
                            className="mb-2"
                            label="Payment Type"
                            name="paymenttype"
                        >
                            <Select placeholder="Select Payment Type">
                                <Option value="Cash">Cash</Option>
                                <Option value="Account">Account</Option>
                                <Option value="Credit Card">Credit Card</Option>
                                <Option value="Paid Credit Card">Paid Credit Card</Option>
                            </Select>
                        </Form.Item>

                        {/* Buttons */}
                        <div className="flex items-center mb-3 justify-between">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full sm:w-auto mt-4"
                            >
                                Filter
                            </Button>

                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full sm:w-auto mt-4 p-2"
                            >
                                Save
                            </Button>
                        </div>
                    </div>
                    <div className="w-full md:w-[30%] lg:w-[30%] flex flex-col md:flex-row justify-start items-start gap-6 p-4 mt-2 mx-auto">

                        {/* Left Section - Totals */}
                        <div className="flex-1 w-full md:w-[48%]">
                            <h2 className="text-lg font-semibold text-[#424899] mb-2">Totals</h2>
                            <div className="flex flex-col gap-2">
                                <p className="flex justify-between bg-white px-3 py-2 rounded-lg shadow-sm text-sm">
                                    <span>Total Cash:</span>
                                    <span className="font-semibold text-[#424899]">0.00</span>
                                </p>
                                <p className="flex justify-between bg-white px-3 py-2 rounded-lg shadow-sm text-sm">
                                    <span>Total:</span>
                                    <span className="font-semibold text-[#424899]">0.00</span>
                                </p>
                                <p className="flex justify-between bg-white px-3 py-2 rounded-lg shadow-sm text-sm">
                                    <span>Owed:</span>
                                    <span className="font-semibold text-[#424899]">0.00</span>
                                </p>
                                <p className="flex justify-between bg-white px-3 py-2 rounded-lg shadow-sm text-sm">
                                    <span>Old Balance:</span>
                                    <span className="font-semibold text-[#424899]">0.00</span>
                                </p>
                                <p className="flex justify-between bg-white px-3 py-2 rounded-lg shadow-sm text-sm">
                                    <span>New Balance:</span>
                                    <span className="font-semibold text-[#424899]">0.00</span>
                                </p>
                            </div>
                        </div>

                        {/* Right Section - Account Summary */}
                        <div className="flex-1 w-full md:w-[48%]">
                            <h2 className="text-lg font-semibold text-[#424899] mb-2">Account Summary</h2>
                            <div className="flex flex-col gap-2">
                                <p className="flex justify-between bg-white px-3 py-2 rounded-lg shadow-sm text-sm">
                                    <span>Account W-Comm:</span>
                                    <span className="font-semibold text-[#424899]">0.00</span>
                                </p>
                                <p className="flex justify-between bg-white px-3 py-2 rounded-lg shadow-sm text-sm">
                                    <span>Account WO-Comm:</span>
                                    <span className="font-semibold text-[#424899]">0.00</span>
                                </p>
                                <p className="flex justify-between bg-white px-3 py-2 rounded-lg shadow-sm text-sm">
                                    <span>Parking/Congestion Total:</span>
                                    <span className="font-semibold text-[#424899]">0.00</span>
                                </p>
                                <p className="flex justify-between bg-white px-3 py-2 rounded-lg shadow-sm text-sm">
                                    <span>{type}:</span>
                                    <span className="font-semibold text-[#424899]">0.00</span>
                                </p>
                            </div>
                        </div>
                    </div>


                </Form>

            </div>


            {/* Dynamic Table */}
            <div className="w-full overflow-x-auto p-5">
                <DynamicTable data={enhancedData} />
            </div>
        </div >
    )
}