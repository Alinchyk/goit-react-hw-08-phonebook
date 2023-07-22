import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-slice';
import { getFilter } from 'redux/contacts/contacts-selectors';
import { Input, Label } from './Filter.styled';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <Label>
      Find contact by name
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

export default Filter;
