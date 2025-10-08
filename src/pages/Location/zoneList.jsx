import { useState } from "react";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";
import { Button } from "antd";
import { Edit, Trash2 } from "lucide-react";
import { FiRefreshCw } from "react-icons/fi";


const zonesData = [
    {
        key: 1,
        name: "BASE NW7",
        shortName: "BASE",
        type: "Major",
        category: "Inner",
    },
    {
        key: 2,
        name: "Willesden",
        shortName: "WILS",
        type: "Minor",
        category: "Inner",
    },
    {
        key: 3,
        name: "Central Park",
        shortName: "CP",
        type: "Major",
        category: "Outer",
    },
    {
        key: 4,
        name: "West End",
        shortName: "WE",
        type: "Minor",
        category: "Inner",
    },
    {
        key: 5,
        name: "City Center",
        shortName: "CC",
        type: "Major",
        category: "Inner",
    },
];


const ZoneList = () => {
    const [data, setData] = useState(zonesData);

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
                <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-3">
                    <h2 className="text-3xl md:text-4xl py-3 text-center md:text-left">Zones</h2>
                    <Button className="bg-[#424899] text-white flex items-center gap-2 px-4 py-2 w-full md:w-auto justify-center">
                        <FiRefreshCw size={20} /> Refresh
                    </Button>
                </div>

                {/* Table Section */}
                <div className="w-full overflow-x-auto">
                    <DynamicTable data={enhancedData} />
                </div>
            </div>

        </>

    );
};

export default ZoneList;
