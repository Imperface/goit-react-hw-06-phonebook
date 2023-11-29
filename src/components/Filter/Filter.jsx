import throttle from 'lodash.throttle';
import { Input } from 'components';
import { FilterWrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, selectFilter } from 'redux/index';

export const Filter = () => {
  const dispatch = useDispatch();

  //get filter value for cleaning filterInput value
  const filterValue = useSelector(selectFilter);

  const onFilterInput = e => {
    // get filter value
    let filterValue = e.target.value;

    // if value !== "", transform to lowerCase
    if (filterValue) {
      filterValue = filterValue.toLowerCase();
    }

    // sending payload
    dispatch(setFilter(filterValue));
  };

  return (
    <FilterWrapper>
      <Input
        type="text"
        name="filter"
        placeholder={'Contact filtering'}
        // throttling callback
        onFilterInput={throttle(onFilterInput, 2000)}
        filterValue={filterValue}
      />
    </FilterWrapper>
  );
};
