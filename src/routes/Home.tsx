//* dependencies
import { NavLink, Outlet } from "react-router-dom";
import React from "react";

//* stylesheet
import "../styles/Home/Home.css";

//* typescript
interface Props {}
interface State {
  navState: boolean;
}

export default class Home extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = { navState: false };
  }

  openClose = () => {
    this.setState({
      navState: !this.state.navState,
    });
  };

  render() {
    return (
      <>
        <div className={this.state.navState ? "main open" : "main"}>
          <p className="quote">
            “An expert is a man who has made all the mistakes which can be made
            in a very narrow field."
          </p>
          <p className="bohr">Niels Bohr</p>
          <NavLink className="logoLink" to="/" end>
            <img src="/img/logo.webp" alt="Bohredom Logo" className="logo" />
          </NavLink>

          <Outlet context={this.state.navState} />
        </div>
        <button
          className={this.state.navState ? "navButton open" : "navButton"}
          onClick={this.openClose}
        >
          <i
            className={
              this.state.navState
                ? "fa-solid fa-bars-staggered fa-2x open"
                : "fa-solid fa-bars-staggered fa-2x"
            }
          ></i>
          <i
            className={
              this.state.navState
                ? "fa-solid fa-x fa-2x"
                : "fa-solid fa-x fa-2x open"
            }
          ></i>
        </button>
        <div className={this.state.navState ? "navMenu open" : "navMenu"}>
          <div className="navWrapper">
            <NavLink
              onClick={this.openClose}
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
              end
            >
              <p>About</p>
              <img src="/img/aboutBg.webp" alt="" />
            </NavLink>
            <NavLink
              onClick={this.openClose}
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/two-mass/"
              end
            >
              <p>2Mass</p>
              <img src="/img/2mass.webp" alt="" />
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}
