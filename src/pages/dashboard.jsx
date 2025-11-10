import BookingForm from "../layout/formMain";
import MapPlotSection from "../layout/mapPlot";
import DriverHeader from "../layout/driverHeader";
import RecentTabsHeader from "../components/recentTabs";
import { useEffect, useState } from "react";
import BookingTable from "../layout/dataTables";
import MissingJobsButton from "../components/JobsBtn";

export default function Dashboard() {

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "F1") {
                alert("You pressed F1 key and its function is active!");
                e.preventDefault();
            } else if (e.key === 'F2') {
                alert("You pressed F2 key and its function is active!");
                e.preventDefault();
            } else if (e.key === 'F3') {
                alert("You pressed F3 key and its function is active!");
                e.preventDefault();
            } else if (e.key === 'F4') {
                alert("You pressed F4 key and its function is active!");
                e.preventDefault();
            } else if (e.key === 'F6') {
                alert("You pressed F6 key and its function is active!");
                e.preventDefault();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, []);

    const [hideDashboard, setHidedashboard] = useState(false);

    const HandleDashBtn = () => {
        setHidedashboard((prev) => !prev);
    };

    const missingJobs = [
        "Driver Ali missed Job #101",
        "Driver Farhan missed Job #102",
        "Driver Sara missed Job #103",
    ];
    return (
        <div id="home" className="relative min-h-screen bg-white text-black">
            {/* DashBoard UI */}
            <>
                <div className="p-6 w-full">

                    <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-100 p-4 rounded-md mb-4 mt-10 shadow-md gap-4">
                        {/* Left side: Function buttons */}
                        <div className="flex flex-wrap justify-start md:justify-evenly gap-2 md:gap-4 w-full md:w-[50%]">
                            <div className="flex items-center gap-1 md:gap-2">
                                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded font-bold">F1</span>
                                <span>Base Address</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded font-bold">F2</span>
                                <span>Booking Form</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded font-bold">F3</span>
                                <span>Driver Vehicles</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded font-bold">F4</span>
                                <span>Driver Earning</span>
                            </div>
                            <div className="flex items-center gap-1 md:gap-2">
                                <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded font-bold">F6</span>
                                <span>Quotation</span>
                            </div>
                        </div>

                        {/* Right side: Hide Dashboard button */}
                        <div className="w-full md:w-auto flex justify-start md:justify-end">
                            <button onClick={HandleDashBtn} className="px-4 py-2 bg-[#424899] text-white rounded-md hover:hover:bg-[#757cdd] transition w-full md:w-auto">
                                Hide DashBoard
                            </button>
                        </div>
                    </div>


                    <div>
                        <RecentTabsHeader />
                    </div>

                    {!hideDashboard && (
                        <div className="w-full flex flex-col lg:flex-row gap-4">
                            {/* Left Section */}
                            <div className="w-full lg:w-1/2">
                                <BookingForm />
                            </div>

                            {/* Right Section */}
                            <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:flex-row">
                                {/* Top / Left inside Right */}
                                <div className="w-full lg:w-3/4 flex flex-col gap-4">
                                    <MapPlotSection className="w-full h-[400px] sm:h-[400px] md:h-[400px] lg:h-[600px] min-h-[400px] lg:min-h-[600px]" />
                                </div>


                                {/* Bottom / Right inside Right */}
                                <div className="w-full lg:w-2/4">
                                    <DriverHeader />
                                </div>

                            </div>
                        </div>
                    )}

                    {/* Jobs Floating Button */}
                    <MissingJobsButton missingJobs={missingJobs} />

                </div>

                <div className="p-2 mb-5 mt-[-35px]">

                    <BookingTable />

                </div>
            </>



        </div>

    )
}