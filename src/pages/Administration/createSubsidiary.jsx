import { useState } from "react";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload, Form, Input, Button, Modal } from 'antd';
import TextArea from "antd/es/input/TextArea";

export default function CreateSubssidiary() {
    const { Dragger } = Upload;
    const [fileList, setFileList] = useState([]);

    const props = {
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        multiple: true,
        fileList, // ✅ state se control
        listType: 'picture', // ✅ preview ke liye
        onChange: ({ file, fileList: newFileList }) => {
            setFileList(newFileList);
            if (file.status === 'done') {
                message.success(`${file.name} uploaded successfully.`);
            } else if (file.status === 'error') {
                message.error(`${file.name} upload failed.`);
            }
        },
        onPreview: async file => {
            let src = file.url;
            if (!src) {
                src = await new Promise(resolve => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file.originFileObj);
                    reader.onload = () => resolve(reader.result);
                });
            }
            const imgWindow = window.open(src);
            imgWindow.document.write(`<img src="${src}" style="width:100%" />`);
        },
    };

    const removeImage = () => {
        setFileList([]); // image remove kar do
    };

    // Bank Transfer Modal
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

            <div className="w-full flex flex-col md:flex-row items-start justify-center gap-6 p-4">

                {/* Image upload */}
                <div className="h-[60vh] md:h-[60vh] sm:h-[30vh] w-[30%] lg:w-[30%] md:w-full sm:w-full flex flex-col justify-center p-4 relative">
                    {fileList.length > 0 ? (
                        <div className="relative h-full w-full">
                            <img
                                src={fileList[0].thumbUrl || URL.createObjectURL(fileList[0].originFileObj)}
                                alt="Uploaded"
                                className="w-full sm:w-full h-full object-cover rounded"
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
                            className="h-full flex flex-col justify-center p-4 w-full max-w-[100%] min-w-[250px]"
                        >
                            <p className="ant-upload-drag-icon text-4xl text-white"><PlusOutlined /></p>
                            <p className="text-4xl mb-4 font-semibold text-center">Upload Image</p>
                            <p className="ant-upload-text text-white text-sm text-center">
                                Click or drag file to upload
                            </p>
                            <p className="ant-upload-hint text-white text-xs text-center">
                                Support for single or bulk upload. Prohibited from uploading company data.
                            </p>
                        </Dragger>
                    )}
                </div>


                {/* Form Section */}
                <div className="w-full md:w-3/4 p-2">
                    <div className="p-4 shadow-md bg-[#424899] text-white flex justify-between items-center">
                        <h2 className="text-2xl md:text-3xl font-semibold">Subsidiary</h2>
                        <Button style={{
                            background: 'white',
                        }} onClick={showModal}>
                            Bank Details
                        </Button>
                    </div>

                    {/* Subssidiary Form */}
                    <div className="bg-gray-200 p-5 mt-2 rounded-lg">
                        <Form layout="vertical">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                                <Form.Item
                                    label="Name"
                                    name="name"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name="email"
                                >
                                    <Input type="email" className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Fax"
                                    name="fax"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                <Form.Item
                                    label="Website"
                                    name="website"
                                >
                                    <Input className="w-full" />
                                </Form.Item>

                                <Form.Item label="Phone" name="phone">
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                <Form.Item label="Emergency Contact" name="emergencyContect">
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                <Form.Item label="Background Color" name="bgColor">
                                    <Input type="color" className="w-full" />
                                </Form.Item>


                                <Form.Item label="Foreground Color" name="frColor">
                                    <Input type="color" className="w-full" />
                                </Form.Item>


                                <Form.Item label="Company" name="company">
                                    <Input type="number" className="w-full" />
                                </Form.Item>

                                <Form.Item label="Currency" name="currency">
                                    <Input className="w-full" />
                                </Form.Item>

                                <Form.Item label="Address" name="address">
                                    <TextArea />
                                </Form.Item>


                                <Form.Item label="Balance" name="balance">
                                    <Input className="w-full" />
                                </Form.Item>




                            </div>

                            {/* Submit Button */}
                            <Form.Item className="mt-4 text-center">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-[#424899] border-none hover:bg-[#5a60d1] px-8 py-3 w-full sm:w-1/2 md:w-1/3"
                                >
                                    Save
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                    <div className="w-full bg-blue-900">
                        <Modal
                            title="Bank Details"
                            closable={{ 'aria-label': 'Custom Close Button' }}
                            open={isModalOpen}
                            onOk={handleOk}
                            onCancel={handleCancel}
                            width={'80%'}
                            footer={null}
                        >
                            <Form layout="vertical">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">

                                    <Form.Item
                                        label="Bank"
                                        name="bank"
                                    >
                                        <Input className="w-full" />
                                    </Form.Item>

                                    <Form.Item
                                        label="Account Title"
                                        name="accountTitle"
                                    >
                                        <Input className="w-full" />
                                    </Form.Item>

                                    <Form.Item
                                        label="Account Number"
                                        name="accountNumber"
                                    >
                                        <Input type="number" className="w-full" />
                                    </Form.Item>

                                    <Form.Item
                                        label="IBAN Number"
                                        name="iban"
                                    >
                                        <Input className="w-full" />
                                    </Form.Item>

                                    <Form.Item label="Sort Code" name="sortCode">
                                        <Input className="w-full" />
                                    </Form.Item>

                                    <Form.Item label="VAT" name="vat">
                                        <Input type="number" className="w-full" />
                                    </Form.Item>

                                    {/* Submit Button */}
                                    <Form.Item className="mt-8 text-center">
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="bg-[#424899] border-none hover:bg-[#5a60d1] px-8 py-3 w-full sm:w-1/2 md:w-1/3"
                                        >
                                            Save
                                        </Button>
                                    </Form.Item>
                                </div>
                            </Form>
                        </Modal>
                    </div>
                </div>
            </div>

        </div >
    );
}
