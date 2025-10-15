import { Button, Form, Input, Select, message } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

export default function CommissionPay() {
    const { Option } = Select;
    const [form] = Form.useForm();
    const [type, setType] = useState("Commission");

    const handleTypeChange = (value) => {
        setType(value);
        form.setFieldValue("type", value); // sync value in main form
    };

    const onFinish = (values) => {
        if (!values.type) {
            message.error("Please select a Type before submitting!");
            return;
        }
        message.success(`${values.type} Pay Saved Successfully!`);
        console.log("Form Values:", values);
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

    // Table with actions
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

            {/* Header */}
            <div className="bg-gray-200 p-5 text-3xl flex flex-wrap gap-4 justify-between w-full">
                <h1>
                    Driver {type} Pay
                </h1>

                {/* Type Select Form */}
                <div className="w-full sm:w-[50%] md:w-[30%]">
                    <Form form={form} name="typeForm" autoComplete="off">
                        <Form.Item
                            label='Type'
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
                    </Form>
                </div>
            </div>

            {/* Main Form */}
            <div className="w-full min-h-full flex items-center justify-center p-4 bg-gray-50">
                <Form
                    form={form}
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
                        <Form.Item
                            label="Driver"
                            name="driver"
                            className="w-full sm:w-[45%] md:w-[25%] lg:w-[15%]"
                        >
                            <Select placeholder="Select Subsidiary">
                                <Option value="demo1">Demo Company 1</Option>
                                <Option value="demo2">Demo Company 2</Option>
                                <Option value="demo3">Demo Company 3</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label={`${type} Due`}
                            name="due"
                            className="w-full sm:w-[45%] md:w-[20%] lg:w-[10%]"
                        >
                            <Input type="number" placeholder={`Enter ${type} Due`} />
                        </Form.Item>

                        <Form.Item
                            label="Amount"
                            name="amount"
                            className="w-full sm:w-[45%] md:w-[20%] lg:w-[10%]"
                        >
                            <Input type="number" placeholder="0.00" />
                        </Form.Item>

                        <Form.Item
                            label="Current Balance"
                            name="currentBalance"
                            className="w-full sm:w-[45%] md:w-[20%] lg:w-[10%]"
                        >
                            <Input type="number" placeholder="0.00" />
                        </Form.Item>

                        <Form.Item
                            label="Description"
                            name="description"
                            className="w-full sm:w-[45%] md:w-[25%] lg:w-[25%]"
                        >
                            <Input placeholder="Short note..." />
                        </Form.Item>

                        <Form.Item
                            label="Payment"
                            name="payment"
                            className="w-full sm:w-[45%] md:w-[25%] lg:w-[10%]"
                        >
                            <Select placeholder="Select">
                                <Option value="credit">Credit</Option>
                                <Option value="debit">Debit</Option>
                            </Select>
                        </Form.Item>

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
    );
}
