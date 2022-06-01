import {React, useState} from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'

function Auth() {
    const [user, setUser] = useState({
        email: '',
        pass: ''
    });
    const [session, setSession] = useState(false);
    const handleInputChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    function sendUser() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch("/login", requestOptions)
            .then((res) => res.json())
            .then((data) => {
                if(data.status !== -1){
                    setSession(true)
                    var card = document.getElementById("loginCard");
                    card.style("display", "none");
                    var title = document.getElementById("legenLogin");
                    title.style("display", "")
                }
            });
    }
    return (
        <Container fluid>
            <Row className="d-flex justify-content-center align-items-center">
                <h1 id="legendLogin" style={{display:"none"}} className="text-center">Sesión iniciada</h1> 
                {
                    (session) ? <h1 className='text-center'>Sesión iniciada!</h1> 
                    :
                    <div id="loginCard" className='d-flex justify-content-center'>
                    <Card style={{ width: '25%' }} className="m-5">
                    <Card.Header className='bg-dark text-white text-center'>Inicia Sesión</Card.Header>
                    <Card.Body className='text-center'>
                        <Form>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" onChange={handleInputChange}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="pass" type="password" placeholder="Password" onChange={handleInputChange}/>
                            </Form.Group>
                            <Button variant="primary" type="button" className="btn btn-success" onClick={sendUser}>
                                Iniciar
                            </Button>
                        </Form>
                    </Card.Body>
                </Card></div>
                } 
                
            </Row>
        </Container>
    )
}

export default Auth