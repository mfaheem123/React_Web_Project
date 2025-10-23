import { Button, Checkbox, Form, Input, Select } from 'antd';
import Navbar from '../../components/navbar';
import RecentTabsHeader from '../../components/recentTabs';
import { useState } from 'react';


export default function AddComplaint() {
    const { TextArea } = Input;

    const [selectedBooking, setSelectedBooking] = useState('Driver');


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const handleSelect = (type) => {
        setSelectedBooking(type); // ek hi select hoga
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
                                Customer
                            </h2>
                            {/* Personal Info */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Form.Item label="Complaint Date" name="complaintDate">
                                    <Input
                                        type='date'
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>

                                <Form.Item label="Incident Date" name="incidentDate">
                                    <Input
                                        type="date"
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>
                            </div>

                            {/* Address Fields */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Form.Item label="Name" name="name">
                                    <Input
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>
                                <Form.Item label="Mobile" name="mobile">
                                    <Input
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="w-full lg:w-2/4 space-y-6 ">
                            <div className="flex justify-between w-full">
                                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#757cdd] text-center">
                                    Booking
                                </h2>

                                <div className="flex justify-end flex-row gap-3 sm:gap-4 w-full sm:w-2/3 mx-auto">
                                    <Form.Item name="booking" className="mb-0">
                                        <Checkbox
                                            checked={selectedBooking === 'Driver'}
                                            onChange={() => handleSelect('Driver')}
                                        >
                                            Driver
                                        </Checkbox>

                                        <Checkbox
                                            checked={selectedBooking === 'Employee'}
                                            onChange={() => handleSelect('Employee')}
                                        >
                                            Employee
                                        </Checkbox>

                                        <Checkbox
                                            checked={selectedBooking === 'Account'}
                                            onChange={() => handleSelect('Account')}
                                        >
                                            Account
                                        </Checkbox>
                                    </Form.Item>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Form.Item label="Refrence Number" name="name">
                                    <Input
                                        type='number'
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>


                                {selectedBooking === 'Driver' && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                        <Form.Item
                                            label="Driver"
                                            name="driver"
                                            rules={[{ required: true, message: "Please select a Driver!" }]}
                                        >
                                            <Select placeholder="Select Driver">
                                                <Select.Option value="karachi">Karachi</Select.Option>
                                                <Select.Option value="lahore">Lahore</Select.Option>
                                                <Select.Option value="islamabad">Islamabad</Select.Option>
                                            </Select>
                                        </Form.Item>

                                        <Form.Item label="Reg Number" name="regNumber">
                                            <Input placeholder="Enter Driver Name" />
                                        </Form.Item>

                                    </div>
                                )}

                                {selectedBooking === 'Employee' && (
                                    <Form.Item
                                        label="Driver"
                                        name="driver"
                                        rules={[{ required: true, message: "Please select a Driver!" }]}
                                    >
                                        <Select placeholder="Select Driver">
                                            <Select.Option value="karachi">Karachi</Select.Option>
                                            <Select.Option value="lahore">Lahore</Select.Option>
                                            <Select.Option value="islamabad">Islamabad</Select.Option>
                                        </Select>
                                    </Form.Item>
                                )}

                                {selectedBooking === 'Account' && (
                                    <Form.Item
                                        label="Driver"
                                        name="driver"
                                        rules={[{ required: true, message: "Please select a Driver!" }]}

                                    >
                                        <Select placeholder="Select Driver">
                                            <Select.Option value="karachi">Karachi</Select.Option>
                                            <Select.Option value="lahore">Lahore</Select.Option>
                                            <Select.Option value="islamabad">Islamabad</Select.Option>
                                        </Select>
                                    </Form.Item>
                                )}

                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Form.Item label="Notes" name="notes">
                                    <TextArea rows={3} />
                                </Form.Item>

                                <Form.Item label="Complaint" name="complaint">
                                    <TextArea rows={3} />
                                </Form.Item>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Form.Item label="How Was It Deals With" name="howWasItDealsWith">
                                    <Input
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>

                                <Form.Item label="Result" name="result">
                                    <Input
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>
                            </div>

                        </div>
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

                </Form>
            </div>


        </div>
    );
}
