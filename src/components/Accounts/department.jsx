import { Button, Form, Input } from "antd";
import { Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import DynamicTable from "../dynamicTable";


const usersData = [
    {
        username: "john_doe",
  
    },
    {
        username: "jane_smith",
 
    },
    {
        username: "michael_brown",
     
    },
    {
        username: "lisa_jones",
 
    },
];

export default function Departments() {

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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">

                            <Form.Item label="Department" name="department">
                                <Input className="w-full" />
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