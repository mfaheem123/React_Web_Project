import { Button, Form, Input, List, Select } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";


export default function CreatePlotFares() {

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


    const onFinish = (values) => {
        console.log("Fares Configration:", values);
    };

    // Form main list add drop ka code 

    const [fromInputValue, setFromInputValue] = useState("");
    const [fromLocations, setFromLocations] = useState([]);
    const [toInputValue, setToInputValue] = useState("");
    const [toLocations, setToLocations] = useState([]);


    const handleAddFrom = () => {
        if (fromInputValue.trim()) {
            setFromLocations([...fromLocations, fromInputValue]);
            setFromInputValue("");
        }
    };

    const handleDeleteFrom = (item) => {
        setFromLocations(fromLocations.filter(loc => loc !== item));
    };

    const handleAddTo = () => {
        if (toInputValue.trim()) {
            setToLocations([...toLocations, toInputValue]);
            setToInputValue("");
        }
    };

    const handleDeleteTo = (item) => {
        setToLocations(toLocations.filter(loc => loc !== item));
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
                    <div className="flex justify-center">

                        <h1 className="text-3xl mb-5">Plot Fares</h1>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">

                        {/* Vehicle Type */}
                        <Form.Item label="Vehicle Type" name="vehicletype">
                            <Select placeholder="Select Vehicle Type">
                                <Option value="normalDays">Normal Days</Option>
                                <Option value="specialDays">Special Days</Option>
                            </Select>
                        </Form.Item>

                        {/* Fares */}
                        <Form.Item label="Fares" name="fares">
                            <Input />
                        </Form.Item>

                        {/* From Location */}
                        <Form.Item label="From Location">
                            <div className="flex mb-2">
                                <Input
                                    value={fromInputValue}
                                    onChange={(e) => setFromInputValue(e.target.value)}
                                    placeholder="Enter location"
                                />
                                <Button
                                    type="primary"
                                    icon={<PlusOutlined />}
                                    onClick={handleAddFrom}
                                    className="ml-2 bg-[#757cdd]"
                                />
                            </div>
                            <List
                                bordered
                                dataSource={fromLocations}
                                renderItem={(item) => (
                                    <List.Item
                                        actions={[
                                            <DeleteOutlined
                                                style={{ color: "red" }}
                                                onClick={() => handleDeleteFrom(item)}
                                            />,
                                        ]}
                                    >
                                        {item}
                                    </List.Item>
                                )}
                                className="mb-4"
                            />
                        </Form.Item>

                        {/* To Location */}
                        <Form.Item label="To Location">
                            <div className="flex mb-2">
                                <Input
                                    value={toInputValue}
                                    onChange={(e) => setToInputValue(e.target.value)}
                                    placeholder="Enter location"
                                />
                                <Button
                                    type="primary"
                                    icon={<PlusOutlined />}
                                    onClick={handleAddTo}
                                    className="ml-2 bg-[#757cdd]"
                                />
                            </div>
                            <List
                                bordered
                                dataSource={toLocations}  // <-- fixed to use toLocations
                                renderItem={(item) => (
                                    <List.Item
                                        actions={[
                                            <DeleteOutlined
                                                style={{ color: "red" }}
                                                onClick={() => handleDeleteTo(item)}
                                            />,
                                        ]}
                                    >
                                        {item}
                                    </List.Item>
                                )}
                                className="mb-4"
                            />
                        </Form.Item>

                        {/* Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Button
                                className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full"
                                type="primary"
                                onClick={() => console.log("From Locations:", fromLocations, "To Locations:", toLocations)}
                            >
                                SAVE
                            </Button>

                            <Button
                                className="bg-red-600 border-none hover:!bg-red-500 text-white px-6 py-2 w-full"
                                type="danger"
                                onClick={() => window.location.reload()}  // Refresh page
                            >
                                CLEAR
                            </Button>
                        </div>




                    </div>

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