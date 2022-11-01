import { NavLink, useOutletContext } from "react-router-dom";
import "../styles/Main/Main.css";

export default function TwoMass() {
  const navState = useOutletContext();

  return (
    <div className={navState ? "about open" : "about"}>
      <h3 className="title twomass">2Mass</h3>
      <p className="desc desc-twomass">
        The Two Micron All-Sky Survey (2MASS) was a survey of the whole sky in
        three infrared wavebands, which was taken between 1997 and 2001. 2MASS
        used two highly-automated 1.3-m telescopes, one at Mt. Hopkins, Arizona
        (for the Northern Hemisphere), and one at the Cerro Tololo
        Inter-American Observatory, Chile (for the Southern Hemisphere).
      </p>
      <NavLink className="exploreBtn" to="/telescopes/two-mass">
        Explore
      </NavLink>
      <img src="/img/2mass.webp" alt="" />
    </div>
  );
}
