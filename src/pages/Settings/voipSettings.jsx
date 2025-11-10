import { Button, Form, Select } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";

export default function VoipSettings() {
    return (
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className='mt-5 flex justify-center h-full w-full'>
                <Form
                    name="Add Location Form"
                    layout="vertical"
                    className="w-full max-w-4xl p-6 rounded-2xl shadow-md bg-gray-200"
                    initialValues={{ remember: false }}
                    autoComplete="off"
                >
                    <h2 className="text-3xl font-semibold mb-6 text-[#757cdd] text-center">
                        Voip Settings
                    </h2>

                    {/* Grid Layout - 2 fields per row on medium+ screens */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Form.Item
                            label="Service"
                            name="service"
                        >
                            <Select placeholder="Select Type">
                                <Select.Option value="sindh">Sindh</Select.Option>
                                <Select.Option value="sindh">Sindh</Select.Option>
                                <Select.Option value="sindh">Sindh</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Status"
                            name="status"
                        >
                            <Select placeholder="Select Type">
                                <Select.Option value="sindh">Sindh</Select.Option>
                                <Select.Option value="sindh">Sindh</Select.Option>
                                <Select.Option value="sindh">Sindh</Select.Option>
                            </Select>
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
        </div>
    )
}