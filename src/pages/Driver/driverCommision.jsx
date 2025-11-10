import { useState } from "react";
import { Form, Button, Select } from "antd";
import { Edit, Trash2 } from "lucide-react";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";
import { FiRefreshCw } from "react-icons/fi";


export default function DriverCommision() {

    const { Option } = Select;


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


    const [type, setType] = useState("Commission");

    const handleTypeChange = (value) => {
        setType(value);
    };

    return (
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>
            <div className="w-full overflow-x-auto mt-5 px-2 md:px-0">
                {/* Heading Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-3 w-full">
                    <h2 className="text-2xl md:text-4xl py-3 text-center md:text-left p-5">
                        Driver {type} (<span className="text-green-600">{data.length}</span>)
                    </h2>
                    <div className="w-[30%]">
                        <Form.Item
                            label="Type"
                            name="type"
                            rules={[{ required: true, message: "Please select a Type!" }]}
                        >
                            <Select
                                placeholder="Select Commission / Rent"
                                onChange={handleTypeChange}
                                value={type}
                            >
                                <Option value="Commission">Commission</Option>
                                <Option value="Rent">Rent</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <Button className="bg-[#424899] text-white flex items-center gap-2 px-4 py-2 w-full md:w-auto justify-center">
                        <FiRefreshCw size={20} /> Refresh
                    </Button>

                </div>

                {/* Dynamic Table */}
                <div className="w-full overflow-x-auto p-5">
                    <DynamicTable data={enhancedData} />
                </div>
            </div>
        </div>
    )
}