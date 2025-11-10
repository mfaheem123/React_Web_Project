import { Button, Form, Input } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

export default function DriverSinBin() {

    const driversData = [
        {
            username: "driver_001",
            name: "Ali Khan",
            vehicle: "Toyota Corolla"
        },
        {
            username: "driver_002",
            name: "Ahmed Raza",
            vehicle: "Suzuki Alto"
        },
        {
            username: "driver_003",
            name: "Bilal Ahmed",
            vehicle: "Honda Civic"
        },
        {
            username: "driver_004",
            name: "Usman Malik",
            vehicle: "Kia Sportage"
        },
        {
            username: "driver_005",
            name: "Hassan Shah",
            vehicle: "Hyundai Tucson"
        },
    ];


    const [data, setData] = useState(driversData);

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

    const onFinishPersonal = (values) => {
        console.log("Personal Info:", values);
    };
    return (
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="w-full flex flex-col items-center bg-gray-100 p-4">
                {/* Header */}
                <div className="w-full text-center">
                    <h1 className="bg-gray-200 p-5 text-3xl font-semibold rounded-xl shadow">
                        Driver Sin Bin Settings
                    </h1>
                </div>

                {/* Form Section */}
                <Form
                    name="personalForm"
                    layout="vertical"
                    className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-[70%] bg-gray-200 p-6 rounded-2xl shadow-md flex flex-col items-center"
                    onFinish={onFinishPersonal}
                    autoComplete="off"
                >
                    {/* Top Section */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
                        <Form.Item
                            label="Recover Jobs (MIN)"
                            name="recoverJobs"
                            className="w-full"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Reject Jobs (MIN)"
                            name="transactionType"
                            className="w-full"
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Ignore Jobs"
                            name="ignoreJobs"
                            className="w-full"
                        >
                            <Input />
                        </Form.Item>
                    </div>

                    {/* Button Section */}
                    <div className="flex justify-center w-full mt-6">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-8 py-2 text-lg rounded-md"
                        >
                            Save
                        </Button>
                    </div>
                </Form>
            </div>

            <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-4">
                Sin Bin Drivers
            </h2>

            <div className="w-full flex justify-center px-2 sm:px-4">
                <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] bg-white rounded-xl shadow-md p-3 sm:p-5 overflow-x-auto">
                    <DynamicTable data={enhancedData} />
                </div>
            </div>  


        </div>
    )
}