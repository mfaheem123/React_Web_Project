import Navbar from '../../components/navbar';
import { Form, Input, Button, Select, ColorPicker, message, Upload } from "antd";
import RecentTabsHeader from '../../components/recentTabs';
import { UploadOutlined } from '@ant-design/icons';




export default function CreateCompanyVehicle() {

    const { Option } = Select;
    const onFinish = values => {
        console.log('Success:', values);
    };

    // log Document 
    const props = {
        name: 'file',
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    return (
        <div>

            <Navbar />

            <div className='mt-20'>
                <RecentTabsHeader />
            </div>

            <div className='mt-5 flex justify-center h-full w-full'>
                <Form
                    name="Add Location Form"
                    layout="vertical"
                    className="w-full max-w-6xl p-6 rounded-2xl shadow-md bg-gray-200"
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <h2 className="text-3xl font-semibold mb-6 text-[#757cdd] text-center">
                        Company Vehicle
                    </h2>

                    <Form layout="vertical">
                        {/* Parent grid - ek hi grid lagao */}
                        <div className="grid grid-cols-6 gap-1 ">

                            <Form.Item
                                label="Vehicle Number"
                                name="vehicle"
                                rules={[{ required: true, message: "Please input the Vehicle!" }]}
                                className="col-span-3" // 👈 2 columns lega
                            >
                                <Input className="w-full border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="Vehicle Type"
                                name="vehicleType"
                                rules={[{ required: true, message: "Please select a Vehicle Type!" }]}
                                className="col-span-3"
                            >
                                <Select className="w-full" placeholder="Select Type">
                                    <Option value="sindh">Sindh</Option>
                                    <Option value="punjab">Punjab</Option>
                                    <Option value="kpk">KPK</Option>
                                </Select>
                            </Form.Item>


                            <Form.Item label="Color"
                                className="col-span-2"
                            >
                                <div className="w-full">
                                    <ColorPicker style={{ width: "100%", height: "100%" }} />
                                </div>
                            </Form.Item>

                            <Form.Item
                                label="Make"
                                name="make"
                                rules={[{ required: true, message: "Please input the Make!" }]}
                                className="col-span-2"
                            >
                                <Input className="w-full border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="Modal"
                                name="modal"
                                rules={[{ required: true, message: "Please enter Post Modal!" }]}
                                className="col-span-2"
                            >
                                <Input
                                    type="number"
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Log Book Numberz"
                                name="logBook"
                                rules={[{ required: true, message: "Please Enter the Log Book !" }]}
                                className="col-span-3" // 👈 2 columns lega
                            >
                                <Input className="w-full border border-gray-300 rounded px-2 py-1" />
                            </Form.Item>

                            <Form.Item
                                label="Log Book Document"
                                name="logBook"
                                rules={[{ required: true, message: "Please Enter the Log Book !" }]}
                                className="col-span-3"
                            >
                                <Upload {...props} className="w-full" style={{
                                    width: '100%'
                                }}>
                                    <Button
                                        icon={<UploadOutlined />}
                                        className="w-full"
                                    >
                                        Click to Upload
                                    </Button>
                                </Upload>
                            </Form.Item>

                            {/* PHC Vehicle fields */}

                            <Form.Item
                                label="PHC Vehicle Expiry"
                                name="modal"
                                rules={[{ required: true, message: "Please enter Post Modal!" }]}
                                className="col-span-2"
                            >
                                <Input
                                    type="date"
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                />
                            </Form.Item>

                            <Form.Item
                                label="PHC Vehicle Number"
                                name="modal"
                                rules={[{ required: true, message: "Please enter Post Modal!" }]}
                                className="col-span-2"
                            >
                                <Input
                                    type="number"
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                />
                            </Form.Item>

                            <Form.Item
                                label="PHC Vehicle Document"
                                name="logBook"
                                rules={[{ required: true, message: "Please Enter the Log Book !" }]}
                                className="col-span-2"
                            >
                                <Upload {...props} className="w-full" style={{
                                    width: '100%'
                                }}>
                                    <Button
                                        icon={<UploadOutlined />}
                                        className="w-full"
                                    >
                                        Click to Upload
                                    </Button>
                                </Upload>
                            </Form.Item>


                            {/* MOT Forms */}
                            <Form.Item
                                label="MOT Expiry"
                                name="modal"
                                rules={[{ required: true, message: "Please enter Post Modal!" }]}
                                className="col-span-2"
                            >
                                <Input
                                    type="date"
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                />
                            </Form.Item>

                            <Form.Item
                                label="MOT Number"
                                name="modal"
                                rules={[{ required: true, message: "Please enter Post Modal!" }]}
                                className="col-span-2"
                            >
                                <Input
                                    type="number"
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                />
                            </Form.Item>

                            <Form.Item
                                label="MOT Document"
                                name="logBook"
                                rules={[{ required: true, message: "Please Enter the Log Book !" }]}
                                className="col-span-2"
                            >
                                <Upload {...props} className="w-full" style={{
                                    width: '100%'
                                }}>
                                    <Button
                                        icon={<UploadOutlined />}
                                        className="w-full"
                                    >
                                        Click to Upload
                                    </Button>
                                </Upload>
                            </Form.Item>



                            {/* MOT2 Forms */}
                            <Form.Item
                                label="MOT2 Expiry"
                                name="modal"
                                rules={[{ required: true, message: "Please enter Post Modal!" }]}
                                className="col-span-2"
                            >
                                <Input
                                    type="date"
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                />
                            </Form.Item>

                            <Form.Item
                                label="MOT2 Number"
                                name="modal"
                                rules={[{ required: true, message: "Please enter Post Modal!" }]}
                                className="col-span-2"
                            >
                                <Input
                                    type="number"
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                />
                            </Form.Item>

                            <Form.Item
                                label="MOT2 Document"
                                name="logBook"
                                rules={[{ required: true, message: "Please Enter the Log Book !" }]}
                                className="col-span-2"
                            >
                                <Upload {...props} className="w-full" style={{
                                    width: '100%'
                                }}>
                                    <Button
                                        icon={<UploadOutlined />}
                                        className="w-full"
                                    >
                                        Click to Upload
                                    </Button>
                                </Upload>
                            </Form.Item>

                            {/* Insurance Form */}
                            <Form.Item
                                label="Insurance Expiry"
                                name="modal"
                                rules={[{ required: true, message: "Please enter Post Modal!" }]}
                                className="col-span-2"
                            >
                                <Input
                                    type="date"
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Insurance Number"
                                name="modal"
                                rules={[{ required: true, message: "Please enter Post Modal!" }]}
                                className="col-span-2"
                            >
                                <Input
                                    type="number"
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                />
                            </Form.Item>

                            <Form.Item
                                label="Insurance Document"
                                name="logBook"
                                rules={[{ required: true, message: "Please Enter the Log Book !" }]}
                                className="col-span-2"
                            >
                                <Upload {...props} className="w-full" style={{
                                    width: '100%'
                                }}>
                                    <Button
                                        icon={<UploadOutlined />}
                                        className="w-full"
                                    >
                                        Click to Upload
                                    </Button>
                                </Upload>
                            </Form.Item>



                        </div>
                    </Form>




                    {/* Submit Button */}
                    <Form.Item className="text-center mb-0 mt-4">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-[#424899] border-none hover:!bg-[#5a60d1] px-8 py-4 w-[40%]"
                        >
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}