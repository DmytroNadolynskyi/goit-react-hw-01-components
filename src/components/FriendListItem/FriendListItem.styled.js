import styled from 'styled-components';

export const Card = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  gap: 15px;
  background-color: pink;
  border-radius: 5px;
  
`;

export const Status = styled.span`
background-color: ${({ onlineStatus }) => (onlineStatus ? 'green' : 'red')};
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

export const UserName = styled.span`
  font-size: 24px;
  color: blue;
`;