import React, { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import "../../editor.css";
import Navbar from "../../components/navbar";
import RecentTabsHeader from "../../components/recentTabs";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";

// Heading & Alignment
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";

// Block
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";

// Table Extensions
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";

export default function TemplateSettings() {
    const [templateType, setTemplateType] = useState("");
    const [templateName, setTemplateName] = useState("");

    const tags = [
        "REFERENCE_NUMBER", "PICKUP_DOOR_NUMBER", "DROPOFF_DOOR_NUMBER",
        "PICKUP_POINT", "DROPOFF_POINT", "VIAPOINTS", "CUSTOMER",
        "CUSTOMER_EMAIL", "CUSTOMER_MOBILE", "CUSTOMER_TELEPHONE",
        "DATETIME", "DATE", "TIME", "JOURNEY_TYPE", "ACCOUNT",
        "VEHICLE_TYPE", "VEHICLE_MAKE", "VEHICLE_MODEL", "VEHICLE_COLOR",
        "VEHICLE_NUMBER", "DRIVER_NAME", "PASSENGERS", "CHILD_SEAT",
        "LUGGAGES", "HAND_LUGGAGES", "NOTES", "PAYMENT_TYPE", "FARES",
        "COMPANY_CHARGES", "PARKING_CHARGES", "CONGESTION_CHARGES",
        "MEET_AND_GREET_CHARGES", "WAITING_CHARGES", "EXTRA_DROP_CHARGES",
        "CREDIT_CARD_CHARGES", "TOTAL_FARES", "RETURN_FARES", "MILES",
        "COMPANY_NAME", "COMPANY_TELEPHONE", "COMPANY_EMAIL",
        "COMPANY_ADDRESS", "FLIGHT_NUMBER", "ARRIVING_FROM"
    ];

    const templateOptions = {
        EMAIL: [
            { value: "BOOKING_CONFIRM", label: "Booking Confirmation Email" },
            { value: "BOOKING_CANCEL", label: "Booking Cancellation Email" },
            { value: "REMINDER_EMAIL", label: "Reminder Email" },
        ],
        SMS: [
            { value: "Driver_Dispatch", label: "Driver Dispatch SMS" },
            { value: "Customer_Dispatch", label: "Customer Dispatch SMS" },
            { value: "Normal_Arrival", label: "Normal Arrival SMS" },
            { value: "Airport_Arrival", label: "Airport Arrival SMS" },
            { value: "Booking_Confirmation", label: "Booking Confirmation SMS" },
            { value: "Booking_Cancellation", label: "Booking Cancellation SMS" },
            { value: "Booking_Complete", label: "Booking Completed SMS" },
            { value: "Multi_Booking_Confirmation", label: "Multi Booking Confirmation SMS" },
            { value: "booking_Quotation", label: "Booking Quotation SMS" },
        ],
        NOTIFICATION: [
            { value: "APP_BOOKING_ALERT", label: "Booking Push Notification" },
            { value: "REMINDER_NOTIFY", label: "Reminder Notification" },
        ],
        INVOICE: [
            { value: "INVOICE_TEMPLATE_1", label: "Invoice Template 1" },
            { value: "INVOICE_TEMPLATE_2", label: "Invoice Template 2" },
        ],
        REPORT: [
            { value: "DAILY_REPORT", label: "Daily Booking Report" },
            { value: "WEEKLY_REPORT", label: "Weekly Report" },
        ]
    };

    const editor = useEditor({
        extensions: [
            StarterKit.configure({ bulletList: true, orderedList: true }),
            Underline,
            Heading.configure({ levels: [1, 2, 3, 4] }),
            TextStyle,
            Color,
            Highlight,
            TextAlign.configure({ types: ["heading", "paragraph"] }),
            Blockquote,
            CodeBlock,
            Table.configure({ resizable: true }),
            TableRow,
            TableHeader,
            TableCell
        ],
        content: "",
    });

    // Insert tag immediately on click
    const handleTagClick = (tag) => {
        if (editor) {
            editor.chain().focus().insertContent(` {{${tag}}} `).run();
        }
    };

    return (
        <div>
            <Navbar />
            <div className="mt-20"><RecentTabsHeader /></div>

            <div className="flex justify-center mt-5">
                <h2 className="text-3xl font-semibold mb-6 text-[#757cdd] text-center">
                    Template Settings
                </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-4 p-2">

                {/* Editor */}
                <div className="w-full md:w-3/4 border rounded p-2 bg-white shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-[#757cdd] text-center">
                        Template Selection
                    </h2>

                    {/* Template selects */}
                    <div className="flex flex-col md:flex-row items-center gap-4 px-4 mt-2 mb-4">
                        <select
                            className="border p-2 rounded w-full"
                            value={templateType}
                            onChange={(e) => { setTemplateType(e.target.value); setTemplateName(""); }}
                        >
                            <option value="">Select Template Type</option>
                            <option value="EMAIL">Email</option>
                            <option value="SMS">SMS</option>
                            <option value="NOTIFICATION">Notification</option>
                            <option value="INVOICE">Invoice</option>
                            <option value="REPORT">Report</option>
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
                                ))
                            }
                        </select>

                        <button className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] text-white px-5 py-2 rounded font-semibold">
                            SAVE
                        </button>
                    </div>

                    {/* Toolbar */}
                    <div className="toolbar mb-2 flex flex-wrap gap-1 p-1 rounded border border-gray-300 bg-gray-100">
                        {[
                            { label: "H1", type: "heading", attrs: { level: 1 } },
                            { label: "H2", type: "heading", attrs: { level: 2 } },
                            { label: "H3", type: "heading", attrs: { level: 3 } },
                            { label: "B", type: "bold" },
                            { label: "I", type: "italic" },
                            { label: "U", type: "underline" },
                            { label: "Highlight", type: "highlight" },
                            { label: "Left", type: "textAlign", attrs: { align: "left" } },
                            { label: "Center", type: "textAlign", attrs: { align: "center" } },
                            { label: "Right", type: "textAlign", attrs: { align: "right" } },
                            { label: "• List", type: "bulletList" },
                            { label: "1. List", type: "orderedList" },
                            { label: "❝ Quote", type: "blockquote" },
                            { label: "Code", type: "codeBlock" },
                            { label: "Table", type: "table" },
                            { label: "+ Col", type: "addColumn" },
                            { label: "+ Row", type: "addRow" }
                        ].map((btn, idx) => {
                            let isActive = false;

                            if (!editor) return null;

                            switch (btn.type) {
                                case "bold": isActive = editor.isActive("bold"); break;
                                case "italic": isActive = editor.isActive("italic"); break;
                                case "underline": isActive = editor.isActive("underline"); break;
                                case "highlight": isActive = editor.isActive("highlight"); break;
                                case "heading": isActive = editor.isActive("heading", btn.attrs); break;
                                case "textAlign": isActive = editor.isActive({ textAlign: btn.attrs.align }); break;
                                case "bulletList": isActive = editor.isActive("bulletList"); break;
                                case "orderedList": isActive = editor.isActive("orderedList"); break;
                                case "blockquote": isActive = editor.isActive("blockquote"); break;
                                case "codeBlock": isActive = editor.isActive("codeBlock"); break;
                                case "table": isActive = editor.isActive("table"); break;
                                case "addColumn": isActive = false; break;
                                case "addRow": isActive = false; break;
                                default: isActive = false;
                            }

                            const action = () => {
                                if (!editor) return;
                                switch (btn.type) {
                                  case "bold": editor.chain().focus().toggleBold().run(); break;
                                  case "italic": editor.chain().focus().toggleItalic().run(); break;
                                  case "underline": editor.chain().focus().toggleUnderline().run(); break;
                                  case "highlight": editor.chain().focus().toggleHighlight().run(); break;
                                  case "heading": editor.chain().focus().toggleHeading(btn.attrs).run(); break;
                                  case "textAlign": editor.chain().focus().setTextAlign(btn.attrs.align).run(); break;
                                  case "bulletList": editor.chain().focus().toggleBulletList().run(); break;
                                  case "orderedList": editor.chain().focus().toggleOrderedList().run(); break;
                                  case "blockquote": editor.chain().focus().toggleBlockquote().run(); break;
                                  case "codeBlock": editor.chain().focus().toggleCodeBlock().run(); break;
                                  case "table": editor.chain().focus().insertTable({ rows: 2, cols: 2 }).run(); break;
                                  case "addColumn": editor.chain().focus().addColumnAfter().run(); break;
                                  case "addRow": editor.chain().focus().addRowAfter().run(); break;
                                  default: break;
                                }
                              };
                              
                            return (
                                <button
                                    key={idx}
                                    onClick={action}
                                    className={`px-2 py-1 rounded ${isActive ? "bg-[#757cdd] text-white" : "bg-white text-[#757cdd] border border-[#757cdd]"}`}
                                >
                                    {btn.label}
                                </button>
                            );
                        })}
                    </div>

                    <EditorContent editor={editor} className="border-b border-gray-400 min-h-[250px] p-2 focus:outline-none" />
                </div>

                {/* Tags */}
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
