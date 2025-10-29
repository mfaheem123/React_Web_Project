import { useState } from "react";
import { Button, Checkbox, DatePicker, Form, Input, Select, TimePicker } from "antd";
import { Edit, Trash2 } from "lucide-react";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";

const usersData = [
    {
        ref: "BK-1001",
        datetime: "2025-10-29 09:30 AM",
        customer: "John Doe",
        pickup: "London Station",
        dropoff: "Oxford Street",
        acc: "A123",
        drv: "Michael",
        pt: "Card",
        veh: "Toyota Prius",
        note: "VIP customer",
        fare: "£25.00",
        status: "Completed",
        jt: "Return",
        subs: "UK Branch",
    },
    {
        ref: "BK-1002",
        datetime: "2025-10-29 11:00 AM",
        customer: "Emily Smith",
        pickup: "Baker Street",
        dropoff: "Heathrow Airport",
        acc: "B456",
        drv: "Daniel",
        pt: "Cash",
        veh: "BMW X3",
        note: "Airport run",
        fare: "£45.00",
        status: "Ongoing",
        jt: "Single",
        subs: "West Branch",
    },
    {
        ref: "BK-1003",
        datetime: "2025-10-29 01:15 PM",
        customer: "Alex Johnson",
        pickup: "Canary Wharf",
        dropoff: "King’s Cross",
        acc: "C789",
        drv: "Chris",
        pt: "Card",
        veh: "Mercedes E-Class",
        note: "Corporate ride",
        fare: "£30.00",
        status: "Pending",
        jt: "Single",
        subs: "Central Branch",
    },
    {
        ref: "BK-1004",
        datetime: "2025-10-29 03:45 PM",
        customer: "Sophia Brown",
        pickup: "Paddington",
        dropoff: "Waterloo",
        acc: "D321",
        drv: "Robert",
        pt: "Card",
        veh: "Audi A6",
        note: "Regular booking",
        fare: "£20.00",
        status: "Cancelled",
        jt: "Single",
        subs: "South Branch",
    },
];

const PreBooking = () => {

    const cols = [
        { title: "REF #", dataIndex: "ref", key: "ref", align: "center" },
        { title: "DATETIME", dataIndex: "datetime", key: "datetime", align: "center" },
        { title: "CUSTOMER", dataIndex: "customer", key: "customer", align: "center" },
        { title: "PICKUP", dataIndex: "pickup", key: "pickup", align: "center" },
        { title: "DROPOFF", dataIndex: "dropoff", key: "dropoff", align: "center" },
        { title: "ACC", dataIndex: "acc", key: "acc", align: "center" },
        { title: "DRV", dataIndex: "drv", key: "drv", align: "center" },
        { title: "P/T", dataIndex: "pt", key: "pt", align: "center" },
        { title: "VEH", dataIndex: "veh", key: "veh", align: "center" },
        { title: "NOTE", dataIndex: "note", key: "note", align: "center" },
        { title: "FARE", dataIndex: "fare", key: "fare", align: "center" },
        { title: "STATUS", dataIndex: "status", key: "status", align: "center" },
        { title: "J/T", dataIndex: "jt", key: "jt", align: "center" },
        { title: "SUBS", dataIndex: "subs", key: "subs", align: "center" },
        {
            title: "ACTIONS",
            dataIndex: "action",
            key: "action",
            align: "center",
        },
    ];

    const [data, setData] = useState(usersData);

    const handleUpdate = (record) => {
        console.log("Update", record);
    };

    const handleDelete = (record) => {
        console.log("Delete", record);
        setData(data.filter((item) => item.key !== record.key));
    };

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
        <>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="w-full overflow-x-auto mt-5 px-2 md:px-0">
                {/* Heading Section */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4 gap-4">

                    {/* Left side: Title + Checkbox */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                        <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
                            Pre Booking     (<span className="text-green-600">{data.length}</span>)
                        </h2>
                    </div>

                    {/* Right side: Refresh Button */}
                    <div className="flex justify-center md:justify-end w-full md:w-auto">
                        <Button type="primary" className="bg-[#4B5FD4] hover:!bg-[#3a4bb0] px-6 py-2">
                            Refresh
                        </Button>
                    </div>
                </div>

                <div className="w-full mx-auto p-2">
                    <Form layout="vertical">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                            {/* Text Input */}
                            <Form.Item label="Name" name="name">
                                <Input placeholder="Enter name" />
                            </Form.Item>

                            {/* Select */}
                            <Form.Item label="Category" name="category">
                                <Select placeholder="Select category">
                                    <Select.Option value="a">Option A</Select.Option>
                                    <Select.Option value="b">Option B</Select.Option>
                                    <Select.Option value="c">Option C</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Start Date & Time">
                                <div className="flex gap-2">
                                    <DatePicker className="flex-1" />
                                    <TimePicker className="flex-1" />
                                </div>
                            </Form.Item>

                            <Form.Item label="End Date & Time">
                                <div className="flex gap-2">
                                    <DatePicker className="flex-1" />
                                    <TimePicker className="flex-1" />
                                </div>
                            </Form.Item>

                            {/* Right side: Refresh Button */}
                            <div className="flex justify-center md:justify-end w-full md:w-auto mt-8 gap-4">
                                <Button type="primary" className="bg-[#4B5FD4] hover:!bg-[#3a4bb0] px-6 py-2">
                                    Search
                                </Button>
                                <Button type="primary" className="bg-[#4B5FD4] hover:!bg-[#3a4bb0] px-6 py-2">
                                    Clear
                                </Button>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
                            {/* Checkboxes */}
                            <div className="flex flex-wrap gap-4">
                                <Checkbox value="Cancelled">Cancelled</Checkbox>
                                <Checkbox value="Incomplete">Incomplete</Checkbox>
                                <Checkbox value="Missed">Missed</Checkbox>
                                <Checkbox value="Declined">Declined</Checkbox>
                            </div>

                            {/* Buttons */}
                            <div className="flex gap-4">
                                <Button type="primary" className="bg-[#4B5FD4] hover:!bg-[#3a4bb0] px-6 py-2">
                                    Cancelled
                                </Button>
                                <Button type="primary" className="bg-[#4B5FD4] hover:!bg-[#3a4bb0] px-6 py-2">
                                    Delete Selected
                                </Button>
                            </div>
                        </div>


                    </Form>
                </div>


                {/* Dynamic Table */}
                <div className="w-full overflow-x-auto">
                    <DynamicTable columns={cols} data={enhancedData} />
                </div>
            </div>

        </>
    );
};

export default PreBooking;
