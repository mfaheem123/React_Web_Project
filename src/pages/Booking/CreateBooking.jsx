import Navbar from "../../components/navbar.jsx"
import RecentTabsHeader from "../../components/recentTabs.jsx"
import BookingForm from "../../layout/formMain.jsx"


function CreateBooking() {
    return (
        <div>

            <Navbar />

            <div className="mt-20">
                <RecentTabsHeader />
            </div>

            <div className="flex justify-center bg-red-900">
                <div className="w-[80%]">
                    <BookingForm />
                </div>
            </div>

        </div>
    )
}

export default CreateBooking