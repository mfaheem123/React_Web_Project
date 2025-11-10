import { Button, Form, Input, Select } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

export default function CreateFaresSettings() {

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

    const secondFareData = [
        { FROM_MILES: 0, TO_MILES: 5, FARES: 10.50 },
        { FROM_MILES: 5, TO_MILES: 10, FARES: 18.75 },
        { FROM_MILES: 10, TO_MILES: 15, FARES: 25.00 },
        { FROM_MILES: 15, TO_MILES: 20, FARES: 32.50 },
        { FROM_MILES: 20, TO_MILES: 25, FARES: 40.00 }
    ];

    const [data, setData] = useState(fareData);
    const [data2, setData2] = useState(secondFareData);

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

    const handleUpdate2 = (record) => {
        console.log("Update", record);
    };

    const handleDelete2 = (record) => {
        console.log("Delete", record);
        setData2(data.filter((item) => item.key !== record.key));
    };
    // Dynamic table ke liye action column add karna
    const enhancedData2 = data2.map((row) => ({
        ...row,
        action: (
            <div className="flex gap-2 justify-center">
                <Button
                    className="bg-[#424899] text-white"
                    icon={<Edit size={16} />}
                    onClick={() => handleUpdate2(row)}
                />
                <Button
                    className="bg-red-700 text-white"
                    icon={<Trash2 size={16} />}
                    onClick={() => handleDelete2(row)}
                />
            </div>
        ),
    }));

    const onFinish = (values) => {
        console.log("Fares Configration:", values);
    };

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
                    <div className="flex justify-between">
                        <h1 className="text-2xl ">Fares Comfiguration</h1>

                        <Form.Item
                            name="driver"
                            className="w-[20%]"
                        >
                            <Select placeholder="Select Days">
                                <Option value="normalDays">Normal Days</Option>
                                <Option value="specialDays">Special Days</Option>
                            </Select>
                        </Form.Item>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2">

                        <Form.Item
                            label="Vehicle Type"
                            name="vehicletype"
                        >
                            <Select placeholder="Select Vehicle Type">
                                <Option value="normalDays">Normal Days</Option>
                                <Option value="specialDays">Special Days</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Account"
                            name="account"
                        >
                            <Select placeholder="Select Account">
                                <Option value="normalDays">Normal Days</Option>
                                <Option value="specialDays">Special Days</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="From Day"
                            name="fromDay"
                        >
                            <Select placeholder="Select From Day">
                                <Option value="normalDays">Normal Days</Option>
                                <Option value="specialDays">Special Days</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="To Day"
                            name="toDay"
                        >
                            <Select placeholder="Select To Day">
                                <Option value="normalDays">Normal Days</Option>
                                <Option value="specialDays">Special Days</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="From Time"
                            name="fromTime"
                        >
                            <Input type="time" />
                        </Form.Item>


                        <Form.Item
                            label="To Time"
                            name="toTime"
                        >
                            <Input type="time" />
                        </Form.Item>


                        <Form.Item
                            label="Starting Fares"
                            name="startingFares"
                        >
                            <Input placeholder="Enter Starting Fares" />
                        </Form.Item>

                        <Form.Item
                            label="Starting Miles"
                            name="startingMiles"
                        >
                            <Input placeholder="Enter Starting Miles" />
                        </Form.Item>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center mb-3 justify-center items-center w-full">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-[30%] bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full sm:w-auto mt-4 p-2"
                        >
                            Save
                        </Button>
                    </div>


                </Form>
            </div>

            {/* Table fare Config */}
            <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 lg:px-10 mt-5">
                <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[70vw] overflow-x-auto rounded-xl">
                    <DynamicTable data={enhancedData} />
                </div>
            </div>

            {/* Fare Config Milage from */}
            <div className="flex justify-center mt-5">
                <Form
                    name="personalForm"
                    layout="vertical"
                    className="w-[70%] max-w-full p-6 shadow-md bg-gray-200 rounded-xl"
                    autoComplete="off"
                    onFinish={onFinish}
                >

                    {/* Header Section */}
                    <div className="flex justify-center mb-5">
                        <h1 className="text-2xl ">Fares Comfiguration Mileage</h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">

                        <Form.Item
                            label="To Time"
                            name="toTime"
                        >
                            <Input type="time" />
                        </Form.Item>


                        <Form.Item
                            label="Starting Fares"
                            name="startingFares"
                        >
                            <Input placeholder="Enter Starting Fares" />
                        </Form.Item>

                        <Form.Item
                            label="Starting Miles"
                            name="startingMiles"
                        >
                            <Input placeholder="Enter Starting Miles" />
                        </Form.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            className="w-[30%] bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full sm:w-auto mt-7 p-2"
                        >
                            Save
                        </Button>
                    </div>

                </Form>
            </div>

            {/* Table fare Config */}
            <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 lg:px-10 mt-5">
                <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[70vw] overflow-x-auto rounded-xl">
                    <DynamicTable data={enhancedData2} />
                </div>
            </div>

        </div>
    )
}