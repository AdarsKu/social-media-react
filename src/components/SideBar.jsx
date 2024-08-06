import { useState } from "react";
import { Link } from "react-router-dom";

export default function SideBar() {

  const [flag, setFlag] = useState(true)


  return <>
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto hom">
        <li className="nav-item">
          <Link to="/" className={`nav-link text-white ${flag && 'active'}`} aria-current="page" onClick={() => setFlag(true)}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
            Home
          </Link>
        </li>
        <li>
          <Link to="/create-post" className={`nav-link text-white cpost ${!flag && 'active'}`}
            onClick={() => setFlag(false)}>
            <svg className="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
            Create Post
          </Link>
        </li>
      </ul>
    </div>


  </>

}