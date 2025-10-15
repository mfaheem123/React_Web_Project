import React from "react";
import { Form, Input, Button, Checkbox, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";


export default function VehicleInformation() {
    const { Option } = Select;
    const onFinishVehicle = (values) => {
        console.log("Vehicle Info:", values);
    };

    return (
        <div>
            <Form
                name="vehicleForm"
                layout="vertical"
                className="w-full max-w-4xl p-6 rounded-2xl shadow-md bg-gray-200"
                onFinish={onFinishVehicle}
                autoComplete="off"
            >
                <h2 className="text-3xl font-semibold mb-6 text-[#757cdd] text-center">
                    Vehicle Information
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                    {/* Use Company Vehicle Checkbox */}
                    <Form.Item
                        name="useCompanyVehicle"
                        valuePropName="checked"
                        className="mb-3"
                    >
                        <Checkbox>Use Company Vehicle</Checkbox>
                    </Form.Item>

                    {/* Company Vehicle Select */}
                    <Form.Item
                        name="companyVehicle"
                        rules={[{ required: true, message: "Please select Company Vehicle!" }]}
                    >
                        <Select placeholder="Select Company Vehicle">
                            <Option value="toyota">Toyota</Option>
                            <Option value="honda">Honda</Option>
                            <Option value="suzuki">Suzuki</Option>
                        </Select>
                    </Form.Item>

                    {/* Dates */}
                    <Form.Item
                        label="Start Date"
                        name="startDate"
                        rules={[{ required: true, message: "Please enter Start Date!" }]}
                    >
                        <Input type="date" />
                    </Form.Item>

                    <Form.Item
                        label="End Date"
                        name="endDate"
                        rules={[{ required: true, message: "Please enter End Date!" }]}
                    >
                        <Input type="date" />
                    </Form.Item>

                    {/* Vehicle Info - Grid inside */}
                    <div className="grid grid-cols-4 md:grid-cols-4 gap-2 col-span-2">
                        <Form.Item
                            label="Vehicle Number"
                            name="vehicleNumber"
                            rules={[{ required: true, message: "Please enter Vehicle Number!" }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Model"
                            name="model"
                            rules={[{ required: true, message: "Please enter Model!" }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Make"
                            name="make"
                            rules={[{ required: true, message: "Please enter Make!" }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Color"
                            name="color"
                            rules={[{ required: true, message: "Please enter Color!" }]}
                        >
                            <Input type="color" />
                        </Form.Item>
                    </div>

                    {/* Location Type */}
                    <Form.Item
                        label="Vehicle Type"
                        name="locationType"
                        rules={[{ required: true, message: "Please select a Location Type!" }]}
                    >
                        <Select placeholder="Select Location Type">
                            <Option value="sindh">Sindh</Option>
                            <Option value="punjab">Punjab</Option>
                            <Option value="kpk">KPK</Option>
                        </Select>
                    </Form.Item>

                    {/* Owner and Insurance Info */}
                    <Form.Item
                        label="Owner Name"
                        name="ownerName"
                        rules={[{ required: true, message: "Please enter Owner Name!" }]}
                    >
                        <Input />
                    </Form.Item>


                    <Form.Item
                        label="Log Book"
                        name="logBook"
                        rules={[{ required: true, message: "Please enter Log Book!" }]}
                    >
                        <Input />
                    </Form.Item>

                    {/* Log Book Document Upload */}
                    <Form.Item
                        label="Log Book Document"
                        name="logBookDocument"
                        valuePropName="fileList"
                        getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                    >
                        <Upload name="file" listType="text">
                            <Button icon={<UploadOutlined />}>Upload File</Button>
                        </Upload>
                    </Form.Item>
                </div>

                {/* Submit Button */}
                <Form.Item className="text-center mb-0 mt-4">
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-8 py-4 w-[40%]"
                    >
                        Save
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )
}