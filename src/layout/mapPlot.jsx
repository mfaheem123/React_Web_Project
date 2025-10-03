import React, { useState } from "react";

const MapPlotSection = () => {
    const [activeTab, setActiveTab] = useState("map"); // "map" or "plot"

    return (
        <div className="p-6 bg-gray-50 rounded-md shadow-md w-full mt-8 ">
            {/* Tabs */}
            <div className="flex gap-4 mb-4">
                <button
                    onClick={() => setActiveTab("map")}
                    className={`px-4 py-2 rounded ${activeTab === "map"
                        ? "bg-[#424899] text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                        }`}
                >
                    MAP
                </button>
                <button
                    onClick={() => setActiveTab("plot")}
                    className={`px-4 py-2 rounded ${activeTab === "plot"
                        ? "bg-[#424899] text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                        }`}
                >
                    PLOT
                </button>
            </div>

            {/* Content */}
            <div className="border border-gray-300 rounded p-2 w-full h-[490px] ">
                {activeTab === "map" ? (
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19804.78473396588!2d-0.13236087689190306!3d51.50986507085756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333d65cf5d%3A0x8c44c1465f5e7fa8!2sLondon%2C%20UK!5e0!3m2!1sen!2s!4v1701747739370!5m2!1sen!2s'
                        title="Map"
                        width="100%"
                        height="100%"
                        className="rounded"
                        style={{ border: 0 }}
                        // allowFullScreen is removed to disable the fullscreen icon
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                ) : (
                    <div className="flex justify-center items-center h-full text-gray-500">
                        Plot view placeholder
                    </div>
                )}
            </div>
        </div>
    );
};

export default MapPlotSection;
