import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import { PlusOutlined } from '@ant-design/icons';
import { message, Upload, Form, Input, Button, Select } from 'antd';

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

            <div className="w-full h-[80vh] bg-red-900 flex flex-col md:flex-row items-start justify-center gap-6 p-4">
                {/* Image Upload */}
                <div className="w-full md:w-1/4 md:h-[50vh] p-2 bg-blue-800">
                    <Dragger {...props} className="h-full flex flex-col justify-center">
                        <p className="ant-upload-drag-icon text-4xl text-white"><PlusOutlined /></p>
                        <p className="text-2xl font-semibold text-white">Upload Image</p>
                        <p className="ant-upload-text text-white">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint text-sm text-white">
                            Support for single or bulk upload. Strictly prohibited from uploading company data or other banned files.
                        </p>
                    </Dragger>
                </div>



                {/* Form Section */}
                <div className="w-full md:w-3/4 p-2">
                    <Form layout="vertical">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Form.Item label="Location Name" name="locationName" rules={[{ required: true, message: 'Please input location name!' }]}>
                                <Input placeholder="Enter location name" />
                            </Form.Item>

                            <Form.Item label="Latitude" name="latitude" rules={[{ required: true, message: 'Please enter Latitude!' }]}>
                                <Input placeholder="Enter latitude" />
                            </Form.Item>

                            <Form.Item label="Longitude" name="longitude" rules={[{ required: true, message: 'Please enter Longitude!' }]}>
                                <Input placeholder="Enter longitude" />
                            </Form.Item>

                            <Form.Item label="Post Code" name="postCode" rules={[{ required: true, message: 'Please enter Post Code!' }]}>
                                <Input type="number" placeholder="Enter postcode" />
                            </Form.Item>

                            <Form.Item label="Location Type" name="locationType" rules={[{ required: true, message: 'Please select a Location Type!' }]}>
                                <Select placeholder="Select Type">
                                    <Option value="sindh">Sindh</Option>
                                    <Option value="punjab">Punjab</Option>
                                    <Option value="kpk">KPK</Option>
                                </Select>
                            </Form.Item>
                        </div>

                        <Form.Item className="mt-4 text-center">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-[#757cdd] border-none hover:bg-[#5a60d1] px-8 py-3 w-full sm:w-1/2 md:w-1/3"
                            >
                                Save
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}
