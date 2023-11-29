import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = { contacts: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, actions) {
        return {
          contacts: [...(state.contacts ?? []), actions.payload],
        };
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(8),
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      // if state lenght === 1, delete the last element, set initialValue
      if (state.contacts.length === 1) {
        return initialState;
      }
      return {
        contacts: [...state.contacts.filter(contact => contact.id !== payload)],
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

const persistConfig = {
  key: 'contacts',
  storage,
  whiteList: ['contacts'],
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
