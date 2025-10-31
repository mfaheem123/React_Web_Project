import { Button, Checkbox, Form, Input, Select } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import DynamicTable from "../../components/dynamicTable";




const usersData = [
    {
        username: "john_doe",
        email: "john.doe@example.com",
        phone: "+1-202-555-0156",
        fax: "+1-202-555-0157",
        role: "Admin",
        subsidiary: "North Branch",
    },
    {
        username: "jane_smith",
        email: "jane.smith@example.com",
        phone: "+1-202-555-0189",
        fax: "+1-202-555-0190",
        role: "Manager",
        subsidiary: "East Branch",
    },
    {
        username: "michael_brown",
        email: "michael.brown@example.com",
        phone: "+1-202-555-0123",
        fax: "+1-202-555-0124",
        role: "Staff",
        subsidiary: "West Branch",
    },
    {
        username: "lisa_jones",
        email: "lisa.jones@example.com",
        phone: "+1-202-555-0145",
        fax: "+1-202-555-0146",
        role: "Supervisor",
        subsidiary: "Central Branch",
    },
    {
        username: "david_wilson",
        email: "david.wilson@example.com",
        phone: "+1-202-555-0167",
        fax: "+1-202-555-0168",
        role: "Admin",
        subsidiary: "South Branch",
    },
    {
        username: "susan_martin",
        email: "susan.martin@example.com",
        phone: "+1-202-555-0199",
        fax: "+1-202-555-0200",
        role: "Manager",
        subsidiary: "North Branch",
    },
    {
        username: "kevin_clark",
        email: "kevin.clark@example.com",
        phone: "+1-202-555-0111",
        fax: "+1-202-555-0112",
        role: "Staff",
        subsidiary: "East Branch",
    },
    {
        username: "emily_davis",
        email: "emily.davis@example.com",
        phone: "+1-202-555-0133",
        fax: "+1-202-555-0134",
        role: "Supervisor",
        subsidiary: "West Branch",
    },
];
export default function CreateAccountInvoice() {


    const onFinish = (values) => {
        console.log("Success:", values);
    };

    // ✅ Dummy Booking Data
    const [data, setData] = useState([
        {
            key: 1,
            ref: "REF001",
            datetime: "2025-10-30 10:00 AM",
            pickup: "New York",
            dropoff: "Los Angeles",
            veh: "SUV",
            jt: "Yes",
            pt: "Cash",
            fare: 120,
            pc: 10,
            wc: 5,
            edc: 3,
            mg: 2,
            cc: 4,
            total: 144,
        },
        {
            key: 2,
            ref: "REF002",
            datetime: "2025-10-30 12:30 PM",
            pickup: "Chicago",
            dropoff: "Boston",
            veh: "Sedan",
            jt: "No",
            pt: "Card",
            fare: 95,
            pc: 8,
            wc: 2,
            edc: 4,
            mg: 1,
            cc: 3,
            total: 113,
        },
    ]);

    const handleUpdate = (record) => {
        console.log("Update", record);
    };

    const handleDelete = (record) => {
        console.log("Delete", record);
        setData((prev) => prev.filter((item) => item.key !== record.key));
    };

    // ✅ Columns with Checkbox + Action Buttons
    const columns = [
        {
            title: <Checkbox />,
            dataIndex: "checkbox",
            key: "checkbox",
            align: "center",
            render: (_, record) => <Checkbox />,
        },
        { title: "REF #", dataIndex: "ref", key: "ref", align: "center" },
        { title: "DATETIME", dataIndex: "datetime", key: "datetime", align: "center" },
        { title: "PICKUP", dataIndex: "pickup", key: "pickup", align: "center" },
        { title: "DROPOFF", dataIndex: "dropoff", key: "dropoff", align: "center" },
        { title: "VEH", dataIndex: "veh", key: "veh", align: "center" },
        { title: "J/T", dataIndex: "jt", key: "jt", align: "center" },
        { title: "P/T", dataIndex: "pt", key: "pt", align: "center" },
        { title: "FARE", dataIndex: "fare", key: "fare", align: "center" },
        { title: "PC", dataIndex: "pc", key: "pc", align: "center" },
        { title: "WC", dataIndex: "wc", key: "wc", align: "center" },
        { title: "EDC", dataIndex: "edc", key: "edc", align: "center" },
        { title: "M&G", dataIndex: "mg", key: "mg", align: "center" },
        { title: "CC", dataIndex: "cc", key: "cc", align: "center" },
        { title: "TOTAL", dataIndex: "total", key: "total", align: "center" },
        {
            title: "ACTIONS",
            key: "actions",
            align: "center",
            render: (_, record) => (
                <div className="flex gap-2 justify-center">
                    <Button
                        className="bg-[#424899] text-white"
                        icon={<Edit size={16} />}
                        onClick={() => handleUpdate(record)}
                    />
                    <Button
                        className="bg-red-700 text-white"
                        icon={<Trash2 size={16} />}
                        onClick={() => handleDelete(record)}
                    />
                </div>
            ),
        },
    ];

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


                    <div className="flex flex-col lg:flex-row gap-8">


                        <div className="w-full lg:w-2/2 space-y-6">

                            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-[#757cdd] text-center">
                                Account Invoice
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                                <Form.Item label="Invoice date" name="invoiceDate">
                                    <Input
                                        type='date'
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>

                                <Form.Item label="Invoice Due Date" name="invoiceDueDate">
                                    <Input
                                        type="date"
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>

                                <Form.Item label="INVOICE" name="INVOICE">
                                    <p>PU1761319353</p>
                                </Form.Item>
                            </div>


                            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">

                                <Form.Item
                                    label="Account"
                                    name="account"
                                >
                                    <Select placeholder="Select Account">
                                        <Select.Option value="karachi">Karachi</Select.Option>
                                        <Select.Option value="lahore">Lahore</Select.Option>
                                        <Select.Option value="islamabad">Islamabad</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item
                                    label="Department"
                                    name="department"
                                >
                                    <Select placeholder="Select Department">
                                        <Select.Option value="karachi">Karachi</Select.Option>
                                        <Select.Option value="lahore">Lahore</Select.Option>
                                        <Select.Option value="islamabad">Islamabad</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Order" name="order">
                                    <Input
                                        type="number"
                                        className="border border-gray-300 rounded px-2 py-1"
                                    />
                                </Form.Item>


                                <Form.Item
                                    label="Subsidiary"
                                    name="subsidiary"
                                >
                                    <Select placeholder="Select Subsidiary">
                                        <Select.Option value="karachi">Karachi</Select.Option>
                                        <Select.Option value="lahore">Lahore</Select.Option>
                                        <Select.Option value="islamabad">Islamabad</Select.Option>
                                    </Select>
                                </Form.Item>

                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">


                                    <Form.Item label="From" name="from">
                                        <Input
                                            type='date'
                                            className="border border-gray-300 rounded px-2 py-1"
                                        />
                                    </Form.Item>

                                    <Form.Item label="To" name="to">
                                        <Input
                                            type="date"
                                            className="border border-gray-300 rounded px-2 py-1"
                                        />
                                    </Form.Item>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-6">

                                    <Form.Item label="Cash" name="cash">
                                        <Checkbox />
                                    </Form.Item>

                                    <Form.Item label="Credit Card" name="creditCard">
                                        <Checkbox />
                                    </Form.Item>

                                    <Form.Item label="Account" name="account">
                                        <Checkbox />
                                    </Form.Item>

                                    <Form.Item label="credit Card Paid" name="creditCardPaid">
                                        <Checkbox />
                                    </Form.Item>


                                    <Form.Item className="text-center mb-0 mt-6">
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-8 py-3 sm:py-4 w-full sm:w-[30%]"
                                        >
                                            Save
                                        </Button>
                                    </Form.Item>
                                    <Form.Item className="text-center mb-0 mt-6">
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-8 py-3 sm:py-4 w-full sm:w-[30%]"
                                        >
                                            Filter
                                        </Button>
                                    </Form.Item>
                                </div>

                            </div>

                        </div>

                    </div>

                </Form>
            </div>


            {/* Dynamic Table */}
            <div className="w-full overflow-x-auto">
                <DynamicTable columns={columns} data={data} />
            </div>

        </div>
    )
}