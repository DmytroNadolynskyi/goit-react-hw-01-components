import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  margin: 20px auto;
  border: 1px solid black;
  
`;
export const Description = styled.div`
  margin: 15px auto;
`;

export const Image = styled.img`

  margin-left:auto;
  margin-right:auto;

`;

export const UserName = styled.p`
font-size: 20px;
font-weight: 700;
margin-bottom: 15px;
  text-align: center;
`;

export const Tag = styled.p`
  color: black;
  margin-bottom: 10px;
  font-size: 18px;
  text-align: center;
`;

export const Location = styled.p`
  color: black;
  font-size: 18px;
  text-align: center;
`;

export const List = styled.ul`
  background-color: yellow;
  padding: 5px;
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 33%;
  gap: 5px;
`;

export const Label = styled.span`
  color: red;
`;
export const Quantity = styled.span`
  font-weight: 700;
`;