import React, { useState, useEffect, useMemo } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import { TextStyle } from "@tiptap/extension-text-style";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import HorizontalRule from "@tiptap/extension-horizontal-rule";

import "../../editor.css";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";

// Table grid selector
function TableGridSelector({ onInsert }) {
    const max = 6;
    const [hoverR, setHoverR] = useState(0);
    const [hoverC, setHoverC] = useState(0);
    const cells = [];
    for (let r = 1; r <= max; r++) {
        const row = [];
        for (let c = 1; c <= max; c++) row.push({ r, c });
        cells.push(row);
    }

    return (
        <div className="table-grid-selector relative inline-block">
            <div className="grid-popup p-2 bg-white border shadow rounded">
                {cells.map((row, i) => (
                    <div key={i} className="flex">
                        {row.map((cell) => {
                            const active = cell.r <= hoverR && cell.c <= hoverC;
                            return (
                                <div
                                    key={`${cell.r}-${cell.c}`}
                                    onMouseEnter={() => {
                                        setHoverR(cell.r);
                                        setHoverC(cell.c);
                                    }}
                                    onClick={() => onInsert(cell.r, cell.c)}
                                    className={`w-6 h-6 m-1 border rounded-sm cursor-pointer ${active ? "bg-[#757cdd]" : "bg-white"
                                        }`}
                                />
                            );
                        })}
                    </div>
                ))}
                <div className="text-xs mt-2 text-gray-600">
                    Select {hoverR || 1} x {hoverC || 1}
                </div>
            </div>
        </div>
    );
}

