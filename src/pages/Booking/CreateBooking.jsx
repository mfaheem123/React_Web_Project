import BookingForm from "../../layout/formMain.jsx";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { useEffect } from "react";

function CreateBooking() {
    const _onCreate = () => { };
    const _onEdit = () => { };
    const _onDelete = () => { };


    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "F1") {
                alert("You pressed F1 key and its function is active!");
                e.preventDefault();
            } else if (e.key === 'F2') {
                alert("You pressed F2 key and its function is active!");
                e.preventDefault();
            } else if (e.key === 'F6') {
                alert("You pressed F6 key and its function is active!");
                e.preventDefault();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, []);

    return (
        <div className="bg-gray-50">

            {/* Form Section */}
            <div className="w-full lg:w-3/4 mx-auto p-2">
                <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-100 p-4 rounded-md mb-2 shadow-md gap-4">
                    {/* Left side: Function buttons */}
                    <div className="flex flex-wrap justify-start md:justify-evenly gap-2 md:gap-4 w-full md:w-[50%]">
                        <div className="flex items-center gap-1 md:gap-2">
                            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded font-bold">F1</span>
                            <span>Base Address</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded font-bold">F2</span>
                            <span>Booking Form</span>
                        </div>
                        <div className="flex items-center gap-1 md:gap-2">
                            <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded font-bold">F6</span>
                            <span>Quotation</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md rounded-2xl p-1">
                    <BookingForm />
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full lg:w-3/4 mx-auto h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden shadow-md mb-10">
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
                                rectangle: { shapeOptions: { color: "#63b1ff", weight: 5 } },
                                polygon: { allowIntersection: false, showArea: true, shapeOptions: { color: "#63b1ff", weight: 8 } },
                                marker: false,
                                circle: { shapeOptions: { color: "#63b1ff", weight: 8, fillColor: "#63b1ff", fillOpacity: 0.5 }, radius: 100 },
                                circlemarker: { shapeOptions: { color: "#63b1ff", weight: 8, radius: 8, fillColor: "#63b1ff", fillOpacity: 0.8 } },
                                polyline: { shapeOptions: { color: "#63b1ff", weight: 5 } },
                            }}
                            edit={{ edit: true, remove: true, poly: { allowIntersection: false } }}
                        />
                    </FeatureGroup>
                </MapContainer>
            </div>
        </div>
    );
}

export default CreateBooking;
