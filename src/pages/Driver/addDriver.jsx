import { Button, message } from "antd";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import Dragger from "antd/es/upload/Dragger";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import VehicleInformation from "../../components/Driver/VInfoForm";
import PersonalInformation from "../../components/Driver/PInfoForm";
import DocumentsTable from "../../components/Driver/DocumenTable";

export default function AddDriver() {
    // Image Upload
    const [fileList, setFileList] = useState([]);
    const props = {
        action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
        multiple: true,
        fileList,
        listType: "picture",
        onChange: ({ file, fileList: newFileList }) => {
            setFileList(newFileList);
            if (file.status === "done") {
                message.success(`${file.name} uploaded successfully.`);
            } else if (file.status === "error") {
                message.error(`${file.name} upload failed.`);
            }
        },
        onPreview: async (file) => {
            let src = file.url;
            if (!src) {
                src = await new Promise((resolve) => {
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
        setFileList([]);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="mt-20 px-4 md:px-8">
                <RecentTabsHeader />
            </div>

            {/* Heading Section */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-5 px-4 md:px-8 gap-3 w-full mt-5">
                <h2 className="text-2xl md:text-4xl font-semibold text-center md:text-left text-gray-800">
                    Driver Information
                </h2>

                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <Button className="bg-[#424899] text-white flex items-center gap-2 px-4 py-2 w-full md:w-auto justify-center">
                        Shift
                    </Button>
                    <Button className="bg-[#424899] text-white flex items-center gap-2 px-4 py-2 w-full md:w-auto justify-center">
                        Notes
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row flex-wrap justify-center items-start w-full gap-6 px-4 md:px-8">

                {/* Image Upload */}
                <div className="w-full sm:w-[70%] md:w-[50%] lg:w-[20%] flex justify-center mx-auto">
                    <div className="relative w-full max-w-[300px] md:max-w-none h-[35vh] sm:h-[45vh] md:h-[55vh] lg:h-[60vh]">
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
                                <p className="ant-upload-drag-icon text-4xl text-white">
                                    <PlusOutlined />
                                </p>
                                <p className="text-4xl mb-2 font-semibold text-center">
                                    Upload Image
                                </p>
                                <p className="ant-upload-text text-sm text-center">
                                    Click or drag file to upload
                                </p>
                                <p className="ant-upload-hint text-white text-xs text-center">
                                    Support for single or bulk upload.
                                </p>
                            </Dragger>
                        )}
                    </div>
                </div>

                {/* Forms Section */}
                <div className="w-full lg:flex-1 flex flex-col lg:flex-row gap-6">

                    {/* Personal Form */}
                    <div className="w-full lg:w-1/2">
                        <PersonalInformation />
                    </div>

                    {/* Vehicle Form */}
                    <div className="w-full lg:w-1/2">
                        <VehicleInformation />
                    </div>

                </div>
            </div>


            {/* Documents Table */}
            <div className="mt-10 px-4 md:px-8">
                <DocumentsTable />
            </div>
        </div>
    );
}
