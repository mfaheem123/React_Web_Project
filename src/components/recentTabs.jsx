import { useState, useEffect } from "react";
import { Home, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";

const RecentTabsHeader = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [recentTabs, setRecentTabs] = useState([]);

    // Load tabs from localStorage initially
    useEffect(() => {
        const storedTabs = JSON.parse(localStorage.getItem("recentTabs")) || [];
        setRecentTabs(storedTabs);

        // Navigate to last tab if on home
        if (storedTabs.length > 0 && location.pathname === "/") {
            const lastTab = storedTabs[storedTabs.length - 1];
            const path = `/${lastTab.toLowerCase().split(" ").join("-")}`;
            navigate(path);
        }
    }, []);

    // Update recentTabs on location change
    useEffect(() => {
        const path = location.pathname.replace("/", "");
        if (!path) return;

        const label = path
            .split("-")
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ");

        setRecentTabs((prevTabs) => {
            if (!prevTabs.includes(label)) {
                const updatedTabs = [...prevTabs, label];
                localStorage.setItem("recentTabs", JSON.stringify(updatedTabs));
                return updatedTabs;
            }
            return prevTabs;
        });
    }, [location.pathname]);

    const closeTab = (tab) => {
        const updatedTabs = recentTabs.filter((t) => t !== tab);
        setRecentTabs(updatedTabs);
        localStorage.setItem("recentTabs", JSON.stringify(updatedTabs));

        const currentPath = location.pathname.replace("/", "").toLowerCase();
        if (tab.toLowerCase() === currentPath) {
            if (updatedTabs.length > 0) {
                const lastTab = updatedTabs[updatedTabs.length - 1];
                const path = `/${lastTab.toLowerCase().split(" ").join("-")}`;
                navigate(path);
            } else {
                navigate("/");
            }
        }
    };

    const handleNavigate = (tab) => {
        const path = `/${tab.toLowerCase().split(" ").join("-")}`;
        navigate(path);
    };

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 mt-[-15px] bg-gray-100 rounded-md shadow-md gap-4">
            {/* Home */}
            {/* Home */}
            <div
                className={`flex items-center gap-2 cursor-pointer ${location.pathname === "/" ? "text-[#757cdd]" : "hover:text-[#757cdd]"
                    }`}
                onClick={() => {
                    localStorage.removeItem("recentTabs"); // Clear local storage
                    setRecentTabs([]); // Clear state
                    navigate("/"); // Go to home
                }}
            >
                <Home size={20} />
                <span className="font-semibold">Home</span>
            </div>


            {/* Scrollable Recent Tabs */}
            <div className="w-full overflow-x-auto flex gap-2 py-1">
                {recentTabs.map((tab, index) => {
                    const tabPath = `/${tab.toLowerCase().split(" ").join("-")}`;
                    const isActive = location.pathname === tabPath;
                    return (
                        <Button
                            key={index}
                            className={`flex items-center px-3 py-1 rounded-md gap-1 whitespace-nowrap ${isActive
                                ? "bg-[#757cdd] text-white"
                                : "bg-gray-200 text-black hover:bg-gray-300"
                                }`}
                            onClick={() => handleNavigate(tab)}
                        >
                            <span>{tab}</span>
                            <X
                                size={16}
                                className="cursor-pointer hover:text-red-500"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    closeTab(tab);
                                }}
                            />
                        </Button>
                    );
                })}
            </div>
        </div>
    );
};

export default RecentTabsHeader;
