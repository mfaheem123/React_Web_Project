import { Button, Form, Input, Select } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import DynamicTable from "../../components/dynamicTable";

export default function SurCharges() {

    const dummyData = [
        {
            TYPE: "Normal",
            CONDITION: "Sunny",
            POSTCODE: "10001",
            FARE: 15.5,
            PC: true,
            EDC: false,
            CC: true,
            DURATION: "30 mins",
            DAY: "Monday",
            FROM: "Station A",
            TO: "Station B"
        },
        {
            TYPE: "Special",
            CONDITION: "Rainy",
            POSTCODE: "10002",
            FARE: 20.0,
            PC: false,
            EDC: true,
            CC: false,
            DURATION: "45 mins",
            DAY: "Tuesday",
            FROM: "Station C",
            TO: "Station D"
        },
        {
            TYPE: "Normal",
            CONDITION: "Cloudy",
            POSTCODE: "10003",
            FARE: 12.75,
            PC: true,
            EDC: true,
            CC: true,
            DURATION: "25 mins",
            DAY: "Wednesday",
            FROM: "Station E",
            TO: "Station F"
        },
        {
            TYPE: "Special",
            CONDITION: "Sunny",
            POSTCODE: "10004",
            FARE: 18.0,
            PC: false,
            EDC: false,
            CC: true,
            DURATION: "40 mins",
            DAY: "Thursday",
            FROM: "Station G",
            TO: "Station H"
        }
    ];

    const { Option } = Select
    const [form] = Form.useForm();

    const [data, setData] = useState(dummyData);

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
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-center bg-gray-200 p-4 gap-4">

                {/* Left: Form Section */}
                <div className="w-full lg:w-[40%] bg-white shadow-md rounded-xl p-6">
                    <Form form={form} layout="vertical">
                        <h1 className="text-2xl font-bold mb-5 text-center text-[#424899]">SurCharges</h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Vehicle Type */}
                            <Form.Item label="Surcharges Type" name="surchargesType">
                                <Select placeholder="Select Surcharges Type">
                                    <Option value="normalDays">Normal Days</Option>
                                    <Option value="specialDays">Special Days</Option>
                                </Select>
                            </Form.Item>

                            {/* Operator */}
                            <Form.Item label="Fare" name="fare">
                                <Input type="number" placeholder="Enter Fare!" />
                            </Form.Item>

                            <Form.Item label="TimeLine" name="timeline">
                                <Select placeholder="Select TimeLine">
                                    <Option value="normalDays">Normal Days</Option>
                                    <Option value="specialDays">Special Days</Option>
                                </Select>
                            </Form.Item>
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {/* Vehicle Type */}
                            <Form.Item label="Apply Condition" name="applycondition">
                                <Select placeholder="Select Apply Condition">
                                    <Option value="normalDays">Normal Days</Option>
                                    <Option value="specialDays">Special Days</Option>
                                </Select>
                            </Form.Item>

                            {/* Operator */}
                            <Form.Item label="Parking" name="parking">
                                <Input type="number" placeholder="Enter Parking!" />
                            </Form.Item>

                            <div>
                                <Form.Item label="From" name="fromDate">
                                    <Input type="date" />
                                </Form.Item>
                                <Form.Item name="fromTime">
                                    <Input type="time" />
                                </Form.Item>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            <Form.Item label="Postcode" name="postcode">
                                <Input type="number" placeholder="Enter Postcode!" />
                            </Form.Item>

                            {/* Operator */}
                            <Form.Item label="Extra DropOff" name="extraDropoff">
                                <Input type="number" placeholder="Enter Extra DropOff!" />
                            </Form.Item>

                            <div>
                                <Form.Item label="To" name="toDate">
                                    <Input type="date" />
                                </Form.Item>
                                <Form.Item name="toTime">
                                    <Input type="time" />
                                </Form.Item>
                            </div>

                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            <Form.Item label="Operator" name="operator">
                                <Select placeholder="Select Operator">
                                    <Option value="normalDays">Normal Days</Option>
                                    <Option value="specialDays">Special Days</Option>
                                </Select>
                            </Form.Item>

                            {/* Operator */}
                            <Form.Item label="Congestion" name="congestion">
                                <Input type="number" placeholder="Enter Extra Congestion!" />
                            </Form.Item>

                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center mt-6">
                            <Button
                                className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full sm:w-[40%] md:w-[20%]"
                                type="primary"
                            >
                                SAVE
                            </Button>
                        </div>

                    </Form>
                </div>

                {/* Right: List Section */}
               <div className="w-full lg:w-3/5 bg-white shadow-md rounded-md ">
                    <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 lg:px-10 mt-5">
                        <div className="w-full max-w-full sm:max-w-full md:max-w-full lg:max-w-full xl:max-w-full overflow-x-auto rounded-xl">
                            <DynamicTable data={enhancedData} />
                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}