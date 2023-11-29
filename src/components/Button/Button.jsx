import { GoPersonAdd } from 'react-icons/go';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ButtonWrapper } from './Button.styled';

export const Button = ({ text, type, deleteContact = null }) => (
  <ButtonWrapper type={type} onClick={deleteContact}>
    <span>
      {text === 'Add contact' && <GoPersonAdd />}
      {text === 'Delete' && <RiDeleteBin6Line />}
      {text}
    </span>
  </ButtonWrapper>
);
