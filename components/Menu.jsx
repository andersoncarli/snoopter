// https://www.youtube.com/watch?v=RR2IMAwNxVU

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useRouter } from 'next/router'

import { mainMenu, site } from '../config.js'

const MenuItem = ({ title, path, subMenu, id }) => {

  const router = useRouter()

  if (subMenu) {
    const activeChild = subMenu.find((item) => (router.pathname == item.path))

    return (<>
      <NavDropdown
        title={
          <div style={{ display: 'inline-block' }}>
            <span className="fi fi-us"></span>
            {/* {title} */}
          </div>
        }
        id={`nav-dropdown-${id}`} active={activeChild}>
        {
          subMenu.map((item, index) => (
            <DropdownItem {...item} key={index} />
          ))
        }
        <NavDropdown.Divider />
      </NavDropdown >
    </>
    )
  }

  return <Nav.Link active={router.pathname == path} as={Link} href={path}>{title}</Nav.Link>
}

const DropdownItem = ({ title, path, divider, icon }) => {
  const router = useRouter()

  if (divider)
    return <NavDropdown.Divider />

  return <NavDropdown.Item active={router.pathname == path} as={Link} href={path}>
    <span className={icon}></span>
    <span className='mx-2'>{title}</span>
  </NavDropdown.Item>
}

const LocaleDropdown = () => {
  const router = useRouter()
  return (
    <NavDropdown
      // className="ml-auto"

      style={{ display: 'inline', marginLeft: 'auto', marginRight: '0', }}
      title={
        <div style={{ display: 'inline-block' }}>

          <span className="fi fi-us"></span>
          {/* {title} */}
        </div>
      }
      // active={activeChild}
      id={`nav-dropdown-locale`}
    >
      {
        router.locales.map((locale) => {
          console.log(locale)
          var [lang, country] = locale.split('-')
          if (country) lang = country.toLowerCase()
          return (
            <NavDropdown.Item
              key={locale}
              as={Link}
              // active={router.pathname == path}
              href={router.asPath}
              locale={locale}
              style={{ display: 'flex', gap: '10px' }}>
              <div>
                <span className={"fi fi-" + lang}></span>
                <span className='mx-2'>{locale}</span>
              </div>
            </NavDropdown.Item>
          )
        })
      }
    </NavDropdown >
  )
}

export default function Menu() {
  return (<Navbar className="ml-auto" bg="light" expand="sm">
    <Container fluid>
      <Navbar.Brand href="#home">{site.title}</Navbar.Brand>

      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {
            mainMenu.map((item, index) => (
              <MenuItem {...item} key={index} />
            ))
          }
          {/* <NavDropdown.Divider /> */}

          <LocaleDropdown className="justify-content-end" />

        </Nav >
      </Navbar.Collapse >
    </Container >
  </Navbar >)
}
