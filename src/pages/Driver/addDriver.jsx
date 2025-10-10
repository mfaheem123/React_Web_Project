import { Button, Input, message, Select, Form, Checkbox } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import Dragger from "antd/es/upload/Dragger";
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from "react";



export default function AddDriver() {
    const { Option } = Select;
    // Image Upload
    const [fileList, setFileList] = useState([]);
    const props = {
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        multiple: true,
        fileList, // ✅ state se control
        listType: 'picture', // ✅ preview ke liye
        onChange: ({ file, fileList: newFileList }) => {
            setFileList(newFileList);
            if (file.status === 'done') {
                message.success(`${file.name} uploaded successfully.`);
            } else if (file.status === 'error') {
                message.error(`${file.name} upload failed.`);
            }
        },
        onPreview: async file => {
            let src = file.url;
            if (!src) {
                src = await new Promise(resolve => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file.originFileObj);
                    reader.onload = () => resolve(reader.result);
                });
            }
            const imgWindow = window.open(src);
            imgWindow.document.write(`<img src="${src}" style="width:100%" />`);
        },
    };

    const removeImage = () => {
        setFileList([]);
    };

    // Personal Information Form
    const onFinish = values => {
        console.log('Success:', values);
    };
    return (
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            {/* Heading Section */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-3 w-full">
                <h2 className="text-2xl md:text-4xl py-3 text-center md:text-left">Driver</h2>

                <div className="flex justify-center md:justify-start">
                    <Button className="bg-[#424899] text-white flex items-center gap-2 px-4 py-2 w-full md:w-auto justify-center"> Shift</Button>
                    <Button className="bg-[#424899] text-white flex items-center gap-2 px-4 py-2 w-full md:w-auto justify-center"> Notes</Button>
                </div>
            </div>

            {/* Main Content Div */}
            <div className="flex justify-evenly w-full h-full">

                {/* Image upload */}
                <div className="h-[50vh] md:h-[50vh] sm:h-[30vh] w-[20%] lg:w-[20%] md:w-full sm:w-full flex flex-col justify-center p-4 relative">
                    {fileList.length > 0 ? (
                        <div className="relative h-full w-full">
                            <img
                                src={fileList[0].thumbUrl || URL.createObjectURL(fileList[0].originFileObj)}
                                alt="Uploaded"
                                className="w-full sm:w-full h-full object-cover rounded"
                            />
                            <Button
                                type="primary"
                                danger
                                icon={<CloseOutlined />}
                                size="small"
                                onClick={removeImage}
                                className="absolute top-2 right-2 z-10"
                            />
                        </div>
                    ) : (
                        <Dragger
                            {...props}
                            className="h-full flex flex-col justify-center p-4 w-full max-w-[100%] min-w-[250px]"
                        >
                            <p className="ant-upload-drag-icon text-4xl text-white"><PlusOutlined /></p>
                            <p className="text-4xl mb-4 font-semibold text-center">Upload Image</p>
                            <p className="ant-upload-text text-white text-sm text-center">
                                Click or drag file to upload
                            </p>
                            <p className="ant-upload-hint text-white text-xs text-center">
                                Support for single or bulk upload. Prohibited from uploading company data.
                            </p>
                        </Dragger>
                    )}
                </div>

                {/* Personal Information Form */}
                <div className="w-[40%] lg:w-[40%] md:w-full sm:w-full p-2">
                    <Form
                        name="Add Location Form"
                        layout="vertical"
                        className="w-full max-w-4xl p-6 rounded-2xl shadow-md bg-gray-200"
                        initialValues={{ remember: false }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <h2 className="text-3xl font-semibold mb-6 text-[#757cdd] text-center">
                            Personal Information
                        </h2>

                        {/* Grid Layout - 2 fields per row on medium+ screens */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                className="mb-3"
                            >

                                <Checkbox>HAS PDA</Checkbox>

                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                className="mb-3"
                            >

                                <Checkbox>Rent Paid</Checkbox>

                            </Form.Item>

                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                className="mb-3"
                            >

                                <Checkbox>Active</Checkbox>

                            </Form.Item>

                            <Form.Item
                                name="locationType"
                                rules={[{ required: true, message: "Please select a Location Type!" }]}
                            >
                                <Select placeholder="Demo Company">
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
                                <Input className="border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>


                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: "Please enter Password!" }]}
                            >
                                <Input className="border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="Full Name"
                                name="fullname"
                                rules={[{ required: true, message: "Please input the Full Name!" }]}
                            >
                                <Input className="border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="DOB"
                                name="dob"
                                rules={[{ required: true, message: "Please enter DOB!" }]}
                            >
                                <Input type="date" className="border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: "Please enter Email!" }]}
                            >
                                <Input type="email" className="border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="Mobile"
                                name="mobile"
                                rules={[{ required: true, message: "Please enter Mobile!" }]}
                            >
                                <Input type="number" className="border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="Telephone"
                                name="telephone"
                                rules={[{ required: true, message: "Please enter Telephone!" }]}
                            >
                                <Input type="number" className="border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="NI"
                                name="ni"
                                rules={[{ required: true, message: "Please enter Ni!" }]}
                            >
                                <Input className="border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="Driver Type"
                                name="drivertype"
                                rules={[{ required: true, message: "Please select a Driver Type!" }]}
                            >
                                <Select >
                                    <Option value="commission">Commission</Option>
                                    <Option value="rent">Rent</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                label="Commission(%)"
                                name="mobile"
                                rules={[{ required: true, message: "Please enter Mobile!" }]}
                            >
                                <Input type="number" className="border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="Rent Limit"
                                name="rentlimit"
                                rules={[{ required: true, message: "Please enter Rent Limit!" }]}
                            >
                                <Input type="number" className="border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="Balance"
                                name="balance"
                                rules={[{ required: true, message: "Please enter Balance!" }]}
                            >
                                <Input type="number" className="border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="Address"
                                name="address"
                                rules={[{ required: true, message: "Please enter Address!" }]}
                            >
                                <Input className="border border-gray-300 rounded px-2 py-1" />
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

                {/* Vehicle Information Form */}
                <div className="w-[40%] lg:w-[40%] md:w-full sm:w-full p-2">
                    vehicle information
                </div>
            </div>

        </div>
    )
}