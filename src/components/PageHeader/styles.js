import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;

  a {
    display: flex;
    align-items: flex-start;

    text-decoration: none;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
    }

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }
`;
