import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { condition } from "../condition.js";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
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

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async (contact, thunkAPI) => {
    try {
      const { id, ...updatedFields } = contact;
      const { data } = await axios.patch(`/contacts/${id}`, updatedFields);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: condition,
  }
);
