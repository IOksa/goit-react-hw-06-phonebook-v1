import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const contactsInitialState=[
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
// ]


const contactsInitialState=[];
const filterInitialState = '';


const contactsReducer = (state = contactsInitialState, action) => {
    switch (action.type) { 
      case "contacts/addContact":
        return [...state, action.payload];
      case "contacts/deleteContact":
        return state.filter(contact => contact.id !== action.payload);
      default:
        return state;
    }
  };

  const filterReducer = (state = filterInitialState, action) => {
    switch (action.type) {
      case "filter/setContactsFilter":
        return action.payload;
      default:
        return state;
    }
  };
  

export const rootReducer = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
  });

///////////for localStorage//////////////////////////////////////////  
const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
  }
   
export const persistedReducer = persistReducer(persistConfig, rootReducer);
  
