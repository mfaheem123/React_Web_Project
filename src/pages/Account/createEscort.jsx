import {
    Button,
    DatePicker,
    Input,
    message,
    Table,
    Upload,
    Checkbox,
    Form,
} from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import Dragger from "antd/es/upload/Dragger";
import { CloseOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";


export default function AddEscort() {
    // Image Upload
    const [fileList, setFileList] = useState([]);
    const [loading, setLoading] = useState(false);

    const props = {
        action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
        multiple: true,
        fileList,
        listType: "picture",
        onChange: ({ file, fileList: newFileList }) => {
            setFileList(newFileList);
            if (file.status === "done") message.success(`${file.name} uploaded successfully.`);
            else if (file.status === "error") message.error(`${file.name} upload failed.`);
        },
    };

    const removeImage = () => setFileList([]);

    const data = [
        { key: 1, title: "Safeguarding" },
        { key: 2, title: "Pat" },
        { key: 3, title: "FirstAid" },
        { key: 4, title: "DBS" },
    ];

    const props2 = {
        name: "file",
        action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
        onChange(info) {
            if (info.file.status === "done")
                message.success(`${info.file.name} uploaded successfully`);
            else if (info.file.status === "error")
                message.error(`${info.file.name} upload failed.`);
        },
    };

    const columns = [
        {
            title: "EXPIRY DATE",
            dataIndex: "expiryDate",
            render: () => (
                <DatePicker format="MM/DD/YYYY" placeholder="MM/DD/YYYY" className="w-full" />
            ),
        },
        {
            title: "BATCH #",
            dataIndex: "batch",
            render: (_, record) => <Input defaultValue={`# ${record.title}`} />,
        },
        {
            title: "DOCUMENT TITLE",
            dataIndex: "title",
            render: (text) => <span className="font-medium">{text}</span>,
        },
        {
            title: "FILE",
            render: () => (
                <Upload {...props2}>
                    <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
            ),
        },
    ];

    const onFinishPersonal = (values) => {
        setLoading(true);
        setTimeout(() => {
            message.success("Escort information saved!");
            setLoading(false);
        }, 1000);
    };

    return (
        <div className="bg-gray-50">
            <Navbar />

            {/* Header Section */}
            <div className="mt-20 px-4 md:px-8">
                <RecentTabsHeader />
            </div>

            {/* Page Heading */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-5 px-4 md:px-8 gap-3 w-full mt-5">
                <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left text-gray-800">
                    Escort Information
                </h2>
            </div>

            {/* Main Section */}
            <div className="flex flex-col xl:flex-row w-full gap-6 px-4 md:px-8 pb-10">

                {/* LEFT: Image Upload */}
                <div className="w-full sm:w-[70%] md:w-[30%] xl:w-1/4 flex justify-center">
                    <div className="relative w-full max-w-[300px] h-[40vh]">
                        {fileList.length > 0 ? (
                            <div className="relative h-full w-full">
                                <img
                                    src={
                                        fileList[0].thumbUrl ||
                                        URL.createObjectURL(fileList[0].originFileObj)
                                    }
                                    alt="Uploaded"
                                    className="w-full h-full object-cover rounded-xl shadow-md"
                                />
                                <Button
                                    type="primary"
                                    danger
                                    icon={<CloseOutlined />}
                                    size="small"
                                    onClick={removeImage}
                                    className="absolute top-2 right-2 z-10"
                                />
                            </div>
                        ) : (
                            <Dragger
                                {...props}
                                className="h-full flex flex-col justify-center p-4 bg-gray-200 rounded-xl shadow-md"
                            >
                                <p className="text-5xl text-gray-700 mb-2">
                                    <PlusOutlined />
                                </p>
                                <p className="text-xl font-semibold text-gray-700">
                                    Upload Image
                                </p>
                                <p className="text-sm text-gray-500">
                                    Click or drag file to upload
                                </p>
                            </Dragger>
                        )}
                    </div>
                </div>

                {/* CENTER: Personal Form */}
                <div className="w-full xl:w-1/3 bg-gray-200 p-6 rounded-2xl shadow-md">
                    <Form
                        name="personalForm"
                        layout="vertical"
                        onFinish={onFinishPersonal}
                        autoComplete="off"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Form.Item name="isActive" valuePropName="checked">
                                <Checkbox>Active</Checkbox>
                            </Form.Item>

                            <Form.Item label="User Name" name="username" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                                <Input.Password />
                            </Form.Item>

                            <Form.Item label="Full Name" name="fullname" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item label="DOB" name="dob" rules={[{ required: true }]}>
                                <Input type="date" />
                            </Form.Item>

                            <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                                <Input type="email" />
                            </Form.Item>
                        </div>

                        <div className="text-center mt-6">
                            <Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-10 py-3"
                            >
                                Save
                            </Button>
                        </div>
                    </Form>
                </div>

                {/* RIGHT: Documents Table */}
                <div className="w-full xl:w-2/3 bg-white p-4 rounded-xl shadow-md overflow-x-auto">
                    <Table
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        bordered
                        className="custom-table"
                    />
                </div>

            </div>

        </div>
    );
}
