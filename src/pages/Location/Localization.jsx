import { useState } from "react";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import DynamicTable from "../../components/dynamicTable";
import { Button, Modal, Form, Input } from "antd";
import { Trash2 } from "lucide-react";
import { FiPlus } from "react-icons/fi";

const PostCode = [
    { key: 1, postcode: "NW10 2PN" },
    { key: 2, postcode: "E13 9LF" },
    { key: 3, postcode: "NW6 1AA" }
];

const LocalizationPage = () => {
    const [data, setData] = useState(PostCode);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const handleDelete = (record) => {
        setData(data.filter((item) => item.key !== record.key));
    };

    const handleAdd = () => {
        setIsModalOpen(true); // Open modal
    };

    const handleCancel = () => {
        setIsModalOpen(false); // Close modal
    };

    const onFinish = (values) => {
        const newKey = data.length ? Math.max(...data.map(d => d.key)) + 1 : 1;
        setData([...data, { key: newKey, postcode: values.postcode }]);
        setIsModalOpen(false); // Close modal after saving
    };

    // Dynamic table ke liye action column add karna
    const enhancedData = data.map((row) => ({
        ...row,
        action: (
            <div className="flex gap-2 justify-center">
                <Button
                    className="bg-red-700 text-white"
                    icon={<Trash2 size={16} />}
                    onClick={() => handleDelete(row)}
                />
            </div>
        ),
    }));

    return (
        <>
            <Navbar />
            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="w-[50%] mx-auto mt-5 text-center bg-gray-300 p-4 rounded-lg shadow-lg">
                <div>
                    {/* Heading Section */}
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-4xl py-3">Localization</h2>
                        <Button
                            className="bg-[#424899] text-white flex items-center gap-2 px-4 py-2"
                            onClick={handleAdd} // Open modal on click
                        >
                            <FiPlus size={20} /> Add
                        </Button>
                    </div>

                    {/* Table Section */}
                    <div className="w-full flex justify-center">
                        <div className="w-full">
                            <DynamicTable data={enhancedData} />
                        </div>
                    </div>

                    {/* Modal */}
                    <Modal
                        open={isModalOpen}
                        footer={null}
                        onCancel={handleCancel}
                    >
                        <Form
                            name="postcode-form"
                            layout="vertical"
                            className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md"
                            autoComplete="off"
                            onFinish={onFinish}
                        >
                            <h2 className="text-xl font-semibold mb-4 text-[#757cdd] text-center">
                                Add Postcode
                            </h2>

                            <Form.Item
                                label="Postcode"
                                name="postcode"
                                rules={[{ required: true, message: "Please input a postcode!" }]}
                            >
                                <Input placeholder="Enter postcode" className="h-10" />
                            </Form.Item>

                            <Form.Item className="text-center mb-0">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-8 py-2"
                                >
                                    Save
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default LocalizationPage;
