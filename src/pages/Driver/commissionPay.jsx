import { Button, Form, Input, Select } from "antd"
import Navbar from "../../components/navbar"
import RecentTabsHeader from "../../components/recentTabs"
import DynamicTable from "../../components/dynamicTable";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

export default function CommissionPay() {

    const { Option } = Select;

    const onFinish = (values) => {
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

    return (
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="bg-gray-200 p-5 text-3xl">
                <h1>Driver Commission Pay</h1>
            </div>
            <div className="w-full min-h-full flex items-center justify-center p-4 bg-gray-50">

                <Form
                    name="durationForm"
                    layout="vertical"
                    className="w-full p-6 shadow-md bg-gray-200 rounded-xl"
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#757cdd] text-center lg:text-left">
                        Duration
                    </h2>

                    {/* Single Responsive Row */}
                    <div className="flex flex-wrap gap-4 items-center">

                        {/* Driver */}
                        <Form.Item
                            label="Driver"
                            name="driver"
                            className="w-full sm:w-[45%] md:w-[25%] lg:w-[15%]"
                            rules={[{ required: true, message: "Please select a Driver!" }]}
                        >
                            <Select placeholder="Select Subsidiary">
                                <Option value="demo1">Demo Company 1</Option>
                                <Option value="demo2">Demo Company 2</Option>
                                <Option value="demo3">Demo Company 3</Option>
                            </Select>
                        </Form.Item>

                        {/* Commission Due */}
                        <Form.Item
                            label="Commission Due"
                            name="commissionPay"
                            className="w-full sm:w-[45%] md:w-[20%] lg:w-[10%]"
                            rules={[{ required: true, message: "Please input the Commission Due!" }]}
                        >
                            <Input type="number" placeholder="0.00" />
                        </Form.Item>

                        {/* Amount */}
                        <Form.Item
                            label="Amount"
                            name="amount"
                            className="w-full sm:w-[45%] md:w-[20%] lg:w-[10%]"
                            rules={[{ required: true, message: "Please input the Amount!" }]}
                        >
                            <Input type="number" placeholder="0.00" />
                        </Form.Item>

                        {/* Current Balance */}
                        <Form.Item
                            label="Current Balance"
                            name="currentBalance"
                            className="w-full sm:w-[45%] md:w-[20%] lg:w-[10%]"
                            rules={[{ required: true, message: "Please input the Current Balance!" }]}
                        >
                            <Input type="number" placeholder="0.00" />
                        </Form.Item>

                        {/* Description */}
                        <Form.Item
                            label="Description"
                            name="description"
                            className="w-full sm:w-[45%] md:w-[25%] lg:w-[25%]"
                            rules={[{ required: true, message: "Please input the Description!" }]}
                        >
                            <Input placeholder="Short note..." />
                        </Form.Item>

                        {/* Payment */}
                        <Form.Item
                            label="Payment"
                            name="payment"
                            className="w-full sm:w-[45%] md:w-[25%] lg:w-[10%]"
                            rules={[{ required: true, message: "Please select a Payment!" }]}
                        >
                            <Select placeholder="Select">
                                <Option value="credit">Credit</Option>
                                <Option value="debit">Debit</Option>
                            </Select>
                        </Form.Item>

                        {/* Save Button */}
                        <div className="w-full sm:w-[45%] md:w-[20%] lg:w-[8%] flex justify-center items-center lg:justify-end">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-8 py-2 w-full sm:w-auto"
                            >
                                Save
                            </Button>
                        </div>

                    </div>
                </Form>

            </div>


            {/* Dynamic Table */}
            <div className="w-full overflow-x-auto p-5">
                <DynamicTable data={enhancedData} />
            </div>

        </div>
    )
}