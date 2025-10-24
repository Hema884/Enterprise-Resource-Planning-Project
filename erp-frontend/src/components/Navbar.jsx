import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">ERP System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
            <NavDropdown title="Employee" id="employee-nav-dropdown">
              <NavDropdown.Item as={Link} to="/employee">Employee List</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/employee/attendance">
                Attendance
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/employee/shift-schedule">
                Shift Schedule
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/employee/work-time">
                Work Time
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Orders" id="orders-nav-dropdown">
              <NavDropdown.Item as={Link} to="/orders">View Orders</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/transactions">
                Transactions
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
