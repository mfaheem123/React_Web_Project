import { Button } from "antd";
import { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";


export default function MissingJobsButton({ missingJobs }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);


    return (
        <>
            <Button
                type="button"
                onClick={toggleModal}
                className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-4 00 transition-all duration-300 z-50 animate-bounce h-[7vh] mb-20"
            >
                <FaExclamationCircle size={48} className="w-8 h-9" />

                {/* Small badge count */}
                {missingJobs.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        {missingJobs.length}
                    </span>
                )}
                
            </Button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
                    <div className="bg-white rounded-lg p-6 w-[400px] max-h-[80vh] overflow-y-auto relative">
                        <h2 className="text-xl font-semibold mb-4">Missing Jobs / Alerts</h2>
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg font-bold"
                            onClick={toggleModal}
                        >
                            ✖
                        </button>

                        {missingJobs.length === 0 ? (
                            <p>No missing jobs!</p>
                        ) : (
                            <ul className="space-y-2">
                                {missingJobs.map((job, index) => (
                                    <li
                                        key={index}
                                        className="p-2 border rounded hover:bg-gray-100"
                                    >
                                        {job}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}

        </>
    );
}