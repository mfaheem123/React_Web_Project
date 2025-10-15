import { useState, useEffect } from "react";
import { Home, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "antd";

const RecentTabsHeader = () => {
    const location = useLocation(); // Detect page change
    const [recentTabs, setRecentTabs] = useState([]);
    // const navigate = useNavigate()

    // const Moveto = () => {
    //     useEffect(() => { 

    //     })
    // }


    const closeTab = (tab) => {
        setRecentTabs(recentTabs.filter((t) => t !== tab));
    };

    // Add new tab on page change
    useEffect(() => {
        const path = location.pathname.replace("/", "");
        if (!path) return;

        const label = path
            .split("-")
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ");

        setRecentTabs((prev) => {
            if (!prev.includes(label)) {
                return [...prev, label];
            }
            return prev;
        });
    }, [location]); // only location is needed


    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 mt-[-15px] bg-gray-100 rounded-md shadow-md gap-4">
            {/* Home Icon */}
            <div className="flex items-center gap-2 cursor-pointer hover:text-[#757cdd]">
                <Home size={20} />
                <span onClick={' '} className="font-semibold">Home</span>
            </div>

            {/* Recent Tabs */}
            <div className="w-full flex flex-wrap gap-2 ">
                {recentTabs.map((tab, index) => (
                    <Button
                        key={index}
                        className="flex items-center bg-gray-200 px-3 py-1 rounded-md gap-1"
                    >
                        <span>{tab}</span>
                        <X
                            size={16}
                            className="cursor-pointer hover:text-red-500"
                            onClick={() => closeTab(tab)}
                        />
                    </Button>
                ))}
            </div>
        </div>
    );
};

export default RecentTabsHeader;
