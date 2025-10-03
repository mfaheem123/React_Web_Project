import React, { useState } from "react";
import { FiClock, FiMapPin, FiDollarSign } from "react-icons/fi";
import { FaBan, FaBaby, FaDollarSign, FaRegStickyNote, FaCalculator } from "react-icons/fa";


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
        pass: '',
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
        <div className="p-6 bg-gray-50 rounded-md shadow-md max-w-[1000px] mx-auto mt-8">
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
                <label className="sm:col-span-1 font-semibold">PICK</label>
                <input
                    type="text"
                    name="pick"
                    value={formData.pick}
                    onChange={handleChange}
                    placeholder="Enter pickup location"
                    className="sm:col-span-7 border border-gray-300 rounded px-2 py-1"
                />
                <select
                    name="pickPlot"
                    value={formData.pickPlot}
                    onChange={handleChange}
                    className="sm:col-span-2 border border-gray-300 rounded px-2 py-1 bg-gray-50 hover:bg-gray-100"
                >
                    <option value="">Select Plot</option>
                    <option value="Plot 1">Plot 1</option>
                    <option value="Plot 2">Plot 2</option>
                </select>
                <input
                    type="text"
                    name="pickNotes"
                    value={formData.pickNotes}
                    onChange={handleChange}
                    placeholder="Pickup Notes"
                    className="sm:col-span-2 border border-gray-300 rounded px-2 py-1"
                />

                {/* DROP */}
                <label className="sm:col-span-1 font-semibold">DROP</label>
                <input
                    type="text"
                    name="drop"
                    value={formData.drop}
                    onChange={handleChange}
                    placeholder="Enter drop location"
                    className="sm:col-span-7 border border-gray-300 rounded px-2 py-1"
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
                <input
                    type="text"
                    name="dropNotes"
                    value={formData.dropNotes}
                    onChange={handleChange}
                    placeholder="Dropoff Notes"
                    className="sm:col-span-2 border border-gray-300 rounded px-2 py-1"
                />

                {/* NAME / EMAIL / MOB / TEL */}
                <label className="sm:col-span-1 font-semibold">NAME</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="sm:col-span-5 border border-gray-300 rounded px-1 py-1"
                />
                <label className="sm:col-span-1 font-semibold">EMAIL</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="sm:col-span-5 border border-gray-300 rounded px-2 py-1"
                />
                <label className="sm:col-span-1 font-semibold">MOB</label>
                <input
                    type="text"
                    name="mob"
                    value={formData.mob}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-red-400 rounded px-2 py-1"
                />
                <label className="sm:col-span-1 font-semibold">TEL</label>
                <input
                    type="text"
                    name="tel"
                    value={formData.tel}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-red-400 rounded px-2 py-1"
                />

                {/* DATE / TIME / LEAD / JOUR */}
                <label className="sm:col-span-0 font-semibold">DATE</label>
                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                />
                <label className="sm:col-span-1 font-semibold">TIME</label>
                <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                />
                <label className="sm:col-span-1 font-semibold">LEAD</label>
                <input
                    placeholder="MINS"
                    type="text"
                    name="lead"
                    value={formData.lead}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                />
                <label className="sm:col-span-1 font-semibold">JOUR</label>

                <select
                    name="jour"
                    value={formData.jour}
                    onChange={handleChange}
                    className="sm:col-span-3 border border-gray-300 rounded px-2 py-1"
                >
                    <option value="O/W">O/W</option>
                    <option value="R/N">R/N</option>
                    <option value="W/R">W/R</option>
                </select>

                {/* Conditional R Pick/Drop fields */}
                {formData.jour === "R/N" && (
                    <>
                        <label className="sm:col-span-1 font-semibold">R/PICK</label>
                        <input
                            type="text"
                            name="rPick"
                            value={formData.rPick}
                            onChange={handleChange}
                            placeholder="Enter R pickup location"
                            className="sm:col-span-5 border border-gray-300 rounded px-2 py-1"
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
                        <input
                            type="text"
                            name="rPickNotes"
                            value={formData.rPickNotes}
                            onChange={handleChange}
                            placeholder="R Pickup Notes"
                            className="sm:col-span-4 border border-gray-300 rounded px-2 py-1"
                        />

                        <label className="sm:col-span-1 font-semibold">R/DROP</label>
                        <input
                            type="text"
                            name="rDrop"
                            value={formData.rDrop}
                            onChange={handleChange}
                            placeholder="Enter R drop location"
                            className="sm:col-span-5 border border-gray-300 rounded px-2 py-1"
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
                        <input
                            type="text"
                            name="rDropNotes"
                            value={formData.rDropNotes}
                            onChange={handleChange}
                            placeholder="R Drop Notes"
                            className="sm:col-span-4 border border-gray-300 rounded px-2 py-1"
                        />
                    </>
                )}

                {/* ACC / QUOTATION / SMS / EMAIL / PASS / LUGG / SLUGG */}

                {/* ACC */}
                <label className="col-span-1 font-semibold">ACC</label>
                <select
                    name="acc"
                    value={formData.acc}
                    onChange={handleChange}
                    className="col-span-2 border border-gray-300 rounded px-3 py-2"
                >
                    <option value="">Select Options</option>
                    <option value="HBL">HBL</option>
                    <option value="UBL">UBL</option>
                    <option value="MEEZAN">MEEZAN</option>
                </select>

                {/* QUOTATION */}
                <label className="col-span-1 font-semibold">QUOTATION</label>
                <input
                    type="checkbox"
                    name="quotation"
                    checked={formData.quotation}
                    onChange={handleChange}
                    className="col-span-1"
                />

                {/* SMS */}
                <label className="col-span-1 font-semibold">SMS</label>
                <input
                    type="checkbox"
                    name="sms"
                    checked={formData.sms}
                    onChange={handleChange}
                    className="col-span-1"
                />

                {/* EMAIL */}
                <label className="col-span-1 font-semibold">EMAIL</label>
                <input
                    type="checkbox"
                    name="emailNotif"
                    checked={formData.emailNotif}
                    onChange={handleChange}
                    className="col-span-1"
                />

                {/* PASS / LUGG / SLUGG */}
                <input
                    placeholder="Pass"
                    type="text"
                    name="pass"
                    value={formData.pass}
                    onChange={handleChange}
                    className="col-span-1 border border-gray-300 rounded px-3 py-2 w-full"
                />

                <input
                    placeholder="Lugg"
                    type="text"
                    name="lugg"
                    value={formData.lugg}
                    onChange={handleChange}
                    className="col-span-1 border border-gray-300 rounded px-3 py-2 w-full"
                />

                <input
                    placeholder="Slugg"
                    type="text"
                    name="slugg"
                    value={formData.slugg}
                    onChange={handleChange}
                    className="col-span-1 border border-gray-300 rounded px-3 py-2 w-full"
                />

                {/* PAY / VEH / DRV / FARE */}
                <label className="sm:col-span-1 font-semibold">PAY</label>
                <select
                    name="pay"
                    value={formData.pay}
                    onChange={handleChange}
                    className="sm:col-span-2 border border-gray-300 rounded px-2 py-1"
                >
                    <option value="CASH">CASH</option>
                    <option value="CREDIT CARD">CREDIT CARD</option>
                    <option value="Account">Account</option>
                    <option value="Credit Card Paid">Credit Card Paid</option>
                </select>
                <label className="sm:col-span-1 font-semibold">VEH</label>
                <select
                    name="veh"
                    value={formData.veh}
                    onChange={handleChange}
                    className="sm:col-span-2 border border-gray-300 rounded px-2 py-1"
                >
                    <option value="SALOON">SALOON</option>
                    <option value="MINIVAN">MINIVAN</option>
                </select>
                <label className="sm:col-span-1 font-semibold">DRV</label>
                <select
                    name="drv"
                    value={formData.drv}
                    onChange={handleChange}
                    className="sm:col-span-2 border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">SELECT DRIVER</option>
                </select>
                <label className="sm:col-span-1 font-semibold">FARE</label>
                <input
                    type="text"
                    name="fare"
                    value={formData.fare}
                    onChange={handleChange}
                    className="sm:col-span-2 border border-gray-300 rounded px-2 py-1"
                />
            </div>

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
                    <FaDollarSign className="text-green-600" />
                    <span>Extra Fees</span>
                </button>

                <button
                    onClick={() => alert("Notes Clicked")}
                    className="flex items-center gap-1 px-3 py-2 bg-yellow-100 hover:bg-yellow-200 rounded"
                >
                    <FaRegStickyNote className="text-yellow-500" />
                    <span>Notes</span>
                </button>

                <button
                    onClick={() => alert("Calculated Functionality")}
                    className="flex items-center gap-1 px-3 py-2 bg-yellow-100 hover:bg-yellow-200 rounded"
                >
                    <FaCalculator size={20} className="text-gray-700" />

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
                        <FiDollarSign />
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
