import React, { useState } from "react";
import { Button } from "antd";
import { Edit, Trash2 } from "lucide-react";
import Navbar from "../../components/navbar";
import { Form, Checkbox } from 'antd'
import RecentTabsHeader from "../../components/recentTabs";

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

    const totLoc = locationData.length;


    return (
        <>

            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="w-full overflow-x-auto mt-5">

                <div className="flex items-center justify-between w-[20%]">
                    <h2 className="text-4xl py-3">Locations (<span className="text-green-600 mb-15">{totLoc}</span>)</h2>

                    <div>
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            className="mb-3"
                        >
                            <Checkbox className="text-red-600">Block List</Checkbox>
                        </Form.Item>
                    </div>

                </div>

                <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Post Code</th>
                            <th className="px-4 py-2 border">Shortcut</th>
                            <th className="px-4 py-2 border">Address</th>
                            <th className="px-4 py-2 border">Location Type</th>
                            <th className="px-4 py-2 border">Zone</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => (
                            <tr key={row.key} className="text-sm hover:bg-gray-50">
                                <td className="border px-2 py-1">{row.name}</td>
                                <td className="border px-2 py-1">{row.postcode}</td>
                                <td className="border px-2 py-1">{row.shortcut}</td>
                                <td className="border px-2 py-1">{row.address}</td>
                                <td className="border px-2 py-1">{row.locationType}</td>
                                <td className="border px-2 py-1">{row.zone}</td>
                                <td className="border px-2 py-1">
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
};

export default LocationTable;
