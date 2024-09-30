import { createSelector } from "@reduxjs/toolkit";
import { getIsContacts } from "../contacts/selectors.js";

export const selectFilters = state => state.filters.name;

export const selectVisibleContacts = createSelector(
  [getIsContacts, selectFilters],
  (contacts, filter) => {
    return contacts.filter(
      contact =>
        contact.number.includes(filter) ||
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
