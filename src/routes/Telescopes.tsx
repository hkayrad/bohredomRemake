import { Outlet, useLocation } from "react-router-dom";

export default function Telescopes() {
  const location = useLocation().pathname;

  return (
    <>
      <div className="telescopes">
        test
        <Outlet />
      </div>
    </>
  );
}
