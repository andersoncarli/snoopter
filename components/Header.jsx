// https://www.youtube.com/watch?v=RR2IMAwNxVU

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'

const menu = [
  { title: "Home", path: '/' },
  { title: "About", path: '/About' },
  {
    title: 'Dropdown Menu', id: 1, path: '', subMenu: [
      { title: "Home", path: '/' },
      { divider: true },
      { title: "About", path: '/About' },
    ]
  }
]

const MenuItem = ({ title, path, subMenu, id }) => {
  // console.log(title, path, Array.isArray(subMenu))
  if (Array.isArray(subMenu)) {
    return (
      <NavDropdown title={title} id={`nav-dropdown-${id}`}>
        {
          subMenu.map((item, index) => (
            <DropdownItem {...item} key={index} />
          ))
        }
      </NavDropdown>
    )
  }

  // if (path)
  return (<>
    {console.log(title, path)}
    <Nav.Link as={Link} href={path}>{title}</Nav.Link>
  </>)
}

const DropdownItem = ({ title, path, divider }) => {
  if (divider) {
    return <NavDropdown.Divider />
  }
  return <NavDropdown.Item as={Link} href={path}>{title}</NavDropdown.Item>
}

export default function Header() {
  // SafeRendering will be false on the first render and true on all following renders
  const [SafeRendering, setSafeRendering] = useState(false);
  useEffect(() => { setSafeRendering(true); }, []);

  if (SafeRendering) {
    // const date = new Date();
    // return (<time>{String(date)}</time>);

    return (<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              menu.map((item, index) => (
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
