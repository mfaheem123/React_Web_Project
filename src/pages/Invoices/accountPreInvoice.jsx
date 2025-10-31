import { useState } from "react";
import { Button } from "antd";
import { Edit, Trash2 } from "lucide-react";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";


const AccountPreInvoices = () => {
    const initialData = [
        {
            key: 1,
            invoice: "INV-001",
            customer: "John Doe",
            date: "2025-10-01",
            dueDate: "2025-10-10",
            status: "Paid",
            amount: "$250.00",
        },
        {
            key: 2,
            invoice: "INV-002",
            customer: "Jane Smith",
            date: "2025-10-03",
            dueDate: "2025-10-12",
            status: "Pending",
            amount: "$180.00",
        },
        {
            key: 3,
            invoice: "INV-003",
            customer: "Michael Brown",
            date: "2025-10-05",
            dueDate: "2025-10-15",
            status: "Overdue",
            amount: "$320.00",
        },
        {
            key: 4,
            invoice: "INV-004",
            customer: "Lisa Jones",
            date: "2025-10-07",
            dueDate: "2025-10-16",
            status: "Paid",
            amount: "$400.00",
        },
        {
            key: 5,
            invoice: "INV-005",
            customer: "David Wilson",
            date: "2025-10-09",
            dueDate: "2025-10-18",
            status: "Pending",
            amount: "$275.00",
        },
    ];

    const [data, setData] = useState(initialData);

    const handleUpdate = (record) => {
        console.log("Update clicked:", record);
    };

    const handleDelete = (record) => {
        console.log("Delete clicked:", record);
        setData((prev) => prev.filter((item) => item.key !== record.key));
    };

    const columns = [
        {
            title: "INVOICE #",
            dataIndex: "invoice",
            key: "invoice",
            align: "center",
        },
        {
            title: "CUSTOMER",
            dataIndex: "customer",
            key: "customer",
            align: "center",
        },
        {
            title: "DATE",
            dataIndex: "date",
            key: "date",
            align: "center",
        },
        {
            title: "DUE DATE",
            dataIndex: "dueDate",
            key: "dueDate",
            align: "center",
        },
        {
            title: "STATUS",
            dataIndex: "status",
            key: "status",
            align: "center",
            // render: (status) => {
            //     const color =
            //         status === "Paid"
            //             ? "text-green-600"
            //             : status === "Pending"
            //                 ? "text-yellow-600"
            //                 : "text-red-600";
            //     return <span className={color}>{status}</span>;
            // },
        },
        {
            title: "AMOUNT",
            dataIndex: "amount",
            key: "amount",
            align: "center",
        },
        {
            title: "ACTIONS",
            key: "actions",
            align: "center",
            render: (_, record) => (
                <div className="flex gap-2 justify-center">
                    <Button
                        className="bg-[#424899] text-white border-none"
                        icon={<Edit size={16} />}
                        onClick={() => handleUpdate(record)}
                    />
                    <Button
                        className="bg-red-700 text-white border-none"
                        icon={<Trash2 size={16} />}
                        onClick={() => handleDelete(record)}
                    />
                </div>
            ),
        },
    ];

    return (
        <>
            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="w-full overflow-x-auto mt-5 px-2 md:px-0">
                {/* Heading Section */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4 gap-4">

                    {/* Left side: Title + Checkbox */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                        <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
                            Account Pre Invoices  (<span className="text-green-600">{data.length}</span>)
                        </h2>
                    </div>

                    {/* Right side: Refresh Button */}
                    <div className="flex justify-center md:justify-end w-full md:w-auto">
                        <Button type="primary" className="bg-[#4B5FD4] hover:!bg-[#3a4bb0] px-6 py-2">
                            Refresh
                        </Button>
                    </div>
                </div>


                {/* Dynamic Table */}
                <div className="w-full overflow-x-auto">
                    <DynamicTable columns={columns} data={data} />
                </div>
            </div>

        </>
    );
};

export default AccountPreInvoices;
