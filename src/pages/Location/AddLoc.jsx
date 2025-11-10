import Navbar from '../../components/navbar';
import { Form, Input, Button, Select } from "antd";
import RecentTabsHeader from '../../components/recentTabs';



export default function AddLocation() {

    const { TextArea } = Input;
    const { Option } = Select;
    const onFinish = values => {
        console.log('Success:', values);
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
                    className="w-full max-w-4xl p-6 rounded-2xl shadow-md bg-gray-200"
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <h2 className="text-3xl font-semibold mb-6 text-[#757cdd] text-center">
                        Add Location
                    </h2>

                    {/* Grid Layout - 2 fields per row on medium+ screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Form.Item
                            label="Location Name"
                            name="locationName"
                            rules={[{ required: true, message: "Please input the location name!" }]}
                        >
                            <Input className="border border-gray-300 rounded px-2 py-1" />
                        </Form.Item>

                        <Form.Item
                            label="Location Type"
                            name="locationType"
                            rules={[{ required: true, message: "Please select a Location Type!" }]}
                        >
                            <Select placeholder="Select Type">
                                <Option value="sindh">Sindh</Option>
                                <Option value="punjab">Punjab</Option>
                                <Option value="kpk">KPK</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Latitude"
                            name="latitude"
                            rules={[{ required: true, message: "Please enter Latitude!" }]}
                        >
                            <Input className="border border-gray-300 rounded px-2 py-1" />
                        </Form.Item>

                        <Form.Item
                            label="Longitude"
                            name="longitude"
                            rules={[{ required: true, message: "Please input the Longitude!" }]}
                        >
                            <Input className="border border-gray-300 rounded px-2 py-1" />
                        </Form.Item>

                        <Form.Item
                            label="Post Code"
                            name="postCode"
                            rules={[{ required: true, message: "Please enter Post Code!" }]}
                        >
                            <Input type="number" className="border border-gray-300 rounded px-2 py-1" />
                        </Form.Item>

                        <Form.Item
                            label="Zone"
                            name="zone"
                            rules={[{ required: true, message: "Please select a Zone!" }]}
                        >
                            <Select placeholder="Select Zone">
                                <Option value="karachi">Karachi</Option>
                                <Option value="lahore">Lahore</Option>
                                <Option value="islamabad">Islamabad</Option>
                            </Select>
                        </Form.Item>



                    </div>

                    {/* Text Area - Full width */}
                    <Form.Item
                        label="Address"
                        name="address"
                        className="mt-4"
                    >
                        <TextArea rows={4} placeholder="Enter full address..." />
                    </Form.Item>

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

        </div>
    )
}