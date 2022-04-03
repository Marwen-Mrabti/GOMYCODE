import React, { useEffect } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../redux/actions/contactActions';

const ContactCards = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: '18rem', margin: ' 5rem auto ' }}>
        <ListGroup variant="flush">
          <ListGroup.Item>{contact.name}</ListGroup.Item>
          <ListGroup.Item>{contact.email}</ListGroup.Item>
          <ListGroup.Item>{contact.age}</ListGroup.Item>
          <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button as={Link} to={`/EditContact/${contact._id}`}>
              EDIT
            </Button>
            <Button onClick={() => dispatch(deleteContact(contact._id))}>DELETE</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default ContactCards;
