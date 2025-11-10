import Navbar from "../components/navbar";
import Dashboard from "./dashboard";

const MainPage = () => {

  return (
    <div id="home" className="relative min-h-screen bg-white text-black">
      <Navbar /> {/* Pass the function to Navbar */}

      <Dashboard />

    </div>
  );
};

export default MainPage;
