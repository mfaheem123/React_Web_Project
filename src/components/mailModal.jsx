import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Modal } from "antd";

const EmailModal = ({ openIt, onClose }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // prop ke basis pe modal open/close
    useEffect(() => {
        setIsModalOpen(openIt);
    }, [openIt]);

    const handleClose = () => {
        setIsModalOpen(false);
        onClose && onClose(); // parent ko notify karna
    };

    return (
        <Modal
            title="Send Email"
            open={isModalOpen}
            onCancel={handleClose}
            footer={null} // agar custom footer nahi chahiye
            closable={false} // custom close button use kar rahe hain
            centered
        >
            {/* Custom Close Button */}
            <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
            >
                <X size={20} />
            </button>

            {/* Form */}
            <form className="space-y-4 mt-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email To</label>
                    <input
                        type="email"
                        placeholder="example@email.com"
                        className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name or Mobile</label>
                    <input
                        type="text"
                        placeholder="Enter name or mobile"
                        className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Driver</label>
                    <select className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none">
                        <option>Select Driver</option>
                        <option>Driver 1</option>
                        <option>Driver 2</option>
                        <option>Driver 3</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                        type="text"
                        placeholder="Enter subject"
                        className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Type Your Email</label>
                    <textarea
                        rows="4"
                        placeholder="Write your message here..."
                        className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                    Send
                </button>
            </form>
        </Modal>
    );
};

export default EmailModal;
