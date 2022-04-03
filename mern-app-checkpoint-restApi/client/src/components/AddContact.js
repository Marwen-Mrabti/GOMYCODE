import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addContact } from '../redux/actions/contactActions';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Card border="primary" style={{ width: '20rem', margin: ' 5rem auto ' }}>
        <Card.Header>Add Contact</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="age"
                onChange={(e) => setAge(e.target.value)}
                value={age}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                dispatch(addContact({ name, email, age }));
                navigate('/');
              }}
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AddContact;
