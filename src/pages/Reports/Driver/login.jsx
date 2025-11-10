import { useState } from "react";
import Navbar from "../../../components/navbar";
import RecentTabsHeader from "../../../components/recentTabs";
import { Button, Form, Input, Select } from "antd";
import { Edit, Trash2 } from "lucide-react";
import DynamicTable from "../../../components/dynamicTable";

const initialData = [
    {
        key: 1,
        driver: "John Doe",
        bookings: 8,
        loginDate: "2025-10-01",
        loginTime: "09:00 AM",
        logoutDate: "2025-10-01",
        logoutTime: "06:00 PM",
    },
    {
        key: 2,
        driver: "Jane Smith",
        bookings: 5,
        loginDate: "2025-10-02",
        loginTime: "10:00 AM",
        logoutDate: "2025-10-02",
        logoutTime: "05:00 PM",
    },
    {
        key: 3,
        driver: "Michael Brown",
        bookings: 7,
        loginDate: "2025-10-03",
        loginTime: "08:30 AM",
        logoutDate: "2025-10-03",
        logoutTime: "04:30 PM",
    },
];

export default function DriverLogin() {
    const [data, setData] = useState(initialData);

    const handleUpdate = (record) => {
        console.log("Update clicked:", record);
    };

    const handleDelete = (record) => {
        console.log("Delete clicked:", record);
        setData((prev) => prev.filter((item) => item.key !== record.key));
    };

    const columns = [
        {
            title: "DRIVER",
            dataIndex: "driver",
            key: "driver",
            align: "center",
        },
        {
            title: "BOOKINGS",
            dataIndex: "bookings",
            key: "bookings",
            align: "center",
        },
        {
            title: "LOGIN DATE",
            dataIndex: "loginDate",
            key: "loginDate",
            align: "center",
        },
        {
            title: "LOGIN TIME",
            dataIndex: "loginTime",
            key: "loginTime",
            align: "center",
        },
        {
            title: "LOGOUT DATE",
            dataIndex: "logoutDate",
            key: "logoutDate",
            align: "center",
        },
        {
            title: "LOGOUT TIME",
            dataIndex: "logoutTime",
            key: "logoutTime",
            align: "center",
        },
        {
            title: "ACTIONS",
            key: "actions",
            align: "center",
            render: (_, record) => (
                <div className="flex gap-2 justify-center">
                    <Button
                        className="bg-[#424899] text-white border-none"
                        icon={<Edit size={16} />}
                        onClick={() => handleUpdate(record)}
                    />
                    <Button
                        className="bg-red-700 text-white border-none"
                        icon={<Trash2 size={16} />}
                        onClick={() => handleDelete(record)}
                    />
                </div>
            ),
        },
    ];

    return (
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="w-full overflow-x-auto mt-5 px-2 md:px-0">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4 gap-4">
                    {/* Left side — Title and Form Fields */}
                    <div className="flex flex-wrap items-center gap-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Driver Login
                        </h2>
                    </div>

                    <div className="w-[60%]">
                        <Form layout="inline" className="flex flex-wrap gap-3">
                            <Form.Item name="from" label="From">
                                <Input type="date" className="w-[150px]" />
                                <Input type="time" className="w-[150px]" />
                            </Form.Item>

                            <Form.Item name="to" label="To">
                                <Input type="date" className="w-[150px]" />
                                <Input type="time" className="w-[150px]" />
                            </Form.Item>

                            <Form.Item name="driver" label="Driver">
                                <Select
                                    placeholder="Select Driver"
                                    className="w-[180px]"
                                    options={[
                                        { label: "John Doe", value: "John Doe" },
                                        { label: "Jane Smith", value: "Jane Smith" },
                                        { label: "Michael Brown", value: "Michael Brown" },
                                    ]}
                                />
                            </Form.Item>
                        </Form>
                    </div>

                    {/* Right side — Refresh Button */}
                    <div className="flex justify-center md:justify-end w-full md:w-auto gap-4">
                        <Button
                            type="primary"
                            className="bg-[#4B5FD4] hover:!bg-[#3a4bb0] px-6 py-2 rounded-md"
                        >
                            Filter
                        </Button>

                        <Button
                            type="primary"
                            className="bg-[#4B5FD4] hover:!bg-[#3a4bb0] px-6 py-2 rounded-md"
                        >
                            View
                        </Button>
                    </div>
                </div>

                {/* Table */}
                <DynamicTable columns={columns} data={data} />
            </div>
        </div>
    );
}
