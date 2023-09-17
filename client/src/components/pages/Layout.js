import { Navbar } from "../navbar/nav";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}
