import { Button, Form, Select } from "antd";
import { Trash2 } from "lucide-react";
import { useState } from "react";
import DynamicTable from "../dynamicTable";

export default function RestrictedDrivers() {
    const [form] = Form.useForm();
    const [data, setData] = useState([]);
    const [driverOptions] = useState([
        "John Doe",
        "Jane Smith",
        "Michael Brown",
        "Lisa Jones",
    ]);

    const handleAdd = (values) => {
        const newDriver = {
            key: Date.now(),
            driverName: values.driverName,
            action: (
                <div className="flex justify-center">
                    <Button
                        className="bg-red-700 text-white px-2 py-1 text-sm"
                        icon={<Trash2 size={16} />}
                        onClick={() => handleDeleteByKey(Date.now())} // temporary key, will fix below
                    />
                </div>
            ),
        };
        setData((prev) => [...prev, newDriver]);
        form.resetFields();
    };

    const handleDeleteByKey = (key) => {
        setData((prev) => prev.filter((item) => item.key !== key));
    };

    // Fix: need to update action buttons with correct key
    const enhancedData = data.map((row) => ({
        ...row,
        action: (
            <div className="flex justify-center">
                <Button
                    className="bg-red-700 text-white px-2 py-1 text-sm"
                    icon={<Trash2 size={16} />}
                    onClick={() => handleDeleteByKey(row.key)}
                />
            </div>
        ),
    }));

    const columns = [
        {
            title: "Restricted Driver",
            dataIndex: "driverName",
            key: "driverName",
            align: "center",
        },
        {
            title: "Action",
            dataIndex: "action",
            key: "action",
            align: "center",
        },
    ];

    return (
        <div>
            <div className="bg-gray-200 p-5 mt-2 rounded-lg">
                <Form layout="vertical" form={form} onFinish={handleAdd} className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-1gap-1 items-end">
                        <Form.Item
                            label="Select Restricted Driver"
                            name="driverName"
                            className="w-full w-full"
                        >
                            <Select
                                placeholder="Select driver"
                                size="large"
                                showSearch
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().includes(input.toLowerCase())
                                }
                            >
                                {driverOptions.map((driver, index) => (
                                    <Select.Option key={index} value={driver}>
                                        {driver}
                                    </Select.Option>
                                ))}
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-[#757cdd] text-white hover:!bg-[#5a60d1] hover:!text-white border-none"
                            >
                                Add
                            </Button>
                        </Form.Item>
                    </div>
                </Form>

                <div className="w-full overflow-x-auto mt-4">
                    <DynamicTable columns={columns} data={enhancedData} />
                </div>

            </div>
        </div>
    );
}
