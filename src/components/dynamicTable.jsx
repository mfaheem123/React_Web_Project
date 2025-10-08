import React from "react";

const DynamicTable = ({ data }) => {
    if (!data || data.length === 0) {
        return <p>No data available</p>;
    }

    // Columns ko dynamically extract karna
    const columns = Object.keys(data[0]);

    return (
        <table className="min-w-full border border-gray-300">
            {/* Table Head */}
            <thead className="bg-gray-200">
                <tr>
                    {columns.map((col) => (
                        <th
                            key={col}
                            className="border px-4 py-2 text-left"
                        >
                            {col.toUpperCase()}
                        </th>
                    ))}
                </tr>
            </thead>

            {/* Table Body */}
            <tbody>
                {data.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        {columns.map((col) => (
                            <td key={col} className="border px-4 py-2">
                                {row[col]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DynamicTable;
