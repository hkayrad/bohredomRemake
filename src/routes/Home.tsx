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

  close = () => {
    this.setState({
      navState: false,
    });
  };

  horizontalScroll = (event: any) => {
    const delta = Math.max(
      -1,
      Math.min(1, event.nativeEvent.wheelDelta || -event.nativeEvent.detail)
    );
    event.currentTarget.scrollLeft -= delta * 100;
    event.preventDefault;
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
          <a className="author" href="https://hkayrad.me" target="_blank">
            redesigned by hkayrad
          </a>
          <a
            className="old"
            href="https://bohredom-2020.web.app"
            target="_blank"
          >
            click here to go to the old website
          </a>
          <a
            className="git-link"
            href="https://github.com/Bohredom/bohredomRemake"
            target="_blank"
          >
            <i className="fa-brands fa-github fa-3x"></i>
          </a>
          <div className="navWrapper" onWheel={this.horizontalScroll}>
            <NavLink
              onClick={this.close}
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
              end
            >
              <p className="desc">About</p>
              <img src="/img/aboutBg.webp" alt="" />
            </NavLink>
            <NavLink
              onClick={this.close}
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/two-mass/"
              end
            >
              <p className="desc">2Mass</p>
              <img src="/img/2mass.webp" alt="" />
            </NavLink>
            <NavLink
              onClick={this.close}
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/fermi/"
              end
            >
              <p className="desc">Fermi</p>
              <img src="/img/fermi.webp" alt="" />
            </NavLink>
            <NavLink
              onClick={this.close}
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/iras/"
              end
            >
              <p className="desc">Iras</p>
              <img src="/img/iras.webp" alt="" />
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}
