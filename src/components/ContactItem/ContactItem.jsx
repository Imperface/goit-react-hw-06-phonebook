import { Button } from 'components';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/index';
import { ContactItemWrapper } from './ContactItem.styled';
export const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const onBtnClick = () => {
    dispatch(deleteContact(id));
    Notify.success(`The contact named ${name} successfully deleted.`);
  };
  return (
    <ContactItemWrapper>
      <p>
        <b>{name}</b>: {phone}
      </p>

      <Button text="Delete" type="button" deleteContact={onBtnClick} />
    </ContactItemWrapper>
  );
};
