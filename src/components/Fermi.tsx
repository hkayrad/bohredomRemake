import { useOutletContext } from "react-router-dom";
import "../styles/Main/Main.css";

export default function Fermi() {
  const navState = useOutletContext();

  return (
    <div className={navState ? "about open" : "about"}>
      <h3 className="title fermi">Fermi</h3>
      <p className="desc desc-fermi">
        Swift is a multi-wavelength space observatory dedicated to the study of
        gamma-ray bursts. Its three instruments work together to observe GRBs
        and their afterglows in the gamma-ray, X-ray, ultraviolet, and optical
        wavebands. On the other hands, Fermi was launched on 11 June 2008 The
        mission is a joint venture of NASA, the United States Department of
        Energy, and government agencies in France, Germany, Italy, Japan, and
        Sweden, becoming the most sensitive gamma-ray telescope on orbit.
      </p>
      <img className="fermi" src="/img/fermi.webp" alt="" />
    </div>
  );
}
