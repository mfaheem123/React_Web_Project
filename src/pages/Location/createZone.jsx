import Navbar from '../../components/navbar';
import RecentTabsHeader from '../../components/recentTabs';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { Checkbox, Form, Button, Input, Select } from 'antd';
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControl } from "react-leaflet-draw";

export default function CreateZone() {
    const [searchTerm, setSearchTerm] = useState("");

    // 🔹 Form Data
    const onFinish = values => {
        console.log('Success:', values);
    };

    // 🔹 Map style tweaks
    useEffect(() => {
        const css = `
      .leaflet-div-icon {
        background: transparent;
        border: none;
      }
      .leaflet-editing-icon {
        width: 6px !important;
        height: 6px !important;
        border-radius: 50%;
        background: #1976d2;
        border: 1px solid white;
      }
    `;
        const style = document.createElement("style");
        style.innerHTML = css;
        document.head.appendChild(style);
    }, []);

    // 🔹 Handle shape creation
    const _onCreate = (e) => {
        const layer = e.layer;
        console.log("Created:", layer);
        // agar state me save karna ho to yaha kar sakte ho
    };

    const _onEdit = (e) => {
        const layers = e.layers;
        layers.eachLayer((layer) => {
            console.log("Edited:", layer);
        });
    };

    const _onDelete = (e) => {
        const layers = e.layers;
        layers.eachLayer((layer) => {
            console.log("Deleted:", layer);
        });
    };


    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="p-2 sm:p-6 lg:p-0">
                {/* Heading Section */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between bg-gray-200 p-2 rounded-lg gap-3">
                    <h2 className="text-2xl font-semibold">Zone</h2>

                    <div className="flex items-center w-full sm:w-[60%] lg:w-[30%] bg-white rounded-md overflow-hidden shadow-sm">
                        <InputBase
                            className="flex-1 px-3 py-2 border-r border-gray-300"
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search PostCode"
                            inputProps={{ 'aria-label': 'search For Driver' }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            className="bg-[#424899] text-white flex items-center justify-center px-3 py-2 rounded-none"
                        >
                            <SearchIcon className="mr-1" /> <span>Search</span>
                        </Button>
                    </div>
                </div>

                {/* Form + Map Section */}
                <div className="flex flex-col lg:flex-row mt-6 gap-">
                    {/* Form Section */}
                    <div className="w-full lg:w-[30%]">
                        <Form
                            name="zone-form"
                            layout="vertical"
                            className="w-full bg-white p-6 rounded-2xl shadow-md"
                            initialValues={{ remember: false }}
                            autoComplete="off"
                            onFinish={onFinish}
                        >
                            <Form.Item name="remember" valuePropName="checked" className="mb-3">
                                <Checkbox>Base</Checkbox>
                            </Form.Item>

                            <Form.Item
                                label={<span className="font-medium text-gray-700">Name</span>}
                                name="name"
                                rules={[{ required: true, message: "Please input your Name!" }]}
                            >
                                <Input type="text" className="h-10" />
                            </Form.Item>

                            <Form.Item
                                label={<span className="font-medium text-gray-700">Short Name</span>}
                                name="shortname"
                                rules={[{ required: true, message: "Please input your Short Name!" }]}
                            >
                                <Input type="text" className="h-10" />
                            </Form.Item>

                            <Form.Item label="Type">
                                <Select placeholder="Select Type">
                                    <Select.Option value="Major">Major</Select.Option>
                                    <Select.Option value="Minor">Minor</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Category">
                                <Select placeholder="Select Category">
                                    <Select.Option value="inner">Inner</Select.Option>
                                    <Select.Option value="outer">Outer</Select.Option>
                                </Select>
                            </Form.Item>

                            <div className="flex justify-center flex-wrap gap-3 mt-6">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="bg-[#757cdd] border-none hover:!bg-[#5a60d1] px-8 py-2 w-[120px]"
                                >
                                    Save
                                </Button>

                                <Button
                                    type="primary"
                                    htmlType="button"
                                    className="bg-red-500 border-none hover:!bg-red-600 px-8 py-2 w-[120px]"
                                    onClick={() => window.location.reload()}
                                >
                                    Clear
                                </Button>
                            </div>
                        </Form>
                    </div>

                    {/* Map Section */}
                    <div className="w-full lg:w-[70%] h-[95vh] sm:h-[70vh] rounded overflow-hidden">
                        <MapContainer
                            center={[24.8607, 67.0011]}
                            zoom={14}
                            className="w-full h-full"
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <FeatureGroup>
                                <EditControl
                                    position="topleft"
                                    onCreated={_onCreate}
                                    onEdited={_onEdit}
                                    onDeleted={_onDelete}
                                    draw={{
                                        rectangle: {
                                            shapeOptions: { color: "#63b1ff", weight: 5 },
                                        },
                                        polygon: {
                                            allowIntersection: false,
                                            showArea: true,
                                            shapeOptions: { color: "#63b1ff", weight: 8 },
                                        },
                                        marker: false,
                                        circle: {
                                            shapeOptions: { color: "#63b1ff", weight: 8, fillColor: "#63b1ff", fillOpacity: 0.5 },
                                            radius: 100, // 👈 size of circle (adjust as needed)
                                        },
                                        circlemarker: {
                                            shapeOptions: {
                                                color: "#63b1ff",
                                                weight: 8,         // 👈 line thickness
                                                radius: 8,         // 👈 point size (default ~5)
                                                fillColor: "#63b1ff",
                                                fillOpacity: 0.8
                                            },
                                        },
                                        polyline: {
                                            shapeOptions: { color: "#63b1ff", weight: 5 }, // 👈 thicker line
                                        },
                                    }}
                                    edit={{
                                        edit: true,
                                        remove: true,
                                        poly: { allowIntersection: false },
                                    }}
                                />
                            </FeatureGroup>

                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}
