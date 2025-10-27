import Navbar from "../../components/navbar.jsx";
import RecentTabsHeader from "../../components/recentTabs.jsx";
import BookingForm from "../../layout/formMain.jsx";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";

function CreateBooking() {
    const _onCreate = () => { };
    const _onEdit = () => { };
    const _onDelete = () => { };

    return (
        <div className="bg-gray-50">
            <Navbar />

            {/* Recent Tabs */}
            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-3/4 mx-auto p-6">
                <div className="bg-white shadow-md rounded-2xl p-6">
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
