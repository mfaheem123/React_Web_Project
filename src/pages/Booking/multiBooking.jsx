import { useState } from "react";
import { Button } from "antd";
import { Edit, Trash2 } from "lucide-react";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";

const usersData = [
    {
        key: 1,
        datetime: "2025-10-29 09:30 AM",
        customer: "John Doe",
        mobile: "+44 7700 900001",
        pickup: "London Station",
        dropoff: "Oxford Street",
    },
    {
        key: 2,
        datetime: "2025-10-29 11:00 AM",
        customer: "Emily Smith",
        mobile: "+44 7700 900002",
        pickup: "Baker Street",
        dropoff: "Heathrow Airport",
    },
    {
        key: 3,
        datetime: "2025-10-29 01:15 PM",
        customer: "Alex Johnson",
        mobile: "+44 7700 900003",
        pickup: "Canary Wharf",
        dropoff: "King’s Cross",
    },
];

const MultiBooking = () => {

    const cols = [
        { title: "DATETIME", dataIndex: "datetime", key: "datetime", align: "center" },
        { title: "CUSTOMER", dataIndex: "customer", key: "customer", align: "center" },
        { title: "MOBILE", dataIndex: "mobile", key: "mobile", align: "center" },
        { title: "PICKUP", dataIndex: "pickup", key: "pickup", align: "center" },
        { title: "DROPOFF", dataIndex: "dropoff", key: "dropoff", align: "center" },
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

    // Add action buttons to each row
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

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                        <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
                            Multi Booking (<span className="text-green-600">{data.length}</span>)
                        </h2>
                    </div>

                    <div className="flex justify-center md:justify-end w-full md:w-auto">
                        <Button type="primary" className="bg-[#4B5FD4] hover:!bg-[#3a4bb0] px-6 py-2">
                            Refresh
                        </Button>
                    </div>
                </div>

                {/* Dynamic Table */}
                <div className="w-full overflow-x-auto">
                    <DynamicTable columns={cols} data={enhancedData} />
                </div>
            </div>
        </>
    );
};

export default MultiBooking;
