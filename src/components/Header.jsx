import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Link to={'/'}>
                        <img src="https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg" alt="" height={"60px"} width={"140px"} />
                    </Link>
                    <Navbar.Brand href="#home">
                        <div className='d-flex justify-content-evenly mt-2 fs-4'>
                            <i class="fa-brands fa-instagram "></i>
                            <i class="fa-brands fa-twitter ps-3"></i>
                            <i class="fa-brands fa-linkedin ps-3"></i>
                            <i class="fa-brands fa-facebook ps-3"></i>
                        </div>
                    </Navbar.Brand>

                </Container>
            </Navbar>
        </>
    )
}

export default Header