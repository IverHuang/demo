import React,{useState}from 'react';
import ReactDOM from 'react-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";


const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

};

class Header extends React.Component{
render(){
  return(
    <div>
      <Navbar color="dark"  dark expand="md">
        <NavbarBrand href="/">Welcome My Friend</NavbarBrand>
        <NavbarToggler onClick={Example.toggleNavbar} />
        <Collapse isOpen={Example.collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Services">Services&Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Contact">Contact</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Combo Specs
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/Bronze">
                  Bronze
                </DropdownItem>
                <DropdownItem href="/Sliver">
                  Sliver
                </DropdownItem>
                <DropdownItem href="/Gold">
                  Gold
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

}

export default Header;
