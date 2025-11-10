import { Button, Form, Input } from 'antd';
import Navbar from '../../components/navbar';
import RecentTabsHeader from '../../components/recentTabs';


export default function AddLostProperty() {
    const { TextArea } = Input;

    const onFinish = values => {
        console.log('Success:', values);
    };

    return (
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>
            <div className="flex justify-center w-full mt-10 px-4">
                <Form
                    name="AddCustomerForm"
                    layout="vertical"
                    className="w-full max-w-full p-6 sm:p-8 rounded-2xl shadow-md bg-gray-200"
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                    autoComplete="off"
                >

                    {/* Two-Column Layout (responsive) */}
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* LEFT COLUMN */}
                        <div className="w-full lg:w-1/2 space-y-6">

                            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#757cdd] text-center">
                                Lost Property
                            </h2>
                            {/* Personal Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Form.Item label="Report date" name="reportDate">
                                    <Input
                                        type='date'
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>

                                <Form.Item label="Found/Lost Date" name="">
                                    <Input
                                        type="date"
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>
                            </div>

                            {/* Address Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Form.Item label="Details Of Property" name="detailsProperty">
                                    <TextArea rows={3} />
                                </Form.Item>

                                <Form.Item label="Method Of Deposition" name="methodDeposition">
                                    <TextArea rows={3} />
                                </Form.Item>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="w-full lg:w-1/2 space-y-6 ">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#757cdd] text-center">
                                Customer
                            </h2>

                            {/* Personal Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Form.Item label="Name" name="name">
                                    <Input
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>

                                <Form.Item label="Mobile" name="">
                                    <Input
                                        type="number"
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Form.Item label="Address" name="address">
                                    <TextArea rows={3} />
                                </Form.Item>
                            </div>


                        </div>

                    </div>
                    <div className="flex justify-center py-6">
                        <div className="w-full sm:w-[80%] md:w-[80%] lg:w-[60%] p-6">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#757cdd] text-center">
                                Enquiry
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Form.Item label="Checked By" name="checkedBy" className="w-full">
                                    <Input className="border border-gray-300 rounded px-2 py-1" />
                                </Form.Item>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Form.Item label="Enquiry" name="enquiry" className="w-full">
                                    <TextArea rows={3} />
                                </Form.Item>

                                <Form.Item label="Result" name="result" className="w-full">
                                    <TextArea rows={3} />
                                </Form.Item>
                            </div>

                            {/* Submit Button */}
                            <Form.Item className="text-center mb-0 mt-6">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-8 py-3 sm:py-4 w-full sm:w-[30%]"
                                >
                                    Save
                                </Button>
                            </Form.Item>
                        </div>
                    </div>

                </Form>
            </div>


        </div>
    );
}
