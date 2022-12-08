import Nav from 'react-bootstrap/Nav';
import LocaleDropdown from './LocaleDropDown'

export default function SimpleMenu() {

  return (<nav className="navbar navbar-expand-sm navbar-light bg-light">
    <div className="container-fluid" bg="dark">
      <a className="navbar-brand" href="#">Brand</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
          <Nav.Link as={Link} href={'/'}>Home</Nav.Link>
          </li>
          <li className="nav-item">
          <Nav.Link as={Link} href={'/'}>Link</Nav.Link>
          </li>
        </ul>

        <LocaleDropdown />

      </div>
    </div>
  </nav>)
}
