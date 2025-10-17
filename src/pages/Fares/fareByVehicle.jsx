import { Button, Form, Input, Select } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";


export default function CreateFaresByvehicle() {

    const { Option } = Select

    const fareData = [
        {
            vehicleType: "Saloon",
            account: "",
            fromDay: "Sunday",
            toDay: "Sunday",
            fromTime: "00:00:00",
            toTime: "23:59:00",
            minimumFares: "£6.20",
            minimumMiles: "0.90 mi",
            title: "Normal Fares",
        },
        {
            vehicleType: "Saloon",
            account: "",
            fromDay: "Saturday",
            toDay: "Saturday",
            fromTime: "19:00:00",
            toTime: "23:59:00",
            minimumFares: "£6.20",
            minimumMiles: "0.90 mi",
            title: "Normal Fares",
        },
        {
            vehicleType: "Saloon",
            account: "",
            fromDay: "Monday",
            toDay: "Friday",
            fromTime: "23:00:00",
            toTime: "06:00:00",
            minimumFares: "£6.20",
            minimumMiles: "0.90 mi",
            title: "Normal Fares",
        },
        {
            vehicleType: "Saloon",
            account: "",
            fromDay: "Saturday",
            toDay: "Saturday",
            fromTime: "06:00:00",
            toTime: "19:00:00",
            minimumFares: "£4.90",
            minimumMiles: "0.90 mi",
            title: "Normal Fares",
        },
        {
            vehicleType: "Saloon",
            account: "",
            fromDay: "Monday",
            toDay: "Friday",
            fromTime: "06:00:00",
            toTime: "23:00:00",
            minimumFares: "£4.90",
            minimumMiles: "0.90 mi",
            title: "Normal Fares",
        }
    ];

    const [data, setData] = useState(fareData);
    const [form] = Form.useForm();

    const handleUpdate = (record) => {
        console.log("Update", record);
    };

    const handleDelete = (record) => {
        console.log("Delete", record);
        setData(data.filter((item) => item.key !== record.key));
    };

    const enhancedData = Array.isArray(data)
        ? data.map((row) => ({
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
        }))
        : []; // fallback to empty array



    const onFinish = (values) => {
        console.log("Fares Configration:", values);
    }


    return (
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            {/* Fares Config Form */}
            <div className="w-full flex justify-center mt-5">
                <Form
                    name="personalForm"
                    layout="vertical"
                    className="w-[70%] max-w-full p-6 shadow-md bg-gray-200 rounded-xl"
                    autoComplete="off"
                    onFinish={onFinish}
                >

                    {/* Header Section */}
                    <div className="flex justify-center">

                        <h1 className="text-3xl mb-5">Fares By Vehicle</h1>

                    </div>

                    <Form form={form} layout="vertical">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Vehicle Type */}
                            <Form.Item label="Vehicle Type" name="vehicletype">
                                <Select placeholder="Select Vehicle Type">
                                    <Option value="normalDays">Normal Days</Option>
                                    <Option value="specialDays">Special Days</Option>
                                </Select>
                            </Form.Item>

                            {/* Operator */}
                            <Form.Item label="Operator" name="operator">
                                <Select placeholder="Select Operator">
                                    <Option value="amount">Amount</Option>
                                    <Option value="percentage">Percentage</Option>
                                </Select>
                            </Form.Item>

                            {/* Value */}
                            <Form.Item label="Value" name="value">
                                <Input />
                            </Form.Item>

                            {/* Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Button
                                    className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full"
                                    type="primary"
                                >
                                    SAVE
                                </Button>

                                <Button
                                    className="bg-red-600 border-none hover:!bg-red-500 text-white px-6 py-2 w-full"
                                    type="danger"
                                    onClick={() => form.resetFields()}  // <-- Reset form
                                >
                                    CLEAR
                                </Button>
                            </div>
                        </div>
                    </Form>


                </Form>
            </div>

            {/* Table fare Config */}
            <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 lg:px-10 mt-5">
                <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[70vw] overflow-x-auto rounded-xl">
                    <DynamicTable data={enhancedData} />
                </div>
            </div>

        </div>
    )
}