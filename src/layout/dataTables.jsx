import React, { useEffect, useState } from "react";
import { Edit, Trash2, Share2 } from "lucide-react";



const bookingData = [
    {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    },
    {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    }, {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    }, {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    }, {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    }, {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    }, {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    }, {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    }, {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    }, {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    }, {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    },
    {
        source: "WEB",
        ref: "BCB74869",
        datetime: "02-05-25 23:44",
        cust: "ANDREW",
        pickup: "CHOLMLEY GARDENS LONDON NW6 1AA",
        dropoff: "CAPWORTH STREET LONDON E10 5AJ",
        acc: "CAPITA BUSINESS",
        drv: "",
        veh: "SALOON",
        note: "",
        fare: "£22.00",
        status: "DECLINED",
        j_t: "O/W",
        p_t: "ACCOUNT"
    },
    {
        source: "WEB",
        ref: "BCB74875",
        datetime: "13-05-25 09:38",
        cust: "TEST",
        pickup: "TEST",
        dropoff: "TEST",
        acc: "",
        drv: "",
        veh: "SALOON",
        note: "",
        fare: "£0.00",
        status: "WAITING",
        j_t: "O/W",
        p_t: "CASH"
    },
    {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    },
    {
        source: "WEB",
        ref: "BCB74869",
        datetime: "02-05-25 23:44",
        cust: "ANDREW",
        pickup: "CHOLMLEY GARDENS LONDON NW6 1AA",
        dropoff: "CAPWORTH STREET LONDON E10 5AJ",
        acc: "CAPITA BUSINESS",
        drv: "",
        veh: "SALOON",
        note: "",
        fare: "£22.00",
        status: "DECLINED",
        j_t: "O/W",
        p_t: "ACCOUNT"
    },
    {
        source: "WEB",
        ref: "BCB74875",
        datetime: "13-05-25 09:38",
        cust: "TEST",
        pickup: "TEST",
        dropoff: "TEST",
        acc: "",
        drv: "",
        veh: "SALOON",
        note: "",
        fare: "£0.00",
        status: "WAITING",
        j_t: "O/W",
        p_t: "CASH"
    }, {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    },
    {
        source: "WEB",
        ref: "BCB74869",
        datetime: "02-05-25 23:44",
        cust: "ANDREW",
        pickup: "CHOLMLEY GARDENS LONDON NW6 1AA",
        dropoff: "CAPWORTH STREET LONDON E10 5AJ",
        acc: "CAPITA BUSINESS",
        drv: "",
        veh: "SALOON",
        note: "",
        fare: "£22.00",
        status: "DECLINED",
        j_t: "O/W",
        p_t: "ACCOUNT"
    },
    {
        source: "WEB",
        ref: "BCB74875",
        datetime: "13-05-25 09:38",
        cust: "TEST",
        pickup: "TEST",
        dropoff: "TEST",
        acc: "",
        drv: "",
        veh: "SALOON",
        note: "",
        fare: "£0.00",
        status: "WAITING",
        j_t: "O/W",
        p_t: "CASH"
    }, {
        source: "WEB",
        ref: "BCB74868",
        datetime: "02-05-25 23:38",
        cust: "YOUSIF",
        pickup: "114A HIGH ROAD LONDON NW10 2PN",
        dropoff: "65 JEDBURGH ROAD, LONDON, E13 9LF",
        acc: "",
        drv: "28",
        veh: "SALOON",
        note: "",
        fare: "£48.00",
        status: "PENDING",
        j_t: "O/W",
        p_t: "CASH"
    },
    {
        source: "WEB",
        ref: "BCB74869",
        datetime: "02-05-25 23:44",
        cust: "ANDREW",
        pickup: "CHOLMLEY GARDENS LONDON NW6 1AA",
        dropoff: "CAPWORTH STREET LONDON E10 5AJ",
        acc: "CAPITA BUSINESS",
        drv: "",
        veh: "SALOON",
        note: "",
        fare: "£22.00",
        status: "DECLINED",
        j_t: "O/W",
        p_t: "ACCOUNT"
    },
    {
        source: "WEB",
        ref: "BCB74875",
        datetime: "13-05-25 09:38",
        cust: "TEST",
        pickup: "TEST",
        dropoff: "TEST",
        acc: "",
        drv: "",
        veh: "SALOON",
        note: "",
        fare: "£0.00",
        status: "WAITING",
        j_t: "O/W",
        p_t: "CASH"
    },
];

const statusColors = {
    PENDING: "bg-purple-500 text-white",
    DECLINED: "bg-red-500 text-white",
    WAITING: "bg-green-500 text-white",
};


const BookingTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);
    const itemsPerPage = 15;

    // Pagination calculation
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;
    const currentData = bookingData.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(bookingData.length / itemsPerPage);

    // Handlers
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            const allIds = currentData.map((row, i) => `${indexOfFirst + i}`);
            setSelectedRows(allIds);
        } else {
            setSelectedRows([]);
        }
    };

    const handleRowSelect = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
        );
    };

    const handleDeleteSelected = () => {
        alert("Delete Selected → " + JSON.stringify(selectedRows));
    };

    const handleEdit = (row) => alert(`Edit → Ref: ${row.ref}, Customer: ${row.cust}`);
    const handleDelete = (row) => alert(`Delete → Ref: ${row.ref}, Customer: ${row.cust}`);
    const handleDispatch = (row) => alert(`Dispatch → Ref: ${row.ref}, Customer: ${row.cust}`);

    const [altActive, setAltActive] = useState(false);
    const buttons = [
        "Booking",
        "Pre Booking",
        "Recent Booking",
        "Quoted Booking",
        "Web Booking",
        "App Booking",
        "IVR Booking",
        "Today Booking",
    ];


    useEffect(() => {
        let lastAltPressTime = 0;

        const handleKeyDown = (e) => {
            if (e.key === "Alt") {
                const now = Date.now();
                // Debounce thoda sa lagaya taki ek hi press mein 2 bar trigger na ho
                if (now - lastAltPressTime > 200) {
                    setAltActive((prev) => !prev); // toggle
                }
                lastAltPressTime = now;
                e.preventDefault();
            }

            // Agar Alt active hai aur koi letter press hua
            if (altActive && /^[a-zA-Z]$/.test(e.key)) {
                const match = buttons.find(
                    (btn) => btn[0].toLowerCase() === e.key.toLowerCase()
                );
                if (match) {
                    alert(`Navigating to "${match}" button`);
                    document.getElementById(match)?.click();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    });

    return (
        <div className="w-full overflow-x-auto mt-6">
            {/* Top Buttons */}
            <div className="flex justify-between w-full mb-6 p-3 rounded-lg shadow-md">
                <div className="flex flex-wrap gap-3">
                    {buttons.map((btn, index) => (
                        <button
                            key={index}
                            id={btn}
                            className="px-5 py-2 rounded-lg bg-gray-200 font-semibold hover:bg-gray-300 transition"
                        >
                            {altActive ? (
                                <span>
                                    <span className="text-red-600 font-bold">
                                        {btn[0].toUpperCase()}
                                    </span>
                                    {btn.slice(1)}
                                </span>
                            ) : (
                                btn
                            )}
                        </button>
                    ))}

                    <select className="px-5 py-2 rounded-lg bg-gray-200 font-semibold hover:bg-gray-300 transition">
                        <option>Job Due By</option>
                        <option>15 Min</option>
                        <option>30 Min</option>
                        <option>45 Min</option>
                        <option>60 Min</option>
                    </select>
                </div>
                <div>
                    <button
                        onClick={handleDeleteSelected}
                        className="px-5 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-400 transition">
                        Deleted Selected
                    </button>
                </div>
            </div>

            {/* Table */}
            <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 border text-center">
                            <input
                                type="checkbox"
                                checked={selectedRows.length === currentData.length && currentData.length > 0}
                                onChange={handleSelectAll}
                                className="cursor-pointer"
                            />
                        </th>
                        <th className="px-4 py-2 border">Source</th>
                        <th className="px-4 py-2 border">Ref #</th>
                        <th className="px-4 py-2 border">DateTime</th>
                        <th className="px-4 py-2 border">Customer</th>
                        <th className="px-4 py-2 border">Pickup</th>
                        <th className="px-4 py-2 border">Dropoff</th>
                        <th className="px-4 py-2 border">Account</th>
                        <th className="px-4 py-2 border">Driver</th>
                        <th className="px-4 py-2 border">Vehicle</th>
                        <th className="px-4 py-2 border">Fare</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {currentData.map((row, i) => {
                        const id = `${indexOfFirst + i}`;
                        return (
                            <tr key={id} className="text-sm hover:bg-gray-50">
                                <td className="border px-4 py-2 text-center">
                                    <input
                                        type="checkbox"
                                        checked={selectedRows.includes(id)}
                                        onChange={() => handleRowSelect(id)}
                                        className="cursor-pointer"
                                    />
                                </td>
                                <td className="border px-2 py-1">{row.source}</td>
                                <td className="border px-2 py-1">{row.ref}</td>
                                <td className="border px-2 py-1">{row.datetime}</td>
                                <td className="border px-2 py-1">{row.cust}</td>
                                <td className="border px-2 py-1">{row.pickup}</td>
                                <td className="border px-2 py-1">{row.dropoff}</td>
                                <td className="border px-2 py-1">{row.acc}</td>
                                <td className="border px-2 py-1">{row.drv}</td>
                                <td className="border px-2 py-1">{row.veh}</td>
                                <td className="border px-2 py-1">{row.fare}</td>
                                <td className="border px-2 py-1">
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[row.status] || "bg-gray-400 text-white"
                                            }`}
                                    >
                                        {row.status}
                                    </span>
                                </td>
                                <td className="border px-2 py-1">
                                    <div className="flex gap-3 justify-center">
                                        <button onClick={() => handleDispatch(row)} className="text-green-600">
                                            <Share2 size={18} />
                                        </button>
                                        <button onClick={() => handleEdit(row)} className="text-blue-600">
                                            <Edit size={18} />
                                        </button>
                                        <button onClick={() => handleDelete(row)} className="text-red-600">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>



            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-4">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(1)}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    First
                </button>
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <span className="text-sm">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Next
                </button>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(totalPages)}
                    className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                    Last
                </button>
            </div>

        </div>
    );
};

export default BookingTable;
