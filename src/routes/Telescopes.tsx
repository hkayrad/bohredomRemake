import { NavLink, Outlet, useLocation } from "react-router-dom";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import "../styles/Viewer/Viewer.css";
import "../styles/Telescopes/Telescopes.css";

export default function Telescopes() {
  const location = useLocation().pathname;
  let source: string | undefined = undefined,
    from: string = "";

  if (location == "/telescopes/two-mass") {
    source = "2mass-tel.jpg";
    from = "/two-mass";
  } else if (location == "/telescopes/iras") {
    source = "iras-tel.jpg";
    from = "/iras";
  } else if (location == "/telescopes/fermi") {
    source = "fermi-tel.png";
    from = "/fermi";
  }

  return (
    <div className="telescopes">
      <NavLink to={from}>
        {" "}
        <i className="fa-solid fa-arrow-left fa-2x"></i>
      </NavLink>
      <div id="view" style={{ width: "100vw", height: "100vh" }}>
        <ReactPhotoSphereViewer
          src={"/img/" + source}
          // @ts-ignore
          height={"100vh"}
          // @ts-ignore
          width={"100vw"}
          container={""}
          navbar={[]}
        ></ReactPhotoSphereViewer>
      </div>
    </div>
  );
}
