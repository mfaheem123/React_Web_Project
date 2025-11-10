import Navbar from '../../components/navbar';
import { Form, Input, Button, Checkbox, Modal } from "antd";
import RecentTabsHeader from '../../components/recentTabs';
import { useState } from 'react';
import RestrictedDrivers from '../../components/Customer/restrictedDriver';


export default function AddCustomer() {
    const { TextArea } = Input;

    const onFinish = values => {
        console.log('Success:', values);
    };


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="mt-8 flex justify-center px-4 sm:px-6 lg:px-8">
                <Form
                    name="Add Location Form"
                    layout="vertical"
                    className="w-full max-w-4xl p-6 sm:p-8 rounded-2xl shadow-md bg-gray-200"
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#757cdd] text-center">
                        Add Customer
                    </h2>

                    {/* SMS and Restricted Button Row */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">

                        <Form.Item name="enableSMS" valuePropName="checked" className="mb-0">
                            <Checkbox>Enable SMS</Checkbox>
                        </Form.Item>

                        <Button onClick={showModal} className="bg-[#757cdd] text-white hover:!bg-[#5a60d1] hover:!text-white border-none">
                            Restricted Drivers

                        </Button>
                    </div>

                    {/* Name and Location Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Form.Item
                            label="Name"
                            name="name"
                        >
                            <Input placeholder="Enter Name..." className="border border-gray-300 rounded px-2 py-1" />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                        >
                            <Input type='email' placeholder="Enter Email..." className="border border-gray-300 rounded px-2 py-1" />
                        </Form.Item>
                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Form.Item
                            label="Mobile"
                            name="mobile"
                        >
                            <Input type='number' placeholder="Enter Mobile..." className="border border-gray-300 rounded px-2 py-1" />
                        </Form.Item>

                        <Form.Item
                            label="Telephone"
                            name="telephone"
                        >
                            <Input type='number' placeholder="Enter Telephone..." className="border border-gray-300 rounded px-2 py-1" />
                        </Form.Item>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#757cdd] text-center">
                        Other Information
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Form.Item
                            label="Door"
                            name="door"
                        >
                            <TextArea type='number' rows={3} placeholder="Enter full door..." />
                        </Form.Item>

                        <Form.Item
                            label="Notes"
                            name="notes"
                        >
                            <TextArea rows={3} placeholder="Enter full notes..." />
                        </Form.Item>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Form.Item
                            label="Address 1"
                            name="address1"
                        >
                            <TextArea rows={3} placeholder="Enter full address..." />
                        </Form.Item>

                        <Form.Item
                            label="Address 2"
                            name="address2"
                        >
                            <TextArea rows={3} placeholder="Enter full address..." />
                        </Form.Item>
                    </div>

                    {/* Submit Button */}
                    <Form.Item className="text-center mb-0 mt-4">
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-8 py-3 sm:py-4 w-full sm:w-[40%]"
                        >
                            Save
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            <Modal
                title="Restricted Driver"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={'30%'}
            >
                <RestrictedDrivers />
            </Modal>
        </div>
    );
}
