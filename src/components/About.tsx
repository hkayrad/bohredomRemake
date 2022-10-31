import { useOutletContext } from "react-router-dom";
import "../styles/Main/Main.css";

export default function About() {
  const navState = useOutletContext();

  return (
    <div className={navState ? "about open" : "about"}>
      <h3 className="title abt">About</h3>
      <p className="desc">
        We are 5 young nerds who are looking to do something meaningful for us.
        Simply we are achieving this through science and technology. Even though
        we are high school students, we are as determined as possible to learn
        and reflect. Knowledge is the power from past to future, and we are
        aware of this fact.
      </p>
      <p className="author">
        - Ali Eren Kılınç, Batı Dakkur, Gökhan Vural, Hakan Kayra Doğan, Mert
        Musubeyli
      </p>
      <img src="/img/aboutBg.webp" alt="" />
    </div>
  );
}
