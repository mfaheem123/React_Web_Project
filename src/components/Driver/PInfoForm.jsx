import { Button, Input, Select, Form, Checkbox } from "antd";



export default function PersonalInformation() {
    const { Option } = Select;

    const onFinishPersonal = (values) => {
        console.log("Personal Info:", values);
    };

    return (
        <div>
            <Form
                name="personalForm"
                layout="vertical"
                className="w-full max-w-4xl p-6 rounded-2xl shadow-md bg-gray-200"
                onFinish={onFinishPersonal}
                autoComplete="off"
            >
                <h2 className="text-3xl font-semibold mb-6 text-[#757cdd] text-center">
                    Personal Information
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {/* Checkboxes */}
                    <Form.Item name="hasPDA" valuePropName="checked" className="mb-3">
                        <Checkbox>HAS PDA</Checkbox>
                    </Form.Item>

                    <Form.Item name="rentPaid" valuePropName="checked" className="mb-3">
                        <Checkbox>Rent Paid</Checkbox>
                    </Form.Item>

                    <Form.Item name="isActive" valuePropName="checked" className="mb-3">
                        <Checkbox>Active</Checkbox>
                    </Form.Item>

                    <Form.Item
                        name="locationType"
                        rules={[{ required: true, message: "Please select a Location Type!" }]}
                    >
                        <Select placeholder="Select Location Type">
                            <Option value="sindh">Sindh</Option>
                            <Option value="punjab">Punjab</Option>
                            <Option value="kpk">KPK</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="User Name"
                        name="username"
                        rules={[{ required: true, message: "Please input the User Name!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please enter Password!" }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Full Name"
                        name="fullname"
                        rules={[{ required: true, message: "Please input the Full Name!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="DOB"
                        name="dob"
                        rules={[{ required: true, message: "Please enter DOB!" }]}
                    >
                        <Input type="date" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: "Please enter Email!" }]}
                    >
                        <Input type="email" />
                    </Form.Item>

                    <Form.Item
                        label="Mobile"
                        name="mobile"
                        rules={[{ required: true, message: "Please enter Mobile!" }]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        label="Telephone"
                        name="telephone"
                        rules={[{ required: true, message: "Please enter Telephone!" }]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        label="NI"
                        name="ni"
                        rules={[{ required: true, message: "Please enter NI!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Driver Type"
                        name="driverType"
                        rules={[{ required: true, message: "Please select a Driver Type!" }]}
                    >
                        <Select>
                            <Option value="commission">Commission</Option>
                            <Option value="rent">Rent</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Commission (%)"
                        name="commission"
                        rules={[{ required: true, message: "Please enter Commission!" }]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        label="Rent Limit"
                        name="rentLimit"
                        rules={[{ required: true, message: "Please enter Rent Limit!" }]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        label="Balance"
                        name="balance"
                        rules={[{ required: true, message: "Please enter Balance!" }]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{ required: true, message: "Please enter Address!" }]}
                    >
                        <Input />
                    </Form.Item>
                </div>

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