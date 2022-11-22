import { NavLink, useLocation } from "react-router-dom";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import "../styles/Viewer/Viewer.css";
import "../styles/Telescopes/Telescopes.css";

const telescopeData = {
  TwoMass: {
    id: 1,
    source: "2mass-tel.jpg",
    from: "/two-mass",
  },
  Iras: {
    id: 2,
    source: "iras-tel.jpg",
    from: "/iras",
  },
  Fermi: {
    id: 3,
    source: "fermi-tel.png",
    from: "/fermi",
  },
};

export default function Telescopes() {
  const location: string = useLocation().pathname;
  let source: string | undefined = undefined,
    from: string = "";

  if (location == "/telescopes/two-mass") {
    source = telescopeData.TwoMass.source;
    from = telescopeData.TwoMass.from;
  } else if (location == "/telescopes/iras") {
    source = telescopeData.Iras.source;
    from = telescopeData.Iras.from;
  } else if (location == "/telescopes/fermi") {
    source = telescopeData.Fermi.source;
    from = telescopeData.Fermi.from;
  }

  return (
    <div className="telescopes">
      <div className="nav">
        <div className="wrapper">
          <NavLink className="back" to={from}>
            <i className="fa-solid fa-arrow-left fa-2x"></i>
          </NavLink>
          <h3 className="title">Change Telescope</h3>
        </div>
        <div className="links">
          <NavLink
            className="navLink"
            onClick={window.location.reload}
            to="/telescopes/two-mass"
          >
            2Mass
          </NavLink>
          <NavLink
            className="navLink"
            onClick={window.location.reload}
            to="/telescopes/iras"
          >
            Iras
          </NavLink>
          <NavLink
            className="navLink"
            onClick={window.location.reload}
            to="/telescopes/fermi"
          >
            Fermi
          </NavLink>
        </div>
      </div>
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
