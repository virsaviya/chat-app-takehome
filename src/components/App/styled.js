import styled from 'styled-components';

export const Wrapper = styled.div`
  ${'' /* @media (max-width: 768px) {
    flex-direction: column;
  } */}

  display: flex;
  color: #6E8997;
  font-weight: 400;
  flex-direction: column;
  background-color: #FFFFFF;
  min-height: 100vh;
  margin-top: 20px;
`;

export const Logo = styled.img`
  width: 400px;
  align-self: center;
  margin-bottom: 20px;
`;