export default function TemplateSettings() {
    const [templateType, setTemplateType] = useState("");
    const [templateName, setTemplateName] = useState("");
    const [showTableGrid, setShowTableGrid] = useState(false);
    const [showHeadingDropdown, setShowHeadingDropdown] = useState(false);
    const [showFontSizeDropdown, setShowFontSizeDropdown] = useState(false);
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [, setEditorUpdate] = useState(0);

    // Font Sizes with greater step for visible difference
    const fontSizes = [12, 16, 20, 24, 32, 40];

    // Editor configuration: Added unique classes for headings and font sizes for more visible effect
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Heading.configure({ 
                levels: [1, 2, 3, 4, 5, 6], 
                HTMLAttributes: { class: "template-heading" }
            }),
            TextStyle,
            Color,
            Highlight,
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Blockquote,
            CodeBlock,
            Table.configure({ resizable: true }),
            TableRow,
            TableHeader,
            TableCell,
            HorizontalRule,
        ],
        content: "",
        editorProps: {
            attributes: {
                class: 'focus:outline-none p-1 min-h-[200px]'
            }
        }
    });

    useEffect(() => {
        if (!editor) return;
        const update = () => setEditorUpdate((x) => x + 1);
        editor.on("transaction", update);
        return () => editor.off("transaction", update);
    }, [editor]);

    const tags = useMemo(
        () => [
            "REFERENCE_NUMBER",
            "PICKUP_DOOR_NUMBER",
            "DROPOFF_DOOR_NUMBER",
            "PICKUP_POINT",
            "DROPOFF_POINT",
            "VIAPOINTS",
            "CUSTOMER",
            "CUSTOMER_EMAIL",
            "CUSTOMER_MOBILE",
            "CUSTOMER_TELEPHONE",
            "DATETIME",
            "DATE",
            "TIME",
            "JOURNEY_TYPE",
            "ACCOUNT",
            "VEHICLE_TYPE",
            "VEHICLE_MAKE",
            "VEHICLE_MODEL",
            "VEHICLE_COLOR",
            "VEHICLE_NUMBER",
            "DRIVER_NAME",
            "PASSENGERS",
            "CHILD_SEAT",
            "LUGGAGES",
            "HAND_LUGGAGES",
            "NOTES",
            "PAYMENT_TYPE",
            "FARES",
            "COMPANY_CHARGES",
            "PARKING_CHARGES",
            "CONGESTION_CHARGES",
            "MEET_AND_GREET_CHARGES",
            "WAITING_CHARGES",
            "EXTRA_DROP_CHARGES",
            "CREDIT_CARD_CHARGES",
            "TOTAL_FARES",
            "RETURN_FARES",
            "MILES",
            "COMPANY_NAME",
            "COMPANY_TELEPHONE",
            "COMPANY_EMAIL",
            "COMPANY_ADDRESS",
            "FLIGHT_NUMBER",
            "ARRIVING_FROM",
        ],
        []
    );

    const templateOptions = useMemo(
        () => ({
            EMAIL: [
                { value: "BOOKING_CONFIRM", label: "Booking Confirmation Email" },
                { value: "BOOKING_CANCEL", label: "Booking Cancellation Email" },
                { value: "REMINDER_EMAIL", label: "Reminder Email" },
                { value: "QUOTATION_EMAIL", label: "Quotation Email" }, // Added Quotation option for EMAIL
            ],
            SMS: [
                { value: "Driver_Dispatch", label: "Driver Dispatch SMS" },
                { value: "Customer_Dispatch", label: "Customer Dispatch SMS" },
                { value: "Normal_Arrival", label: "Normal Arrival SMS" },
                { value: "Airport_Arrival", label: "Airport Arrival SMS" },
                { value: "Booking_Confirmation", label: "Booking Confirmation SMS" },
                { value: "Booking_Cancellation", label: "Booking Cancellation SMS" },
                { value: "Booking_Complete", label: "Booking Completed SMS" },
                {
                    value: "Multi_Booking_Confirmation",
                    label: "Multi Booking Confirmation SMS",
                },
                { value: "booking_Quotation", label: "Booking Quotation SMS" }, // Already present
            ],
            NOTIFICATION: [
                { value: "APP_BOOKING_ALERT", label: "Booking Push Notification" },
                { value: "REMINDER_NOTIFY", label: "Reminder Notification" },
                { value: "QUOTATION_NOTIFICATION", label: "Quotation Notification" }, // Added Quotation Notification
            ],
            INVOICE: [
                { value: "INVOICE_TEMPLATE_1", label: "Invoice Template 1" },
                { value: "INVOICE_TEMPLATE_2", label: "Invoice Template 2" },
                { value: "QUOTATION_INVOICE", label: "Quotation Invoice" }, // Added Quotation Invoice
            ],
            REPORT: [
                { value: "DAILY_REPORT", label: "Daily Booking Report" },
                { value: "WEEKLY_REPORT", label: "Weekly Report" },
                { value: "QUOTATION_REPORT", label: "Quotation Report" }, // Added Quotation Report
            ],
            QUOTATION: [
                { value: "QUOTATION_EMAIL", label: "Quotation Email" },
                { value: "QUOTATION_SMS", label: "Quotation SMS" },
                { value: "QUOTATION_NOTIFICATION", label: "Quotation Notification" },
                { value: "QUOTATION_INVOICE", label: "Quotation Invoice" },
                { value: "QUOTATION_REPORT", label: "Quotation Report" }
            ],
        }),
        []
    );

    // Add "QUOTATION" as a tab to selection types
    const templateTypes = ["EMAIL", "SMS", "NOTIFICATION", "INVOICE", "REPORT", "QUOTATION"];

    const handleTagClick = (tag) =>
        editor && editor.chain().focus().insertContent(`{{${tag}}}`).run();

    const performAction = (btn) => {
        if (!editor) return;
        switch (btn.type) {
            case "bold":
                editor.chain().focus().toggleBold().run();
                break;
            case "italic":
                editor.chain().focus().toggleItalic().run();
                break;
            case "underline":
                editor.chain().focus().toggleUnderline().run();
                break;
            case "highlight":
                editor.chain().focus().toggleHighlight().run();
                break;
            case "textAlign":
                editor.chain().focus().setTextAlign(btn.attrs.align).run();
                break;
            case "bulletList":
                editor.chain().focus().toggleBulletList().run();
                break;
            case "orderedList":
                editor.chain().focus().toggleOrderedList().run();
                break;
            case "blockquote":
                editor.chain().focus().toggleBlockquote().run();
                break;
            case "codeBlock":
                editor.chain().focus().toggleCodeBlock().run();
                break;
            case "horizontalRule":
                editor.chain().focus().setHorizontalRule().run();
                break;
            default:
                break;
        }
    };

    const insertTable = (rows, cols) =>
        editor &&
        editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();

    const setFontSize = (size) =>
        editor && editor.chain().focus().setMark("textStyle", { fontSize: `${size}px` }).run();

    const setTextColor = (color) =>
        editor && editor.chain().focus().setColor(color).run();

    // --- Style helpers for toolbar buttons ---
    const getToolbarButtonStyle = (isActive) => {
        if (isActive) {
            return "bg-white text-[#757cdd] border-[#757cdd] shadow-md scale-105";
        } else {
            return "bg-white text-[#757cdd] border-[#757cdd] hover:bg-[#e0e2ff]";
        }
    };

    const toolbarButtons = [
        { label: "B", type: "bold" },
        { label: "I", type: "italic" },
        { label: "U", type: "underline" },
        { label: "Left", type: "textAlign", attrs: { align: "left" } },
        { label: "Center", type: "textAlign", attrs: { align: "center" } },
        { label: "Right", type: "textAlign", attrs: { align: "right" } },
        { label: "• List", type: "bulletList" },
        { label: "1. List", type: "orderedList" },
        { label: "❝ Quote", type: "blockquote" },
        { label: "Code", type: "codeBlock" },
        { label: "HR", type: "horizontalRule" },
    ];

    useEffect(() => {
        let style = document.getElementById("template-editor-headings-fontsize-style");
        if (!style) {
            style = document.createElement("style");
            style.id = "template-editor-headings-fontsize-style";
            style.innerHTML = `
                .ProseMirror .template-heading { font-weight: bold; color: #000000; }
                .ProseMirror h1 { font-size: 2.2rem !important; margin-bottom: 0.5em; }
                .ProseMirror h2 { font-size: 1.8rem !important; margin-bottom: 0.4em; }
                .ProseMirror h3 { font-size: 1.5rem !important; margin-bottom: 0.3em; }
                .ProseMirror h4 { font-size: 1.2rem !important; margin-bottom: 0.2em; }
                .ProseMirror h5 { font-size: 1rem !important; margin-bottom: 0.2em; }
                .ProseMirror h6 { font-size: 0.9rem !important; margin-bottom: 0.2em; }
                .ProseMirror [style*="font-size:12px"] { font-size:12px !important; }
                .ProseMirror [style*="font-size:16px"] { font-size:16px !important; }
                .ProseMirror [style*="font-size:20px"] { font-size:20px !important; }
                .ProseMirror [style*="font-size:24px"] { font-size:24px !important; }
                .ProseMirror [style*="font-size:32px"] { font-size:32px !important; }
                .ProseMirror [style*="font-size:40px"] { font-size:40px !important; }
            `;
            document.head.appendChild(style);
        }
    }, []);

    return (
        <div>
            <Navbar />
            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="flex justify-center mt-5">
                <h2 className="text-3xl font-semibold mb-6 text-[#757cdd] text-center">
                    Template Settings
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 p-2">
                {/* Editor panel */}
                <div className="w-full md:w-3/4 border rounded p-2 bg-white shadow-md">
                    {/* Top selectors */}
                    <div className="flex flex-col md:flex-row items-center gap-4 px-4 mt-2 mb-4">
                        <select
                            className="border p-2 rounded w-full"
                            value={templateType}
                            onChange={(e) => {
                                setTemplateType(e.target.value);
                                setTemplateName("");
                            }}
                        >
                            <option value="">Select Template Type</option>
                            {templateTypes.map((t) => (
                                <option key={t} value={t}>
                                    {t}
                                </option>
                            ))}
                        </select>

                        <select
                            className="border p-2 rounded w-full"
                            value={templateName}
                            onChange={(e) => setTemplateName(e.target.value)}
                            disabled={!templateType}
                        >
                            <option value="">Select Template</option>
                            {templateType &&
                                templateOptions[templateType]?.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                        </select>
                        <button className="bg-[#757cdd] text-white px-5 py-2 rounded font-semibold">
                            SAVE
                        </button>
                    </div>

                    {/* Toolbar */}
                    <div className="toolbar mb-2 flex flex-wrap gap-1 p-2 rounded border border-gray-300 bg-gray-100">
                        {/* Heading dropdown */}
                        <div className="relative inline-block">
                            <button
                                onClick={() => setShowHeadingDropdown((prev) => !prev)}
                                className="px-2 py-1 rounded bg-white text-[#757cdd] border border-[#757cdd] font-semibold"
                            >
                                H
                            </button>
                            {showHeadingDropdown && (
                                <div className="absolute mt-2 bg-white border rounded shadow-md z-50">
                                    {[1, 2, 3, 4, 5, 6].map((level) => (
                                        <button
                                            key={level}
                                            onClick={() => {
                                                editor.chain().focus().toggleHeading({ level }).run();
                                                setShowHeadingDropdown(false);
                                            }}
                                            className="block w-full text-left px-3 py-1 text-sm text-[#757cdd] hover:bg-[#757cdd] hover:text-white font-semibold"
                                        >
                                            H{level}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Font size */}
                        <div className="relative inline-block">
                            <button
                                onClick={() => setShowFontSizeDropdown((prev) => !prev)}
                                className="px-2 py-1 rounded bg-white text-[#757cdd] border border-[#757cdd] font-semibold"
                            >
                                Font
                            </button>
                            {showFontSizeDropdown && (
                                <div className="absolute mt-2 bg-white border rounded shadow-md z-50 max-h-40 overflow-y-auto">
                                    {fontSizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => {
                                                setFontSize(size);
                                                setShowFontSizeDropdown(false);
                                            }}
                                            className={`block w-full text-left px-3 py-1 font-semibold text-sm text-[#757cdd] hover:bg-[#757cdd] hover:text-white`}
                                            style={{ fontSize: `${size}px` }}
                                        >
                                            {size}px
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Color picker */}
                        <div className="relative inline-block">
                            <button
                                onClick={() => setShowColorPicker((prev) => !prev)}
                                className="px-2 py-1 rounded bg-white text-[#757cdd] border border-[#757cdd] font-semibold"
                            >
                                Color
                            </button>
                            {showColorPicker && (
                                <div className="absolute mt-2 bg-white border rounded shadow-md z-50 p-2 flex flex-wrap gap-1 w-36">
                                    {[
                                        "#000000",
                                        "#ff0000",
                                        "#00ff00",
                                        "#0000ff",
                                        "#ff00ff",
                                        "#00ffff",
                                        "#ffa500",
                                        "#800080",
                                    ].map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => {
                                                setTextColor(c);
                                                setShowColorPicker(false);
                                            }}
                                            className="w-6 h-6 rounded border border-gray-200"
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Table selector */}
                        <div className="relative inline-block">
                            <button
                                onClick={() => setShowTableGrid((prev) => !prev)}
                                className="px-2 py-1 rounded bg-white text-[#757cdd] border border-[#757cdd] font-semibold"
                            >
                                Table
                            </button>
                            {showTableGrid && (
                                <div className="absolute mt-2 bg-white border rounded shadow-lg p-2 z-50">
                                    <TableGridSelector
                                        onInsert={(r, c) => {
                                            insertTable(r, c);
                                            setShowTableGrid(false);
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        {/* Other buttons */}
                        {toolbarButtons.map((btn, i) => {
                            if (!editor) return null;
                            const isActive = (() => {
                                switch (btn.type) {
                                    case "bold":
                                        return editor.isActive("bold");
                                    case "italic":
                                        return editor.isActive("italic");
                                    case "underline":
                                        return editor.isActive("underline");
                                    case "textAlign":
                                        return editor.isActive({ textAlign: btn.attrs.align });
                                    case "bulletList":
                                        return editor.isActive("bulletList");
                                    case "orderedList":
                                        return editor.isActive("orderedList");
                                    case "blockquote":
                                        return editor.isActive("blockquote");
                                    case "codeBlock":
                                        return editor.isActive("codeBlock");
                                    default:
                                        return false;
                                }
                            })();
                            return (
                                <button
                                    key={i}
                                    onClick={() => performAction(btn)}
                                    className={`px-2 py-1 rounded border font-medium transition-all duration-200 ${getToolbarButtonStyle(isActive)}`}
                                >
                                    {btn.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Editor */}
                    <div className="prosemirror-wrapper border-b border-gray-400 min-h-[250px] p-2 focus:outline-none">
                        <EditorContent editor={editor} className="ProseMirror" />
                    </div>
                </div>

                {/* Tags panel */}
                <div className="w-full md:w-1/4 border rounded p-2 bg-white flex flex-col h-[55vh]">
                    <h2 className="text-2xl font-semibold mb-4 text-[#757cdd] text-center">
                        Tags
                    </h2>
                    <div className="flex-1 overflow-y-scroll">
                        {tags.map((t) => (
                            <button
                                key={t}
                                onClick={() => handleTagClick(t)}
                                className="w-full mb-2 p-1 text-sm rounded border border-gray-300 text-[#757cdd] bg-white hover:bg-[#757cdd] hover:text-white transition-colors"
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
