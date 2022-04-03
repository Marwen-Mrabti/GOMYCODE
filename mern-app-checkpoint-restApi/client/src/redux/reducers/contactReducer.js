import { GET_CONTACT, GET_CONTACTS } from '../actions/actionTypes';

const initialState = {
  contacts: [],
  contact: {},
  edit: false,
};

const ContactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS:
      return { ...state, contacts: payload };
    case GET_CONTACT:
      return { ...state, contact: payload.contact };
    default:
      return state;
  }
};

export default ContactReducer;
