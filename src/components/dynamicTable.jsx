import React from "react";
import { Table } from "antd";

const DynamicTable = ({ columns = [], data = [] }) => {
    // ✅ Default columns if none provided
    const defaultColumns =
        columns.length > 0
            ? columns
            : data.length > 0
                ? Object.keys(data[0]).map((key) => ({
                    title: key.toUpperCase(),
                    dataIndex: key,
                    key,
                    align: "center",
                }))
                : [];

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 mt-4 w-full">
            <div className="overflow-x-auto">
                <Table
                    columns={defaultColumns}
                    dataSource={data}
                    bordered
                    pagination={false}
                    className="rounded-lg min-w-[full]" // ✅ Ensures layout stability
                    scroll={{ x: true }} // ✅ Makes it horizontally scrollable on mobile
                    locale={{
                        emptyText: (
                            <div className="text-gray-500 py-6 text-center text-sm">
                                No data available
                            </div>
                        ),
                    }}
                />
            </div>
        </div>
    );
};

export default DynamicTable;
