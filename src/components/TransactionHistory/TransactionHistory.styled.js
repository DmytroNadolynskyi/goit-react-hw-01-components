import styled from 'styled-components';


export const Table = styled.table`
  margin: 0 auto;
  width: 700px;
  background-color: white;
  text-align: center;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
`;

export const Head = styled.thead`
  color: black;
  text-transform: uppercase;
  background-color: sky;
`;

export const Th = styled.th`
  padding: 10px;
  border: grey;
  color: red;
  
`;

export const Tr = styled.tr`
  background-color: grey;
  &:nth-child(even) {
     background-color: white;
  }
`;

export const Td = styled.td`
  padding: 10px;
  border: grey;
  color: black;
`;