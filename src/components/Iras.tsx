import { NavLink, useOutletContext } from "react-router-dom";
import "../styles/Main/Main.css";

export default function Iras() {
  const navState = useOutletContext();

  return (
    <div className={navState ? "about open" : "about"}>
      <h3 className="title iras">Iras</h3>
      <p className="desc desc-iras">
        After a series of brief studies by infrared instruments carried on
        sounding rockets had detected about 4,000 celestial sources of infrared
        radiation, the United States, the United Kingdom, and the Netherlands
        built IRAS to map the sky at infrared wavelengths of 12, 25, 60, and 100
        micrometres. Its 60-cm- (24-inch-) diameter telescope was cooled by
        superfluid helium that chilled the structure down to 10 K (−263 °C, or
        −442 °F) and the detector to 2 K (−271 °C, or −456 °F).
      </p>
      <NavLink className="exploreBtn" to="/telescopes/iras">
        Explore
      </NavLink>
      <img className="iras" src="/img/iras.webp" alt="" />
    </div>
  );
}
