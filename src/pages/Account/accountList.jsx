import { useState } from "react";
import { Button } from "antd";
import { Edit, Trash2 } from "lucide-react";
import Navbar from "../../components/navbar";
import { Form, Checkbox } from "antd";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";

const usersData = [
    {
        username: "john_doe",
        email: "john.doe@example.com",
        phone: "+1-202-555-0156",
        fax: "+1-202-555-0157",
        role: "Admin",
        subsidiary: "North Branch",
    },
    {
        username: "jane_smith",
        email: "jane.smith@example.com",
        phone: "+1-202-555-0189",
        fax: "+1-202-555-0190",
        role: "Manager",
        subsidiary: "East Branch",
    },
    {
        username: "michael_brown",
        email: "michael.brown@example.com",
        phone: "+1-202-555-0123",
        fax: "+1-202-555-0124",
        role: "Staff",
        subsidiary: "West Branch",
    },
    {
        username: "lisa_jones",
        email: "lisa.jones@example.com",
        phone: "+1-202-555-0145",
        fax: "+1-202-555-0146",
        role: "Supervisor",
        subsidiary: "Central Branch",
    },
    {
        username: "david_wilson",
        email: "david.wilson@example.com",
        phone: "+1-202-555-0167",
        fax: "+1-202-555-0168",
        role: "Admin",
        subsidiary: "South Branch",
    },
    {
        username: "susan_martin",
        email: "susan.martin@example.com",
        phone: "+1-202-555-0199",
        fax: "+1-202-555-0200",
        role: "Manager",
        subsidiary: "North Branch",
    },
    {
        username: "kevin_clark",
        email: "kevin.clark@example.com",
        phone: "+1-202-555-0111",
        fax: "+1-202-555-0112",
        role: "Staff",
        subsidiary: "East Branch",
    },
    {
        username: "emily_davis",
        email: "emily.davis@example.com",
        phone: "+1-202-555-0133",
        fax: "+1-202-555-0134",
        role: "Supervisor",
        subsidiary: "West Branch",
    },
];


const AccountList = () => {
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
                            Accounts (<span className="text-green-600">{data.length}</span>)
                        </h2>

                        <Form.Item name="blockList" className="mb-0">
                            <Checkbox className="text-red-600 scale-110">Inactive</Checkbox>
                        </Form.Item>
                    </div>

                    {/* Right side: Refresh Button */}
                    <div className="flex justify-center md:justify-end w-full md:w-auto">
                        <Button type="primary" className="bg-[#4B5FD4] hover:!bg-[#3a4bb0] px-6 py-2">
                            Refresh
                        </Button>
                    </div>
                </div>


                {/* Dynamic Table */}
                <div className="w-full overflow-x-auto">
                    <DynamicTable data={enhancedData} />
                </div>
            </div>

        </>
    );
};

export default AccountList;
