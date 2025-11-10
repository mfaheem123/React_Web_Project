import { useState } from "react";
import Navbar from "../../../components/navbar";
import RecentTabsHeader from "../../../components/recentTabs";
import { Button, Form, Input, Select } from "antd";
import DynamicTable from "../../../components/dynamicTable";

const initialData = [
    {
        key: 1,
        date: "2025-10-01",
        driver: "John Doe",
        drivingSkill: "Excellent",
        routeKnowledge: "Good",
        customerBehaviour: "Polite",
        vehicleCondition: "Well Maintained",
        comments: "No issues",
    },
    {
        key: 2,
        date: "2025-10-02",
        driver: "Jane Smith",
        drivingSkill: "Good",
        routeKnowledge: "Excellent",
        customerBehaviour: "Friendly",
        vehicleCondition: "Average",
        comments: "Minor delays",
    },
    {
        key: 3,
        date: "2025-10-03",
        driver: "Michael Brown",
        drivingSkill: "Average",
        routeKnowledge: "Good",
        customerBehaviour: "Rude",
        vehicleCondition: "Needs Maintenance",
        comments: "Vehicle check required",
    },
];

export default function Feedback() {
    const [data] = useState(initialData);

    const columns = [
        { title: "DATE", dataIndex: "date", key: "date", align: "center" },
        { title: "DRIVER", dataIndex: "driver", key: "driver", align: "center" },
        {
            title: "DRIVING SKILL",
            dataIndex: "drivingSkill",
            key: "drivingSkill",
            align: "center",
        },
        {
            title: "ROUTE KNOWLEDGE",
            dataIndex: "routeKnowledge",
            key: "routeKnowledge",
            align: "center",
        },
        {
            title: "CUSTOMER BEHAVIOUR",
            dataIndex: "customerBehaviour",
            key: "customerBehaviour",
            align: "center",
        },
        {
            title: "VEHICLE CONDITION",
            dataIndex: "vehicleCondition",
            key: "vehicleCondition",
            align: "center",
        },
        { title: "COMMENTS", dataIndex: "comments", key: "comments", align: "center" },
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
                        <h2 className="text-2xl md:text-3xl font-semibold">FeedBack</h2>
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

                    {/* Right side — Filter Button */}
                    <div className="flex justify-center md:justify-end w-full md:w-auto gap-4">
                        <Button
                            type="primary"
                            className="bg-[#4B5FD4] hover:!bg-[#3a4bb0] px-6 py-2 rounded-md"
                        >
                            Filter
                        </Button>
                    </div>
                </div>

                {/* Feedback Table */}
                <DynamicTable columns={columns} data={data} />
            </div>
        </div>
    );
}
