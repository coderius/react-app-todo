// src/BaseLayout.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Home from '../Home';
import AddTask from '../AddTask';

const BaseLayout = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <header>
            <h1>Моя Фиксированная Шапка</h1>
          </header>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <nav>
            <ul>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/add-task">Добавить задание</Link>
              </li>
            </ul>
          </nav>
        </Col>
        <Col md={9}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default BaseLayout;
