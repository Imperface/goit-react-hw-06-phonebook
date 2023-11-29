import { FaRegUser } from 'react-icons/fa';
import { BsTelephone, BsSearch } from 'react-icons/bs';
import { InputLabel } from './Input.styled';
export const Input = ({
  type,
  name,
  placeholder = null,
  onFilterInput,
  filterValue,
}) => (
  <InputLabel>
    <span>
      {name === 'name' && <FaRegUser />}
      {name === 'phone' && <BsTelephone />}
      {name === 'filter' && <BsSearch />}
      {name}
    </span>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onFilterInput}
      value={filterValue}
    />
  </InputLabel>
);
