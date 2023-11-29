import { Button, Input } from 'components';
import { Notify } from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, addContact, setFilter } from 'redux/index';
import { ContactAddFormWrapper } from './ContactAddForm.styled';
export const ContactAddForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts) ?? [];

  const checkDublicateName = ({ name }) => {
    const check = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    return !!check;
  };

  const onFormSubmit = e => {
    e.preventDefault();

    // get form data
    const form = e.target;
    const inputName = form.elements.name;
    const inputPhone = form.elements.phone;
    let nameValue = inputName.value.trim();
    let phoneValue = inputPhone.value.trim();

    // if one of the fields is empty, return
    if (!nameValue || !phoneValue) {
      Notify.failure('The Name and Phone must be filled.');
      return;
    }

    // create new contact
    const newContact = { name: nameValue, phone: phoneValue };
    const check = checkDublicateName(newContact);

    // check dublicate name
    if (check) {
      Notify.failure(
        `The contact with name: ${nameValue} has already been added.`
      );
      return;
    }
    Notify.success(`The contact with name: ${nameValue} successfully added.`);

    // sending the payload
    dispatch(addContact(newContact));

    // clear filter input
    dispatch(setFilter(''));

    inputName.value = '';
    inputPhone.value = '';
  };

  return (
    <ContactAddFormWrapper onSubmit={onFormSubmit}>
      <Input type="text" name="name" placeholder={'Alfred'} />
      <Input type="tel" name="phone" placeholder={'+380000000000'} />
      <Button type="submit" text="Add contact" />
    </ContactAddFormWrapper>
  );
};
