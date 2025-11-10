import { useState } from "react";
import { Table, Button } from "antd";
import { SketchPicker } from "react-color";

export default function PaymentTypeColorCode() {
    const initialData = [
        { key: 1, type: "CASH", bg: "#008000", fg: "#00E6A8" },
        { key: 2, type: "CREDIT CARD", bg: "#0000A0", fg: "#0000A0" },
        { key: 3, type: "ACCOUNT", bg: "#D30000", fg: "#D30000" },
        { key: 4, type: "CREDIT CARD PAID", bg: "#E5FF00", fg: "#E5FF00" },
    ];

    const [data, setData] = useState(initialData);
    const [colorPicker, setColorPicker] = useState({ visible: false, row: null, field: null });

    const handleColorChange = (color) => {
        const updated = data.map((item) =>
            item.key === colorPicker.row ? { ...item, [colorPicker.field]: color.hex } : item
        );
        setData(updated);

        // Close the color picker after selection
        setColorPicker({ visible: false, row: null, field: null });
    };

    const columns = [
        {
            title: <span className="font-bold">PAYMENT TYPE</span>,
            dataIndex: "type",
            render: (text) => <span className="font-semibold">{text}</span>,
        },
        {
            title: <span className="font-bold">BACKGROUND COLOR</span>,
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
            title: <span className="font-bold">FOREGROUND COLOR</span>,
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
        console.log("Saved Colors: ", data);
        alert("Colors saved! Check console for values.");
    };

    return (
        <div className="p-6 w-full">
            <div className="flex justify-end mb-3">
                <Button
                    type="primary"
                    className="bg-green-600 px-6 py-2 font-semibold rounded"
                    onClick={handleSave}
                >
                    SAVE
                </Button>
            </div>

            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
            />
        </div>
    );
}
