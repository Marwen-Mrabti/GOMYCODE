import React, { useEffect, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { editContact, getContact } from '../redux/actions/contactActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getContact(id));
  }, [dispatch, id]);

  const contact = useSelector((state) => state.ContactReducer.contact);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);

  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
    setAge(contact.age);
  }, [contact]);

  return (
    <div>
      <Card border="primary" style={{ width: '20rem', margin: ' 5rem auto ' }}>
        <Card.Header>Edit Contact</Card.Header>
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
              onClick={() => {
                dispatch(editContact(id, { name, email, age }));
                navigate('/');
              }}
            >
              EDIT
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditContact;
