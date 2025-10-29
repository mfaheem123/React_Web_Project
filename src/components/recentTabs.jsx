import { useState, useEffect } from "react";
import { Home, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";

const RecentTabsHeader = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [recentTabs, setRecentTabs] = useState([]);

    const MAX_TABS = 20;

    useEffect(() => {
        const storedTabs = JSON.parse(localStorage.getItem("recentTabs")) || [];
        setRecentTabs(storedTabs);

        // 🟡 Before refresh → ask confirmation
        const handleBeforeUnload = (event) => {
            const message = "Do you want to clear your recent tabs before reloading?";
            event.preventDefault();
            event.returnValue = message; // required for most browsers

            // Browser will show a default confirm dialog
            const userConfirmed = window.confirm(message);

            if (userConfirmed) {
                localStorage.setItem("shouldClearTabs", "true");
            } else {
                localStorage.removeItem("shouldClearTabs");
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        // 🟢 After reload, check flag and clear if confirmed
        if (localStorage.getItem("shouldClearTabs") === "true") {
            localStorage.removeItem("recentTabs");
            localStorage.removeItem("shouldClearTabs");
            navigate("/"); // redirect to dashboard/home
        }

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [navigate]);

    // 🔹 Update recentTabs on location change
    useEffect(() => {
        const path = location.pathname.replace("/", "");
        if (!path) return;

        const label = path
            .split("-")
            .map((w) => w[0].toUpperCase() + w.slice(1))
            .join(" ");

        setRecentTabs((prevTabs) => {
            if (!prevTabs.includes(label)) {
                const updatedTabs = [...prevTabs, label].slice(-MAX_TABS);
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 bg-gray-100 rounded-md shadow-md gap-3 sm:gap-4 mt-[-15px]">
            {/* 🔹 Home Button */}
            <div
                className={`flex items-center gap-2 cursor-pointer transition-colors duration-200 ${location.pathname === "/" ? "text-[#757cdd]" : "hover:text-[#757cdd]"
                    }`}
                onClick={() => {
                    localStorage.removeItem("recentTabs");
                    setRecentTabs([]);
                    navigate("/");
                }}
            >
                <Home size={20} />
                <span className="font-semibold text-sm sm:text-base">Home</span>
            </div>

            {/* 🔹 Responsive Tabs */}
            <div className="w-full flex flex-wrap gap-2 py-1 justify-start">
                {recentTabs.map((tab, index) => {
                    const tabPath = `/${tab.toLowerCase().split(" ").join("-")}`;
                    const isActive = location.pathname === tabPath;
                    return (
                        <Button
                            key={index}
                            className={`flex items-center px-3 py-1 rounded-md gap-1 whitespace-nowrap text-xs sm:text-sm transition-all duration-200 ${isActive
                                ? "bg-[#757cdd] text-white"
                                : "bg-gray-200 text-black hover:bg-gray-300"
                                }`}
                            onClick={() => handleNavigate(tab)}
                        >
                            <span className="truncate max-w-[100px] sm:max-w-none">{tab}</span>
                            <X
                                size={14}
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
