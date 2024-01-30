import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navber() {
  return (
    <div>
      <ul id="nav">
        <Link to="/">Home</Link>
        <li>
          <Link to="/create-post">createPost</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navber;
