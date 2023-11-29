import { ContactItem, Notification } from 'components';
import { useSelector } from 'react-redux';
import { ContactsListWrapper } from './ContactsList.styled';
import { Filter } from 'components/Filter/Filter';
import { useRef, useEffect, useState } from 'react';
import { selectContacts, selectFilter } from 'redux/index';
import { Notify } from 'notiflix';

export const ContactsList = () => {
  const firstRender = useRef(true);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const [filteredContacts, setFilteredContacts] = useState(null);

  useEffect(() => {
    // if firts render show amount of contacts in localStorage
    if (contacts && firstRender.current) {
      Notify.success(
        `Successfully loaded ${contacts.length} contacts from local storage.`
      );
    }

    // if filter === null set filteredContacts from contacts
    if (!filter || !contacts) {
      firstRender.current = false;
      setFilteredContacts(contacts);
      return;
    }

    //  filtration contacts and set filteredContacts
    const newContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    setFilteredContacts(newContacts);
  }, [filter, contacts]);

  return (
    <ContactsListWrapper>
      {/* if contact null show no contact found */}
      {!contacts && <Notification />}

      {/* if contacts true, show filter and list */}
      {contacts && <Filter />}

      {contacts &&
        // if filtered data true and length > 0 show contact list
        // if filtered data false show no contacts by filter value

        (filteredContacts && filteredContacts.length > 0 ? (
          <ul>
            {filteredContacts.map(item => (
              <ContactItem
                key={item.id}
                name={item.name}
                phone={item.phone}
                id={item.id}
              />
            ))}
          </ul>
        ) : (
          <p>
            Nothing was found in your contact list by <b>{filter}</b>.
          </p>
        ))}
    </ContactsListWrapper>
  );
};
