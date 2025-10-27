import React, { useState } from "react";
import { FiClock, FiMapPin } from "react-icons/fi";
import { FaBan, FaBaby, FaPoundSign, FaRegStickyNote, FaCalculator } from "react-icons/fa";
import TextField from '@mui/material/TextField';



const BookingForm = () => {

    const initialFormData = {
        pick: "",
        pickPlot: "",
        pickNotes: "",
        drop: "",
        dropPlot: "",
        dropNotes: "",
        name: "",
        email: "",
        mob: "",
        tel: "",
        date: "",
        time: "",
        lead: "",
        jour: "O/W",
        acc: "",
        quotation: false,
        sms: false,
        emailNotif: false,
        pay: "CASH",
        veh: "SALOON",
        drv: "",
        fare: "",
        // Return journey fields (for R/N)
        rPick: "",
        rPickPlot: "",
        rPickNotes: "",
        rDrop: "",
        rDropPlot: "",
        rDropNotes: "",
        pass: '1',
        slugg: '',
        lugg: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    // Generic handler
    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({

            ...prev,
            [name]: type === "checkbox" ? checked : value,

        }));

    };

    const cancleSubmit = () => {

        setFormData(initialFormData);

    };

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log(formData); // Check full data in console
        setFormData(initialFormData);

    };

    return (
        <div className="p-6 bg-gray-50 rounded-md shadow-md max-w-[100%] mx-auto mt-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4 md:gap-0">
                <h2 className="font-bold text-lg">BOOKING</h2>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <button className="text-[#757cdd] font-medium hover:underline">
                        + BOOKINGS [F8]
                    </button>
                    <button className="text-[#757cdd] font-medium hover:underline">
                        + VEHICLES [F9]
                    </button>
                    <span>SUBS</span>
                    <select className="border border-gray-300 rounded px-2 py-1">
                        <option>DEMO COMPANY</option>
                    </select>
                </div>
            </div>

            {/* Form Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                {/* PICK */}
                <label className="sm:col-span-1 font-semibold w-[85px]">PICK UP</label>
                <TextField
                    type="text"
                    name="pick"
                    value={formData.pick}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Enter pickup location"
                    className="sm:col-span-6 border border-gray-300 rounded px-2 py-1 h-8"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />

                <select
                    name="pickPlot"
                    value={formData.pickPlot}
                    onChange={handleChange}
                    className="sm:col-span-2 border border-gray-300 rounded px-2 py-1 bg-gray-50 hover:bg-gray-100"
                >
                    <option value="">Select Plot</option>
                    <option value="Plot 2">Plot 2</option>
                    <option value="Plot 2">Plot 2</option>
                </select>

                <TextField
                    type="text"
                    name="pickNotes"
                    value={formData.pickNotes}
                    onChange={handleChange}
                    placeholder="Pickup Notes"
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />

                {/* DROP */}
                <label className="sm:col-span-1 font-semibold w-[90px] " >DROP OF</label>
                <TextField
                    type="text"
                    name="drop"
                    value={formData.drop}
                    onChange={handleChange}
                    placeholder="Enter drop location"
                    className="sm:col-span-6 border border-gray-300 rounded"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />
                <select
                    name="dropPlot"
                    value={formData.dropPlot}
                    onChange={handleChange}
                    className="sm:col-span-2 border border-gray-300 rounded px-2 py-1 bg-gray-50 hover:bg-gray-100"
                >
                    <option value="">Select Plot</option>
                    <option value="Plot 1">Plot 1</option>
                    <option value="Plot 2">Plot 2</option>
                </select>
                <TextField
                    type="text"
                    name="dropNotes"
                    value={formData.dropNotes}
                    onChange={handleChange}
                    placeholder="Dropoff Notes"
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />

                {/* NAME / EMAIL / MOB / TEL */}
                <label className="sm:col-span-1 font-semibold">NAME</label>
                <TextField
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-1 py-1"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />
                <label className="sm:col-span-1 font-semibold">EMAIL</label>
                <TextField
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />
                <label className="sm:col-span-1 font-semibold">MOBILE</label>
                <TextField
                    type="number"
                    name="mob"
                    value={formData.mob}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />
                <label className="sm:col-span-1 font-semibold">PHONE</label>
                <TextField
                    type="number"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />

                {/* DATE / TIME / LEAD */}
                <label className="sm:col-span-0 font-semibold">DATE</label>
                <TextField
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />
                <label className="sm:col-span-1 font-semibold">TIME</label>
                <TextField
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />
                <label className="sm:col-span-1 font-semibold">LEAD</label>
                <TextField
                    placeholder="MINS"
                    type="text"
                    name="lead"
                    value={formData.lead}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />

                {/* ACC / JOURNEY /QUOTATION / SMS / EMAIL / PASS / LUGG / SLUGG */}

                {/* ACC */}
                <label className="col-span-1 font-semibold">ACCOUNT</label>
                <select
                    name="acc"
                    value={formData.acc}
                    onChange={handleChange}
                    className="col-span-3 border border-gray-300 rounded px-3 py-2 ml-5"
                >
                    <option value="Null">Accounts</option>
                    <option value="HBL">HBL</option>
                    <option value="UBL">UBL</option>
                    <option value="MEEZAN">MEEZAN</option>
                </select>

                <label className="sm:col-span-1 font-semibold">JOURNEY</label>

                <select
                    name="jour"
                    value={formData.jour}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                >
                    <option value="O/W">One Way</option>
                    <option value="R/N">R/N</option>
                    <option value="W/R">W/R</option>
                </select>

                {/* Conditional R Pick/Drop fields */}
                {formData.jour === "R/N" && (
                    <>
                        <label className="sm:col-span-1 font-semibold">R/PICK</label>
                        <TextField
                            type="text"
                            name="rPick"
                            value={formData.rPick}
                            onChange={handleChange}
                            placeholder="Enter R pickup location"
                            className="sm:col-span-6 border border-gray-300 rounded px-2 py-1"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    height: 32, // height in px
                                }
                            }}
                        />
                        <select
                            name="rPickPlot"
                            value={formData.rPickPlot}
                            onChange={handleChange}
                            className="sm:col-span-2 border border-gray-300 rounded px-2 py-1 bg-gray-50 hover:bg-gray-100"
                        >
                            <option value="">Select Plot</option>
                            <option value="Plot 1">Plot 1</option>
                            <option value="Plot 2">Plot 2</option>
                        </select>
                        <TextField
                            type="text"
                            name="rPickNotes"
                            value={formData.rPickNotes}
                            onChange={handleChange}
                            placeholder="R Pickup Notes"
                            className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    height: 32, // height in px
                                }
                            }}
                        />

                        <label className="sm:col-span-1 font-semibold">R/DROP</label>
                        <TextField
                            type="text"
                            name="rDrop"
                            value={formData.rDrop}
                            onChange={handleChange}
                            placeholder="Enter R drop location"
                            className="sm:col-span-6 border border-gray-300 rounded px-2 py-1"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    height: 32, // height in px
                                }
                            }}
                        />
                        <select
                            name="rDropPlot"
                            value={formData.rDropPlot}
                            onChange={handleChange}
                            className="sm:col-span-2 border border-gray-300 rounded px-2 py-1 bg-gray-50 hover:bg-gray-100"
                        >
                            <option value="">Select Plot</option>
                            <option value="Plot 1">Plot 1</option>
                            <option value="Plot 2">Plot 2</option>
                        </select>
                        <TextField
                            type="text"
                            name="rDropNotes"
                            value={formData.rDropNotes}
                            onChange={handleChange}
                            placeholder="R Drop Notes"
                            className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    height: 32, // height in px
                                }
                            }}
                        />
                    </>
                )}

                {/* PASS / LUGG / SLUGG */}
                {/* Passenger Field */}
                <TextField
                    label="Passenger"
                    type="number"
                    name="pass"
                    value={formData.pass}
                    onChange={handleChange}
                    variant="outlined"
                    className="col-span-2 w-full"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 45,
                        },
                        '& .MuiOutlinedInput-input': {
                            padding: '8px', // inner padding
                        },
                    }}
                />

                {/* Luggage Field */}
                <TextField
                    label="Luggage"
                    type="number"
                    name="lugg"
                    value={formData.lugg}
                    onChange={handleChange}
                    variant="outlined"
                    className="col-span-2 w-full"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 45,
                        },
                        '& .MuiOutlinedInput-input': {
                            padding: '2px',
                        },
                    }}
                />

                {/* Small Luggage Field */}
                <TextField
                    label="Small Luggage"
                    type="number"
                    name="slugg"
                    value={formData.slugg}
                    onChange={handleChange}
                    variant="outlined"
                    className="col-span-2 w-full"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 45,

                        },
                        '& .MuiOutlinedInput-input': {
                            padding: '2px',
                        },
                    }}
                />

                {/* QUOTATION */}
                <div className="flex items-center justify-start gap-1 col-span-2">
                    <label className="font-semibold rounded">
                        QUOTATION
                    </label>
                    <input
                        type="checkbox"
                        name="quotation"
                        checked={formData.quotation}
                        onChange={handleChange}
                        className="w-5 h-5 accent-blue-500 cursor-pointer"
                    />
                </div>


                {/* PAY / VEH / DRV / FARE */}
                <label className="sm:col-span-1 font-semibold">PAYMENT</label>
                <select
                    name="pay"
                    value={formData.pay}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1 ml-3"
                >
                    <option value="CASH">CASH</option>
                    <option value="CREDIT CARD">CREDIT CARD</option>
                    <option value="Account">Account</option>
                    <option value="Credit Card Paid">Credit Card Paid</option>
                </select>


                <label className="sm:col-span-1 font-semibold">VEHICLE</label>
                <select
                    name="veh"
                    value={formData.veh}
                    onChange={handleChange}
                    className="sm:col-span-2 border border-gray-300 rounded px-2 py-1"
                >
                    <option value="SALOON">SALOON</option>
                    <option value="MINIVAN">MINIVAN</option>
                </select>


                <label className="sm:col-span-1 font-semibold">DRIVER</label>
                <select
                    name="drv"
                    value={formData.drv}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">SELECT DRIVER</option>
                </select>

                <label className="sm:col-span-1 font-semibold">FARE</label>
                <TextField
                    type="number"
                    name="fare"
                    value={formData.fare}
                    onChange={handleChange}
                    className="sm:col-span-1 border border-gray-300 rounded px-2 py-1"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            height: 32, // height in px
                        }
                    }}
                />

                <button
                    onClick={() => alert("Calculated Functionality")}
                    className="flex items-center justify-center gap-1 px-3 py-2 bg-[#424899] hover:bg-[#757cdd] rounded"
                >
                    <FaCalculator size={20} className="text-white" />
                </button>
            </div>


            {/* Special Button */}
            <div className="flex items-center flex-col sm:flex-row justify-end sm:gap-2 gap-4 text-gray-700 mt-10">
                <button
                    onClick={() => alert("Restricted Drivers Clicked")}
                    className="flex items-center gap-1 px-3 py-2 bg-red-100 hover:bg-red-200 rounded"
                >
                    <FaBan className="text-red-500" />
                    <span>Restricted Drivers</span>
                </button>

                <button
                    onClick={() => alert("Child Seat Clicked")}
                    className="flex items-center gap-1 px-3 py-2 bg-blue-100 hover:bg-blue-200 rounded"
                >
                    <FaBaby className="text-blue-500" />
                    <span>Child Seat</span>
                </button>

                <button
                    onClick={() => alert("Extra Fees Clicked")}
                    className="flex items-center gap-1 px-3 py-2 bg-green-100 hover:bg-green-200 rounded"
                >
                    <FaPoundSign className="text-green-600" />
                    <span>Extra Fees</span>
                </button>

                <button
                    onClick={() => alert("Notes Clicked")}
                    className="flex items-center gap-1 px-3 py-2 bg-yellow-100 hover:bg-yellow-200 rounded"
                >
                    <FaRegStickyNote className="text-yellow-500" />
                    <span>Notes</span>
                </button>

            </div>

            {/* Buttons */}
            <div className="flex justify-between flex-col sm:flex-row justify-end mt-6 gap-2 w-full">
                <div className="flex flex-wrap items-center gap-6 w-[70%]  p-2 rounded bg-gray-300 mx-auto">
                    <div className="flex items-center gap-1">
                        <FiClock />
                        <span>ETA: 0 MIN</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FiMapPin />
                        <span>Distance: 0 MI</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaPoundSign />
                        <span>Fare: 0</span>
                    </div>
                </div>

                <div>
                    <button
                        onClick={cancleSubmit}
                        className="bg-white text-[#757cdd] px-4 py-2 rounded border hover:bg-[#757cdd] hover:text-white w-full sm:w-auto"
                    >
                        CLEAR [F7]
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="bg-[#424899] text-white px-4 py-2 rounded hover:bg-[#757cdd] w-full sm:w-auto"
                    >
                        SAVE [HOME]
                    </button>
                </div>
            </div>

        </div>
    );
};

export default BookingForm;
