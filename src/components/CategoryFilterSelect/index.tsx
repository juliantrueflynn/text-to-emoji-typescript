import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCategoryFilter, CategoryFilter } from '../../actions';
import styled from '@emotion/styled';

type Props = {
  className?: string;
}

const StyledLabel = styled.label`
  margin-right: 6px;
`;

const StyledSelect = styled.select`
  position: relative;
  color: rgba(219, 237, 243, 0.7);
  font-size: 17px;
  line-height: normal;
  padding: 0 3px;
  background-color: transparent;
  border: 1px solid;
  border-width: 0 0 1px 0;
  border-radius: 0;
  -webkit-appearance: none;
`;

function RevisionControls({ className }: Props) {
  const dispatch = useDispatch();

  const selectOptions = Object.keys(CategoryFilter).map(key => {
    const label = key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, text => text.toUpperCase())
      .replace(' And ', ' & ');

    return { value: key, label };
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { value } = event.target;
    const category: CategoryFilter = CategoryFilter[value as keyof typeof CategoryFilter];
    dispatch(updateCategoryFilter({ category }));
  };

  return (
    <div className={className}>
      <StyledLabel htmlFor="categoryFilter">
        Filter emojis
      </StyledLabel>

      <StyledSelect id="categoryFilter" onChange={handleOnChange}>
        {selectOptions.map(option =>
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        )}
      </StyledSelect>
    </div>
  );
};

export default RevisionControls;
