import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function SimpleMenu({ posts = [] }) {

  // console.log(posts)

  let { t } = useTranslation();

  const router = useRouter()

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

        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Menu </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>)
}
