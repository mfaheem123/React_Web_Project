import { Button, Form, Input } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import { useState } from "react";
import { Table } from "antd";
import { SketchPicker } from "react-color";

export default function LocationTypeShortcuts() {

    const initialData = [
        { key: 1, type: "address", shortcut: "", bg: "#000000", fg: "#FFFFFF" },
        { key: 2, type: "airport", shortcut: "a", bg: "#000000", fg: "#FFFFFF" },
        { key: 3, type: "Bank", shortcut: "b", bg: "#000000", fg: "#FFFFFF" },
        { key: 4, type: "base", shortcut: "", bg: "#000000", fg: "#FFFFFF" },
        { key: 5, type: "care home", shortcut: "ch", bg: "#000000", fg: "#FFFFFF" },
        { key: 6, type: "churches", shortcut: "cr", bg: "#000000", fg: "#FFFFFF" },
        { key: 7, type: "clinic", shortcut: "cli", bg: "#000000", fg: "#FFFFFF" },
        { key: 8, type: "club/bar", shortcut: "p", bg: "#000000", fg: "#FFFFFF" },
        { key: 9, type: "corporate", shortcut: "c", bg: "#000000", fg: "#FFFFFF" },
        { key: 10, type: "dental clinic", shortcut: "dc", bg: "#000000", fg: "#FFFFFF" },
        { key: 11, type: "hospital", shortcut: "h", bg: "#000000", fg: "#FFFFFF" },
        { key: 12, type: "hotels", shortcut: "ht", bg: "#000000", fg: "#FFFFFF" },
        { key: 13, type: "mosques", shortcut: "m", bg: "#000000", fg: "#FFFFFF" },
        { key: 14, type: "pharmacies", shortcut: "ph", bg: "#000000", fg: "#FFFFFF" },
        { key: 15, type: "postcode", shortcut: "", bg: "#000000", fg: "#FFFFFF" },
        { key: 16, type: "railway station", shortcut: "r", bg: "#000000", fg: "#FFFFFF" },
        { key: 17, type: "restaurant", shortcut: "rt", bg: "#000000", fg: "#FFFFFF" },
        { key: 18, type: "schools", shortcut: "sc", bg: "#000000", fg: "#FFFFFF" },
        { key: 19, type: "seaports", shortcut: "sp", bg: "#000000", fg: "#FFFFFF" },
        { key: 20, type: "sport center", shortcut: "", bg: "#000000", fg: "#FFFFFF" },
        { key: 21, type: "store", shortcut: "s", bg: "#000000", fg: "#FFFFFF" },
        { key: 22, type: "synagogue", shortcut: "sy", bg: "#000000", fg: "#FFFFFF" },
        { key: 23, type: "theatre", shortcut: "th", bg: "#000000", fg: "#FFFFFF" },
        { key: 24, type: "town", shortcut: "t", bg: "#000000", fg: "#FFFFFF" },
        { key: 25, type: "universities", shortcut: "u", bg: "#000000", fg: "#FFFFFF" },
        { key: 26, type: "vet clinic", shortcut: "", bg: "#000000", fg: "#FFFFFF" },
    ];

    const [data, setData] = useState(initialData);
    const [colorPicker, setColorPicker] = useState({ visible: false, row: null, field: null });

    const handleShortcutChange = (key, value) => {
        const updated = data.map((item) =>
            item.key === key ? { ...item, shortcut: value } : item
        );
        setData(updated);
    };

    const handleColorChange = (color) => {
        const updated = data.map((item) =>
            item.key === colorPicker.row ? { ...item, [colorPicker.field]: color.hex } : item
        );
        setData(updated);
        setColorPicker({ visible: false, row: null, field: null });
    };

    const columns = [
        { title: "LOCATION TYPE", dataIndex: "type" },

        {
            title: "SHORTCUT",
            dataIndex: "shortcut",
            render: (_, record) => (
                <Input
                    value={record.shortcut}
                    onChange={(e) => handleShortcutChange(record.key, e.target.value)}
                    className="w-24"
                />
            ),
        },

        {
            title: "BACKGROUND COLOR",
            render: (_, record) => (
                <div style={{ position: "relative" }}>
                    <div
                        className="w-24 h-6 border border-gray-400 cursor-pointer"
                        style={{ backgroundColor: record.bg }}
                        onClick={() => setColorPicker({ visible: true, row: record.key, field: "bg" })}
                    />
                    {colorPicker.visible && colorPicker.row === record.key && colorPicker.field === "bg" && (
                        <div style={{ position: "absolute", zIndex: 999 }}>
                            <SketchPicker color={record.bg} onChange={handleColorChange} />
                        </div>
                    )}
                </div>
            ),
        },

        {
            title: "FOREGROUND COLOR",
            render: (_, record) => (
                <div style={{ position: "relative" }}>
                    <div
                        className="w-24 h-6 border border-gray-400 cursor-pointer"
                        style={{ backgroundColor: record.fg }}
                        onClick={() => setColorPicker({ visible: true, row: record.key, field: "fg" })}
                    />
                    {colorPicker.visible && colorPicker.row === record.key && colorPicker.field === "fg" && (
                        <div style={{ position: "absolute", zIndex: 999 }}>
                            <SketchPicker color={record.fg} onChange={handleColorChange} />
                        </div>
                    )}
                </div>
            ),
        },
    ];

    const handleSave = () => {
        console.log("Saved Data:", data);
        alert("Data saved! Check console.");
    };

    return (
        <div>
            <Navbar />
            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className='mt-5 flex justify-center h-full w-full'>
                <Form
                    layout="vertical"
                    className="w-full max-w-[80%] p-6 rounded-2xl shadow-md bg-gray-200"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold text-[#757cdd]">Location Type Shortcut</h2>

                        <Button
                            type="primary"
                            className="bg-[#757cdd]"
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    </div>

                    <Table columns={columns} dataSource={data} pagination={false} bordered />
                </Form>
            </div>
        </div>
    );
}
