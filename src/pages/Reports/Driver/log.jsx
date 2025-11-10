import { useState } from "react";
import Navbar from "../../../components/navbar";
import RecentTabsHeader from "../../../components/recentTabs";
import { Button, Form, Input, Select } from "antd";
import DynamicTable from "../../../components/dynamicTable";

const initialData = [
    {
        key: 1,
        ref: "REF-001",
        datetime: "2025-10-01 09:15 AM",
        vehicle: "Toyota Prius",
        pickup: "Downtown",
        dropoff: "Airport",
        fares: "$45.00",
    },
    {
        key: 2,
        ref: "REF-002",
        datetime: "2025-10-02 10:30 AM",
        vehicle: "Honda Civic",
        pickup: "Mall Street",
        dropoff: "Central Park",
        fares: "$30.00",
    },
    {
        key: 3,
        ref: "REF-003",
        datetime: "2025-10-03 07:45 PM",
        vehicle: "Suzuki Alto",
        pickup: "Main Station",
        dropoff: "City Plaza",
        fares: "$25.00",
    },
    {
        key: 4,
        ref: "REF-004",
        datetime: "2025-10-04 11:20 AM",
        vehicle: "Nissan Sunny",
        pickup: "Airport",
        dropoff: "Hotel Grand",
        fares: "$50.00",
    },
    {
        key: 5,
        ref: "REF-005",
        datetime: "2025-10-05 04:10 PM",
        vehicle: "Hyundai Elantra",
        pickup: "Tech Valley",
        dropoff: "Old Town",
        fares: "$40.00",
    },
];

export default function DriverLog() {
    const [data] = useState(initialData);


    const columns = [
        {
            title: "REF #",
            dataIndex: "ref",
            key: "ref",
            align: "center",
        },
        {
            title: "DATETIME",
            dataIndex: "datetime",
            key: "datetime",
            align: "center",
        },
        {
            title: "VEHICLE",
            dataIndex: "vehicle",
            key: "vehicle",
            align: "center",
        },
        {
            title: "PICKUP",
            dataIndex: "pickup",
            key: "pickup",
            align: "center",
        },
        {
            title: "DROPOFF",
            dataIndex: "dropoff",
            key: "dropoff",
            align: "center",
        },
        {
            title: "FARES",
            dataIndex: "fares",
            key: "fares",
            align: "center",
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
                    {/* Left side — Title */}
                    <div className="flex flex-wrap items-center gap-4">
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            Driver Log
                        </h2>
                    </div>

                    {/* Middle — Form Fields */}
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

                    {/* Right side — Buttons */}
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

                <div className="flex flex-wrap items-center justify-center gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-5">
                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-600 text-sm font-medium">Total Bookings</h3>
                        <p className="text-2xl font-semibold text-blue-600">128</p>
                    </div>

                    <div className="flex flex-col items-start">
                        <h3 className="text-gray-600 text-sm font-medium">Total Earnings</h3>
                        <p className="text-2xl font-semibold text-green-600">$3,245</p>
                    </div>
                </div>


                {/* Table */}
                <DynamicTable columns={columns} data={data} />
            </div>
        </div>
    );
}
