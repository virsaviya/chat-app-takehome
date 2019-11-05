import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  font-size: 14px;
  padding: 5px 5px 5px 25px;
  position: relative;

  &:hover {
    background: #F9FAFC;
  }
`;

export const MetaInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Username = styled.div`
  color: #1C4b81;
  font-size: 16px;
  font-weight: 900;
  padding-right: 5px;
}
`;

export const Timestamp = styled.div`
  color: #a4b9c4;
  font-size: 12px;
}
`;
