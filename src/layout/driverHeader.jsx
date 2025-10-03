import { useState } from "react";
import { FiRefreshCw, FiMessageCircle, FiMail } from "react-icons/fi";
import { MdVisibilityOff } from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";
import EmailModal from "../components/mailModal";
import SmsModal from "../components/smsModal";




const DriverHeader = () => {
    const [drivers] = useState([
        { id: 1, name: "Ali", status: "active", mobile: "1207Hr 1...", code: "NW7" },
        { id: 2, name: "Baber", status: "active", mobile: "1203Hr 4...", code: "747" },
        { id: 3, name: "Farhan", status: "inactive", mobile: "1210Hr 7...", code: "X12" },
        { id: 4, name: "Sara", status: "active", mobile: "1208Hr 2...", code: "A23" },
        { id: 5, name: "Zain", status: "inactive", mobile: "1211Hr 5...", code: "B45" },
        { id: 6, name: "Hassan", status: "active", mobile: "1209Hr 3...", code: "C67" },
        { id: 7, name: "Mona", status: "inactive", mobile: "1212Hr 8...", code: "D89" },
        { id: 8, name: "Ahmed", status: "active", mobile: "1210Hr 6...", code: "E01" },
        { id: 9, name: "Fatima", status: "inactive", mobile: "1213Hr 9...", code: "F23" },
        { id: 10, name: "Omar", status: "active", mobile: "1214Hr 10...", code: "G45" },
        { id: 11, name: "Nadia", status: "active", mobile: "1215Hr 11...", code: "H67" },
        { id: 12, name: "Imran", status: "inactive", mobile: "1216Hr 12...", code: "I89" },
        { id: 13, name: "Sana", status: "active", mobile: "1217Hr 13...", code: "J01" },
        { id: 14, name: "Usman", status: "inactive", mobile: "1218Hr 14...", code: "K23" },
        { id: 15, name: "Hina", status: "active", mobile: "1219Hr 15...", code: "L45" },
        { id: 16, name: "Raza", status: "inactive", mobile: "1220Hr 16...", code: "M67" },
        { id: 17, name: "Ayesha", status: "active", mobile: "1221Hr 17...", code: "N89" },
        { id: 18, name: "Bilal", status: "inactive", mobile: "1222Hr 18...", code: "O01" },
        { id: 19, name: "Maryam", status: "active", mobile: "1223Hr 19...", code: "P23" },
        { id: 20, name: "Sami", status: "inactive", mobile: "1224Hr 20...", code: "Q45" },
    ]);


    const [filter, setFilter] = useState("all");
    const [EmailmodalOpen, setEmailModalOpen] = useState(false);
    const [SmsmodalOpen, setSmsModalOpen] = useState(false);
    const [showSubsidaries, setShowSubsidaries] = useState(false);

    const activeDrivers = drivers.filter(d => d.status === "active");
    const inactiveDrivers = drivers.filter(d => d.status === "inactive");

    const displayedDrivers = filter === "all"
        ? drivers
        : drivers.filter(d => d.status === filter);

    return (
        <div className="p-4 bg-gray-50 rounded-md shadow-md w-full mt-8">
            {/* Header + Icons */}
            <div className="flex items-center justify-between mb-4">
                <p className="font-semibold text-lg">DRIVERS</p>
                <div className="flex items-center gap-2">
                    <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" title="Reset" onClick={() => setFilter('all')}>
                        <FiRefreshCw />
                    </button>
                    <button className="p-2 bg-gray-200 rounded hover:bg-gray-300" title="Hidden">
                        <MdVisibilityOff />
                    </button>
                    <button
                        onClick={() => setEmailModalOpen(true)}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                        title="Email"
                    >
                        <FiMail />
                    </button>
                    <EmailModal
                        openIt={EmailmodalOpen}
                        onClose={() => setEmailModalOpen(false)}
                    />
                    <button
                        onClick={() => setSmsModalOpen(true)}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                        title="Send SMS"
                    >
                        <FiMessageCircle />
                    </button>
                    <SmsModal
                        openIt={SmsmodalOpen}
                        onClose={() => setSmsModalOpen(false)}
                    />
                    <div className="mb-2 w-full">
                        <button
                            onClick={() => setShowSubsidaries(prev => !prev)}
                            className="p-2 bg-gray-200 rounded hover:bg-gray-300 mt-2"
                        >
                            <AiOutlineBank />
                        </button>


                    </div>

                </div>


            </div>


            <div className="flex flex-col gap-2 mb-2 w-full">

                {showSubsidaries && (
                    <select
                        name="subsidiaries"
                        className="w-full border border-gray-300 rounded px-2 py-1 bg-white"
                    >
                        <option>All Subsidiaries</option>
                        <option>Demo Company</option>
                    </select>
                )}

                <div className="flex items-center gap-4">
                    <div
                        className="w-[50%] flex items-center justify-center gap-1 cursor-pointer"
                        onClick={() => setFilter("active")}
                    >
                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                        <span>({activeDrivers.length})</span>
                    </div>

                    <div
                        className="w-[50%] flex items-center justify-center gap-1 cursor-pointer"
                        onClick={() => setFilter("inactive")}
                    >
                        <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                        <span>({inactiveDrivers.length})</span>
                    </div>
                </div>
            </div>





            {/* Driver List */}
            <div className="overflow-y-auto max-h-[430px]">
                {displayedDrivers.map(driver => (
                    <div key={driver.id + driver.code} className="flex items-center justify-between text-sm mb-1 p-2 rounded hover:bg-gray-100">
                        <div className="flex items-center gap-2 w-[40%]">
                            <div className={`w-3 h-3 rounded-full ${driver.status === "active" ? "bg-green-500" : "bg-orange-500"}`}></div>
                            <span>{driver.name}</span>
                        </div>
                        <div className="flex items-center gap-1 w-[20%]">
                            <FiMessageCircle />
                        </div>
                        <div className="w-[30%] text-xs">{driver.mobile}</div>
                        <div className="w-[10%] font-bold text-white bg-blue-500 text-center rounded">{driver.code}</div>
                    </div>
                ))}
            </div>

            {/* Reset filter button */}
            {filter !== "all" && (
                <div className="mt-2 text-right">
                    <button
                        onClick={() => setFilter("all")}
                        className="text-sm text-blue-500 hover:underline"
                    >
                        Show All
                    </button>
                </div>
            )}
        </div>
    );
};

export default DriverHeader;
