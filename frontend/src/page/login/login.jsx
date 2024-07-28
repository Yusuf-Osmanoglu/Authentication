import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import { Form, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';
import { useAuth } from '../../Auth/Auth';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8082/auth/login', {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setError('');
        login(response.data.data.token);
        navigate('/homePage');
      } else {
        setError('Kullanıcı adı veya şifre hatalı!');
      }
    } catch (error) {
      console.error(error);
      setError('Giriş yaparken bir hata oluştu!');
    }
  };

  return (
    <Container className="login-container justify-content-center">
      <div className='div justify-content-center'>
        <Row className="justify-content-center align-items-center row">
          <Col md={6}>
            <Form onSubmit={handleSubmit} className="p-4">
              <h1 className="text-center">Giriş Yap</h1>
              <Row className="mb-3">
                <Col sm={4}>
                  <Form.Label htmlFor="username" className="text-end">Kullanıcı Adı:</Form.Label>
                </Col>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    aria-label="Username"
                    placeholder="Kullanıcı Adı giriniz"
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col sm={4}>
                  <Form.Label htmlFor="password" className="text-end">Şifre:</Form.Label>
                </Col>
                <Col sm={8}>
                  <Form.Control
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Password"
                    placeholder="Şifrenizi giriniz"
                  />
                </Col>
              </Row>
              <div className="text-center">
                <Button type="submit">Giriş Yap</Button>
              </div>
              {error && <p className="error-message text-center">{error}</p>}
              <p className="register-link text-center">
                Hesabınız yok mu? <Link to="/register">Kayıt Ol</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Login;
