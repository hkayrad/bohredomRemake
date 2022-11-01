import { NavLink } from "react-router-dom";
import "../styles/Error/Error.css";

export default function Error() {
  return (
    <div className="error">
      <h2>404 Not Found</h2>
      <NavLink to="/">Click here to return to the about page</NavLink>
    </div>
  );
}
