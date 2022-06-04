import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import Button from '@mui/material/Button'; //importacion de Libreria MUI
import { Link } from 'react-router-dom'
import Logo from '../images/logoSub.svg'
function NavBarMenu() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark">
            <Container>
                <Navbar.Brand className='text-white'>
                    <Image src={Logo} className="imageLogo"></Image>
                    Easy Auction
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='linkPages' to={{ pathname: "/" }}><Button variant="light" size="sm" className="m-1">Home</Button></Link>
                        <Link className='linkPages' to={{ pathname: "/productos" }}><Button variant="light" size="sm" className="m-1">Productos</Button></Link>
                        <Link className='linkPages' to={{ pathname: "/resenas" }}><Button variant="light" size="sm" className="m-1">Reseñas</Button></Link>
                    </Nav>
                    <Nav>
                        <Link className='link' to={{ pathname: "/register" }}><Button type="button" variant="success" size="sm" className="m-1">Registrate</Button></Link>
                        <Link className='link' to={{ pathname: "/auth" }}><Button type="button" variant="contained" size="sm" className="m-1">Inicia sesión</Button></Link>
                        {/* se añade un boton con la libreria de MUI */}
                        <Button variant="outlined" color="primary" size="small" >Hello World</Button>;
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavBarMenu