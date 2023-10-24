import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            ! Psicopato ! ❤
          </Link>
          
          <div
            className="collapse navbar-collapse ms-md-auto justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Página Inicial
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contato" className="nav-link">
                  Últimas notícias
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
