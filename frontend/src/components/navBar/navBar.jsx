import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import profile from '../../assets/profile.png';
import { Link, useNavigate } from 'react-router-dom';

function NavBar({ handleLogout }) {
  const navigate = useNavigate();

  const onLogout = () => {

    // Kullanıcıyı giriş sayfasına yönlendir
    navigate('/');

    // Token'ı localStorage'dan sil
    localStorage.removeItem('token');
    
    if (handleLogout) {
      handleLogout();
    }
    // Sayfayı bir kez yenile
    window.location.reload();
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Yusuf Osmanoğlu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown 
              title={<img src={profile} alt="Profile" />} 
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item onClick={onLogout}>Çıkış Yap</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
