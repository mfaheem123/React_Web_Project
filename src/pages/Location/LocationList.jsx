import { useState } from "react";
import { Button } from "antd";
import { Edit, Trash2 } from "lucide-react";
import Navbar from "../../components/navbar";
import { Form, Checkbox } from "antd";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";

const locationData = [
    {
        key: 1,
        name: "Central Park",
        postcode: "NW10 2PN",
        shortcut: "CP",
        address: "114A High Road London",
        locationType: "Office",
        zone: "London Zone 1",
    },
    {
        key: 2,
        name: "West End",
        postcode: "E13 9LF",
        shortcut: "WE",
        address: "65 Jedburgh Road, London",
        locationType: "Residential",
        zone: "London Zone 2",
    },
    {
        key: 3,
        name: "City Center",
        postcode: "NW6 1AA",
        shortcut: "CC",
        address: "Cholmley Gardens, London",
        locationType: "Business",
        zone: "London Zone 1",
    },
];

const LocationTable = () => {
    const [data, setData] = useState(locationData);

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

    return (
        <>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="w-full overflow-x-auto mt-5 px-2 md:px-0">
                {/* Heading Section */}
                <div className="flex flex-col md:flex-row items-center justify-start mb-4 gap-3 w-full">
                    <h2 className="text-2xl md:text-4xl py-3 text-center md:text-left">
                        Locations (<span className="text-green-600">{data.length}</span>)
                    </h2>

                    <div className="flex justify-center md:justify-start">
                        <Form.Item
                            name="block list"
                            className="mb-0"
                        >
                            <Checkbox className="text-red-600">Block List</Checkbox>
                        </Form.Item>
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

export default LocationTable;
