import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;

  background: #FFFFFF;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  border: 2px solid #FFFFFF;
  border-radius: 4px;
  outline: none;

  padding: 0 16px;
  font-size: 1rem;

  transition: border-color 0.2s ease-in;

  appearance: none;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`;
