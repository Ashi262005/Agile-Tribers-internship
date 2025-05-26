import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { 
  HouseFill, Speedometer2, PeopleFill, BoxSeam, 
  CurrencyDollar, BarChartLine, GearFill, BellFill, PersonCircle 
} from 'react-bootstrap-icons';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="dashboard-container">
      {/* Top Navigation Bar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <span className="fw-bold">Admin Dashboard</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          <div className="d-flex align-items-center">
            <Nav.Link className="text-white mx-2">
              <BellFill size={20} />
            </Nav.Link>
            <Nav.Link className="text-white mx-2">
              <GearFill size={20} />
            </Nav.Link>
            <div className="d-flex align-items-center ms-3">
              <PersonCircle size={24} className="text-white me-2" />
              <span className="text-white">Admin</span>
            </div>
          </div>
        </Container>
      </Navbar>

      {/* Sidebar and Main Content */}
      <Container fluid>
        <Row>
          {/* Sidebar (Offcanvas for mobile) */}
          <Col md={3} lg={2} className="sidebar d-none d-md-block p-0">
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100">
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link" aria-current="page">
                    <HouseFill className="me-2" />
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/users" className="nav-link">
                    <PeopleFill className="me-2" />
                    Users
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="nav-link">
                    <BoxSeam className="me-2" />
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/sales" className="nav-link">
                    <CurrencyDollar className="me-2" />
                    Sales
                  </Link>
                </li>
                <li>
                  <Link to="/reports" className="nav-link">
                    <BarChartLine className="me-2" />
                    Reports
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          {/* Mobile Sidebar */}
          <Offcanvas show={show} onHide={handleClose} className="sidebar-mobile">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link as={Link} to="/dashboard" onClick={handleClose}>
                  <HouseFill className="me-2" />
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/users" onClick={handleClose}>
                  <PeopleFill className="me-2" />
                  Users
                </Nav.Link>
                <Nav.Link as={Link} to="/products" onClick={handleClose}>
                  <BoxSeam className="me-2" />
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/sales" onClick={handleClose}>
                  <CurrencyDollar className="me-2" />
                  Sales
                </Nav.Link>
                <Nav.Link as={Link} to="/reports" onClick={handleClose}>
                  <BarChartLine className="me-2" />
                  Reports
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>

          {/* Main Content */}
          <Col md={9} lg={10} className="main-content py-3">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;