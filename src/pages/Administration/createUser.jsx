import { useState } from "react";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload, Form, Input, Button, Select, Checkbox } from 'antd';

export default function CreateUser() {
    const { Option } = Select
    const { Dragger } = Upload;
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
        setFileList([]); // image remove kar do
    };

    return (
        <div>
            <Navbar />
            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="w-full flex flex-col md:flex-row items-start justify-center gap-6 p-4">

                {/* Image upload */}
                <div className="h-[60vh] md:h-[60vh] sm:h-[30vh] w-[30%] lg:w-[30%] md:w-full sm:w-full flex flex-col justify-center p-4 relative">
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


                {/* Form Section */}
                <div className="w-full md:w-3/4 p-2">
                    <div className="p-4 shadow-md bg-[#424899] text-white">
                        <h2 className="text-2xl md:text-3xl font-semibold">User</h2>
                    </div>

                    <div className="bg-gray-200 p-5 mt-2 rounded-lg">
                        <Form layout="vertical">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                                <Form.Item
                                    label="User Name"
                                    name="userName"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name="email"
                                >
                                    <Input type="email" className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                >
                                    <Input type="password" className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Confirm Password"
                                    name="confirmPassword"
                                >
                                    <Input type="password" className="w-full" />
                                </Form.Item>

                                <Form.Item label="Phone" name="phone">
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                <Form.Item label="Fax" name="fax">
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                <Form.Item label="Role" name="role">
                                    <Select placeholder="Select Role">
                                        <Option value="controller">Controller</Option>
                                        <Option value="admin">Admin</Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Subsidiary" name="subsidiary">
                                    <Select placeholder="Select Subsidiary">
                                        <Option value="controller">Demo Company</Option>
                                        <Option value="admin">Admin</Option>
                                    </Select>
                                </Form.Item>

                                <div className="flex justify-evenly">

                                    <Form.Item label="Active" name="active">
                                        <Checkbox className="scale-125" /> {/* 1.25x size */}
                                    </Form.Item>

                                    <Form.Item label="All Drivers" name="alldrivers">
                                        <Checkbox className="scale-125" /> {/* 1.25x size */}
                                    </Form.Item>

                                    <Form.Item label="All Bookings" name="allbookings">
                                        <Checkbox className="scale-125" /> {/* 1.25x size */}
                                    </Form.Item>


                                </div>

                                <div className="flex justify-evenly">

                                    <Form.Item label="All Account" name="allAccount">
                                        <Checkbox className="scale-125" /> {/* 1.25x size */}
                                    </Form.Item>

                                    <Form.Item label="Call Reciver" name="callReciver">
                                        <Checkbox className="scale-125" /> {/* 1.25x size */}
                                    </Form.Item>

                                    <Form.Item label="Allow Transfer Bookings" name="allowTransfer">
                                        <Checkbox className="scale-125" /> {/* 1.25x size */}
                                    </Form.Item>


                                </div>

                            </div>

                            {/* Submit Button */}
                            <Form.Item className="mt-4 text-center">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-[#424899] border-none hover:bg-[#5a60d1] px-8 py-3 w-full sm:w-1/2 md:w-1/3"
                                >
                                    Save
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>

        </div >
    );
}
