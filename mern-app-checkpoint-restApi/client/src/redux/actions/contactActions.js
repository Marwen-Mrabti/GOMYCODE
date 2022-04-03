import axios from 'axios';
import { GET_CONTACT, GET_CONTACTS } from './actionTypes';

//--- actions creators ---

export const readContacts = () => async (dispatch) => {
  try {
    //communicate with the api using axios
    // reference package.json => proxy
    const res = await axios.get('/contact');

    //dispatch the action to the reducer
    dispatch({ type: GET_CONTACTS, payload: res.data.contactList });
  } catch (error) {
    console.log(error.message);
  }
};

export const addContact = (data) => async (dispatch) => {
  try {
    await axios.post('/contact', data);
    dispatch(readContacts());
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`/contact/${id}`);
    dispatch(readContacts());
  } catch (error) {
    console.log(error);
  }
};

export const editContact = (id, data) => async (dispatch) => {
  try {
    await axios.put(`/contact/${id}`, data);
    dispatch(readContacts());
  } catch (error) {
    console.log(error);
  }
};

export const getContact = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/contact/${id}`);
    dispatch({ type: GET_CONTACT, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
