import { Button } from "antd";
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";


export default function MissingJobsButton({ missingJobs }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);


    return (
        <Button
            type="button"
            onClick={toggleModal}
            className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-green-500 transition-all duration-300 z-50 animate-bounce h-[10vh] mb-20"
        >
            <FaExclamationCircle size={48} className="w-20 h-20" />

            {/* Small badge count */}
            {missingJobs.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {missingJobs.length}
                </span>
            )}
        </Button>
    );
}