import React from "react";
import { Table, Button, DatePicker, Input, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const DocumentsTable = () => {
    const data = [
        { key: 1, title: "PHC VEHICLE" },
        { key: 2, title: "PHC DRIVER" },
        { key: 3, title: "MOT" },
        { key: 4, title: "MOT 2" },
        { key: 5, title: "INSURANCE" },
        { key: 6, title: "LICENSE" },
        { key: 7, title: "ROAD TAX" },
        { key: 8, title: "V5 REGISTRATION" },
        { key: 9, title: "RENTAL AGREEMENT" },
    ];

  
    const props = {
        name: 'file',
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const columns = [
        {
            title: "EXPIRY DATE",
            dataIndex: "expiryDate",
            key: "expiryDate",
            render: () => (
                <DatePicker
                    format="MM/DD/YYYY"
                    placeholder="MM/DD/YYYY"
                    className="w-full"
                />
            ),
        },
        {
            title: "BATCH #",
            dataIndex: "batch",
            key: "batch",
            render: (_, record) => <Input defaultValue={`# ${record.title}`} />,
        },
        {
            title: "DOCUMENT TITLE",
            dataIndex: "title",
            key: "title",
            render: (text) => <span className="font-medium">{text}</span>,
        },
        {
            title: "FILE",
            key: "file",
            render: () => (
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
            ),
        },
    ];

    return (
        <div className="p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-[#757cdd] mb-4 text-center">
                Documents Information
            </h2>

            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                bordered
                className="custom-table"
            />
        </div>
    );
};

export default DocumentsTable;
