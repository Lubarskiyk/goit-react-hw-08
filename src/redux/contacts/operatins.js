import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
function condition(_, thunkAPI) {
  const state = thunkAPI.getState();
  return state.auth.token !== null;
}
export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: condition,
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", { name, number });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: condition,
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactsId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactsId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: condition,
  }
);
