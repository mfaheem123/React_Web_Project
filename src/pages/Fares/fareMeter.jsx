import { Button, Form, Input, Select, Switch, Modal } from "antd";
import { ClockCircleOutlined, DashboardOutlined } from "@ant-design/icons";
import { useState } from "react";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";
import { Trash2 } from "lucide-react";

export default function FareMeter() {
    const { Option } = Select;
    const [form] = Form.useForm();

    const [modalVisible, setModalVisible] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [selectedVehicle, setSelectedVehicle] = useState("");

    const onFinish = (values) => {
        console.log("Form Values:", values);
    };

    const handleOpenModal = () => {
        const vehicleType = form.getFieldValue("vehicleType");
        if (!vehicleType) {
            Modal.warning({
                title: "Select Vehicle Type first!",
                content: "Please select a vehicle type to view waiting time info.",
            });
            return;
        }

        setSelectedVehicle(vehicleType);
        setModalTitle(`${vehicleType === "normalDays" ? "Normal Days" : "Special Days"} Waiting Configration`);
        setModalVisible(true);
    };


    // Table 

    const waitingData = [
        { day: "Monday", time: "08:00 - 09:00", charges: 50 },
        { day: "Tuesday", time: "10:00 - 11:00", charges: 60 },
        { day: "Wednesday", time: "12:00 - 13:30", charges: 55 },
        { day: "Thursday", time: "14:00 - 15:00", charges: 65 },
        { day: "Friday", time: "16:00 - 17:00", charges: 70 },
        { day: "Saturday", time: "09:00 - 10:30", charges: 60 },
        { day: "Sunday", time: "11:00 - 12:00", charges: 75 },
        { day: "Monday", time: "13:00 - 14:00", charges: 50 },
        { day: "Tuesday", time: "15:00 - 16:30", charges: 65 },
        { day: "Wednesday", time: "17:00 - 18:00", charges: 55 },
    ];



    const [data, setData] = useState(waitingData);

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

            <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 mt-10 ">
                <div className="w-full lg:w-[50%] shadow-md rounded-xl p-4 sm:p-6 md:p-8 bg-gray-200">
                    <Form form={form} layout="vertical" onFinish={onFinish}>
                        <h1 className="text-2xl font-bold mb-5 text-center text-[#424899]">
                            Fare Meter Configuration
                        </h1>

                        {/* Vehicle Type */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 justify-items-center">
                            <Form.Item
                                label="Vehicle Type"
                                name="vehicleType"
                                className="w-full sm:w-[80%] lg:w-[60%]"
                                rules={[{ required: true, message: "Please select a vehicle type!" }]}
                            >
                                <Select placeholder="Select Vehicle Type">
                                    <Option value="normalDays">Normal Days</Option>
                                    <Option value="specialDays">Special Days</Option>
                                </Select>
                            </Form.Item>
                        </div>

                        {/* First Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                                <Form.Item label="Fare Active" name="fareActive" valuePropName="checked">
                                    <Switch />
                                </Form.Item>

                                <Form.Item label="Auto Wait" name="autoWait" valuePropName="checked">
                                    <Switch />
                                </Form.Item>
                            </div>

                            <Form.Item label="Activate Waiting On Speed" name="speedLimit">
                                <Input
                                    type="number"
                                    placeholder="Enter Speed Limit"
                                    suffix={<DashboardOutlined />}
                                />
                            </Form.Item>

                            {/* Waiting Time with Modal Button */}
                            <Form.Item label="Initiate Waiting After" name="initiateWaitingAfter">
                                <div className="flex gap-2">
                                    <Input
                                        type="number"
                                        placeholder="Enter Value"
                                        suffix={<ClockCircleOutlined />}
                                    />
                                </div>
                            </Form.Item>
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            <Form.Item label="Suspend Waiting On Speed" name="suspendWaitingOnSpeed">
                                <Input
                                    type="number"
                                    placeholder="Enter Value"
                                    suffix={<DashboardOutlined />}
                                />
                            </Form.Item>

                            <Form.Item label="Waiting Charges / Interval" name="waitingCharges">
                                <Button type="default" onClick={handleOpenModal} className="w-full">
                                    Waiting Configration
                                </Button>
                            </Form.Item>

                            <Form.Item label="Intervals" name="intervals">
                                <Input
                                    type="number"
                                    placeholder="Enter Intervals"
                                    suffix={<ClockCircleOutlined />}
                                />
                            </Form.Item>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-6 gap-4">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 flex items-center justify-center gap-2"
                            >
                                SAVE
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
            <Modal
                title={modalTitle}
                open={modalVisible}
                onOk={() => setModalVisible(false)}
                onCancel={() => setModalVisible(false)}
                footer={false}
                width={900} // modal ka width badha diya (px)
            >
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    {selectedVehicle === "normalDays" ? (
                        <div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
                                {/* Fare Active */}
                                <Form.Item label="Fare Active" name="fareActive" valuePropName="checked">
                                    <Switch />
                                </Form.Item>

                                {/* Day */}
                                <Form.Item label="Day" name="day">
                                    <Select placeholder="Select Day" className="w-full">
                                        <Option value="monday">Monday</Option>
                                        <Option value="tuesday">Tuesday</Option>
                                        <Option value="wednesday">Wednesday</Option>
                                        <Option value="thursday">Thursday</Option>
                                        <Option value="friday">Friday</Option>
                                        <Option value="saturday">Saturday</Option>
                                        <Option value="sunday">Sunday</Option>
                                    </Select>
                                </Form.Item>

                                {/* From Time */}
                                <Form.Item label="From Time" name="fromTime">
                                    <Input type="time" />
                                </Form.Item>

                                {/* To Time */}
                                <Form.Item label="To Time" name="toTime">
                                    <Input type="time" />
                                </Form.Item>

                                {/* Charges */}
                                <Form.Item label="Charges" name="charges">
                                    <Input
                                        type="number"
                                        placeholder="Enter Charges"
                                    />
                                </Form.Item>

                                {/* Add Button */}
                                <Form.Item className="mb-6">
                                    <Button type="default" className="w-full h-full">
                                        Save
                                    </Button>
                                </Form.Item>

                            </div>

                            <div className="w-full flex justify-center px-2 sm:px-4 md:px-6 lg:px-10 mt-5">
                                <div className="w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[70vw] overflow-x-auto rounded-xl">
                                    <DynamicTable data={enhancedData} />
                                </div>
                            </div>
                        </div>




                    ) : (
                        <p>Select vehicle type first</p>
                    )}
                </Form>

            </Modal>

        </div>
    );
}
