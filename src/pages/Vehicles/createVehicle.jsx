import { useState } from "react";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload, Form, Input, Button, Checkbox, ColorPicker } from 'antd';

export default function CreateVehicle() {

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
                        <h2 className="text-2xl md:text-3xl font-semibold">Vehicle Type</h2>
                    </div>

                    <div className="bg-gray-200 p-5 mt-2 rounded-lg">
                        <Form layout="vertical">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                                {/* Vehicle Type */}
                                <Form.Item
                                    label="Vehicle Type"
                                    name="locationName"
                                    rules={[{ required: true, message: 'Please input location name!' }]}
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                {/* Passengers */}
                                <Form.Item
                                    label="Passengers"
                                    name="latitude"
                                    rules={[{ required: true, message: 'Please enter number!' }]}
                                >
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                {/* Luggages */}
                                <Form.Item
                                    label="Luggages"
                                    name="longitude"
                                    rules={[{ required: true, message: 'Please enter number!' }]}
                                >
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                {/* Hand Luggages */}
                                <Form.Item
                                    label="Hand Luggages"
                                    name="postCode"
                                    rules={[{ required: true, message: 'Please enter number!' }]}
                                >
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                {/* Minimum Miles Dependent */}
                                <Form.Item noStyle shouldUpdate={(prev, curr) => prev.minimumMiles !== curr.minimumMiles}>
                                    {({ getFieldValue }) => (
                                        <Form.Item
                                            label={
                                                <Form.Item name="minimumMiles" valuePropName="checked" className="mb-1">
                                                    <Checkbox>Minimum Miles</Checkbox>
                                                </Form.Item>
                                            }
                                            name="minimumMilesValue"
                                            rules={[
                                                {
                                                    required: getFieldValue("minimumMiles"),
                                                    message: "Please enter value!",
                                                },
                                            ]}
                                        >
                                            <Input
                                                type="number"
                                                className="w-full"
                                                disabled={!getFieldValue("minimumMiles")}
                                            />
                                        </Form.Item>
                                    )}
                                </Form.Item>

                                {/* Minimum Fare Dependent */}
                                <Form.Item noStyle shouldUpdate={(prev, curr) => prev.minimumFare !== curr.minimumFare}>
                                    {({ getFieldValue }) => (
                                        <Form.Item
                                            label={
                                                <Form.Item name="minimumFare" valuePropName="checked" className="mb-1">
                                                    <Checkbox>Minimum Fares</Checkbox>
                                                </Form.Item>
                                            }
                                            name="minimumFareValue"
                                            rules={[
                                                {
                                                    required: getFieldValue("minimumFare"),
                                                    message: "Please enter value!",
                                                },
                                            ]}
                                        >
                                            <Input
                                                type="number"
                                                className="w-full"
                                                disabled={!getFieldValue("minimumFare")}
                                            />
                                        </Form.Item>
                                    )}
                                </Form.Item>

                                {/* Background Color */}
                                <Form.Item label="Background Color" name="bgColor">
                                    <ColorPicker className="w-full" />
                                </Form.Item>

                                {/* Foreground Color */}
                                <Form.Item label="Foreground Color" name="fgColor">
                                    <ColorPicker className="w-full" />
                                </Form.Item>

                                {/* Driver Waiting Charges */}
                                <Form.Item
                                    label="Driver Waiting Charges"
                                    name="driverWaitingCharges"
                                    rules={[{ required: true, message: 'Please enter value!' }]}
                                >
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                {/* Account Waiting Charges */}
                                <Form.Item
                                    label="Account Waiting Charges"
                                    name="AccountWaitingCharges"
                                    rules={[{ required: true, message: 'Please enter value!' }]}
                                >
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                {/* Waiting Charges (In Min) */}
                                <Form.Item
                                    label="Waiting Charges (In Min)"
                                    name="waitingCharges"
                                    rules={[{ required: true, message: 'Please enter value!' }]}
                                >
                                    <Input type="number" className="w-full" />
                                </Form.Item>

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
