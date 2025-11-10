import { Button, Form, Input } from "antd";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import DynamicTable from "../dynamicTable";


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
];

export default function WebLogin() {

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
        <div>
            <div className="bg-gray-200 p-5 mt-2 rounded-lg">
                <div className="w-full">
                    <Form layout="vertical">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">

                            <Form.Item label="Account Number" name="accountNumber">
                                <Input type="number" className="w-full" />
                            </Form.Item>

                            <Form.Item label="User Name" name="userName">
                                <Input className="w-full" />
                            </Form.Item>

                            <Form.Item label="Password" name="password">
                                <Input type="password" className="w-full" />
                            </Form.Item>

                            <Form.Item label="Mobile" name="mobile">
                                <Input type="number" className="w-full" />
                            </Form.Item>

                            <Form.Item label="Telephone" name="telephone">
                                <Input type="number" className="w-full" />
                            </Form.Item>

                            <Form.Item className="mt-8 text-center">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-[#424899] border-none hover:bg-[#5a60d1] px-8 py-3 w-full sm:w-1/2 md:w-3/3"
                                >
                                    Save
                                </Button>
                            </Form.Item>



                        </div>
                    </Form>
                </div>

                {/* Dynamic Table */}
                <div className="w-full overflow-x-auto">
                    <DynamicTable data={enhancedData} />
                </div>


            </div>
        </div>
    )
}