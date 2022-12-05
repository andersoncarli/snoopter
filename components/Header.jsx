// https://www.youtube.com/watch?v=RR2IMAwNxVU

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useRouter } from 'next/router'

import { mainMenu, site } from '../config'

const MenuItem = ({ title, path, subMenu, id }) => {

  const router = useRouter()

  if (subMenu) {
    const activeChild = subMenu.find((item) => (router.pathname == item.path))

    return (
      <NavDropdown title={title} id={`nav-dropdown-${id}`} active={activeChild}>
        {
          subMenu.map((item, index) => (
            <DropdownItem {...item} key={index} />
          ))
        }
      </NavDropdown >
    )
  }

  return <Nav.Link active={router.pathname == path} as={Link} href={path}>{title}</Nav.Link>
}

const DropdownItem = ({ title, path, divider }) => {
  const router = useRouter()

  if (divider)
    return <NavDropdown.Divider />

  return <NavDropdown.Item active={router.pathname == path} as={Link} href={path}>{title}</NavDropdown.Item>
}

export default function Header() {
  // SafeRendering will be false on the first render and true on all following renders
  const [SafeRendering, setSafeRendering] = useState(false);
  useEffect(() => { setSafeRendering(true); }, []);

  if (SafeRendering) {
    // return (<time>{String(new Date())}</time>)

    return (<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">{site.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              mainMenu.map((item, index) => (
                <MenuItem {...item} key={index} />
              ))
            }
            <NavDropdown.Divider />
          </Nav >
        </Navbar.Collapse >
      </Container >
    </Navbar >)
  }
}