import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import { DatePicker, Input, Select, Button, Form } from "antd";
import { useState } from "react";
import DynamicTable from "../../components/dynamicTable";
import { Edit, Trash2 } from "lucide-react";

const { Option } = Select;

export default function FareIncrement() {

    const dummyData = [
        {
            key: 1,
            from: "01-10-25 09:00",
            to: "01-10-25 11:00",
            operator: "John Smith",
            value: "£25",
            fixFare: true,
            mileage: false,
        },
        {
            key: 2,
            from: "02-10-25 13:00",
            to: "02-10-25 15:30",
            operator: "Emma Brown",
            value: "£40",
            fixFare: false,
            mileage: true,
        },
        {
            key: 3,
            from: "03-10-25 10:15",
            to: "03-10-25 12:45",
            operator: "Ali Khan",
            value: "£32",
            fixFare: true,
            mileage: true,
        },
    ];

    const [formData, setFormData] = useState({
        startDate: null,
        endDate: null,
        operator: "",
        value: "",
        fixFare: false,
        mileage: false,
    });

    const [data, setData] = useState(dummyData);

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const onFinish = (value) => {
        console.log('Values', value);
    }

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
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="w-full flex justify-center mt-5 px-3 md:px-10">
                <div className="w-full max-w-[1300px] bg-white shadow-md rounded-xl p-6">
                    {/* Heading Section */}
                    <h2 className="text-center text-2xl font-bold mb-6 text-gray-700">
                        FARE INCREMENT
                    </h2>

                    {/* Form Section */}
                    <Form onFinish={onFinish} layout="vertical">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                            <Form.Item label="Start Date" className="m-0">
                                <DatePicker
                                    showTime
                                    placeholder="Start Date"
                                    className="w-full"
                                    value={formData.startDate}
                                    onChange={(value) => handleChange("startDate", value)}
                                />
                            </Form.Item>

                            <Form.Item label="End Date" className="m-0">
                                <DatePicker
                                    showTime
                                    placeholder="End Date"
                                    className="w-full"
                                    value={formData.endDate}
                                    onChange={(value) => handleChange("endDate", value)}
                                />
                            </Form.Item>

                            <Form.Item label="Operator" className="m-0">
                                <Select
                                    placeholder="Select Operator"
                                    value={formData.operator}
                                    onChange={(value) => handleChange("operator", value)}
                                    className="w-full"
                                >
                                    <Option value="Amount">Amount</Option>
                                    <Option value="Operator 2">Operator 2</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Value" className="m-0">
                                <Input
                                    placeholder="Enter Value"
                                    value={formData.value}
                                    onChange={(e) => handleChange("value", e.target.value)}
                                />
                            </Form.Item>

                            <Form.Item label=" " className="m-0">
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Button
                                        type={formData.fixFare ? "primary" : "default"}
                                        className={`w-full ${formData.fixFare
                                            ? "bg-green-500 border-none hover:bg-green-600"
                                            : "border-gray-300"
                                            }`}
                                        onClick={() => handleChange("fixFare", !formData.fixFare)}
                                    >
                                        FIX FARE
                                    </Button>
                                    <Button
                                        type={formData.mileage ? "primary" : "default"}
                                        className={`w-full ${formData.mileage
                                            ? "bg-green-500 border-none hover:bg-green-600"
                                            : "border-gray-300"
                                            }`}
                                        onClick={() => handleChange("mileage", !formData.mileage)}
                                    >
                                        MILEAGE
                                    </Button>
                                </div>
                            </Form.Item>

                            <Form.Item label=" " className="m-0">
                                <Button
                                    type="primary"
                                    className="w-full bg-[#424899] !hover:bg-bg-[#424199] border-none"
                                >
                                    SAVE
                                </Button>
                            </Form.Item>
                        </div>
                    </Form>

                    {/* Table Section */}
                    <div className="mt-8 overflow-x-auto">
                        <DynamicTable data={enhancedData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
