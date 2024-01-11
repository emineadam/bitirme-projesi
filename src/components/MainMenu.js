import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './NavbarStyles.css'; 

function MainMenu() {
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <Navbar style={{ backgroundColor: '#c0c5c2', borderBottom: '2px solid #ffffff' }} variant="dark">
        <Container>
          {/* Logo eklemek için */}
          <Navbar.Brand href="#home" style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.5rem' }}>
            <img
              src="/logo.svg"  
              alt="Logo"
              width="85"
              height="85"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          
          <Nav className="me-auto">
            <Nav.Link onClick={() => handleNavigation('https://www.meram.bel.tr/baskan')} className="nav-link-style">BAŞKAN</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('https://www.meram.bel.tr/dunden-bugune-meram')} className="nav-link-style">DÜNDEN BUGÜNE MERAM</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('https://meramgelisim.com/#/')} className="nav-link-style">MEGA</Nav.Link>
            <Nav.Link onClick={() => handleNavigation('https://www.meram.bel.tr/iletisim')} className="nav-link-style">İLETİŞİM</Nav.Link>
          </Nav>

          {/* Sosyal medya hesapları için */}
          <Nav className="ms-auto">
            <Nav.Link href="https://www.facebook.com/Meram.Belediyesi" target="_blank" rel="noopener noreferrer" className="social-link">
              <img
                src="/facebook-icon.png"  
                alt="Facebook"
                width="25"
                height="25"
              />
            </Nav.Link>

            <Nav.Link href="https://twitter.com/MeramBelediyesi" target="_blank" rel="noopener noreferrer" className="social-link">
              <img
                src="/twitter-icon.png"  
                alt="Twitter"
                width="25"
                height="25"
              />
            </Nav.Link>

            <Nav.Link href="https://www.instagram.com/meram.belediyesi?igsh=MWd0eGJuNWR4Nzg5aw==" target="_blank" rel="noopener noreferrer" className="social-link">
              <img
                src="/instagram-icon.png"  
                alt="Instagram"
                width="25"
                height="25"
              />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainMenu;

