import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Outlet /> {/* Les pages s'affichent ici */}
      </main>
    </div>
  );
}

export default MainLayout;
