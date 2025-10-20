import { Button, Form, Input, Select, Switch, Modal, DatePicker } from "antd";
import { ClockCircleOutlined, DashboardOutlined } from "@ant-design/icons";
import { useState } from "react";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";

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
                    ) : (
                        <p>Select vehicle type first</p>
                    )}
                </Form>

            </Modal>

        </div>
    );
}
