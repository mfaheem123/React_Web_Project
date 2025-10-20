import React from "react";
import { Table } from "antd";

const DynamicTable = ({ data = [], columns = [] }) => {
    // Columns generate karo agar manually pass nahi hue
    const dynamicColumns =
        columns.length > 0
            ? columns
            : data.length > 0
                ? Object.keys(data[0]).map((key) => ({
                    title: key.toUpperCase(),
                    dataIndex: key,
                    key,
                }))
                : [];

    // Agar data empty hai to bhi headings visible rahen
    const showColumns =
        dynamicColumns.length > 0
            ? dynamicColumns
            : [
                {
                    title: "NO DATA FOUND",
                    dataIndex: "nodata",
                    key: "nodata",
                    render: () => "—",
                },
            ];

    // Empty text message custom
    const locale = {
        emptyText: (
            <div className="text-gray-500 text-center py-3">
                No data available
            </div>
        ),
    };

    return (
        <div className="shadow-md border border-gray-200 rounded-lg overflow-hidden">
            <Table
                dataSource={data}
                columns={showColumns}
                pagination={false}
                locale={locale}
                className="custom-ant-table"
            />
        </div>
    );
};

export default DynamicTable;
