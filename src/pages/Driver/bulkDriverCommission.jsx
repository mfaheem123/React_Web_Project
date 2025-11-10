import { Button, Form, Input, Select } from "antd"
import Navbar from "../../components/navbar"
import RecentTabsHeader from "../../components/recentTabs"
import DynamicTable from "../../components/dynamicTable";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

export default function BulkDriverCommission() {

    const { Option } = Select;

    const onFinish = (values) => {
        console.log("Personal Info:", values);
    };

    const onFinishEmail = (values) => {
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

            <div className="bg-gray-200 p-5 text-3xl flex justify-between w-full">
                <h1>Bulk Driver {type}</h1>

                <div className="w-[30%]">
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
                </div>
            </div>

            <div className="w-full min-h-full flex flex-col lg:flex-row items-start justify-center gap-6 p-4 bg-gray-50">

                {/* Duration Form */}
                <div className="w-full lg:w-[70%]">
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

                        {/* Top Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                            <Form.Item
                                label="Subsidiary"
                                name="subsidiary"
                            >
                                <Select placeholder="Select Subsidiary">
                                    <Option value="sindh">Demo Company</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="From"
                                name="from"
                            >
                                <Input type="date" />
                            </Form.Item>

                            <Form.Item
                                label="To"
                                name="to"
                            >
                                <Input type="date" />
                            </Form.Item>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-3">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full sm:w-auto"
                                >
                                    Get Bookings
                                </Button>

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full sm:w-auto"
                                >
                                    Clear
                                </Button>

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full sm:w-auto"
                                >
                                    Generate
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>

                {/* Email Form */}
                <div className="w-full lg:w-[30%]">
                    <Form
                        name="emailForm"
                        layout="vertical"
                        className="w-full p-6 shadow-md bg-gray-200 rounded-xl"
                        onFinish={onFinishEmail}
                        autoComplete="off"
                    >
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#757cdd] text-center lg:text-left">
                            Email
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                            <Form.Item
                                label="Email"
                                name="email"
                            >
                                <Input type="email" placeholder="Enter Email" />
                            </Form.Item>

                            {/* Buttons */}
                            <div className="flex justify-center items-center sm:justify-start mt-2">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full sm:w-auto"
                                >
                                    Generate & Send PDF
                                </Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>

            {/* Dynamic Table */}
            <div className="w-full overflow-x-auto p-5">
                <DynamicTable data={enhancedData} />
            </div>

        </div>
    )
}