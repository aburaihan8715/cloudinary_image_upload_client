import { Outlet } from "react-router-dom";
import AppNav from "../ui/AppNav";
import Footer from "../ui/Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen max-w-5xl mx-auto">
      <AppNav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
