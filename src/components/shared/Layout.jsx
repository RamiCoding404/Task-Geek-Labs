import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-[#1c1c1c] overflow-hidden flex flex-row">
      <div className="flex flex-col flex-1">
        <div className="flex-1 m-2 min-h-0 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
