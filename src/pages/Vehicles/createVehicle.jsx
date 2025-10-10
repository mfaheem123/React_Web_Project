import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import { PlusOutlined } from '@ant-design/icons';
import { message, Upload, Form, Input, Button, Select, Checkbox, ColorPicker } from 'antd';

const { Option } = Select;
const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status === 'done') message.success(`${info.file.name} file uploaded successfully.`);
        else if (status === 'error') message.error(`${info.file.name} file upload failed.`);
    },
    onDrop(e) { console.log('Dropped files', e.dataTransfer.files); },
};

export default function CreateVehicle() {
    return (
        <div>
            <Navbar />
            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="w-full h-[80vh] flex flex-col md:flex-row items-start justify-center gap-6 p-4">
                {/* Image Upload */}
                <div className="w-full md:w-1/4 md:h-[50vh] p-2 bg-gray-200 mt-20">
                    <Dragger {...props} className="h-full flex flex-col justify-center">
                        <p className="ant-upload-drag-icon text-4xl text-white"><PlusOutlined /></p>
                        <p className="text-3xl font-semibold">Upload Image</p>
                        <p className="ant-upload-text text-white">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint text-sm text-white">
                            Support for single or bulk upload. Strictly prohibited from uploading company data or other banned files.
                        </p>
                    </Dragger>
                </div>

                {/* Form Section */}
                <div className="w-full md:w-3/4 p-2 ">
                    <div className="p-4 shadow-md bg-[#424899] text-white w-[100%]">
                        <h2 className="text-3xl">Vehicle Type</h2>
                    </div>

                    <div className=" bg-gray-300 p-5">

                        <Form layout="vertical">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <Form.Item label="Vehicle Type" name="locationName" rules={[{ required: true, message: 'Please input location name!' }]}>
                                    <Input />
                                </Form.Item>

                                <Form.Item label="Passengers" name="latitude" rules={[{ required: true, message: 'Please enter Latitude!' }]}>
                                    <Input type="number" />
                                </Form.Item>

                                <Form.Item label="Luggages" name="longitude" rules={[{ required: true, message: 'Please enter Longitude!' }]}>
                                    <Input type="number" />
                                </Form.Item>

                                <Form.Item label="hand Luggages" name="postCode" rules={[{ required: true, message: 'Please enter Post Code!' }]}>
                                    <Input type="number" />
                                </Form.Item>

                                {/* Input field dependent on checkbox Miles And fare */}
                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prev, curr) =>
                                        prev.minimumMiles !== curr.minimumMiles
                                    }
                                >
                                    {({ getFieldValue }) => (
                                        <Form.Item
                                            label={
                                                <Form.Item
                                                    name="minimumMiles"
                                                    valuePropName="checked"
                                                    className="mb-3"
                                                >
                                                    <Checkbox>Minimum Miles</Checkbox>
                                                </Form.Item>
                                            }
                                            name="postCode"
                                            rules={[
                                                {
                                                    required: getFieldValue("minimumMiles"),
                                                    message: "Please enter Post Code!",
                                                },
                                            ]}
                                        >
                                            <Input
                                                type="number"
                                                disabled={!getFieldValue("minimumMiles")}
                                            />
                                        </Form.Item>
                                    )}
                                </Form.Item>


                                {/* Input dependent on checkbox */}
                                <Form.Item
                                    noStyle
                                    shouldUpdate={(prev, curr) => prev.minimumFare !== curr.minimumFare}
                                >
                                    {({ getFieldValue }) => (
                                        <Form.Item
                                            label={
                                                < Form.Item
                                                    name="minimumFare"
                                                    valuePropName="checked"
                                                    className="mb-3"
                                                >
                                                    <Checkbox>Minimum Fares</Checkbox>
                                                </Form.Item>
                                            }
                                            name="postCode"
                                            rules={[
                                                {
                                                    required: getFieldValue("minimumFare"),
                                                    message: "Please enter Post Code!",
                                                },
                                            ]}
                                        >
                                            <Input
                                                type="number"
                                                disabled={!getFieldValue("minimumFare")}
                                            />
                                        </Form.Item>
                                    )}
                                </Form.Item>


                                <Form.Item label="Background Color">
                                    <div className="w-full">
                                        <ColorPicker style={{ width: "100%", height: "100%" }} />
                                    </div>
                                </Form.Item>

                                <Form.Item label="Foreground Color">
                                    <div className="w-full">
                                        <ColorPicker style={{ width: "100%", height: "100%" }} />
                                    </div>
                                </Form.Item>

                                <Form.Item label="Driver Waiting Charges" name="driverWaitingCharges" rules={[{ required: true, message: 'Please enter Driver Waiting Charges!' }]}>
                                    <Input type="number" />
                                </Form.Item>

                                <Form.Item label="Account Waiting Charges" name="AccountWaitingCharges" rules={[{ required: true, message: 'Please enter Account Waiting charges!' }]}>
                                    <Input type="number" />
                                </Form.Item>

                                <Form.Item label="Waiting Charges (In Min)" name="postCode" rules={[{ required: true, message: 'Please enter Post Code!' }]}>
                                    <Input type="number" />
                                </Form.Item>


                            </div>

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
            </div >
        </div >
    );
}
