import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import { Form, Button, Select, message, Checkbox, Input, Table } from "antd";

export default function DriverAppFeature() {


    const dataSource = [
        { key: "1", driver: 25, name: "GEORGE HAMPTON", app: "-" },
        { key: "2", driver: 26, name: "PAUL DOUBLESDAY", app: "V3.4.51" },
        { key: "3", driver: 27, name: "RICHARD HARDWICK", app: "-" },
        { key: "4", driver: 28, name: "LANRE OKERJO", app: "V3.4.54" },
        { key: "5", driver: 29, name: "NICOLAS GREY", app: "V3.4.53" },
        { key: "5", driver: 29, name: "NICOLAS GREY", app: "V3.4.53" },
        { key: "5", driver: 29, name: "NICOLAS GREY", app: "V3.4.53" },
        { key: "5", driver: 29, name: "NICOLAS GREY", app: "V3.4.53" },
        { key: "5", driver: 29, name: "NICOLAS GREY", app: "V3.4.53" },
        { key: "5", driver: 29, name: "NICOLAS GREY", app: "V3.4.53" },
        { key: "5", driver: 29, name: "NICOLAS GREY", app: "V3.4.53" },
    ];

    const columns = [
        {
            title: "Driver",
            dataIndex: "driver",
            key: "driver",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "App",
            dataIndex: "app",
            key: "app",
        },
    ];

    const [form] = Form.useForm();
    const { Option } = Select;

    const onFinish = (values) => {
        console.log("Personal Info:", values);
    };

    const onFinishAppVersion = (values) => {
        console.log("App Version Info:", values);
    };

    const onFinishFailed = () => {
        message.error("Please select a category before saving.");
    };

    return (
        <div>
            <Navbar />
            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            {/* Header */}
            <div >
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    className="w-full flex justify-evenly items-center bg-gray-200 p-5 gap-20"
                >

                    <div className="mt-5 w-[30%]">
                        <Form.Item
                            name="category"
                            rules={[{ required: true, message: "Please select a category!" }]}
                        >
                            <Select placeholder="Choose a category">
                                <Option value="A">Category A</Option>
                                <Option value="B">Category B</Option>
                                <Option value="C">Category C</Option>
                            </Select>
                        </Form.Item>

                    </div>

                    <div className="w-[50%] flex justify-center">
                        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#757cdd] text-center lg:text-left">
                            Driver App Features
                        </h2>
                    </div>
                    <div className="mb-3 w-[40%] flex justify-center">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-[30%]"
                        >
                            Save
                        </Button>
                    </div>

                </Form>

            </div>

            <div className="w-full min-h-[60vh] flex flex-col lg:flex-row justify-center items-start p-4 gap-4 bg-gray-30">
                {/* Left Section */}
                <div className="w-full lg:w-[30%] bg-white rounded-xl p-5 shadow-md ">
                    <h2 className="text-lg font-semibold mb-3 text-center text-[#424899]">
                        Drivers
                    </h2>
                    <Table
                        dataSource={dataSource}
                        columns={columns}
                        size="small"
                        pagination={false}
                        bordered
                        rowSelection={{ type: "checkbox" }}
                        scroll={{ y: 400 }}
                    />
                </div>

                {/* Right Section */}
                <div className="w-full lg:w-[70%] min-h-[100%] rounded-xl p-5 shadow-md mt-5">
                    <h2 className="text-3xl font-semibold mb-10">App Version Settings</h2>
                    <Form layout="vertical" onFinish={onFinishAppVersion}>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                            {[
                                "Show Customer #",
                                "Enable Customer Call",
                                "Enable Flag Dowm",
                                "Show Account Fare",
                                "Hide Break",
                                "Hide Decline",
                                "Hide Recovery",
                                "Hide No Pickup",
                                "Hide Pickup",
                                "Hide Drop Off",
                                "Fare Meter",
                                "Disable Fare Meter for ACC. Jobs",
                                "Fare Meters Waiting Charges",
                                "Pay By Card",
                                "Waiting After Arrival",
                                "Send Recipt",
                            ].map((label) => (
                                <Form.Item key={label} name={label} valuePropName="checked">
                                    <Checkbox>{label}</Checkbox>
                                </Form.Item>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                            <Form.Item label="Booking Timer (Minutes)" name="bookingTimer">
                                <Input type="number" />
                            </Form.Item>

                            <Form.Item label="Break Timer (Minutes)" name="breakTimer">
                                <Input type="number" />
                            </Form.Item>
                        </div>


                        {/* Save Button */}
                        <div className="flex justify-center mt-4">
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-6 py-2 w-full sm:w-auto"
                            >
                                Save Settings
                            </Button>
                        </div>

                    </Form>
                </div>
            </div>

        </div>
    )
}